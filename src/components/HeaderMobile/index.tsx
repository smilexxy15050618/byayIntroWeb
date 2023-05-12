import classNames from 'classnames';
import Link from 'next/link';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { NAV_CONFIG } from '../../constants/page-modify';
import { media } from '../../constants/style';
import { useScroll } from '../../lib/hooks-utils';
import ByTree from '../common/ByTree';
import TriangleIcon from '../common/TriangleIcon';
import { LOGO, WHITE_LOGO } from '../Header-2021';
import { FormType } from '../TryForm';
import { LoginBtn, LoginRegister, NavBar, NavBarToggler, RegisterBtn, ScrollWrap, TreeNode } from './style';

const NODE_PROPS_MAP = { label: ['name', 'title'], children: 'expand', id: '' };

const Placeholder = styled.div < { bgColor?: string } > `
  width: 100%;
  height: 64px;
  background: ${props => props.bgColor || 'unset'};
`;
interface IProps {
  className?: string;
  children?: ReactNode;
  setForm: (visible: boolean, type?: FormType) => void;
  headPlaceholder?: string | boolean;
  headFontStyle: 'dark' | 'light';
  initialOpacity?: boolean;
}

const RawHeaderMobileNew: FC<IProps> = ({ initialOpacity, className, setForm, headPlaceholder, headFontStyle }) => {
  const [collapse, setCollapse] = useState(false);
  const bodyTop = useScroll();
  // const { top: bodyTop } = useBodyOffset(17);
  // 底色均由placeholder提供
  // 滚动超过10px | 展开时 header白底黑字
  const whiteCase = bodyTop > 10 || collapse;
  // typeof this.props.initialOpacity === 'boolean' ? this.props.initialOpacity : true
  // 前景色, 如果背景白色，那么前景就一定是黑色
  headFontStyle = whiteCase ? 'dark' : headFontStyle;
  // 滚动距离产生bottm，展开时去掉bottom
  const hasBottom = bodyTop > 10 && !collapse;
  const [isOpenOrigin, setIsOpenOrigin] = useState<boolean>(false);

  useEffect(() => {
    const isOpenOrigin = location.origin.indexOf('open.byai.com') > 0;
    setIsOpenOrigin(isOpenOrigin);
  }, []);
  const displayColor = whiteCase ? 'black' : initialOpacity ? 'black' : 'white';
  return (
    <>
    {
      headPlaceholder !== false && (
        <Placeholder bgColor={typeof headPlaceholder === 'string' ? headPlaceholder : '#FFFFFF'} />
      )
    }
    < div className= { className } >
      {/* 导航栏显、隐藏切换Header */ }
      < NavBarToggler
  whiteCase = { whiteCase }
  fontStyle = { headFontStyle }
  hasBottom = { hasBottom }
  menuIconColor = { displayColor } >
    <Link href="/">
      <a>
        <img alt="logo" className="byai-logo" src={displayColor === 'black' ? LOGO : WHITE_LOGO} />
      </a>
    </Link>
    <i
      onClick={() => setCollapse(!collapse)}
      className={`iconfont ${collapse ? 'iconyidongduanguanbi' : 'iconyidongduan-caidan'}`}
      style={{ fontSize: 24, color: 'black' }}
    />
        </NavBarToggler >
  {/* 导航栏 */ }
  < NavBar collapse= { collapse } >
    <ScrollWrap>
      <ByTree nodePropsMap={NODE_PROPS_MAP} data={NAV_CONFIG} repelExpandLevel={[1]}>
        {/* 
                children由用户定义返回
                nodeInfo包含 label、level、isExpand 等属性
                riggerExpand用于触发展开, 已对叶子节点不触发做处理, 这里只需在click事件调用即可
                nodeTrain 是根节点到该节点构成的对象数组 
              */}
        {(nodeInfo, toggleExpand, nodeTrain) => (
          <TreeNode onClick={toggleExpand} nodeInfo={nodeInfo} nodeTrain={nodeTrain}>
            <a
              onClick={() => {
                if (!nodeInfo.children && nodeInfo.path) {
                  window.location.href = isOpenOrigin ? `https://www.byai.com${nodeInfo.path}` : nodeInfo.path;
                }
              }}
              className={nodeInfo.title == '智能用户运营平台（AICOS）' ? 'borderStyle' : ''}
            >
              <div className={classNames('tree-node-content', { ['is-expand']: nodeInfo.isExpand })}>
                {nodeInfo.level <= 1 ? (
                  nodeInfo.label
                ) : (
                    <div className="link-btn-wrapper">
                      <div className="link-btn-icon">
                        <img src={nodeInfo.icon} />
                      </div>
                      <div>
                        <div className="link-btn-info-title">{nodeInfo.title}</div>
                        {nodeInfo.desc && <div className="link-btn-info-desc">{nodeInfo.desc}</div>}
                      </div>
                    </div>
                  )}
                <TriangleIcon className="triangle-icon" collapse={nodeInfo.isExpand}></TriangleIcon>
              </div>
            </a>
          </TreeNode>
        )}
      </ByTree>
    </ScrollWrap>
{/* 登录注册 */ }
<LoginRegister>
  <LoginBtn href="https://crm.byai.com/login" target="_blank">
    登录
            </LoginBtn>
  <RegisterBtn onClick={() => setForm(true, FormType.CUSTOMER)}>立即体验</RegisterBtn>
</LoginRegister>
        </NavBar >
      </div >
    </>
  );
};

export type IHeaderMobileNewProps = IProps;
const HeaderMobileNew = styled(RawHeaderMobileNew) < IHeaderMobileNewProps > `
  /* ${media.desktop`display: block;`}
  ${media.tablet`display: block;`}
  ${media.phone`display: block;`} */
  @media (min-width: ${992 / 16}em) {
    display: none;
  }
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100vw;
`;
export default HeaderMobileNew;
