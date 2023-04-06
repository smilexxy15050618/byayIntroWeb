import React from 'react';
import styled from 'styled-components';
import { TitleLayout } from './TitleLayout';
import { media } from '../../constants/style';

const UseScenesWrapper = styled.div`
  padding-bottom: 120px;
  ${media.phone`
    padding-bottom: 4vw;
  `}
  .use-scene-content {
    width: 1190px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    ${media.phone`
      width: 100vw;
      flex-wrap: wrap;
      justify-content: center;
    `}
    .use-scene-card {
      width: 560px;
      height: 592px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      ${media.phone`
        width: 74.67vw;
        height: 78.93vw;
        margin-bottom: 9.33vw;
      `}
      img {
        width: 100%;
        height: 356px;
        margin: 0;
        ${media.phone`
          height: 47.47vw;
        `}
      }
      & > div {
        padding: 24px 48px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        ${media.phone`
          padding: 3.2vw 6.4vw 0;
        `}
        h4 {
          margin: 0;
          margin-bottom: 10px;
          font-weight: 300;
          color: rgba(13, 25, 36, 1);
          line-height: 37px;
          ${media.phone`
            font-size: 3.47vw;
            margin-bottom: 1.33vw;
            line-height: 4.93vw;
          `}
        }
        p {
          font-size: 14px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 21px;
          margin: 0;
          ${media.phone`
            font-size: 1.87vw;
            line-height: 2.8vw;
          `}
        }
        .footer-tips {
          height: 60px;
          border-top: 1px solid #f5f6fb;
          line-height: 60px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(13, 25, 36, 1);
          ${media.phone`
            height: 8vw;
            line-height: 8vw;
            font-size: 1.87vw;
          `}
        }
      }
    }
  }
`;

interface UseScenesProps {
  dataList: {
    src: string;
    title: string;
    desc: string[];
    tips: string;
  }[];
}

export const UseScenes = (props: UseScenesProps) => {
  const { dataList } = props;

  return (
    <UseScenesWrapper>
      <TitleLayout title="使用场景">
        <div className="use-scene-content">
          {dataList.map(scene => (
            <div className="use-scene-card">
              <img src={scene.src} />
              <div>
                <div className="scene-desc">
                  <h4>{scene.title}</h4>
                  {scene.desc.map(ele => (
                    <p>{ele}</p>
                  ))}
                </div>
                <div className="footer-tips">{scene.tips}</div>
              </div>
            </div>
          ))}
        </div>
      </TitleLayout>
    </UseScenesWrapper>
  );
};
