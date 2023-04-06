import styled, { css } from 'styled-components';
// 导航栏头部分样式

export const NavBarToggler = styled.div<{ whiteCase: boolean; hasBottom: boolean; fontStyle: 'dark' | 'light' }>`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  background: ${props => (props.whiteCase ? '#FFFFFF' : 'transparent')};
  border-bottom: ${props => (props.hasBottom ? '1px solid #eeeeee' : 'none')};
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  img {
    height: 45px;
    margin: 0;
  }
  .iconfont {
    padding: 10px 25px;
    font-size: 17px;
    color: ${props => (props.fontStyle === 'dark' ? 'black' : 'white')} !important;
  }
`;
// 导航栏主体
export const NavBar = styled.div<{ collapse: boolean }>`
  height: ${props => (props.collapse ? 'calc(100vh - 64px)' : '0px')};
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  background: white;
  overflow-y: hidden;
  position: relative;
`;
interface INodeProps {
  nodeInfo?: any;
  nodeTrain: any[];
}
// 每个树节点的样式(共同点)
export const TreeNode = styled.div<INodeProps>`
  width: 100%;
  background: #ffffff;
  cursor: pointer;
  .tree-node-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    color: #2b2b2b;
    line-height: 20px;
    height: 40px;
    padding-right: 27px;
    .tree-node-text {
      display: flex;
      padding-left: 12px;
    }
    .triangle-icon {
      opacity: ${props => (hideDropdownIcon(props.nodeTrain) ? 0 : 1)};
    }
    &:active {
      .tree-node-text {
        color: #f66600;
      }
    }
    .newIcon-wrapper {
      display: inline-flex;
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
      display: inline-flex;
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
  ${props => styleSelect(props.nodeInfo.level as number, props.nodeTrain)}
`;
/** 不同层级的节点样式 */
const levelFirst = css<INodeProps>`
  padding: 0 12px;
  background: #ffffff;
  .tree-node-content {
    border-bottom: 0.5px solid
      ${props => (props.nodeInfo.children && props.nodeInfo.isExpand ? '#FFFFFF' : 'rgba(232, 232, 232, 1)')};
  }
`;
const levelSecond = css<INodeProps>`
  background: rgba(246, 102, 0, 0.05);
  padding-left: 12px;
`;
const levelSecondProduct = css<INodeProps>`
  padding-left: 27px;
  background: #f1f2f6;
  position: relative;
  .tree-node-content {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
    line-height: 22px;
    height: 54px !important;
  }
  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 1px;
    width: 100%;
    margin-left: 24px;
    background: ${props => (props.nodeInfo.levelFirst ? 'transparent' : 'rgba(0, 0, 0, 0.08)')};
  }
`;
const levelThirdProduct = css<INodeProps>`
  background: #f1f2f6;
  padding-left: 24px;
`;

// 样式选择函数
const styleSelect = (level: number, nodeTrain: any[]) => {
  const labelTrain = nodeTrain.map(item => item.label);
  return level === 1
    ? levelFirst
    : level === 2
    ? labelTrain.includes('产品')
      ? levelSecondProduct
      : levelSecond
    : levelThirdProduct;
};

// 按钮显示函数
const hideDropdownIcon = (nodeTrain: any[]) => {
  const nodeInfo = nodeTrain[nodeTrain.length - 1];
  // 没有children的叶子节点和 产品下的子节点不需要Icon
  return !nodeInfo.children || (nodeTrain[0].label === '产品' && nodeTrain.length > 1);
};

// 内设滚动div因为NavBar已用overflow:hidden来避免内容外溢
export const ScrollWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100px; // 补充底部按钮高度
  overflow-y: auto;
`;

export const LoginRegister = styled.div`
  padding: 24px 0px;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > a:nth-child(1) {
    margin-right: 25px;
  }
  background: linear-gradient(180deg, #ffffff00, #ffffff 5%, #ffffff);
`;

export const LoginBtn = styled.div`
  line-height: 36px;
  text-align: center;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  width: 120px;
  height: 36px;
  background: #f66600;
  border-radius: 4px;
`;
export const Placeholder = styled.div<{ bgColor?: string }>`
  width: 100%;
  height: 64px;
  background: ${props => props.bgColor || 'unset'};
`;
