import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type IVPaneProps = {
  infoList: Array<[string, string, ReactNode]> | Array<[string, string]>;
  contentWidth?: string;
  contentML?: string;
};

const Wrapper = styled.div<{ type: 'large' | 'normal' }>`
  display: flex;
  ${props =>
    props.type === 'large'
      ? css`
          display: grid;
          grid-template-columns: 168px 232px;
        `
      : 'display: flex;'}
`;
const Top = styled.div`
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
`;
const Bottom = styled.div`
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
`;
const Content = styled.div<{ width?: string; contentML?: string }>`
  position: relative;
  color: rgba(255, 255, 255, 0.8);
  line-height: 26px;
  width: ${props => (props.width ? props.width : `130px`)};
  & + & {
    margin-left: ${props => (props.contentML ? props.contentML : `15px`)};
  }
  &:not(:last-child)::after {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-1px, -50%);
    content: '';
    height: calc(100% - 8px);
    width: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const LargeContent = styled.div`
  &:nth-child(-n + 2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 11px;
  }
  &:nth-child(n + 3) {
    padding-top: 11px;
  }
  &:nth-child(2n) {
    margin-left: 64px;
  }
`;

const VPane: FC<IVPaneProps> = ({ infoList, contentWidth, contentML: contentML }) => {
  const type = infoList.length === 4 ? 'large' : 'normal';
  return (
    <Wrapper type={type} className="">
      {infoList.map(info => {
        let [top, bottom, extra] = info;
        return type === 'large' ? (
          <LargeContent>
            <Top>{top}</Top>
            <Bottom>{bottom}</Bottom>
            {extra && extra}
          </LargeContent>
        ) : (
          <Content width={contentWidth} contentML={contentML}>
            <Top>{top}</Top>
            <Bottom>{bottom}</Bottom>
            {extra && extra}
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default VPane;
