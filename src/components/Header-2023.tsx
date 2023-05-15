import classNames from 'classnames';
// import { throttle } from 'throttle-debounce';
import { throttle } from 'lodash';
import Link from 'next/link';
import { withRouter, WithRouterProps } from 'next/router';
import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled, { css } from 'styled-components';
import imgurl from '../../img.url.js';
import { NAV_CONFIG } from '../constants/page-modify-2023';
import { media } from '../constants/style';
import { withOpenOriginLink } from '../high-components/OpenOriginLink';
import { HOST_ENUM } from '../lib/utils';


const ByLink = withOpenOriginLink(Link);
// export const LOGO = '//cdn.byai.com/static/by-intro-2023/header-logo/black-logo1.png';
export const LOGO = imgurl + '/black-logo1.png';

export const LOGO_SM = '//cdn.byai.com/static/official-website/seo-logo-1222-sm.png';
export const WHITE_LOGO = '//cdn.byai.com/static/by-intro-2023/header-logo/white-logo1.png';
export const ENTERPRISE_WECHET_LOGO = '//cdn.byai.com/static/official-website/enterprise-weChat-logo.png';
export const ENTERPRISE_WECHET_WHITE_LOGO = '//cdn.byai.com/static/official-website/enterprise-weChat-white-logo.png';
export const BOTTOM_WHITE_LOGO = '//cdn.byai.com/static/by-intro-2023/header-logo/bottom-logo.png';
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
  height: 80px;
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
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding-right: 4px;
    img {
      transition: all 0.3s ease-in-out;
      margin-bottom: 0;
      width: 145px;
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
          /* color: ${props => (props.fontStyle === 'light' ? '#ffffff' : 'rgba(49,83,212,1)')}; */
        }
        .icon {
          /* border-color: ${props => (props.fontStyle === 'light' ? 'rgba(255, 255, 255)' : 'rgba(49,83,212,1)')} */
          /* transparent transparent transparent; */
        }
      }
      .link {
        transition: all 0.3s ease-in-out;
        font-size: 16px;
        /* color: ${props => (props.fontStyle === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(102, 102, 102, 1)')}; */
        color: black;

        .iconfont {
          display: inline-block;
          transition: all 0.3s ease-in-out;
          margin-left: 5px;
        }
        &:hover {
          /* color: ${props => (props.fontStyle === 'light' ? '#ffffff' : 'rgba(49,83,212,1)')}; */
          color: rgba(49, 83, 212, 1);
          > .icon {
            border-color: rgba(49, 83, 212, 1) transparent transparent transparent;
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
  border-radius: 4px;
  font-size: 16px;
  color: #2b58f9;
  /* ${props => (props.fontStyle === 'light' ? '#fff' : '#2B58F9')}; */
  /* border: 1px solid ${props => (props.fontStyle === 'light' ? '#fff' : '#2B58F9')};; */
  border: 1px solid #2b58f9;
  &:active {
    color: #004cd9;
    border-color: #004cd9;
  }
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
const ExpBtn = styled.div<{ fontStyle: 'dark' | 'light' }>`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 36px;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  background-color: rgba(43, 88, 249, 1);
  line-height: 20px;
  cursor: pointer;
  &:active {
    background: #004cd9;
    box-shadow: 0px 4px 10px 0px rgba(3, 100, 255, 0.3);
  }
  &:hover {
    box-shadow: 0px 4px 10px 0px rgba(3, 100, 255, 0.3);
    /* ${props =>
    props.fontStyle === 'light'
      ? css`
            opacity: 0.85;
          `
      : css`
            color: rgba(23, 66, 222, 1);
          `}; */
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
    border-radius: 8px;
    border: 1px solid #dbdbe0;
    min-width: 300px;
    padding: 12px;
    box-shadow: 0px 12px 24px 0px rgba(3, 43, 183, 0.08);
    /* border-radius: 0px 0px 8px 8px; */
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    transition: all 0.3s ease-in-out;
    opacity: ${props => (props.visible ? 1 : 0)};
    cursor: ${props => (props.visible ? 'pointer' : 'auto')};
    overflow: hidden;
    gap: 3px;
    .link-btn-wrapper {
      height: 64px;
      border-radius: 6px;
      padding: 8px;
      display: flex;
      &:nth-child(1):hover {
        background: transparent;
      }
      &:hover {
        background: #f5f6f8;
      }
    }
    .link-btn-icon {
      width: 48px;
      height: 48px;
      background: #f5f6f8;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      > * {
        margin-bottom: 0;
        font-size: 32px;
        height: 32px;
      }
    }
    .link-btn-info-title {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 24px;
      margin-bottom: 4px;
    }

    .link-btn-info-desc {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(10, 15, 44, 0.45);
      line-height: 22px;
      white-space: nowrap;
    }
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

  .solve-scheme-content {
    width: 800.5px;
    height: 336px;
    padding: 32px 40px;
    display: flex;
    background: rgba(255, 255, 255, 1);
    transition: all 0.3s ease-in-out;
    opacity: ${props => (props.visible ? 1 : 0)};
    cursor: ${props => (props.visible ? 'pointer' : 'auto')};
    overflow: hidden;
    gap: 0;
    .solve-scheme-item {
      &:nth-child(1) {
        width: 320px;
      }
      &:nth-child(2) {
        width: 160px;
        margin: 0 40px;
      }
      &:nth-child(3) {
        width: 160px;
      }
      .scheme-title {
        padding-left: 28px;
        height: 56px;
        line-height: 56px;
        font-size: 18px;
        color: rgba(26, 26, 26, 1);
        border-bottom: 1px solid rgba(26, 26, 26, 0.18);
        margin-bottom: 16px;
      }
      .qy-icon {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEeSURBVDiNnZMxTsMwFIY/W0ilggMAIyteqsIcd88BfJuE2+QW8SHaBdQNlKHqHAJqzJBYCY2ToP5TnvP8Oe//Y0GrJ/OVg9DMSFBvttnSnq9fAShTaofQgnozBXGIBKQGwiCv0El9KVNph4uUqdJuzyIFkMPmUvcblalSZUrt68Pz530R7ddFtF87SPy7AQhke2rT4HBROw4Ap9vv9+OqiI+rIh4drf+pXrvsetK3UVBjvMy98Q6ZN8CFmAINRttmS+sj9s9zaQZBjdFSdwZLPQcJgqC2w3oeFhwNavv3nzqH/wOkTJU6ZN7FL/N+Paax+FNf99NSphqFBTy6TKK9sAkILeB1qtnhosPLx8Pp5ucN4M4+xn6P6N+ry1XbX8WqfhZO+MBIAAAAAElFTkSuQmCC')
          no-repeat left center;
      }
      .zw-icon {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGCSURBVDiNhZO/SiNRFMZ/JwgSRRQUbFIIFivMgJaChTdvca30EXyDyTzGVotdnsB2JmArWMRm2WCEZRFBUaIkg5izxc3V+Rc93T3nfN/5dz9hjoU26yh6KEiv313s1OVIHQhAIQJNQQxoKmjc7zbTAthXmD3NjDH21UI7NopEPuYIQdBYApupY5YewLwWPRE0jCsmhsBm6pzVREdcTxLYTBvzqrhWNfU7qLMKOLRj4wBirk8vUIicr9pdARzYTF9ao+QxvNv6c3I5BDGDo6uzf+bml9JIymMUwMK0vfx3lfuD4W62Nt4CmGy+HL8vvd36+Fxwv9tMhWn7x8/9vby/db5zKEzb5TvPwI3CPKPth6vFp+Zw9fdGD+C19UwZCJouCMTlRawM1vdWBuuADlvnO4BbpCdwl4AF9yACOr6L/A9zwPK5xHzMH9hJ8tU98xbYSRLYSVJyZvodQWizTv5HfmxbIFaIKqw5oEKU37oUE/IK+hSLl2dZlhU9l0n8NerU9h8RU8RHMv9yEwAAAABJRU5ErkJggg==')
          no-repeat left center;
      }
      .jr-icon {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGWSURBVEiJ7VU7coMwEH1iMpPxOBlXTuXhAnAAOuQ7pNBtMLfxLSx39PEBMowru3LhEBo2hSRbCAmS1N4KrXbfPu0P4CETwsYuU9FwAiuUIdsfts+bMf2fAySipevqguvqgrcqBgNKAuUA46esBgCt79aH7Uz6MJ7G2QOf7x8AgHNWY1nFhfk2Mj8u8HJ8DZKMQheG0bKKb7pzVg/A58cFgIiHcEZe0G4IKgUA8KVTZYCXVazBx8VbAw1eMKA0OgKKU1ZbrEkyUAlE3Nj6iu0NkIiWXIdUtBsViHIGKu2i3gmFi91jn4iWXF0qGh46G1KGhC2DGqg2hMOik4Rol4pmbaXEsSFJQD4ZAGDczn0fINoBgEpfPxUMbE9A4XoF2rRz2EW8H4hyXzp84nkBSb0GrCCdZIhAoBvbIQnl62qCg+aY8SkLVRe2n4RKRcNDHaG6x69XPv3OAjwvOGxnUi01FEOwYVrsoZycAT+rcDET8b2bspn4Hyh26kRStSLpXmdcA3hXxK8C2IGA2xBqRyqB+9Z9yL/lB/JS34BOmvRmAAAAAElFTkSuQmCC')
          no-repeat left center;
      }
      a {
        display: inline-block;
        width: 160px;
        height: 48px;
        border-radius: 4px;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        color: rgba(26, 26, 26, 1);
        color: rgba(26, 26, 26, 1);
        &:hover {
          color: rgba(43, 88, 249, 1);
          background: rgba(43, 88, 249, 0.06);
        }
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
  /* border-color: ${props =>
    props.fontStyle === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(102,102,102,1)'} transparent
    transparent transparent; */
  border-color: black transparent transparent transparent;
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
  return shouldBeLink ? <ByLink href={href}>{children}</ByLink> : <div>{children}</div>;
};

class Nav extends React.Component<
  {
    headPlaceholder: string | boolean;
    headFontStyle: 'dark' | 'light';
    onBtnClick: () => void;
    initialOpacity?: boolean;
    hostType?: HOST_ENUM;
  } & WithRouterProps
  > {
  state = {
    expandVisible: '',
    opacity: true,
    expandLeft: null,
    isOpenOrigin: false,
  };

  constructor(p) {
    super(p);
    this.state = {
      expandVisible: '',
      opacity: typeof this.props.initialOpacity === 'boolean' ? this.props.initialOpacity : true,
      expandLeft: null,
      isOpenOrigin: false,
    };
  }

  handleHeaderOpacity = () => {
    console.log('触发wheel事件');
    this.setState({
      // 大于-10说明 body没有上移，可视区域是页面最顶部
      opacity: document.body.getBoundingClientRect().top > -10 && this.props.initialOpacity !== false,
    });
  };
  throttledHandleHeaderOpacity = throttle(this.handleHeaderOpacity, 5000, { trailing: true });

  componentDidMount() {
    document.addEventListener('wheel', this.handleHeaderOpacity);
    const isOpenOrigin = location.origin.indexOf('open.byai.com') > 0;
    this.setState({
      isOpenOrigin,
    });
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
    const {
      headPlaceholder,
      onBtnClick,
      router: { route },
      isRetail,
      hostType = HOST_ENUM.HOST,
    } = this.props;
    let { headFontStyle } = this.props;
    const { opacity, expandVisible, expandLeft, isOpenOrigin } = this.state;
    // opacity表示滚动不超过10px时 导航栏透明
    headFontStyle = !opacity ? 'dark' : headFontStyle; // 滚动超过10px 白底黑字
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
          <Placeholder bgColor={typeof headPlaceholder === 'string' ? headPlaceholder : '#FFFFFF'} />
        )}
        <HeaderWrapper fontStyle={headFontStyle} needOpacity={opacity} onMouseLeave={this.hideNavBar}>
          <Container className="content-wrapper">
            <NavRow>
              <NavCol lg={3}>
                <Link href="/">
                  <div className="logo" style={{ width: '100%' }}>
                    {/* <img src={headFontStyle === 'light' ? WHITE_LOGO : LOGO} /> */}
                    <img alt="logo" className="byai-logo" src={LOGO} />
                    {/* <img style={{
                      width: '160px',
                      marginTop: '3px',
                      marginLeft: '10px'
                    }} src={headFontStyle === 'dark' ? ENTERPRISE_WECHET_WHITE_LOGO : ENTERPRISE_WECHET_LOGO} /> */}
                  </div>
                </Link>
              </NavCol>
              <NavCol className="nav-list" lg={15}>
                {NAV_CONFIG.map(item => (
                  <div
                    className={classNames('nav-item', {
                      active: item.path === '/' ? route === item.path : route.includes(item.path),
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
                        {item.path.includes('solutions') ? (
                          <div className="solve-scheme-content">
                            {item.expand.map(menuItem => (
                              <div className="solve-scheme-item">
                                <div className={menuItem.type}>{menuItem.title}</div>
                                {menuItem.list.map(menuItems => (
                                  <a href={menuItems.path}>{menuItems.title}</a>
                                ))}
                              </div>
                            ))}
                          </div>
                        ) : (
                            <div className="small-dropdown-content">
                              {item.expand.map(menuItem => (
                                <a
                                  href={isOpenOrigin ? `https://www.byai.com${menuItem.path}` : menuItem.path}
                                  key={menuItem.path}>
                                  <div className="link-btn-wrapper" onClick={() => this.handleOpenNewPage}>
                                    <div className="link-btn-icon">
                                      <img src={menuItem.icon} />
                                    </div>
                                    <div>
                                      <div className="link-btn-info-title">{menuItem.title}</div>
                                      {menuItem.desc && <div className="link-btn-info-desc">{menuItem.desc}</div>}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          )}
                      </SmallDropdownWrapper>
                    )}
                  </div>
                ))}
              </NavCol>
              <NavCol lg={5} className="btn-wrapper">
                <a href="https://crm.byai.com/login" target="_blank" rel="noreferrer">
                  <LoginBtn fontStyle={headFontStyle}>登录</LoginBtn>
                </a>
                <ExpBtn fontStyle={headFontStyle} onClick={onBtnClick}>
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
                        // 改用a 标签请求服务端 rewrite 到电商域名站点
                        <a
                          href={isOpenOrigin ? `https://www.byai.com${menuItem.path}` : menuItem.path}
                          key={menuItem.path}>
                          <div
                            className={!menuItem.path ? 'menu-item item-todo' : 'menu-item'}
                            onClick={() => this.handleOpenNewPage(menuItem.path)}>
                            <div className="desc">{menuItem.title}</div>
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
