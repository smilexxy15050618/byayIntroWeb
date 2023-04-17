import classNames from 'classnames';
// import { throttle } from 'throttle-debounce';
import { throttle } from 'lodash';
import Link from 'next/link';
import { withRouter, WithRouterProps } from 'next/router';
import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled, { css } from 'styled-components';
import { media } from '../../constants/style';
import { withOpenOriginLink } from '../../high-components/OpenOriginLink';
import { calWidthAndHeight, retailUrl } from '../../lib/utils';
import { NAV_CONFIG } from '../constants/page';
const ByLink = withOpenOriginLink(Link);
import imgurl from '../../../img.url.js'

// export const LOGO = '//cdn.byai.com/static/by-intro-2023/header-logo/black-logo1.png';
export const LOGO = imgurl+'/black-logo1.png';

export const LOGO_SM = '//cdn.byai.com/static/official-website/seo-logo-1222-sm.png';
export const WHITE_LOGO = '//cdn.byai.com/static/by-intro-2023/header-logo/white-logo1.png';
export const ENTERPRISE_WECHET_LOGO = '//cdn.byai.com/static/official-website/enterprise-weChat-logo.png';
export const ENTERPRISE_WECHET_WHITE_LOGO = '//cdn.byai.com/static/official-website/enterprise-weChat-white-logo.png';

const Placeholder = styled.div<{ bgColor?: string }>`
  width: 100%;
  height: 60px;
  background: ${props => props.bgColor || 'unset'};
`;

const HeaderWrapper = styled.div<{ needOpacity: boolean; fontStyle: 'dark' | 'light' }>`
  /* ${media.desktop`display: none;`}
  ${media.tablet`display: none;`}
  ${media.phone`display: none;`} */
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 60px;
  background: ${props => (props.needOpacity ? 'transparent' : 'rgba(255,255,255,1)')};
  border-bottom: ${props => (props.needOpacity ? 'none' : '1px solid #eeeeee')};
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
    img {
      width: ${calWidthAndHeight(110)};
      margin: 0;
      cursor: pointer;
    }
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    padding-right: 45px;
    img {
      transition: all 0.3s ease-in-out;
      margin-bottom: 0;
      width: 100px;
    }
  }
  .nav-list {
    .nav-item {
      // 导航项
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 16px;
      cursor: pointer;
      &.active {
        .link {
          color: ${props => (props.fontStyle === 'light' ? '#ffffff' : '#F66600')};
        }
        .icon {
          border-color: ${props => (props.fontStyle === 'light' ? 'rgba(255, 255, 255)' : '#F66600')} transparent
            transparent transparent;
        }
      }
      .link {
        transition: all 0.3s ease-in-out;
        font-size: 16px;
        color: ${props => (props.fontStyle === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(102, 102, 102, 1)')};

        .iconfont {
          display: inline-block;
          transition: all 0.3s ease-in-out;
          margin-left: 5px;
        }
        &:hover {
          color: ${props => (props.fontStyle === 'light' ? '#ffffff' : '#F66600')};
          > .icon {
            border-color: ${props => (props.fontStyle === 'light' ? 'rgba(255, 255, 255)' : '#F66600')} transparent
              transparent transparent;
          }
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
const LoginBtn = styled.div<{ fontStyle: 'dark' | 'light' }>`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 36px;
  font-size: 16px;
  color: ${props => (props.fontStyle === 'light' ? '#fff' : '#2B58F9')};
  :hover {
    ${props =>
      props.fontStyle === 'light'
        ? css`
            opacity: 0.85;
          `
        : css`
            color: rgba(23, 66, 222, 1);
          `}
  }
`;
const ExpBtn = styled.div<{ fontStyle: 'dark' | 'light'; bgColor?: string[] }>`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.bgColor && props.bgColor[0]) || '#f66600'};
  width: 120px;
  height: 36px;
  border-radius: 4px;
  font-size: 16px;
  color: #ffffff;
  line-height: 24px;
  cursor: pointer;
  &:hover {
    background: ${props => (props.bgColor && props.bgColor[1]) || '#f68100'};
  }
  margin-left: 10px;
`;
const ExpandWrapper = styled.div<{ visible: boolean; left: number }>`
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
  /* border-radius: 0px 0px 8px 8px; */
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
          color: rgba(246, 102, 0, 1) !important;
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
      .newIcon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 8px;
      }
      .new-icon {
        width: 32px;
        height: 16px;
        background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/731186d2-7719-47bf-a205-88594d5ec2ba.png');
        background-repeat: round;
      }
      .double-eleven-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 8px;
      }
      .double-eleven-icon {
        width: 32px;
        height: 16px;
        background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/8a0770f8-35fa-4bc2-b948-7a4623a3147f.png');
        background-repeat: round;
      }
    }
    .right {
      border-right: 1px solid rgba(238, 238, 238, 1);
    }
  }
`;

const SmallDropdownWrapper = styled.div<{ visible: boolean }>`
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
    width: 130px;
    box-shadow: 0px 12px 24px 0px rgba(3, 43, 183, 0.08);
    /* border-radius: 0px 0px 8px 8px; */
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
        color: #f66600;
      }
    }
  }
`;

const Icon = styled.div<{ expandVisible: boolean; fontStyle: 'dark' | 'light' }>`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: ${props => (props.fontStyle === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(102,102,102,1)')} transparent
    transparent transparent;
  transform: rotate(${props => (props.expandVisible ? '180deg' : '0')});
  margin-left: 5px;
  top: -3px;
  position: relative;
  /* :hover {
    border-color: ${props =>
    props.fontStyle === 'light' ? '#ffffff' : 'rgba(49,83,212,1)'}  transparent transparent transparent;
  } */
  transition: all 0.3s ease-in-out;
`;

const LinkSwitch: React.FC<{ children?: React.ReactNode; shouldBeLink: boolean; href: string }> = ({
  shouldBeLink,
  children,
  href = '',
}) => {
  return shouldBeLink ? <a href={href}>{children}</a> : <div>{children}</div>;
};

class Nav extends React.Component<
  {
    headPlaceholder: string | boolean;
    headFontStyle: 'dark' | 'light';
    expBtnBgColor?: string[];
    onBtnClick: () => void;
    initialOpacity?: boolean;
  } & WithRouterProps
> {
  state = {
    expandVisible: '',
    opacity: true,
    expandLeft: null,
  };
  constructor(p) {
    super(p);
    console.log('this.props.initialOpacity', this.props.initialOpacity);
    this.setState({
      opacity: this.props.initialOpacity ? true : this.props.initialOpacity,
    });
  }

  handleHeaderOpacity = () => {
    console.log('触发wheel事件');
    this.setState({
      // 大于-10说明 body没有上移，可视区域是页面最顶部
      opacity: document.body.getBoundingClientRect().top > -10,
    });
  };
  throttledHandleHeaderOpacity = throttle(this.handleHeaderOpacity, 5000, { trailing: true });

  componentDidMount() {
    document.addEventListener('wheel', this.handleHeaderOpacity);
  }

  componentWillUnmount() {
    document.removeEventListener('wheel', this.handleHeaderOpacity);
  }
  // 向外查找符合className 的元素，fix一进页面鼠标就在菜单选项中
  findTargetElement(el: HTMLElement, className: string) {
    return el.className.includes(className) ? el : this.findTargetElement(el.parentElement, className);
  }
  handleNavItemHover = (item: any, e: React.MouseEvent) => {
    const { name, expand, smallDropdown } = item;
    const { className } = e.target as HTMLElement;
    if (expand && !smallDropdown) {
      // 非小dropdown
      // 如果触发的元素是nav-item内的元素，向外找到nav-item，获取它的left值
      const target = this.findTargetElement(e.target as HTMLElement, 'nav-item');
      // 设置expand位置
      const left = target.getBoundingClientRect().left;
      this.setState({
        expandLeft: left,
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
    let {
      headPlaceholder,
      headFontStyle,
      onBtnClick,
      expBtnBgColor,
      router: { route },
    } = this.props;

    const { opacity, expandVisible, expandLeft } = this.state;

    // opacity表示滚动不超过10px时 导航栏透明
    headFontStyle = !opacity ? 'dark' : headFontStyle; // 滚动超过10px 白底黑字
    return (
      <>
        {headPlaceholder !== false && (
          <Placeholder bgColor={typeof headPlaceholder === 'string' ? headPlaceholder : '#FFFFFF'} />
        )}
        <HeaderWrapper fontStyle={headFontStyle} needOpacity={opacity} onMouseLeave={this.hideNavBar}>
          <Container className="content-wrapper">
            <NavRow>
              <NavCol lg={4}>
                <a href="https://www.byai.com">
                  <div className="logo" style={{ width: '100%' }}>
                    <img src={headFontStyle === 'light' ? WHITE_LOGO : LOGO} />
                  </div>
                </a>
              </NavCol>
              <NavCol className="nav-list" lg={15}>
                {NAV_CONFIG.map(item => (
                  <div
                    className={classNames('nav-item', {
                      active: item.path === retailUrl('/') ? route === item.path : route.includes(item.path),
                    })}
                    key={item.name}
                    onMouseOver={e => this.handleNavItemHover(item, e)}
                    onMouseLeave={() => (item.smallDropdown ? this.hideNavBar() : undefined)}>
                    <LinkSwitch href={item.path} shouldBeLink={!item.expand}>
                      <a>
                        <div className="link">
                          {item.name}
                          {item.expand && (
                            <Icon
                              className="icon"
                              fontStyle={headFontStyle}
                              expandVisible={expandVisible === item.name}
                            />
                          )}
                        </div>
                      </a>
                    </LinkSwitch>
                    {item.smallDropdown && item.expand && (
                      <SmallDropdownWrapper visible={item.name === expandVisible} className="small-dropdown-identify">
                        <div className="small-dropdown-content">
                          {item.expand.map(menuItem => (
                            <a href={menuItem.path} key={menuItem.path}>
                              <div className="link-btn-small" onClick={() => this.handleOpenNewPage}>
                                {menuItem.title}
                              </div>
                            </a>
                          ))}
                        </div>
                      </SmallDropdownWrapper>
                    )}
                  </div>
                ))}
              </NavCol>
              <NavCol lg={5} className="btn-wrapper">
                <ExpBtn fontStyle={headFontStyle} bgColor={expBtnBgColor} onClick={onBtnClick}>
                  立即体验
                </ExpBtn>
              </NavCol>
            </NavRow>
          </Container>
          {NAV_CONFIG.filter(item => Boolean(item.expand) && !item.smallDropdown).map(item => {
            return (
              <ExpandWrapper key={item.name} visible={item.name === expandVisible} left={expandLeft}>
                <div className="menu-wrap">
                  {item.expand.map(subMenu => (
                    <div className={`sub-menu-wrap ${subMenu.right && 'right'}`} key={subMenu.title}>
                      <div className="title">{subMenu.title}</div>
                      {subMenu.children.map(menuItem => (
                        <a href={menuItem.path} key={menuItem.path}>
                          <div className={!menuItem.path ? 'menu-item item-todo' : 'menu-item'}>
                            <div className="desc">{menuItem.title}</div>
                            {menuItem.showNewIcon && (
                              <div className="newIcon-wrapper">
                                <div className="new-icon"></div>
                              </div>
                            )}
                            {menuItem.showDoubleEleven && (
                              <div className="double-eleven-wrapper">
                                <div className="double-eleven-icon"></div>
                              </div>
                            )}
                          </div>
                        </a>
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
