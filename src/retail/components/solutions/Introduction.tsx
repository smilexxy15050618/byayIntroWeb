import React, { VFC } from 'react';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../../lib/utils';

const Wrapper = styled.div`
  display: flex;
  background: #f9fbfc;
  justify-content: center;
  padding-top: 60px;
  .desc-text {
    width: 643px;
    margin-top: 95px;
    margin-left: 176px;
    font-family: PingFangSC-Light, PingFang SC;
    text-align: left;
    .title,
    .text {
      font-size: 64px;
      color: #2b2b2b;
      line-height: 80px;
      letter-spacing: 1px;
    }
    .description {
      margin-top: 16px;
      font-size: 24px;
      font-weight: 300;
      color: #2b2b2b;
      line-height: 40px;
      letter-spacing: 1px;
      color: rgba(43, 43, 43, 0.65);
    }
    button {
      margin-top: 48px;
      margin-bottom: 133px;
      width: 224px;
      height: 48px;
      background: #f66600;
      border: none;
      border-radius: 4px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #ffffff;
      line-height: 28px;
    }
  }
  .desc-image {
    img {
      height: 540px;
      transform: scale(0.9) translate(-60px, 30px);
    }
  }
  @media (max-width: 768px) {
    padding-top: ${calWidthAndHeight(64)};
    flex-direction: column;
    .desc-text {
      margin: ${calWidthAndHeight(32)} auto 0px;
      width: 100%;
      text-align: center;
      .desc-banner-text {
        display: flex;
        flex-direction: column;
        .title,
        .text {
          font-size: ${calWidthAndHeight(36)};
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #2b2b2b;
          line-height: ${calWidthAndHeight(48)};
        }
      }
      button {
        margin: ${calWidthAndHeight(20)} auto 0px;
        width: ${calWidthAndHeight(280)};
        font-size: ${calWidthAndHeight(20)};
        line-height: ${calWidthAndHeight(28)};
      }
      .description {
        width: ${calWidthAndHeight(288)};
        margin: ${calWidthAndHeight(8)} auto 0px;
        font-size: ${calWidthAndHeight(14)};
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.65);
        line-height: ${calWidthAndHeight(24)};
        letter-spacing: 1px;
      }
    }
    .desc-image {
      img {
        margin: ${calWidthAndHeight(10)} ${calWidthAndHeight(28)} 0px;
        height: 290px;
        transform: scale(1) translate(0px, 0px);
      }
    }
  }
`;
/**
 * 解决方案介绍
 * @interface IIntroductionProps
 */
interface IIntroductionProps {
  title: string;
  subTitle?: string;
  description: string | React.ReactElement;
  buttonText?: string;
  imageUrl?: string;
}

export const Introduction: VFC<IIntroductionProps> = ({
  title,
  subTitle = '数智化解决方案',
  description,
  buttonText = '和我们的顾问聊聊 ››',
  imageUrl,
}) => {
  return (
    <Wrapper>
      <div className="desc-text">
        <div className="desc-banner-text">
          <div className="title">{title}</div>
          <div className="text">{subTitle}</div>
        </div>
        <div className="description">{description}</div>
        <button
          onClick={() => {
            window.open(retailUrl('/form?formType=1'));
          }}>
          {buttonText}
        </button>
      </div>
      <div className="desc-image">
        <img src={imageUrl} alt="描述图片" />
      </div>
    </Wrapper>
  );
};
