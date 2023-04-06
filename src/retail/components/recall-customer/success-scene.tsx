import { FC } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight } from '../../../lib/utils';

const SuccessSceneWrapper = styled.div`
  height: ${calWidthAndHeight(420)};
  font-family: PingFangSC-Medium, PingFang SC;
  padding: 0 ${calWidthAndHeight(120)};
  line-height: ${calWidthAndHeight(68)};
  .title {
    font-size: ${calWidthAndHeight(40)};
    font-weight: 500;
    color: #ffffff;
    line-height: ${calWidthAndHeight(68)};
    text-align: center;
    text-shadow: 0px 3px 0px #f66600;
    padding-top: ${calWidthAndHeight(16)};
  }
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: ${calWidthAndHeight(1192)};
    height: ${calWidthAndHeight(668)};
    background: #fffaf6;
    box-shadow: 0px 14px 55px 9px rgba(246, 102, 0, 0.08);
    border-image: linear-gradient(34deg, rgba(246, 102, 0, 1), rgba(255, 163, 97, 1)) 4 4;
    border-radius: ${calWidthAndHeight(32)};
    background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/fc4fccb1-7151-4df5-bf16-0915cd1324bb.png');
    background-repeat: round;
  }

  @media (max-width: 768px) {
    width: ${calWidthAndHeight(334)};
    height: ${calWidthAndHeight(480)};
    padding: 0;
    margin: 0 auto;
    background: #f66600;
    box-shadow: 0px 3px 5px 6px rgba(246, 102, 0, 0.05);
    border-radius: 21px;

    .title {
      font-size: ${calWidthAndHeight(20)};
      line-height: ${calWidthAndHeight(28)};
      text-shadow: 0px 1px 0px #f66600;
      padding-bottom: ${calWidthAndHeight(2)};
    }

    .content-wrapper {
      background: #fffaf6;
      box-shadow: 0px 3px 5px 6px rgba(246, 102, 0, 0.05);
      border-image: linear-gradient(34deg, rgba(246, 102, 0, 1), rgba(255, 163, 97, 1)) 3 3;
      border-radius: ${calWidthAndHeight(21)};
      margin: ${calWidthAndHeight(2)};

      .content {
        width: ${calWidthAndHeight(334)};
        height: ${calWidthAndHeight(402)};
        background: #fffaf6;
        background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/11beaf3e-0e82-4792-be00-dced3da86142.png');
        box-shadow: 0px 3px 5px 6px rgba(246, 102, 0, 0.08);
        border-radius: ${calWidthAndHeight(21)};
        background-repeat: round;
      }
    }
  }
`;

const FloatCard = styled.div`
  position: relative;
  top: -${calWidthAndHeight(336)};
  width: ${calWidthAndHeight(1200)};
  height: ${calWidthAndHeight(756)};
  background: linear-gradient(37deg, #f66600 0%, #ffa361 100%);
  box-shadow: 0px 26px 55px 9px rgba(246, 102, 0, 0.08);
  border-radius: ${calWidthAndHeight(32)};
`;

const SuccessScene: FC = () => {
  return (
    <SuccessSceneWrapper>
      <Visible md lg xl xxl xxxl>
        <FloatCard>
          <div className="title">那些被验证成功的AI语音「老客召回」场景</div>
          <div className="content-wrapper">
            <div className="content"></div>
          </div>
        </FloatCard>
      </Visible>
      <Visible xs sm>
        <div className="title">
          <div>那些被验证成功的</div>
          <div>AI语音「老客召回」场景</div>
        </div>
        <div className="content-wrapper">
          <div className="content"></div>
        </div>
      </Visible>
    </SuccessSceneWrapper>
  );
};

export default SuccessScene;
