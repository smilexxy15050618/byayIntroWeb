import styled from 'styled-components';
import { media } from '../../constants/style';

export const SuspensionWrapper = styled.div`
  z-index: 100;
  top: 0;
  width: 80px;
  right: 20px;
  height: 100vh;
  position: fixed;
  background:url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/我是小应.svg') no-repeat -9999px -9999px;
  ${media.phone`
      display: none;
    `}
  .__react_component_tooltip {
    padding: 0;
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
    background: #fff;
    opacity: 1 !important;
  }
  .qr-code {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 30px;
    img {
      width: 186px;
      height: 186px;
      margin: 0;
    }
    span {
      text-align: center;
      font-size: 16px;
      line-height: 22px;
    }
  }
  .qimo-toggler {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: -109px;
    left: 0;
    border-radius: 40px;
    box-shadow: 0px 14px 22px 0px rgba(3, 43, 183, 0.32);
    .suspension-icon {
      background: #2b58f9;
      width: 100%;
      height: 100%;
      > .byicon {
        background: #2b58f9;
        color: #fff;
        font-size: 50px;
      }
    }
    :hover .suspension-icon {
      background: #1742de !important;
      color: #fff !important;
      > .byicon.byicon-svg-conversation {
        background: #1742de !important;
        color: #fff !important;
      }
    }
  }
`;

export const SuspensionAvatar = styled.div`
  width: 80px;
  height: 80px;
  position: fixed;
  top: calc(100vh - 530px);
  cursor: pointer;
  .suspension-avatar-frame {
    position: fixed;
    top: calc(100vh - 530px);
    width: 80px;
    height: 80px;
    margin-bottom: 0;
  }
  .suspension-avatar {
    position: fixed;
    top: calc(100vh - 522px);
    right: 28px;
    width: 64px;
    margin-bottom: 0;
    /* height: 64px; 
    animation: avatarScaling 3s ease-in-out infinite;*/
    @keyframes avatarScaling {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.25);
      }
      50% {
        transform: scale(1);
      }
      75% {
        transform: scale(1.25);
      }
    }
  }
`;
export const SuspensionList = styled.div`
  position: fixed;
  top: calc(100vh - 440px);
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  list-style: none;
  box-shadow: 0px 14px 22px 0px rgba(3, 43, 183, 0.08);
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 80px;
  background: #fff;
  border-radius: 8px;
  .down-triangle {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(100% - 11px));
    color: white;
  }
`;

export const SuspensionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 100%;
  padding: 16px 0 8px 0;
  :hover {
    background: rgba(43, 88, 249, 0.03);
  }
  .suspension-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    > .byicon {
      display: flex;
      color: #000000a6;
    }
  }
  &:first-child {
    .suspension-icon {
      border-top: none;
    }
  }
  .suspension-desc {
    font-size: 12px;
    color: #2b58f9;
    line-height: 24px;
  }
  &:last-child .suspension-desc {
    color: #00c8bd;
    font-size: 14px;
  }
`;

export const CodeCard = styled.div<{ isMove?: boolean }>`
  position: absolute;
  z-index: 100;
  right: 94px;
  top: ${props => (props.isMove ? '34px' : '-56px')};
  width: 360px;
  height: 480px;
  background: #ffffff;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 24px;
  .hover-head {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #f6f6f6;
    padding-bottom: 24px;
    img {
      width: 60px;
      height: 60px;
      margin-bottom: 0;
    }
    .hover-head-title {
      margin-left: 16px;
      font-size: 16px;
      font-weight: 500;
      color: #000000;
      height: 24px;
      line-height: 24px;
    }
    .hover-head-desc {
      margin-left: 16px;
      font-size: 14px;
      font-weight: 400;
      color: #6f6f6f;
      height: 24px;
      line-height: 24px;
    }
  }
  .hover-content {
    img {
      width: 204px;
      height: 204px;
      margin: 24px 56px;
    }
  }
  .hover-content-tips {
    width: 274px;
    height: 40px;
    background: #2b58f9;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hover-footer {
    margin-top: 24px;
    span {
      margin-left: 16px;
      font-size: 22px;
      font-weight: 500;
      color: #000000;
      height: 24px;
      line-height: 24px;
    }
  }
`;

export const PhoneCard = styled.div<{ isMove?: boolean }>`
  position: absolute;
  right: 94px;
  ${props => (props.isMove ? 'bottom: -8px' : 'top: 0')};
  width: 360px;
  background: #ffffff;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  .hover-head {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background: rgba(43, 88, 249, 0.03);
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    line-height: 24px;
  }
  .hover-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88px;
    font-size: 40px;
    font-weight: 600;
    color: #2b58f9;
  }
`;

export const FreeCard = styled.div`
  position: absolute;
  right: 94px;
  bottom: 0;
  width: 360px;
  height: 570px;
  background: #ffffff;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 32px 24px;
  .hover-head {
    height: 64px;
    line-height: 30px;
    text-align: center;
    color: #2b58f9;
    font-size: 22px;
    font-weight: 600;
  }
  .hover-content {
    img {
      width: 204px;
      height: 204px;
      margin: 24px 56px;
    }
  }
  .hover-content-tips {
    width: 216px;
    height: 40px;
    background: #2b58f9;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hover-divider {
    display: flex;
    align-items: center;
    margin-top: 24px;
    span {
      margin-right: 7px;
      font-size: 12px;
      font-weight: 400;
      color: #6f6f6f;
      height: 24px;
      line-height: 21px;
    }
    .divider {
      width: 235px;
      height: 1px;
      border: 1px solid #d8d8d8;
    }
  }
  .hover-footer {
    font-size: 16px;
    line-height: 17px;
    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 152px;
      height: 43px;
      background: rgba(43, 88, 249, 0.03);
      &:first-child {
        margin: 8px 8px 0 0;
      }
    }
  }
`;
