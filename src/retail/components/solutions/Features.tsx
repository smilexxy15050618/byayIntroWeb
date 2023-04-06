import React, { VFC } from 'react';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../../lib/utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${calWidthAndHeight(100)} ${calWidthAndHeight(120)} ${calWidthAndHeight(80)};
  background: #ffffff;
  .title {
    height: ${calWidthAndHeight(68)};
    font-size: ${calWidthAndHeight(40)};
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(68)};
    margin-bottom: ${calWidthAndHeight(48)};
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    .feature-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: ${calWidthAndHeight(380)};
      border-radius: ${calWidthAndHeight(4)};
      overflow: hidden;
      img {
        margin-top: ${calWidthAndHeight(32)};
        margin-bottom: 0px;
        width: ${calWidthAndHeight(96)};
        height: ${calWidthAndHeight(96)};
      }

      .name {
        margin-top: ${calWidthAndHeight(16)};
        height: ${calWidthAndHeight(32)};
        font-size: ${calWidthAndHeight(20)};
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #2b2b2b;
        line-height: ${calWidthAndHeight(32)};
      }

      .description {
        margin: ${calWidthAndHeight(8)} auto ${calWidthAndHeight(32)};
        font-size: ${calWidthAndHeight(18)};
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(43, 43, 43, 0.85);
        line-height: ${calWidthAndHeight(24)};
        max-width: ${calWidthAndHeight(242)};
        .highlight {
          color: #f66600;
        }
      }
      &:hover {
        background: #ffffff;
        box-shadow: 0px ${calWidthAndHeight(4)} ${calWidthAndHeight(16)} 0px rgba(128, 131, 141, 0.1);
        &:after {
          position: absolute;
          bottom: 0px;
          content: ' ';
          display: block;
          width: ${calWidthAndHeight(400)};
          height: ${calWidthAndHeight(4)};
          background: #f66600;
        }
      }
    }
  }

  .many-features .feature-item .description {
    font-size: ${calWidthAndHeight(16)};
  }
  .solution-btn {
    text-align: center;
    margin: ${calWidthAndHeight(48)} auto 0px;
    width: ${calWidthAndHeight(224)};
    height: ${calWidthAndHeight(48)};
    background: #f66600;
    border: none;
    border-radius: ${calWidthAndHeight(4)};
    font-size: ${calWidthAndHeight(16)};
    font-family: PingFangSC-Regular, PingFang SC;
    color: #ffffff;
    line-height: ${calWidthAndHeight(48)};
    &:hover {
      color: #f66600;
      border: 1px solid #f66600;
      background: #ffffff;
      cursor: pointer;
    }
  }

  @media (max-width: 786px) {
    padding: 40px 16px;
    .title {
      width: 200px;
      height: auto;
      text-align: center;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #2b2b2b;
      line-height: 28px;
      margin-bottom: 32px;
    }
    .features {
      .feature-item {
        flex-direction: row;
        width: 100%;
        background: #ffffff;
        border-radius: 8px;
        border: 1px solid rgba(43, 43, 43, 0.1);
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0px;
        }
        img {
          margin: 0px 12px;
          width: 60px;
          height: 60px;
        }
        .feature-text {
          height: auto;
          margin: 16px 0px;
          .name {
            margin: 0px;
            height: 24px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #2b2b2b;
            line-height: 24px;
          }
          .description {
            margin: 0px;
            font-size: 14px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: rgba(43, 43, 43, 0.85);
            line-height: 24px;
          }
        }
      }
    }
  }
`;
/**
 * AI私域引流全链路赋能
 * @interface IFeaturesProps
 */
interface IFeaturesProps {
  title: string;
  featureList: {
    featureIcon?: string;
    featureName: string;
    featureDescription: string;
    highlightString?: string;
  }[];
  buttonText?: string;
  extraContent?: React.ReactNode;
}
function generateHighlightString(string: string, highlightString: string) {
  const result = string.replace(highlightString, `<span class="highlight">${highlightString}</span>`);
  return { __html: result };
}
export const Features: VFC<IFeaturesProps> = ({
  title,
  featureList,
  extraContent,
  buttonText = '立即开启私域增长 ››',
}) => {
  return (
    <Wrapper>
      <div className="title">{title}</div>
      <div className={`features ${featureList.length > 3 ? 'many-features' : ''}`}>
        {featureList.map(feature => (
          <div className="feature-item">
            <img src={feature.featureIcon} alt={feature.featureName} />
            <div className="feature-text">
              <div className="name">{feature.featureName}</div>
              <div
                className="description"
                dangerouslySetInnerHTML={generateHighlightString(
                  feature.featureDescription,
                  feature.highlightString,
                )}></div>
            </div>
          </div>
        ))}
      </div>
      {extraContent}
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
