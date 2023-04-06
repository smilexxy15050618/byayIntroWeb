import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

export const foodImg = 'https://cdn.byai.com/static/oss-script/c4333d5d1ded58738bcbbeaf61ecfc40.svg';
export const makeups = 'https://cdn.byai.com/static/oss-script/d4170c9fb96a92e26663f956697f68b6.svg';
export const pet = 'https://cdn.byai.com/static/oss-script/890792db51791ea4471e00044e2f251b.svg';

export const foodBgImg = '//cdn.byai.com/by-fe-cdn/static/pmp/61742a47-2c2d-4d41-a7bf-bff0f46baf69.png';
export const makeupsBg = '//cdn.byai.com/by-fe-cdn/static/pmp/eddf4e31-6b9b-4a96-9c1a-32e0283c21ce.png';
export const petBg = '//cdn.byai.com/by-fe-cdn/static/pmp/71ffd4b0-109b-4e1e-ad8a-107bd6b9ad73.png';
export const foodVideo = '//cdn.byai.com/by-fe-cdn/static/pmp/1b8bf953-e633-43a1-a79e-d5f4199e4209.mp4';
export const makeupsVideo = '//cdn.byai.com/by-fe-cdn/static/pmp/6881558e-52ce-4344-a13d-33d42ab07783.mp4';
export const petVideo = '//cdn.byai.com/by-fe-cdn/static/pmp/5c3e1187-2da9-423d-a0f6-a449b17eb932.mp4';
export const IndustryDemoContainer = styled.div`
  &::before {
    content: '';
    width: 740px;
    height: 104px;
    top: 1023px;
    right: 0;
    position: absolute;
    z-index: 3;
    background-image: url('https://cdn.byai.com/static/oss-script/8cc1bd1bf1e8799b287ed3aeeb0d30bd.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &::after {
    content: '';
    width: 320px;
    height: 182px;
    top: 1415px;
    right: 0;
    position: absolute;
    z-index: 2;
    background-image: url('https://cdn.byai.com/static/oss-script/f13500b2b0f15e51a2f2f96b34a02024.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    pointer-events: none;
  }
  height: 658px;
  width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
  }
  .sub-title {
    font-size: 18px;
    font-weight: 500;
    color: #2b58f9;
    line-height: 26px;
  }
  .title {
    margin-top: 8px;
    margin-bottom: 32px;
    font-size: 36px;
    font-weight: 600;
    color: #2b2a35;
    line-height: 48px;
    letter-spacing: 1px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  .list-group {
    cursor: pointer;
    width: 240px;
    margin-right: 24px;
    border: none;
    .list-group-item {
      filter: grayscale(100%);
      font-size: 20px;
      font-weight: 400;
      color: rgba(43, 42, 53, 0.85);
      line-height: 28px;
      height: 88px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        filter: grayscale(0);
        font-weight: 500;
        color: #2b2a35;
      }
    }
    .item-active {
      filter: grayscale(0) !important;
      font-weight: 500;
      color: #2b2a35;
      background: #f4f7ff;
      border-radius: 8px;
    }
    .title-img {
      width: 40px;
      height: 40px;
      margin-right: 12px;
    }
  }
`;
export const CarouselContainer = styled(Carousel)`
  height: 344px;
  width: 936px;
  .img-bg {
    border-radius: 8px;
  }
  .carousel-inner {
    overflow: visible;
    img {
      margin-bottom: 0;
    }
  }
  .caption-content {
    position: absolute;
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .left {
      margin-top: 48px;
      margin-left: 40px;
      margin-right: 26px;
      .font {
        font-size: 32px;
        font-weight: 600;
        color: #ffffff;
        line-height: 40px;
        .font-title {
          height: 40px;
        }
        .content-list {
          margin-top: 32px;
          & > div {
            font-size: 18px;
            font-weight: 400;
            color: #ffffff;
            line-height: 24px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            &::before {
              content: '.';
              width: 8px;
              height: 8px;
              display: inline-block;
              color: transparent;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.45);
              margin-right: 8px;
            }
          }
        }
      }
      .button {
        padding: 10px 22px;
        margin-top: 64px;
        font-size: 20px;
        font-weight: 400;
        color: #ffffff;
        line-height: 28px;
        width: 168px;
        height: 48px;
        border-radius: 4px;
        font-family: PingFangSC-Regular, PingFang SC;
        border: 1px solid #ffffff;
        display: block;
        text-decoration: none;
        &:hover {
          background: #ffffff;
          color: #2b58f9;
        }
      }
    }
    .right {
      video {
        border-radius: 4px;
      }
      .options {
        position: relative;
        top: 248px;
        left: 386px;
        display: flex;
      }
    }
  }
`;
export const VideoContainer = styled.video`
  height: 300px;
  width: 500px;
  background-color: black;
  position: absolute;
  top: -80px;
`;
export const preIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  .content {
    width: 6px;
    height: 8px;
    border-top: 4px solid transparent;
    border-right: 6px solid #ffffff;
    border-bottom: 4px solid transparent;
  }
`;
export const nextIcon = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  .content {
    width: 6px;
    height: 8px;
    border-top: 4px solid transparent;
    border-left: 6px solid #ffffff;
    border-bottom: 4px solid transparent;
  }
`;
