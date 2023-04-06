import React, { FC } from 'react';
import styled from 'styled-components';

const WrapperIntroduction = styled.div<{ iconImg: string }>`
  padding: 80px 120px 0;
  background: #ffffff;
  .introduction-card {
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 32px 32px 32px 184px;
    position: relative;

    .introduction-icon {
      position: absolute;
      top: 50%;
      left: 32px;
      transform: translateY(-50%);
      width: 120px;
      height: 120px;
      background: url(${props => props.iconImg}) no-repeat;
      background-size: contain;
    }

    .introduction-title {
      font-size: 32px;
      font-weight: 500;
      color: #2b2b2b;
      line-height: 48px;
      margin-bottom: 8px;
    }

    .introduction-desc {
      font-size: 16px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      line-height: 24px;
    }

    .introduction-tag {
      font-size: 12px;
      font-weight: 400;
      color: rgba(43, 43, 43, 0.85);
      line-height: 16px;
      border-radius: 1px;
      border: 1px solid rgba(43, 43, 43, 0.85);
      padding: 0 4px;
      margin-left: 8px;
    }
  }
`;
const Introduction: FC<{ iconImg: string; title: string; desc: string }> = ({ iconImg, title, desc }) => {
  return (
    <WrapperIntroduction iconImg={iconImg}>
      <div className="introduction-card">
        <div className="introduction-icon"></div>
        <div className="introduction-content">
          <div className="introduction-title">
            {title}
            <span className="introduction-tag">品牌简介</span>
          </div>
          <div className="introduction-desc">{desc}</div>
        </div>
      </div>
    </WrapperIntroduction>
  );
};

export default Introduction;
