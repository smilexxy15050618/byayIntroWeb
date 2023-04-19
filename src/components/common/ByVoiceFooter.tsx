import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import ByNormalBtn from './ByNormalBtn';
interface IProps {
  className?: string;
  children?: ReactNode;
  title: string;
  desc?: string;
  btnText: string;
  onClick: () => void;
}

const RawByVoiceFooter: FC<IProps> = ({ className, title, desc, onClick, btnText }) => {
  return (
    <div className={className}>
      <div style={{letterSpacing: '3px'}} className="title">立即体验AI时代的新一代用户运营平台</div>
      <div style={{letterSpacing: '3px'}}  className="desc">用AI构建你和用户的“亲密关系”，共建存量时代的增长引擎</div>
      <ByNormalBtn
        onClick={() => onClick()}
        width="200px"
        height="50px"
        color="rgba(43, 43, 43, 1)"
        bigStyle={`
          font-size: 20px;
          font-weight: 500;
        `}
        smallStyle={`
          width: 104px;
          height: 38px;
          font-size: 16px;
          font-weight: 500;
        `}
        borderRadius={4}
        background="#FFFFFF">
        {btnText}
      </ByNormalBtn>
    </div>
  );
};

export interface IByVoiceFooterProps extends IProps {
  background?: string;
  descMargin?: string;
  padding?: string;
}
/**
 * @param title: 大标题
 * @param desc?: 小标题
 * @param btnText?: 按钮文字
 * @param background?: 背景颜色 string
 * @param onClick?: 点击回调
 * @param descMargin?: 小标题的margin 16px 0px 24px
 * @param padding?: 内边距 48px 20px 40px;
 */
const ByVoiceFooter = styled(RawByVoiceFooter)<IByVoiceFooterProps>`
  padding: 79px 20px 78px;
  background: ${props => props.background}, #2b58f9;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 40px;
    font-weight: 500;
    color: #ffffff;
    line-height: 48px;
    letter-spacing: 2.5px;
    text-align: center;
  }
  .desc {
    margin: 16px 0px 24px;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: 1px;
    line-height: 26px;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding: 32px 28px;
    .title {
      font-size: 20px;
      color: #ffffff;
      line-height: 32px;
      letter-spacing: 1px;
    }
    .desc {
      font-size: 14px;
      line-height: 22px;
      margin: 12px 0px 16px;
      color: #ffffff;
    }
  }
`;
export default ByVoiceFooter;
