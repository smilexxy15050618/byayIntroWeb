import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import ByTree from '../../../components/common/ByTree';
import TriangleIcon from '../../../components/common/TriangleIcon';
import { FormType } from '../../../components/TryForm';
import { useScroll } from '../../../lib/hooks-utils';
import { retailUrl } from '../../../lib/utils';
import { PHONE_NAV_CONFIG } from '../../constants/page';
import { LOGO, WHITE_LOGO } from '../Header';
import * as SC from './style';

const NODE_PROPS_MAP = { label: ['name', 'title'], children: 'expand', id: '' };

interface IProps {
  className?: string;
  children?: ReactNode;
  setForm: (visible: boolean, type?: FormType) => void;
  headPlaceholder?: string | boolean;
  headFontStyle: 'dark' | 'light';
}

const RawHeaderMobileNew: FC<IProps> = ({ className, setForm, headPlaceholder, headFontStyle }) => {
  const [collapse, setCollapse] = useState(false);
  const bodyTop = useScroll();
  // const { top: bodyTop } = useBodyOffset(17);
  // 底色均由placeholder提供
  // 滚动超过10px | 展开时 header白底黑字
  const whiteCase = bodyTop > 10 || collapse;
  // 前景色, 如果背景白色，那么前景就一定是黑色
  headFontStyle = whiteCase ? 'dark' : headFontStyle;
  // 滚动距离产生bottm，展开时去掉bottom
  const hasBottom = bodyTop > 10 && !collapse;
  return (
    <>
      {headPlaceholder !== false && (
        <SC.Placeholder bgColor={typeof headPlaceholder === 'string' ? headPlaceholder : '#FFFFFF'} />
      )}
      <div className={className}>
        {/* 导航栏显、隐藏切换Header */}
        <SC.NavBarToggler whiteCase={whiteCase} fontStyle={headFontStyle} hasBottom={hasBottom}>
          <a href="https://www.byai.com">
            <img alt="logo" className="byai-logo" src={headFontStyle === 'light' ? WHITE_LOGO : LOGO} />
          </a>
          <i
            onClick={() => setCollapse(!collapse)}
            className={`iconfont ${collapse ? 'iconyidongduanguanbi' : 'iconyidongduan-caidan'}`}
            style={{ fontSize: 24 }}
          />
        </SC.NavBarToggler>
        {/* 导航栏 */}
        <SC.NavBar collapse={collapse}>
          <SC.ScrollWrap>
            <ByTree nodePropsMap={NODE_PROPS_MAP} data={PHONE_NAV_CONFIG} repelExpandLevel={[1]}>
              {/* 
                children由用户定义返回
                nodeInfo包含 label、level、isExpand 等属性
                riggerExpand用于触发展开, 已对叶子节点不触发做处理, 这里只需在click事件调用即可
                nodeTrain 是根节点到该节点构成的对象数组 
              */}
              {(nodeInfo, toggleExpand, nodeTrain) => (
                <SC.TreeNode onClick={toggleExpand} nodeInfo={nodeInfo} nodeTrain={nodeTrain}>
                  <a
                    onClick={() => {
                      if (nodeInfo.path) {
                        window.location.href = nodeInfo.path;
                      }
                    }}>
                    <div className="tree-node-content">
                      <div className="tree-node-text">
                        <span>{nodeInfo.label}</span>
                        {nodeInfo.showNewIcon && (
                          <span className="newIcon-wrapper">
                            <span className="new-icon"></span>
                          </span>
                        )}
                        {nodeInfo.showDoubleEleven && (
                          <span className="double-eleven-wrapper">
                            <span className="double-eleven-icon"></span>
                          </span>
                        )}
                      </div>
                      <TriangleIcon className="triangle-icon" collapse={nodeInfo.isExpand}></TriangleIcon>
                    </div>
                  </a>
                </SC.TreeNode>
              )}
            </ByTree>
          </SC.ScrollWrap>
          {/* 登录注册 */}
          <SC.LoginRegister>
            {/* TODO: */}
            <SC.LoginBtn onClick={() => window.open(retailUrl('/form?formType=1'))}>立即体验</SC.LoginBtn>
          </SC.LoginRegister>
        </SC.NavBar>
      </div>
    </>
  );
};

export type IHeaderMobileNewProps = IProps;
const HeaderMobileNew = styled(RawHeaderMobileNew)<IHeaderMobileNewProps>`
  @media (min-width: ${992 / 16}em) {
    display: none;
  }
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100vw;
`;
export default HeaderMobileNew;
