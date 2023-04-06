import React, { VFC } from 'react';
import styled from 'styled-components';
import { retailUrl } from '../../../lib/utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 120px 80px;
  background: #f8fafc;
  .title {
    height: 68px;
    font-size: 40px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2b2b2b;
    line-height: 68px;
  }
  .solution-btn {
    text-align: center;
    margin: 48px auto 0px;
    width: 224px;
    height: 48px;
    background: #f66600;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #ffffff;
    line-height: 48px;
    &:hover {
      color: #f66600;
      border: 1px solid #f66600;
      background: #ffffff;
      cursor: pointer;
    }
  }
  img {
    width: 1200px;
  }

  @media (max-width: 768px) {
    padding: 40px 0px;
    .title {
      height: 28px;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #2b2b2b;
      line-height: 28px;
    }
    button {
      width: 280px;
    }
  }
`;
/**
 * AI私域引流全链路赋能
 * @interface IFlowChartProps
 */
interface IFlowChartProps {
  title: string;
  buttonText?: string;
  content: React.ReactElement;
}

export const FlowChart: VFC<IFlowChartProps> = ({ title, content, buttonText = '获取私域引流方案 ››' }) => {
  return (
    <Wrapper>
      <div className="title">{title}</div>
      <div className="image">{content}</div>
      <div
        className="solution-btn"
        onClick={() => {
          window.open(retailUrl('/form?formType=1'));
        }}>
        {buttonText}
      </div>
    </Wrapper>
  );
};
