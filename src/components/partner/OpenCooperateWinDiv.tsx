import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
const PREFIX = 'https://cdn.byai.com/static/official-website/cooperation/open-cooperation-win';
const LEFT_QUOTE = `${PREFIX}/left-quote.png`;
const RIGHT_QUOTE = `${PREFIX}/right-quote.png`;
interface IProps {
  className?: string;
  children?: ReactNode;
}
const BlockBlue = styled.div`
  width: 34px;
  height: 6px;
  background: #2b77f9;
  margin-bottom: 28px;
  @media (max-width: 768px) {
    width: 20px;
    height: 4px;
    margin-bottom: 24px;
  }
`;

const Desc = styled.div`
  width: 968px;
  text-align: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 46px;
  @media (max-width: 768px) {
    width: 320px;
    font-size: 14px;
    line-height: 24px;
  }
`;

const FirstLine = styled.div`
  span {
    font-size: 24px;
    font-weight: 600;
    color: #385ff5;
    line-height: 46px;
    margin: 0px 18px;
  }
  @media (max-width: 768px) {
    display: inline;
    span {
      margin: 0px;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;

const RawOpenCooperateWinDiv: FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <BlockBlue />
      <Desc>
        <FirstLine>
          作为认知智能领域前列的准独角兽企业，百应坚持
          <span>开放、合作、共赢</span>
          的生态合作，坚定执行公平、公开、透明的原则，与合作伙伴开放合作，共同营造健康的生态环境，实现多赢共赢。
        </FirstLine>
      </Desc>
    </div>
  );
};

export type IOpenCooperateWinDivProps = IProps;
const OpenCooperateWinDiv = styled(RawOpenCooperateWinDiv)<IOpenCooperateWinDivProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 103px 0px 103px;
  background: url(${LEFT_QUOTE}) 177px 141px/32px 24px, url(${RIGHT_QUOTE}) right 177px top 141px/32px 24px;
  background-color: #ffffff;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background: #f5f7fa !important;
    padding: 40px 24px;
  }
`;
export default OpenCooperateWinDiv;
