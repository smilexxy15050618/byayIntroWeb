import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;

  font-family: PingFangSC-Regular, PingFang SC;
  .title {
    padding: 40px 0 32px;
    font-size: 24px;
    font-weight: 500;
    color: #000000;
    line-height: 32px;
  }

  .tab-wrapper {
    position: sticky;
    top: 64px;
    background: #ffffff;
    z-index: 999;

    .tab-item {
      position: relative;
      height: 62px;
      line-height: 60px;
      font-size: 16px;
      font-weight: 600;
      color: #333333;
      letter-spacing: 1px;
      border-bottom: 2px solid transparent;
      z-index: 99;

      &.active {
        color: #2b58f9;
        border-bottom-color: #2b58f9;
      }
    }
  }

  .content-wrapper {
    margin-top: 20px;
    background: #2b58f9;
    padding: 40px 30px 60px;

    .video-wrapper,
    .image-wrapper {
      width: 100%;
      height: 196px;

      img {
        margin-bottom: 0;
      }
    }

    .video-wrapper {
      pointer-events: all;
      padding: 8px;
      display: flex;
      align-items: center;
      box-shadow: rgba(0, 6, 24, 0.15) 0px 0px 16px 0px;
      border-radius: 8px;
      background: url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/video-bg.jpg) center
        center / 110% 110% no-repeat;
      position: relative;

      .poster {
        position: absolute;
        top: 8px;
        left: 8px;
        right: 8px;
        bottom: 8px;
        z-index: 99;
        background: #262626;
        padding: 0 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: all 0.2s ease-in-out 0s;

        &.playing {
          z-index: -1;
          opacity: 0;
        }

        .poster-title {
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
          line-height: 24px;
          letter-spacing: 1px;
        }

        .poster-player {
          margin-top: 16px;
          height: 36px;
          background: #2b58f9;
          border-radius: 38px;
          padding: 0px 20px;
          display: flex;
          align-items: center;
          font-size: 15px;
          font-weight: 500;
          color: #ffffff;

          img {
            margin-bottom: 0;
            margin-right: 4px;
          }
        }
      }

      video {
        width: 100%;
        height: 100%;
      }
    }

    .custom-carousel-indicators {
      padding-top: 40px;
      display: flex;
      justify-content: center;
      gap: 16px;

      .indicators-item {
        position: relative;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        transition: all 0.2s ease-in 0s;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 8px;
          height: 8px;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          transition: all 0.2s ease-in 0s;
          background: rgba(255, 255, 255, 0.35);
        }

        &.active {
          background: rgba(255, 255, 255, 0.35);

          &::after {
            background: #ffffff;
          }
        }
      }
    }

    .text-wrapper {
      padding-left: 10px;
      white-space: pre-wrap;
      text-align: left;
    }

    .text-title {
      margin-top: 20px;
      font-size: 26px;
      font-weight: 500;
      color: #ffffff;
      line-height: 36px;
    }

    .text-desc {
      height: 166px;
      margin-top: 16px;
      font-size: 15px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
      line-height: 28px;
      &.large-text {
        font-size: 18px;
        line-height: 36px;
      }
    }

    .text-btn {
      display: inline-block;
      line-height: 44px;
      background: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      border-radius: 4px;
      padding: 0px 18px 0px 24px;
      font-family: PingFangSC-Medium, 'PingFang SC';
      font-weight: 500;
      font-size: 14px;

      &.hidden {
        visibility: hidden;
      }

      svg {
        padding-left: 8px;
        display: inline-block;
        position: relative;
        top: -1px;
        height: 12px;
      }
    }

    .desc-wrapper {
      display: flex;
      height: 166px;
      margin-top: 16px;
      flex-wrap: wrap;

      .desc-item {
        flex: 0 0 33.33%;
        position: relative;

        &:not(:last-child)::after {
          z-index: 99;
          content: '';
          position: absolute;
          top: 7px;
          right: 0;
          width: 1px;
          height: 42px;
          background: rgba(77, 114, 249, 1);
        }

        &:not(:first-child) {
          padding-left: 10px;
        }

        .desc-item-title,
        .desc-item-content {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          line-height: 26px;
        }

        .desc-item-content {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
        }

        .desc-item-content2 {
          font-size: 13px;
          font-weight: 400;
          color: #ffffff;
          line-height: 22px;
          font-family: PingFangSC-Regular, PingFang SC;
        }
      }

      .desc-item.desc-item-hor {
        flex: 0 0 50%;
        padding-bottom: 12px;
        margin-bottom: 12px;

        &:not(:last-child)::after {
          top: unset;
          bottom: 0;
          left: 0;
          width: calc(100% - 20px);
          height: 1px;
        }

        &:not(:first-child) {
          padding-left: 0;
        }

        &.no-border {
          &:not(:last-child)::after {
            display: none;
          }
        }
      }
    }
  }
`;
