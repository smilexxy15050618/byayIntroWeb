import classNames from 'classnames';
import Link from 'next/link';
import { withRouter, WithRouterProps } from 'next/router';
import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { throttle } from 'throttle-debounce';
import { NAV_CONFIG } from '../constants/page';
import { media } from '../constants/style';
import { withOpenOriginLink } from '../high-components/OpenOriginLink';
import { LinkBtn } from './common/LinkBtn';

const ByLink = withOpenOriginLink(Link);

export const LOGO = '//cdn.byai.com/static/official-website/seo-logo-1222.png';
export const LOGO_SM = '//cdn.byai.com/static/official-website/seo-logo-1222-sm.png';
export const WHITE_LOGO = '//cdn.byai.com/static/official-website/home/header-new-white-logo.png';

const HeaderWrapper = styled.div<{ opacity: boolean; collapse: boolean }>`
  ${media.desktop`display: none;`}
  ${media.tablet`display: none;`}
  ${media.phone`display: none;`}
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: ${props => (props.collapse ? '50px' : '86px')};
  background: ${props => (props.opacity ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,1)')};
  backdrop-filter: blur(5px);
  border-bottom: ${props => (props.opacity ? 'none' : '1px solid #eeeeee')};
  transition: all 0.3s ease-in-out;
  .content-wrapper {
    max-width: 1200px !important;
    height: 100%;
  }
  a {
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    img {
      transition: all 0.3s ease-in-out;
      margin-bottom: 0;
      width: ${props => (props.collapse ? '70px' : '105px')};
    }
  }
  .nav-list {
    padding-left: 19px !important;
    justify-content: space-evenly;
    .nav-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      margin-right: 24px;
      cursor: pointer;
      &.active {
        .link {
          color: ${props => (props.opacity ? '#fff' : 'rgba(49,83,212,1)')};
        }
        /* &:after {
          display: block;
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: rgba(255, 255, 255, 1);
        } */
      }
      .link {
        &:hover {
          color: ${props => (props.opacity ? 'rgba(255,255,255,1)' : 'rgba(49,83,212,1)')};
        }
        transition: all 0.3s ease-in-out;
        font-size: ${props => (props.collapse ? '14px' : '16px')};
        color: ${props => (props.opacity ? 'rgba(255,255,255,0.6)' : 'rgba(102, 102, 102, 1)')};
        .iconfont {
          display: inline-block;
          transition: all 0.3s ease-in-out;
          margin-left: 5px;
        }
      }
    }
  }
`;
const NavRow = styled(Row)`
  height: 100%;
  display: flex;
  align-items: center;
`;
const NavCol = styled(Col)`
  display: flex;
  align-items: center;
`;
const LoginBtn = styled.div<{ opacity: boolean; collapse: boolean }>`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.collapse ? '120px' : '120px')};
  height: ${props => (props.collapse ? '32px' : '42px')};
  border-radius: 40px;
  font-size: ${props => (props.collapse ? '14px' : '16px')};
  color: ${props => (props.opacity ? '#fff' : 'rgba(49, 83, 212, 1)')};
  border: ${props => (props.collapse ? '1px' : '2px')} solid rgba(49, 83, 212, 1);
`;
const ExpBtn = styled.div<{ opacity: boolean; collapse: boolean }>`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.collapse ? '120px' : '120px')};
  height: ${props => (props.collapse ? '32px' : '42px')};
  border-radius: 40px;
  background: ${props => (props.opacity ? 'rgba(49, 83, 212, 1)' : 'transparent')};
  font-size: ${props => (props.collapse ? '14px' : '16px')};
  color: ${props => (props.opacity ? '#fff' : 'rgba(49, 83, 212, 1)')};
  line-height: 20px;
  cursor: pointer;
  &:hover {
    background-color: #3d5afe;
  }
  margin-left: 10px;
`;
const ExpandWrapper = styled.div<{ visible: boolean }>`
  background: #fff;
  transition: all 0.3s ease-in-out;
  opacity: ${props => (props.visible ? 1 : 0)};
  z-index: -1;
  pointer-events: ${props => (props.visible ? 'all' : 'none')};
  /* height: ${props => (props.visible ? ' auto' : '0px')}; */
  padding-bottom: 16px;
  overflow: hidden;
  position: absolute;
  top: 100%;
  width: 100%;
  box-shadow: 0px 10px 20px 0px rgba(49, 83, 212, 0.05);
  .menu-wrap {
    margin: 0 auto;
    display: flex;
    width: 1140px;
    @media (min-width: 993px) and (max-width: 1200px) {
      width: 960px;
    }
    flex-wrap: wrap;
    .bottom-line {
      border-bottom: 1px solid rgba(238, 238, 238, 1);
      width: 100vw;
      filter: blur(0px);
      position: absolute;
      left: 0;
    }
    .sub-menu-wrap {
      width: 25%;
      border-left: 1px solid rgba(238, 238, 238, 1);
      margin-top: 20px;
      box-sizing: border-box;
      .title {
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);
        font-size: 14px;
        line-height: 22px;
        padding: 0px 0 10px 0;
        margin-left: 25px;
      }
      .menu-item {
        display: flex;
        align-content: center;
        padding: 8px 0px;
        margin-left: 15px;
        margin-right: 15px;
        @media (min-width: 993px) and (max-width: 1200px) {
          margin-left: 5px;
        }
        cursor: pointer;
        &.item-todo {
          cursor: default !important;
        }
        &:hover {
          background: #f5f5f5;
          border-radius: 4px;
        }
        &:active {
          background: #f8f9fb;
        }
        .left-logo {
          flex: 0 1 18px;
          height: 18px;
          margin: 3px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-font-smoothing: antialiased;
          img {
            width: 18px;
            height: 18px;
            margin: 0;
          }
        }
        .right-desc {
          flex: 1;
          .desc-title {
            font-weight: 400;
            color: rgba(0, 0, 0, 0.9);
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 2px;
          }
          .desc-info {
            font-weight: 400;
            color: rgba(0, 0, 0, 0.35);
            font-size: 12px;
            line-height: 18px;
            height: 36px;
            padding-right: 10px;
          }
        }
      }
    }
    .right {
      border-right: 1px solid rgba(238, 238, 238, 1);
    }
  }
`;

const SmallDropdownWrapper = styled.div<{ opacity?: boolean; visible: boolean }>`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  width: auto;
  z-index: ${props => (props.visible ? 1 : -1)};
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
  cursor: auto;
  .small-dropdown-content {
    display: flex;
    flex-direction: column;
    border: 1px solid #eeeeee;
    background: ${props => (props.opacity ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,1)')};
    border-bottom: ${props => (props.opacity ? 'none' : '1px solid #eeeeee')};
    transition: all 0.3s ease-in-out;
    opacity: ${props => (props.visible ? 1 : 0)};
    cursor: ${props => (props.visible ? 'pointer' : 'auto')};
    padding-top: 13px;
    padding-bottom: 16px;
    width: 286px;
    overflow: hidden;
  }
`;

class Nav extends React.Component<{ onBtnClick: () => void } & WithRouterProps> {
  state = {
    expandVisible: '',
    opacity: false,
    collapse: false,
  };

  handleHeaderOpacity = () => {
    const isBottom = document.body.getBoundingClientRect().top < -100;
    this.setState({
      // opacity: this.props.router.route !== '/' ? !isBottom : false,
      opacity: false,
      collapse: isBottom,
    });
  };
  throttledHandleHeaderOpacity = throttle(200, this.handleHeaderOpacity);

  componentDidMount() {
    document.addEventListener('wheel', this.throttledHandleHeaderOpacity);
  }

  componentWillUnmount() {
    document.removeEventListener('wheel', this.throttledHandleHeaderOpacity);
  }

  handleNavItemHover = (expandName: string, e: React.MouseEvent) => {
    // 鼠标移入隐藏的小dropdown则不触发显示, 点击事件穿透隐藏元素由css的pointer-events提供
    if ((e.target as HTMLElement).className.includes('small-dropdown-identify')) return;
    this.setState({
      expandVisible: expandName,
    });
  };

  hideNavBar = () => {
    this.setState({
      expandVisible: '',
    });
  };

  handleOpenNewPage = (path: string) => {
    if (path.includes('http')) {
      window.open(path);
      this.setState({ expandVisible: '' });
    }
  };

  render() {
    const {
      onBtnClick,
      router: { route },
    } = this.props;
    const { collapse, opacity, expandVisible } = this.state;
    const opa = expandVisible && NAV_CONFIG.find(item => item.name === expandVisible).expand ? false : opacity;
    return (
      <HeaderWrapper collapse={collapse} opacity={opa} onMouseLeave={this.hideNavBar}>
        <Container className="content-wrapper">
          <NavRow>
            <NavCol lg={3} className="logo">
              <Link href="/">
                <a>
                  <img src={opa ? WHITE_LOGO : collapse ? LOGO_SM : LOGO} alt="" />
                </a>
              </Link>
            </NavCol>
            <NavCol className="nav-list" lg={16}>
              {NAV_CONFIG.map(item => (
                <div
                  className={classNames('nav-item', {
                    active: item.path === route,
                  })}
                  key={item.name}
                  onMouseOver={e => this.handleNavItemHover(item.name, e)}
                  onMouseLeave={() => (item.smallDropdown ? this.hideNavBar() : undefined)}>
                  <ByLink href={item.path === '/product' ? '/' : item.path}>
                    <a>
                      <div className="link">
                        {item.name}
                        {item.expand && (
                          <i
                            className="iconfont iconxiaoxiangshangjiantou"
                            style={{
                              transform: `rotate(${expandVisible === item.name ? '0' : '180deg'})`,
                            }}
                          />
                        )}
                      </div>
                    </a>
                  </ByLink>
                  {item.smallDropdown && item.expand && (
                    <SmallDropdownWrapper
                      opacity={opa}
                      visible={item.name === expandVisible}
                      className=".small-dropdown-identify">
                      <div className="small-dropdown-content">
                        {item.expand[0].children.map(
                          // visible 用于区分显示/隐藏时btn pointer小手
                          menuItem => (
                            <LinkBtn
                              menuItem={menuItem}
                              onClick={this.handleOpenNewPage}
                              visible={item.name === expandVisible}
                            />
                          ),
                        )}
                      </div>
                    </SmallDropdownWrapper>
                  )}
                </div>
              ))}
            </NavCol>
            <NavCol lg={5} className="btn-wrapper">
              <a href="https://crm.byai.com/login" target="_blank" rel="noreferrer">
                <LoginBtn collapse={collapse} opacity={opa}>
                  登录
                </LoginBtn>
              </a>
              <ExpBtn onClick={onBtnClick} collapse={collapse} opacity={true}>
                立即体验
              </ExpBtn>
            </NavCol>
          </NavRow>
        </Container>
        {NAV_CONFIG.filter(item => Boolean(item.expand) && !item.smallDropdown).map(item => {
          return (
            <ExpandWrapper key={item.name} visible={item.name === expandVisible}>
              <div className="menu-wrap">
                <div className="bottom-line"></div>
                {item.expand.map(subMenu => (
                  <div className={`sub-menu-wrap ${subMenu.right && 'right'}`}>
                    <div className="title">{subMenu.title}</div>
                    {subMenu.children.map(menuItem => (
                      <Link href={menuItem.path}>
                        <div
                          className={!menuItem.path ? 'menu-item item-todo' : 'menu-item'}
                          onClick={() => this.handleOpenNewPage(menuItem.path)}>
                          <div className="left-logo" style={{ backgroundColor: menuItem.bgColor }}>
                            {!menuItem.icon.includes('http') ? (
                              <i className={menuItem.icon} />
                            ) : (
                              <img src={menuItem.icon} className="icon" />
                            )}
                          </div>
                          <div className="right-desc">
                            <div className="desc-title">{menuItem.title}</div>
                            <div className="desc-info">{menuItem.desc}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </ExpandWrapper>
          );
        })}
      </HeaderWrapper>
    );
  }
}

export const Header = withRouter(Nav);
