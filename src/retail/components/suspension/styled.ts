import styled from 'styled-components';
import { media } from '../../../constants/style';

export const SuspensionWrapper = styled.div`
  z-index: 100;
  top: 0;
  width: 80px;
  right: 20px;
  height: 100vh;
  position: fixed;
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

  .card-button {
    position: absolute;
    text-align: center;
    top: calc(100vh - 192px);
    right: 0px;
    height: 40px;
    line-height: 40px;
    width: 140px;
    margin: 0 auto;
    background: #f66600;
    box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    // padding: 0 52px;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    &:hover {
      background: #f68100;
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
    background: #ffffff;
    border-radius: 46px;
    border: 2px solid #f66600;
    margin-bottom: 0;
  }
  .suspension-avatar {
    position: fixed;
    top: calc(100vh - 522px);
    right: 28px;
    width: 64px;
    height: 64px;
    margin-bottom: 0;
    animation: avatarScaling 3s ease-in-out infinite;
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
    background: rgba(246, 102, 0, 0.04);
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
    color: #f66600;
    line-height: 24px;
  }
  &:last-child .suspension-desc {
    color: #f66600;
    font-size: 14px;
  }
`;

export const CodeCard = styled.div<{ isMove?: boolean }>`
  position: absolute;
  z-index: 100;
  right: 94px;
  top: ${props => (props.isMove ? '34px' : '-56px')};
  width: 360px;
  background: #ffffff;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 24px;

  .hover-head-1 {
    line-height: 30px;
    text-align: center;
    color: #f66600;
    font-size: 22px;
    font-weight: 600;
  }
  .hover-head {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #f6f6f6;
    padding-bottom: 14px;
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
    background: #f66600;
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
    background: rgba(246, 102, 0, 0.03);
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
    color: rgba(246, 102, 0, 1);
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
    color: #f66600;
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
    background: #f66600;
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
      background: rgba(246, 102, 0, 0.03);
      &:first-child {
        margin: 8px 8px 0 0;
      }
    }
  }
`;

export const ContactCard = styled.div`
  position: absolute;
  bottom: -16px;
  right: 88px;
  width: 180px;
  text-align: center;
  cursor: pointer;

  .card-content {
    background: #ffffff;
    box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 4px solid #f66600;
    padding: 16px;
    margin-bottom: 16px;
  }

  .card-title {
    font-size: 16px;
    font-weight: 500;
    color: #f66600;
    line-height: 24px;
  }

  .card-desc {
    font-size: 14px;
    font-weight: 300;
    color: rgba(43, 43, 43, 0.65);
    line-height: 18px;
  }

  .card-tag {
    height: 2px;
    background: rgba(246, 246, 246, 1);
    margin-top: 8px;
  }

  .card-code {
    width: 132px;
    height: 132px;
    margin-top: 16px;
  }

  .card-close {
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    color: #f66600;
    line-height: 24px;
    right: 8px;
    &:hover {
      color: #f68100;
    }
  }
`;
