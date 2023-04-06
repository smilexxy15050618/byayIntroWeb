import styled from 'styled-components';

export const getOrdersAutomatically = ' https://cdn.byai.com/static/oss-script/ce9b5ce7a0525921f6b0f05647099f02.svg';
export const AIOutbound = 'https://cdn.byai.com/static/oss-script/29fc49410accf383d5537d1937e0e629.svg';
export const SMS = 'https://cdn.byai.com/static/oss-script/9b01ad09ec7231687c8022a5e40f264b.svg';
export const AutomaticallyAddMicro = 'https://cdn.byai.com/static/oss-script/234ad4e190c4ff200973f2f6495d1cc2.svg';
export const WeChatInteraction = 'https://cdn.byai.com/static/oss-script/f2bc1136dbbc91856ecf9f2f4aab0d69.svg';

export const getOrdersAutomaticallyImg = 'https://cdn.byai.com/static/oss-script/644e46ba45fb134e83eaa76c3cbd5162.png';
export const AIOutboundImg = 'https://cdn.byai.com/static/oss-script/d77d72324b29546644c06b5f7f9c2f43.png';
export const SMSImg = 'https://cdn.byai.com/static/oss-script/eafea87e96ec88d1af23dd0438a5d5d2.png';
export const AutomaticallyAddMicroImg = 'https://cdn.byai.com/static/oss-script/507a45ec231765b50b96f2bc79b41364.png';
export const WeChatInteractionImg = 'https://cdn.byai.com/static/oss-script/1fbc5445667708b4406e3cb0d184a33d.png';
export const AutomaticallyAddPowderContainer = styled.div`
  height: 1074px;
  width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    .title {
      text-align: center;
      font-size: 36px;
      font-weight: 600;
      color: #2b2a35;
      line-height: 48px;
      letter-spacing: 1.5px;
    }
    .sub-title {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 60px;
      font-size: 18px;
      font-weight: 400;
      color: rgba(43, 42, 53, 0.65);
      line-height: 26px;
    }
    .carousel-item {
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 1200px;
        height: 580px;
      }
      .button {
        width: 168px;
        height: 48px;
        font-size: 20px;
        font-weight: 400;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #ffffff;
        line-height: 28px;
        padding: 10px 24px;
        background: #2b58f9;
        box-shadow: 0px 4px 16px 0px rgba(43, 88, 249, 0.15), 0px -1px 4px 0px rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        display: block;
        text-decoration: none;
        &:hover {
          background: #547fff;
        }
        &:active {
          background: #193cd4;
        }
      }
      .options {
        position: absolute;
        display: flex;
        width: 100%;
        top: 260px;
        justify-content: space-around;
      }
    }
  }
`;
export const StepList = styled.div`
  display: flex;
  justify-content: center;
  .step-item-div {
    display: flex;
    justify-content: center;
  }
`;
export const StepItem = styled.div<{ isChecked: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
  }
  .font {
    font-size: 20px;
    font-weight: ${props => (props.isChecked ? 500 : 400)};
    color: ${props => (props.isChecked ? '#2b2a35' : 'rgba(43, 42, 53, 0.65)')};
    line-height: 28px;
  }
  .is-line {
    margin-top: 12px;
    width: 40px;
    height: 4px;
    border-radius: 2px;
    &-hover {
      background: #2b58f9;
    }
  }
`;
export const arrowItem = styled.div`
  margin: 0 52px;
  display: flex;
  align-items: center;
  .round {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(43, 42, 53, 0.15);
    margin-right: 12px;
  }
  .arrow {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 12px solid #00c8bd;
    border-bottom: 10px solid transparent;
  }
`;
export const preIcon = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid rgba(43, 88, 249, 0.25);
  border-radius: 50%;
  display: flex;
  left: -200px;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .content {
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 8px solid #2b58f9;
    border-bottom: 6px solid transparent;
  }
`;
export const nextIcon = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid rgba(43, 88, 249, 0.25);
  border-radius: 50%;
  display: flex;
  left: 200px;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .content {
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 8px solid #2b58f9;
    border-bottom: 6px solid transparent;
  }
`;
