import { FC } from 'react';
import styled from 'styled-components';
import { calWidthAndHeight } from '../../../lib/utils';

const HelpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${calWidthAndHeight(1200)};
  height: ${calWidthAndHeight(770)};
  margin: ${calWidthAndHeight(100)} ${calWidthAndHeight(120)};
  box-shadow: 0px 14px 55px 9px rgba(246, 102, 0, 0.08);
  border-radius: 32px;
  padding: ${calWidthAndHeight(22)}
  background-color: #ffffff;
  .title {
    text-align: center;
    font-size: ${calWidthAndHeight(40)};
    font-weight: 500;
    font-family: PingFangSC-Medium, PingFang SC;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(68)};
    background-repeat: round;
    padding: ${calWidthAndHeight(58)} 0 ${calWidthAndHeight(110)}
  }
  .content {
    height: ${calWidthAndHeight(462)};
    background: url('https://cdn.byai.com/by-fe-cdn/static/pmp/934ea100-bacb-4faf-8729-328b375a988d.png');
    background-repeat: round;
    position: relative;
  }
`;

const HelpBody = styled.div`
  width: ${calWidthAndHeight(1152)};
  height: ${calWidthAndHeight(722)};
  background: url('https://cdn.byai.com/by-fe-cdn/static/pmp/676f3189-6532-4741-a7ab-31f26f3a4666.png');
  background-repeat: round;
  .recall-button {
    width: ${calWidthAndHeight(158)};
    height: ${calWidthAndHeight(158)};
    background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/45010bab-610d-4e20-82be-d99628b2c956.png');
    background-repeat: round;
    position: absolute;
    top: ${calWidthAndHeight(153)};
    left: ${calWidthAndHeight(256)};
    border-radius: 50%;
    cursor: pointer;
    z-index: 9;
  }
  .private-button {
    width: ${calWidthAndHeight(158)};
    height: ${calWidthAndHeight(158)};
    background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/88766e78-be45-40ae-b78f-517232640737.png');
    background-repeat: round;
    position: absolute;
    top: ${calWidthAndHeight(153)};
    right: ${calWidthAndHeight(253)};
    border-radius: 50%;
    cursor: pointer;
    z-index: 9;
  }

  .animate-wave-recall {
    width: ${calWidthAndHeight(192)};
    height: ${calWidthAndHeight(192)};
    position: absolute;
    top: ${calWidthAndHeight(136)};
    left: ${calWidthAndHeight(237)};
  }

  .animate-wave-private {
    width: ${calWidthAndHeight(192)};
    height: ${calWidthAndHeight(192)};
    position: absolute;
    top: ${calWidthAndHeight(136)};
    right: ${calWidthAndHeight(233)};
  }

  .animate-wave-recall * {
    background: #f66600;
    position: absolute;
    border-radius: 50%;
    animation: opac 6s infinite;
  }
  .animate-wave-private * {
    background: #f66600;
    position: absolute;
    border-radius: 50%;
    animation: opac 6s infinite;
  }

  @keyframes opac {
    0% {
      opacity: 1;
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
    }

    99% {
      opacity: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    100% {
      opacity: 0;
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
    }
  }

  .animate-wave-recall .w2 {
    animation-delay: 1s;
  }

  .animate-wave-private .w2 {
    animation-delay: 1s;
  }

  .animate-wave-recall .w3 {
    animation-delay: 2s;
  }

  .animate-wave-private .w3 {
    animation-delay: 2s;
  }

  .animate-wave-recall .w4 {
    animation-delay: 3s;
  }

  .animate-wave-private .w4 {
    animation-delay: 3s;
  }

  .animate-wave-recall .w5 {
    animation-delay: 4s;
  }

  .animate-wave-private .w5 {
    animation-delay: 4s;
  }

  .animate-wave-recall .w6 {
    animation-delay: 5s;
  }

  .animate-wave-private .w6 {
    animation-delay: 5s;
  }
`;

const Help: FC = () => {
  return (
    <HelpWrapper>
      <HelpBody>
        <div className="title">通过精细化、自动化客户经营，助力品牌赢在存量</div>
        <div className="content">
          <div
            className="recall-button"
            onClick={() => {
              window.location.href = '/retail/recall';
            }}></div>
          <div className="animate-wave-recall">
            <div className="w1"></div>
            <div className="w2"></div>
            <div className="w3"></div>
            <div className="w4"></div>
            <div className="w5"></div>
            <div className="w6"></div>
          </div>
          <div
            className="private-button"
            onClick={() => {
              window.location.href = '/retail/traffic';
            }}></div>
          <div className="animate-wave-private">
            <div className="w1"></div>
            <div className="w2"></div>
            <div className="w3"></div>
            <div className="w4"></div>
            <div className="w5"></div>
            <div className="w6"></div>
          </div>
        </div>
      </HelpBody>
    </HelpWrapper>
  );
};

export default Help;
