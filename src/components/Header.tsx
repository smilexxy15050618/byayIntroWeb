import classNames from 'classnames';
import Link from 'next/link';
import { withRouter, WithRouterProps } from 'next/router';
import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled, { css } from 'styled-components';
import { throttle } from 'throttle-debounce';
import { NAV_CONFIG } from '../constants/page-modify';
import { media } from '../constants/style';
import { withOpenOriginLink } from '../high-components/OpenOriginLink';

const ByLink = withOpenOriginLink(Link);

export const LOGO = '//cdn.byai.com/static/official-website/header-new-black-logo.png';
export const LOGO_SM = '//cdn.byai.com/static/official-website/seo-logo-1222-sm.png';
export const WHITE_LOGO = '//cdn.byai.com/static/official-website/header-new-white-logo.png';

const Placeholder = styled.div<{ bgColor?: string }>`
  width: 100%;
  height: 60px;
  background: ${props => props.bgColor || 'unset'};
`;

const HeaderWrapper = styled.div<{ opacity: boolean; collapse: boolean }>`
  ${media.desktop`display: none;`}
  ${media.tablet`display: none;`}
  ${media.phone`display: none;`}
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 60px;
  background: ${props => (props.opacity ? 'transparent' : 'rgba(255,255,255,1)')};
  border-bottom: ${props => (props.opacity ? 'none' : '1px solid #eeeeee')};
  // backdrop-filter: blur(5px);
  transition: all 0.1s ease-in-out;
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
    /* justify-content: flex-end; */
    cursor: pointer;
    img {
      transition: all 0.3s ease-in-out;
      margin-bottom: 0;
      width: 100px;
    }
  }
  .nav-list {
    padding-left: 6px !important;
    /* justify-content: space-evenly; */
    .nav-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 16px;
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
          > .icon {
            border-color: ${props => (props.opacity ? 'rgba(255, 255, 255)' : 'rgba(49,83,212,1)')} transparent
              transparent transparent;
          }
        }

        transition: all 0.3s ease-in-out;
        font-size: 16px;
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
  width: 120px;
  height: 36px;
  // border-radius: 40px;
  font-size: 16px;
  color: ${props => (props.opacity ? '#fff' : '#2B58F9')};
  :hover {
    ${props =>
    props.opacity
      ? css`
            opacity: 0.85;
          `
      : css`
            color: rgba(23, 66, 222, 1);
          `}
  }
  // border: 1px solid #2B58F9;
`;
const ExpBtn = styled.div<{ opacity: boolean; collapse: boolean }>`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 36px;
  border-radius: 40px;
  background: ${props => (props.opacity ? '#2B58F9' : 'transparent')};
  font-size: 16px;
  color: ${props => (props.opacity ? '#fff' : '#2B58F9')};
  line-height: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(23, 66, 222, 1);
  }
  margin-left: 10px;
`;
const ExpandWrapper = styled.div<{ visible: boolean; opacity: boolean; left: number }>`
  background: rgba(255, 255, 255, 1);
  color: black;
  transition: all 0.3s ease-in-out;
  opacity: ${props => (props.visible ? 1 : 0)};
  z-index: -1;
  pointer-events: ${props => (props.visible ? 'all' : 'none')};
  height: ${props => (props.visible ? ' auto' : '0px')};
  overflow: hidden;
  position: absolute;
  top: calc(100% + 1px);
  left: ${props => props.left}px;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0px 10px 20px 0px rgba(49, 83, 212, 0.05);
  .menu-wrap {
    padding: 16px 32px 16px 0px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    // 扩展菜单 每列样式
    .sub-menu-wrap {
      margin-left: 32px;
      width: 250px;
      box-sizing: border-box;
      .title {
        font-size: 16px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 22px;
        margin-bottom: 16px;
      }
      .menu-item {
        display: flex;
        align-content: center;
        cursor: pointer;
        &.item-todo {
          cursor: default !important;
        }
        &:hover .desc {
          color: #2b58f9 !important;
        }
        &:active {
          background: #f8f9fb;
        }
        .desc {
          height: 52px;
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 24px;
          color: rgba(0, 0, 0, 0.65);
        }
      }
      > .menu-item:nth-child(2) {
        border-top: 1px solid rgba(0, 0, 0, 0.08) !important;
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
  transform: translateY(calc(100% + 1px));
  width: auto;
  z-index: ${props => (props.visible ? 1 : 0)};
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
  cursor: auto;
  .small-dropdown-content {
    width: 128px;
    box-shadow: 0px 12px 24px 0px rgba(3, 43, 183, 0.08);
    border-radius: 0px 0px 8px 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    transition: all 0.3s ease-in-out;
    opacity: ${props => (props.visible ? 1 : 0)};
    cursor: ${props => (props.visible ? 'pointer' : 'auto')};
    padding: 16px 32px;
    overflow: hidden;
    .link-btn-small {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.65);
      :hover {
        color: #2b58f9;
      }
    }
  }
`;

const Icon = styled.div<{ expandVisible: boolean; opacity: boolean }>`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: ${props => (props.opacity ? 'rgba(255,255,255,0.6)' : 'rgba(102,102,102,1)')} transparent transparent
    transparent;
  transform: rotate(${props => (props.expandVisible ? '180deg' : '0')});
  margin-left: 5px;
  top: -3px;
  position: relative;
  :hover {
    border-color: ${props => (props.opacity ? 'rgba(255, 255, 255)' : '#000000')} transparent transparent transparent;
  }
  transition: all 0.3s ease-in-out;
`;

class Nav extends React.Component<{ headPlaceholder: string | boolean; onBtnClick: () => void } & WithRouterProps> {
  state = {
    expandVisible: '',
    opacity: true,
    collapse: false,
    expandLeft: null,
  };

  handleHeaderOpacity = () => {
    const isBottom = document.body.getBoundingClientRect().top < -10;
    this.setState({
      // opacity: this.props.router.route !== '/' ? !isBottom : false,
      opacity: !isBottom,
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

  handleNavItemHover = (item: any, e: React.MouseEvent) => {
    const { name, expand, smallDropdown } = item;
    const { className } = e.target as HTMLElement;
    if (expand && !smallDropdown && className === 'nav-item') {
      // 设置expand位置
      this.setState({
        expandLeft: (e.target as HTMLElement).getBoundingClientRect().left,
      });
    }
    // 鼠标移入隐藏的小dropdown则不触发显示, 点击事件穿透隐藏元素由css的pointer-events提供
    if (className.includes('small-dropdown-identify')) return;
    this.setState({
      expandVisible: name,
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
      headPlaceholder,
      onBtnClick,
      router: { route },
    } = this.props;
    const { collapse, opacity, expandVisible, expandLeft } = this.state;
    let opa =
      expandVisible &&
        NAV_CONFIG.find(item => item.name === expandVisible).expand &&
        document.body.getBoundingClientRect().top > -10
        ? true
        : opacity;

    // headPlaceholder 未设置值或者是true的话，就永远使用不透明的白色header,
    if (headPlaceholder === undefined || headPlaceholder === true) {
      opa = false;
    }

    return (
      <>
        {/* 
          headerPlaceholder: 此属性将传如Header中配置header主体的颜色
          undefined 60px 透明   -- header主体白色 -- 默认，header就是白色
          颜色字符串 60px 颜色    -- header主体透明 -- header背景为纯色并需要与当前页面头图搭配时使用 (具有下拉变白特性)
          false    0px        -- header主体透明 -- 头图背景和header有结合部分时用 (具有下拉变白特性)
          true    60px  透明     -- header主体白色 -- 与undefined情况相同
        */}
        {headPlaceholder !== false && (
          <Placeholder bgColor={typeof headPlaceholder === 'string' ? headPlaceholder : undefined} />
        )}
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
                    onMouseOver={e => this.handleNavItemHover(item, e)}
                    onMouseLeave={() => (item.smallDropdown ? this.hideNavBar() : undefined)}>
                    <ByLink href={item.path === '/product' ? '/' : item.path}>
                      <a>
                        <div className="link">
                          {item.name}
                          {item.expand && (
                            <Icon className="icon" opacity={opa} expandVisible={expandVisible === item.name} />
                          )}
                        </div>
                      </a>
                    </ByLink>
                    {item.smallDropdown && item.expand && (
                      <SmallDropdownWrapper
                        opacity={opa}
                        visible={item.name === expandVisible}
                        className="small-dropdown-identify">
                        <div className="small-dropdown-content">
                          {item.expand.map(menuItem => (
                            <Link href={menuItem.path}>
                              <div className="link-btn-small" onClick={() => this.handleOpenNewPage}>
                                {menuItem.title}
                              </div>
                            </Link>
                          ))}
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
              <ExpandWrapper key={item.name} opacity={opa} visible={item.name === expandVisible} left={expandLeft}>
                <div className="menu-wrap">
                  {item.expand.map(subMenu => (
                    <div className={`sub-menu-wrap ${subMenu.right && 'right'}`}>
                      <div className="title">{subMenu.title}</div>
                      {subMenu.children.map(menuItem => (
                        <Link href={menuItem.path}>
                          <div
                            className={!menuItem.path ? 'menu-item item-todo' : 'menu-item'}
                            onClick={() => this.handleOpenNewPage(menuItem.path)}>
                            <div className="desc">{menuItem.title}</div>
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
      </>
    );
  }
}

export const Header = withRouter(Nav);
