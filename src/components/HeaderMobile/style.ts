import styled, { css } from 'styled-components';
// 导航栏头部分样式

export const NavBarToggler = styled.div < {
  whiteCase: boolean;
  hasBottom: boolean;
  fontStyle: 'dark' | 'light';
  menuIconColor?: string;
} > `
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  background: ${props => (props.whiteCase ? '#FFFFFF' : 'transparent')};
  border-bottom: ${props => (props.hasBottom ? '1px solid #eeeeee' : 'none')};
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  img {
    height: 60px;
    margin: 0;
  }
  .iconfont {
    padding: 10px 25px;
    font-size: 17px;
    color: ${props => (props.menuIconColor === 'white' ? 'white' : 'black')} !important;
  }
`;
// 导航栏主体
export const NavBar = styled.div < { collapse: boolean } > `
  height: ${props => (props.collapse ? 'calc(100vh - 64px)' : '0px')};
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  background: white;
  overflow-y: hidden;
  position: relative;

  .tree-list .tree-list {
    .tree-node-content {
      height: 48px;
      padding-left: 18px;
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      @media (max-width: 768px) {
        min-height: 48px;
        height: auto;
      }
    }
    .solution-two-item{
      width: 160px;
      margin-left:16px;
      float: left;
      overflow: hidden;
      .tree-node-content{
        padding-left: 0;
      }
      &:nth-child(1){
        margin-left:18px;
      }
    }
    .is-expand{
      background: transparent;
    }
    
  }
`;
interface INodeProps {
  nodeInfo?: any;
  nodeTrain: any[];
}
// 每个树节点的样式(共同点)
export const TreeNode = styled.div < INodeProps > `
  width: 100%;
  background: white;
  cursor: pointer;
  padding-left: 0 !important;
  .link-btn-wrapper {
    height: 64px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding-left: 8px;
    @media (max-width: 768px) {
      min-height: 48px;
      height:auto;
    }
  }
  .borderStyle{
    position: relative;
    display: inline-block;
    .link-btn-icon{
      display: none;
    }
    .tree-node-content{
      margin-left: 6px;
    }
    .tree-node-content{
      height: 56px !important;
      min-height: 56px !important;
    }
    &::before{
      content: '';
      width: 280px;
      height: 1px;
      bottom: 0;
      left: 0;
      position: absolute;
      background: #eee;
    }
  }
  .solution-item{
    .is-expand{
      background: none !important;
    }
    .tree-node-content{
      width: 280px;
    }
    .triangle-icon{
      display: none;
    }
    .link-btn-wrapper{
      width: 100%;
      height: 32px;
      line-height: 32px;
      padding: 0 0 0 8px;
      border-radius:0;
      border-bottom: 1px solid rgba(240, 240, 240, 1);
    }
    .link-btn-icon{
      display: none;
    }
    .link-btn-info-title{
      font-size: 12px;
      font-weight: 400;
      color: #5A5A5A;
      box-sizing: border-box;
      font-family: PingFangSC-Regular, PingFang SC;
    }
  }
  .link-btn-icon {
    width: 32px;
    height: 32px;
    border-radius: 5.33px;
    background: rgba(242, 245, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    > * {
      margin-bottom: 0;
      font-size: 18px;
      height: 18px;
    }
  }
  .link-btn-info-title {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 24px;
    margin-bottom: 4px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
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
  }
  .tree-node-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    line-height: 56px;
    height: 56px;
    padding-right: 16px;
    &.is-expand {
      color: #2b58f9;
      background: #F2F5FF;
    .tree-node-content  .link-btn-info-title {
        color: #2b58f9;
    }
    .triangle-icon {
      border-color: #2b58f9 transparent transparent transparent;
    }
    }
    .triangle-icon {
      opacity: ${props => (hideDropdownIcon(props.nodeTrain) ? 0 : 1)};
    }
  }
  ${props => styleSelect(props.nodeInfo.level as number, props.nodeTrain)}
`;
/** 不同层级的节点样式 */
const levelFirst = css < INodeProps > `
  background: white;
  .tree-node-content {
    padding-left: 18px;
    // border-bottom: 1px solid
    //   ${props => (props.nodeInfo.children && props.nodeInfo.isExpand ? '#FFFFFF' : 'rgba(0, 0, 0, 0.08)')};
  }
`;
const levelSecond = css < INodeProps > `
  background: white;
  padding-left: 24px;
`;
const levelSecondProduct = css < INodeProps > `
  padding-left: 27px;
  background: white;
  position: relative;
  .tree-node-content {
    padding-left: 24px;
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
const levelThirdProduct = css < INodeProps > `
  background: white;
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
  .tree-list{
    padding-top: 8px;
  }
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

export const LoginBtn = styled.a`
  width: 151px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #2b58f9;
  font-size: 16px;
  font-weight: 400;
  color: #2b58f9 !important;
  cursor: pointer;
  :active {
    color: #1742de;
    border: 1px solid #1742de;
  }
`;
export const RegisterBtn = styled.div`
  width: 151px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #2b58f9;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  :active {
    background-color: #1742de;
  }
`;
