import * as React from 'react';
import styled from 'styled-components';
import { WithRouterProps, withRouter } from 'next/router';
import Link from 'next/link';
import { throttle } from 'throttle-debounce';
import { LOGO, WHITE_LOGO } from './Header-2021';
import { NAV_CONFIG } from '../constants/page';
import { media } from '../constants/style';
import TriangleIcon from './common/TriangleIcon';
import { FormType } from './TryForm';
export interface IHeaderMobileStates {
  collapse: boolean;
  isBottom: boolean;
  spreadName?: string;
  secondSpread?: string;
}

const HeaderMobileWrapper = styled.div`
  ${media.desktop`display: block;`}
  ${media.tablet`display: block;`}
  ${media.phone`display: block;`}
  @media (min-width: ${992 / 16}em) {
    display: none;
  }
  height: 0;
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100vw;
  a {
    color: rgb(13, 25, 36) !important;
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
`;

const HeaderMobileTogglerWrapper = styled.div<{ opacityState: boolean; collapse: boolean; bgColor: string }>`
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  /* border-bottom: ${props => (props.opacityState ? '1px' : '0')} solid rgb(238, 238, 238); */
  /* background: ${props => (props.opacityState ? 'rgb(3,0,63)' : 'rgba(0,0,0,0.05)')}; */
  /* border-bottom: 2px solid ${props => (props.collapse ? '#FFFFFF' : 'rgb(3,0,63)')} ; */
  background: ${props => (props.collapse ? '#FFFFFF' : props.bgColor)};
  color: ${props => (props.opacityState ? 'unset' : '#fff')};
  img {
    height: 45px;
    margin: 0;
  }
  .iconfont {
    padding: 10px 25px;
    font-size: 17px;
    color: ${props => (props.collapse ? 'black' : 'white')} !important;
  }
`;

const TitleWrapper = styled.div`
  flex: 1;
`;

const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 24px;
  border-bottom: 1px solid #eeeeee;
  height: 62px;
  font-size: 16px;
  font-weight: 500;

  &:active {
    // background-color: #e8e8e8;
  }
  .iconfont {
    color: #ccc;
  }
`;

const SecondMenuList = styled.div`
  width: calc(100% + 24px);
  position: relative;
  top: -1px;
  left: -24px;
  background: #f1f2f6;
`;

const SecondMenu = styled.div``;

const SecondNavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  line-height: 22px;
  padding: 0 25px 0 27px;
  height: 54px;
  &:active {
    background-color: #e8e8e8;
  }
  .iconfont {
    color: #ccc;
  }
`;

const ThirdNavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px 0 24px;
  height: 62px;

  font-size: 16px;
  font-weight: 500;
  color: #000000;

  &:active {
    background-color: #e8e8e8;
  }
  .iconfont {
    color: #ccc;
  }
`;

const ExpandWrapper = styled.div<{ collapse: boolean }>`
  position: fixed;
  z-index: 80;
  width: 100%;
  top: 64px;
  background: #fff;
  /* height: calc(100vh - 120px); */
  background: #fff;
  height: ${props => (props.collapse ? 'calc(100vh - 64px)' : 0)};
  transition: height 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow-y: auto;
  padding-left: 24px;
  padding-bottom: ${props => (props.collapse ? '78px' : '0')};
`;

const TwoBtn = styled.div<{ collapse: boolean }>`
  width: 100%;
  position: fixed;
  align-items: center;
  justify-content: center;
  padding: 14px 0px 24px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  display: ${props => (props.collapse ? 'flex' : 'none')};
  > a:nth-child(1) {
    margin-right: 25px;
  }
`;
const LoginBtn = styled.div`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 151px;
  height: 40px;
  border-radius: 40px;
  font-size: 16px;
  color: #2b58f9;
  border: 1px solid #2b58f9;
  :active {
    color: #1742de;
    border: 1px solid #1742de;
  }
`;
const ExpBtn = styled.div`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 151px;
  height: 40px;
  border-radius: 40px;
  background: #2b58f9;
  font-size: 16px;
  color: #ffffff;
  line-height: 20px;
  cursor: pointer;
  &:active {
    background-color: #1742de;
  }
`;
interface IHeaderMobileProps {
  setForm: (visible: boolean, type?: FormType) => void;
  bgColor?: string;
}
class HeaderMobile extends React.Component<IHeaderMobileProps & WithRouterProps, IHeaderMobileStates> {
  state: IHeaderMobileStates = {
    collapse: false,
    spreadName: null,
    isBottom: false,
    secondSpread: null,
  };

  get isHome() {
    return this.props.router.route === '/';
  }

  get opacityState() {
    // const { collapse, isBottom } = this.state;
    // if (collapse) {
    //   return true;
    // }
    // if (isBottom) {
    //   return true;
    // }
    // if (this.isHome && !isBottom) {
    //   return true;
    // }
    // return false;
    return true;
  }

  toggleCollapse = () => {
    const { collapse } = this.state;

    this.setState({
      collapse: !collapse,
    });
  };

  handleHeaderOpacity = () => {
    const isBottom = document.body.getBoundingClientRect().top < -100;
    this.setState({
      isBottom,
    });
  };

  throttledHandleHeaderOpacity = throttle(200, this.handleHeaderOpacity);

  componentDidMount() {
    document.addEventListener('wheel', this.throttledHandleHeaderOpacity);
    document.addEventListener('scroll', this.throttledHandleHeaderOpacity);
  }

  componentWillUnmount() {
    document.removeEventListener('wheel', this.throttledHandleHeaderOpacity);
    document.removeEventListener('scroll', this.throttledHandleHeaderOpacity);
  }

  handleLinkClick = (path: string, e: MouseEvent) => {
    if (path === window.location.pathname) {
      this.toggleCollapse();
      e.stopPropagation();
    }
  };
  handleCollapse = (name: string, e: MouseEvent) => {
    e.stopPropagation();
    // 点击一级菜单应该清空seconSpread
    this.setState({ secondSpread: null });
    if (name === this.state.spreadName) {
      this.setState({ spreadName: null });
    } else {
      this.setState({ spreadName: name });
    }
    //TODO: 临时模拟点击，后续待完善
    if (name === '产品') {
      this.handleSecondCollapse('AI产品');
    }
  };
  handleSecondCollapse = (name: string, e?: MouseEvent) => {
    e && e.stopPropagation();
    if (name === this.state.secondSpread) {
      this.setState({ secondSpread: null });
    } else {
      this.setState({ secondSpread: name });
    }
  };
  public render() {
    const { collapse, spreadName, secondSpread } = this.state;
    const { bgColor } = this.props;
    return (
      <HeaderMobileWrapper>
        <HeaderMobileTogglerWrapper
          bgColor={bgColor ? bgColor : '#06056f'}
          opacityState={this.opacityState}
          collapse={collapse}>
          <Link href="/">
            <a>
              <img src={collapse ? LOGO : WHITE_LOGO} />
            </a>
          </Link>
          <TitleWrapper />
          <div onClick={this.toggleCollapse}>
            {collapse ? (
              <i className="iconfont iconyidongduanguanbi" style={{ fontSize: 24 }} />
            ) : (
              <i className="iconfont iconyidongduan-caidan" style={{ fontSize: 24 }} />
            )}
          </div>
        </HeaderMobileTogglerWrapper>
        <ExpandWrapper collapse={collapse}>
          {NAV_CONFIG.map(item => {
            if (item.name === '产品') {
              return (
                <Link key={item.path}>
                  <a>
                    <NavItemWrapper onClick={e => this.handleCollapse(item.name, e)}>
                      {item.name}
                      {<TriangleIcon collapse={item.name === spreadName} />}
                    </NavItemWrapper>
                    {item.expand && item.name === spreadName && (
                      <SecondMenuList>
                        {item.expand.map(sub => (
                          <SecondMenu>
                            <SecondNavItemWrapper onClick={e => this.handleSecondCollapse(sub.title, e)}>
                              {sub.title}
                              {/* 二级菜单不要按钮 <TriangleIcon collapse={sub.title=== secondSpread}/>  */}
                            </SecondNavItemWrapper>
                            {sub.children && sub.title === secondSpread && (
                              <div>
                                {sub.children.map(child => (
                                  <Link href={child.path} key={child.name}>
                                    <a>
                                      <ThirdNavItemWrapper onClick={e => this.handleLinkClick(child.path, e)}>
                                        {child.mobileTitle || child.title}
                                        {/* <i className="iconfont iconyidongduan-youjiantou1"/> */}
                                      </ThirdNavItemWrapper>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </SecondMenu>
                        ))}
                      </SecondMenuList>
                    )}
                  </a>
                </Link>
              );
            } else if (0 && item.name === '解决方案') {
              // 暂时下线
              return (
                <Link key={item.path}>
                  <a>
                    <NavItemWrapper onClick={e => this.handleCollapse(item.name, e)}>
                      {item.name}
                      <TriangleIcon collapse={item.name === spreadName} />
                    </NavItemWrapper>
                    {item.expand && item.name === spreadName && (
                      <SecondMenuList>
                        {item.expand.map(sub => (
                          <div>
                            {/* <SecondNavItemWrapper onClick={(e) => this.handleSecondCollapse(sub.title, e)}>
                              {sub.title}
                              {sub.title=== secondSpread ? <i className="iconfont iconyidongduan--copy" /> :
                              <i className="iconfont iconyidongduan" />}
                              </SecondNavItemWrapper> */}
                            {sub.children && (
                              <div>
                                {sub.children.map(child => (
                                  <Link href={child.path} key={child.name}>
                                    <a>
                                      <SecondNavItemWrapper onClick={e => this.handleLinkClick(child.path, e)}>
                                        {child.mobileTitle || child.title}
                                        {/* <i className="iconfont iconyidongduan-youjiantou1"/> */}
                                      </SecondNavItemWrapper>
                                    </a>
                                  </Link>
                                ))}
                                <Link href="/solutions" key="/solutions">
                                  <a>
                                    <SecondNavItemWrapper onClick={e => this.handleLinkClick('/solutions', e)}>
                                      定制解决方案
                                      {/* <i className="iconfont iconyidongduan-youjiantou1"/> */}
                                    </SecondNavItemWrapper>
                                  </a>
                                </Link>
                              </div>
                            )}
                          </div>
                        ))}
                      </SecondMenuList>
                    )}
                  </a>
                </Link>
              );
            } else if (item.name === '技术服务' || item.name === '关于我们') {
              return (
                <Link key={item.path}>
                  <a>
                    <NavItemWrapper onClick={e => this.handleCollapse(item.name, e)}>
                      {item.name}
                      <TriangleIcon collapse={item.name === spreadName} />
                    </NavItemWrapper>
                    {item.expand && item.name === spreadName && (
                      <SecondMenuList>
                        {item.expand.map(sub => (
                          <div>
                            {/* <SecondNavItemWrapper onClick={(e) => this.handleSecondCollapse(sub.title, e)}>
                              {sub.title}
                              {sub.title=== secondSpread ? <i className="iconfont iconyidongduan--copy" /> :
                              <i className="iconfont iconyidongduan" />}
                              </SecondNavItemWrapper> */}
                            {sub.children && (
                              <div>
                                {sub.children.map(child => (
                                  <Link href={child.path} key={child.name}>
                                    <a>
                                      <ThirdNavItemWrapper onClick={e => this.handleLinkClick(child.path, e)}>
                                        {child.mobileTitle || child.title}
                                        {/* <i className="iconfont iconyidongduan-youjiantou1"/> */}
                                      </ThirdNavItemWrapper>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </SecondMenuList>
                    )}
                  </a>
                </Link>
              );
            }
            return (
              <Link href={item.path} key={item.path}>
                <a>
                  <NavItemWrapper onClick={e => this.handleLinkClick(item.path, e)}>
                    {item.name}
                    {/* <i className="iconfont iconyidongduan-youjiantou1"/> */}
                  </NavItemWrapper>
                </a>
              </Link>
            );
          })}
          <TwoBtn collapse={collapse}>
            <a href="https://crm.byai.com/login" target="_blank" rel="noreferrer">
              <LoginBtn>登录</LoginBtn>
            </a>
            <ExpBtn
              onClick={() => {
                this.props.setForm(true, FormType.CUSTOMER);
              }}>
              注册有礼
            </ExpBtn>
          </TwoBtn>
        </ExpandWrapper>
      </HeaderMobileWrapper>
    );
  }
}

export default withRouter(HeaderMobile);
