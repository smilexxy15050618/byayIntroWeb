import styled from 'styled-components';

export const foodImg = 'https://cdn.byai.com/static/oss-script/c4333d5d1ded58738bcbbeaf61ecfc40.svg';
export const makeups = 'https://cdn.byai.com/static/oss-script/d4170c9fb96a92e26663f956697f68b6.svg';

export const foodVideo = '//cdn.byai.com/by-fe-cdn/static/pmp/940f83d1-57a6-4420-b7f4-76e633ba3dc1.mp4';
export const makeupsVideo = '//cdn.byai.com/by-fe-cdn/static/pmp/7fc65031-88a5-4216-98fb-56ef2b484048.mp4';

export const IndustryDemoContainer = styled.div`
  height: 64.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .arrow {
    margin: 2.8rem 0;
    width: 1.6rem;
    height: 2.4rem;
    background-image: url('https://cdn.byai.com/static/oss-script/750c4ce0536f90f6610e1f25b3e4de31.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .sub-title {
    font-size: 1.4rem;
    font-weight: 400;
    color: #2b58f9;
    line-height: 2.2rem;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 2rem;
    font-weight: 500;
    color: #2b2a35;
    line-height: 2.8rem;
    margin-bottom: 2rem;
  }
  .button-group {
    width: 26.2rem;
    height: 4.8rem;
    padding: 0.3rem;
    border-radius: 2.4rem;
    border: 0.1rem solid rgba(43, 42, 53, 0.15);
    display: flex;
  }
  .active {
    filter: grayscale(0);
    background: #f4f7ff;
  }
  .video {
    height: 20.6rem;
    width: 34.3rem;
    margin: 2rem 0;
    video {
      background-color: black;
      height: 100%;
      width: 100%;
      border-radius: 0.8rem;
    }
  }
  .desc {
    .title {
      font-size: 2.6rem;
      font-weight: 500;
      color: #2b2a35;
      line-height: 3.8rem;
      letter-spacing: 0.1rem;
      margin-bottom: 1rem;
    }
    .sub-title {
      display: flex;
      justify-content: center;
      .desc {
        font-size: 1.4rem;
        font-weight: 400;
        color: rgba(43, 42, 53, 0.85);
        line-height: 2.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
        .round {
          width: 1.2rem;
          height: 1.2rem;
          margin: 0 0.8rem 0 1.6rem;
          padding: 0.3rem;
          border-radius: 50%;
          background: rgba(43, 88, 249, 0.1);
          .small-round {
            width: 0.6rem;
            height: 0.6rem;
            border-radius: 50%;
            background: rgba(43, 88, 249, 0.45);
          }
        }
      }
    }
  }
  .button {
    width: 14.8rem;
    height: 4.2rem;
    position: relative;
    z-index: 10;
    background: #2b58f9;
    padding: 0.8rem 2rem;
    box-shadow: 0 0.4rem 1.6rem 0 rgba(43, 88, 249, 0.15), 0 -0.1rem 0.4rem 0 rgba(255, 255, 255, 0.2);
    border-radius: 0.4rem;
    font-size: 1.8rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 2.6rem;
    margin-top: 4rem;
  }
`;
export const ButtonContainer = styled.div<{ url: string }>`
  width: 12.6rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 2rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: rgba(43, 42, 53, 0.85);
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  filter: grayscale(100%);
  .img {
    width: 2.6rem;
    height: 2.6rem;
    background-image: url(${props => props.url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 1.4rem;
    margin-right: 0.8rem;
  }
`;
