import React, { VFC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 100px 120px 80px;
  background: #fafbfd;
  .title {
    height: 68px;
    font-size: 40px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2b2b2b;
    line-height: 68px;
    margin-bottom: 48px;
    text-align: center;
  }
  .photos {
    display: grid;
    justify-content: center;
    grid-template-columns: ${props => props.theme.gridTemplateColumns};
    grid-gap: ${props => props.theme.gridGap};
    grid-template-rows: 300px;
    .photo-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      width: ${props => props.theme.gridTemplateColumns};
      height: 300px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      background-repeat: round;
      div {
        font-size: 28px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 40px;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 40px 16px;
    .title {
      margin-bottom: 32px;
      font-size: 20px;
      font-weight: 500;
      height: 28px;
      line-height: 28px;
    }
    .photos {
      display: flex;
      grid-gap: 16px;
      flex-direction: column;
      .photo-item {
        border-radius: 8px;
        width: 100%;
        height: 148px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        div {
          height: 24px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #fafbfd;
          line-height: 24px;
        }
      }
    }
  }
`;
Wrapper.defaultProps = {
  theme: {
    gridTemplateColumns: 'repeat(2, 580px)',
    gridGap: '40px',
  },
};
/**
 * 底部图片介绍
 * @interface IPhotosProps
 */
interface IPhotosProps {
  title: string;
  photos: {
    photoUrl: string;
    descriptions: string[];
  }[];
}

export const Photos: VFC<IPhotosProps> = ({ title, photos }) => {
  return (
    <Wrapper>
      <div className="title">{title}</div>
      <div className="photos">
        {photos.map(photo => (
          <div className="photo-item" style={{ backgroundImage: `url(${photo.photoUrl})` }}>
            {/* <img src={feature.featureIcon} alt={feature.featureName} /> */}
            {photo.descriptions.map(sentence => (
              <div>{sentence}</div>
            ))}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
