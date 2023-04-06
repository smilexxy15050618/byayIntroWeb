import * as React from 'react';
import styled from 'styled-components';
import { WithRouterProps, withRouter } from 'next/router';
import Link from 'next/link';
import { throttle } from 'throttle-debounce';
import { LOGO, WHITE_LOGO } from './Header-2021';
import { NAV_CONFIG } from '../constants/page';
import { media } from '../constants/style';

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

const HeaderMobileTogglerWrapper = styled.div<{ opacityState: boolean }>`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  border-bottom: ${props => (props.opacityState ? '1px' : '0')} solid rgb(238, 238, 238);
  background: ${props => (props.opacityState ? '#fff' : 'rgba(0,0,0,0.05)')};
  color: ${props => (props.opacityState ? 'unset' : '#fff')};
  img {
    height: 22px;
    margin: 0;
  }
  .iconfont {
    padding: 10px 25px;
    font-size: 17px;
  }
`;

const TitleWrapper = styled.div`
  flex: 1;
`;

const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  border-bottom: 1px solid #eeeeee;
  height: 72px;
  font-size: 16px;
  &:active {
    background-color: #e8e8e8;
  }
  .iconfont {
    color: #ccc;
  }
`;

const SecondNavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px 0 45px;
  border-bottom: 1px solid #eeeeee;
  height: 72px;
  font-size: 16px;
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
  padding: 0 25px 0 65px;
  border-bottom: 1px solid #eeeeee;
  height: 72px;
  font-size: 16px;
  &:active {
    background-color: #e8e8e8;
  }
  .iconfont {
    color: #ccc;
  }
`;

const ExpandWrapper = styled.div<{ collapse: boolean }>`
  top: 50px;
  background: #fff;
  height: ${props => (props.collapse ? 'calc(100vh - 25px)' : 0)};
  transition: height 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow-y: auto;
`;

class HeaderMobile extends React.Component<WithRouterProps, IHeaderMobileStates> {
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
    if (name === this.state.spreadName) {
      this.setState({ spreadName: null });
    } else {
      this.setState({ spreadName: name });
    }
  };
  handleSecondCollapse = (name: string, e: MouseEvent) => {
    e.stopPropagation();
    if (name === this.state.secondSpread) {
      this.setState({ secondSpread: null });
    } else {
      this.setState({ secondSpread: name });
    }
  };
  public render() {
    const { collapse, spreadName, secondSpread } = this.state;
    return (
      <HeaderMobileWrapper>
        <HeaderMobileTogglerWrapper opacityState={this.opacityState}>
          <Link href="/">
            <a>
              <img src={this.opacityState ? LOGO : WHITE_LOGO} alt="" />
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
                      {item.name === spreadName ? (
                        <i className="iconfont iconyidongduan--copy" />
                      ) : (
                        <i className="iconfont iconyidongduan" />
                      )}
                    </NavItemWrapper>
                    {item.expand && item.name === spreadName && (
                      <div>
                        {item.expand.map(sub => (
                          <div>
                            <SecondNavItemWrapper onClick={e => this.handleSecondCollapse(sub.title, e)}>
                              {sub.title}
                              {sub.title === secondSpread ? (
                                <i className="iconfont iconyidongduan--copy" />
                              ) : (
                                <i className="iconfont iconyidongduan" />
                              )}
                            </SecondNavItemWrapper>
                            {sub.children && sub.title === secondSpread && (
                              <div>
                                {sub.children.map(child => (
                                  <Link href={child.path} key={child.path}>
                                    <a>
                                      <ThirdNavItemWrapper onClick={e => this.handleLinkClick(child.path, e)}>
                                        {child.mobileTitle || child.title}
                                        <i className="iconfont iconyidongduan-youjiantou1" />
                                      </ThirdNavItemWrapper>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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
                      {item.name === spreadName ? (
                        <i className="iconfont iconyidongduan--copy" />
                      ) : (
                        <i className="iconfont iconyidongduan" />
                      )}
                    </NavItemWrapper>
                    {item.expand && item.name === spreadName && (
                      <div>
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
                                  <Link href={child.path} key={child.path}>
                                    <a>
                                      <SecondNavItemWrapper onClick={e => this.handleLinkClick(child.path, e)}>
                                        {child.mobileTitle || child.title}
                                        <i className="iconfont iconyidongduan-youjiantou1" />
                                      </SecondNavItemWrapper>
                                    </a>
                                  </Link>
                                ))}
                                <Link href="/solutions" key="/solutions">
                                  <a>
                                    <SecondNavItemWrapper onClick={e => this.handleLinkClick('/solutions', e)}>
                                      定制解决方案
                                      <i className="iconfont iconyidongduan-youjiantou1" />
                                    </SecondNavItemWrapper>
                                  </a>
                                </Link>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </a>
                </Link>
              );
            } else if (item.name === '生态与合作') {
              return (
                <Link key={item.path}>
                  <a>
                    <NavItemWrapper onClick={e => this.handleCollapse(item.name, e)}>
                      {item.name}
                      {item.name === spreadName ? (
                        <i className="iconfont iconyidongduan--copy" />
                      ) : (
                        <i className="iconfont iconyidongduan" />
                      )}
                    </NavItemWrapper>
                    {item.expand && item.name === spreadName && (
                      <div>
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
                                  <Link href={child.path} key={child.path}>
                                    <a>
                                      <SecondNavItemWrapper onClick={e => this.handleLinkClick(child.path, e)}>
                                        {child.mobileTitle || child.title}
                                        <i className="iconfont iconyidongduan-youjiantou1" />
                                      </SecondNavItemWrapper>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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
                    <i className="iconfont iconyidongduan-youjiantou1" />
                  </NavItemWrapper>
                </a>
              </Link>
            );
          })}
        </ExpandWrapper>
      </HeaderMobileWrapper>
    );
  }
}

export default withRouter(HeaderMobile);
