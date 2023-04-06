import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
interface IProps {
  className?: string;
  children?: ReactNode;
}

const RawOldOpenCooperateWinDiv: FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="radius-background">
        <div className="desc">
          <div className="first-line">
            作为全球领先的人工智能企业，百应坚持
            <span>开放、合作、共赢</span>
            的生态合作，坚定执行公平、公开、透明的
          </div>
          原则，与合作伙伴开放合作，共同营造健康的生态环境，实现多赢共赢。
        </div>
      </div>
    </div>
  );
};
const PREFIX = 'https://cdn.byai.com/static/official-website/cooperation';
const TRADE22_IMG = `${PREFIX}/big-background.png`;
const TRADE23_IMG = `${PREFIX}/radius-background.png`;
const TRADE24_IMG = `${PREFIX}/quotation.png`;
export type IOldOpenCooperateWinDivProps = IProps;
const OldOpenCooperateWinDiv = styled(RawOldOpenCooperateWinDiv)<IOldOpenCooperateWinDivProps>`
  width: 100%;
  min-height: 500px;
  background-image: url(${TRADE22_IMG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  .radius-background {
    min-width: 1120px;
    min-height: 292px;
    border-radius: 24px;
    background: url(${TRADE23_IMG}) no-repeat center, url(${TRADE24_IMG}) no-repeat left 50px top -18px;
    background-color: #ffffff;
    box-shadow: 0px 15px 50px -3px rgba(3, 43, 183, 0.13);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .desc {
      text-align: center;
      font-size: 19px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.85);
      line-height: 35px;
      span {
        line-height: 50px;
        font-size: 37px;
        color: #2b58f9;
        margin: 0 15px;
      }
    }
  }
  @media (max-width: 768px) {
    .radius-background {
      min-width: 0px;
      width: 100%;
      padding: 93px 0px 68px;
      background: url(${TRADE23_IMG}) no-repeat right -361px top -8px, url(${TRADE24_IMG}) no-repeat left 12px top -18px;
      .desc {
        padding: 0px 70px;
        .first-line {
          display: inline;
        }
        span {
          display: block;
        }
      }
    }
  }
`;
export default OldOpenCooperateWinDiv;
