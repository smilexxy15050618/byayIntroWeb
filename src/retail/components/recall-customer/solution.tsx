import { FC } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../../lib/utils';

export const SolutionWrapper = styled.div`
  width: 100%;
  padding: ${calWidthAndHeight(152)} ${calWidthAndHeight(120)} 0 ${calWidthAndHeight(156)};
  background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/b0803c76-4a5b-47d3-9424-8993825dbf1c.png');
  background-repeat: round;
  white-space: nowrap;
  .solution-body {
    display: flex;
    justify-content: center;
  }
  .main-title {
    font-size: ${calWidthAndHeight(64)};
    line-height: ${calWidthAndHeight(80)};
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 2px;
    margin-bottom: ${calWidthAndHeight(16)};
  }
  .sub-title {
    font-size: ${calWidthAndHeight(24)};
    line-height: ${calWidthAndHeight(40)};
    letter-spacing: 1px;
    color: #ffffff;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
  }
  .free-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${calWidthAndHeight(240)};
    height: ${calWidthAndHeight(48)};
    font-size: ${calWidthAndHeight(20)};
    white-space: nowrap;
    margin: ${calWidthAndHeight(48)} 0 ${calWidthAndHeight(120)};
    position: relative;
    background: #f66600;
    color: #ffffff;
    cursor: pointer;
  }
  .right-body {
    width: ${calWidthAndHeight(546)};
    height: ${calWidthAndHeight(320)};
    margin-left: ${calWidthAndHeight(92)};
    padding: ${calWidthAndHeight(16)};
    white-space: nowrap;
    background: url('https://cdn.byai.com/by-fe-cdn/static/pmp/e25c37ef-256d-4c0e-ba92-4fe0f24e0ef0.png');
    background-repeat: round;
    > video {
      height: ${calWidthAndHeight(288)};
      border-radius: 8px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: ${calWidthAndHeight(638)};
    padding: 0;
    background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/fdb603b9-e6d0-44f2-b8da-6fe2f7af9719.png');
    background-repeat: round;
    text-align: -webkit-center;

    .solution-body {
      flex-direction: column;
    }

    .main-title {
      line-height: ${calWidthAndHeight(48)};
      margin-top: ${calWidthAndHeight(96)};
      margin-bottom: ${calWidthAndHeight(8)};
      font-size: ${calWidthAndHeight(36)};
      font-weight: 400;
    }

    .sub-title {
      line-height: ${calWidthAndHeight(24)};
      margin-bottom: ${calWidthAndHeight(32)};
      font-size: ${calWidthAndHeight(14)};
      font-weight: 300;
    }

    .right-body {
      width: ${calWidthAndHeight(328)};
      height: ${calWidthAndHeight(194)};
      margin: 0;
      padding: ${calWidthAndHeight(10)};

      > video {
        height: ${calWidthAndHeight(174)};
        border-radius: ${calWidthAndHeight(5)};
      }
    }

    .free-btn {
      width: ${calWidthAndHeight(280)};
      margin: ${calWidthAndHeight(40)} auto ${calWidthAndHeight(76)};
      border-radius: ${calWidthAndHeight(4)};
    }
  }
`;

export const Solution: FC = () => {
  return (
    <SolutionWrapper>
      <Visible md lg xl xxl xxxl>
        <div className="solution-body">
          <div className="left-body">
            <div className="main-title">老客召回</div>
            <div className="main-title">数智化解决方案</div>
            <div className="sub-title">全域触点管理，实现ROI和用户体验的双提升</div>
            <div
              className="free-btn"
              onClick={() => {
                window.open(retailUrl('/form?formType=1'));
              }}>
              免费领取AI提升方案 ››
            </div>
          </div>
          <div className="right-body">
            <video
              controls
              preload="auto"
              src={'https://cdn.byai.com/by-fe-cdn/static/pmp/0b24ef57-b931-4224-a747-07695f2efc8c.mp4'}
            />
          </div>
        </div>
      </Visible>
      <Visible xs sm>
        <div className="solution-body">
          <div className="left-body">
            <div className="main-title">
              <div>老客召回</div>
              <div>数智化解决方案</div>
            </div>
            <div className="sub-title">
              <div>全域触点管理，</div>
              <div>实现ROI和用户体验的双提升</div>
            </div>
            <div className="right-body">
              <video
                controls
                preload="auto"
                src={'https://cdn.byai.com/by-fe-cdn/static/pmp/0b24ef57-b931-4224-a747-07695f2efc8c.mp4'}
                poster={'https://cdn.byai.com/by-fe-cdn/static/pmp/7bf3a767-3352-4819-b491-2022de74ccec.png'}
              />
            </div>
            <div
              className="free-btn"
              onClick={() => {
                window.open(retailUrl('/form?formType=1'));
              }}>
              免费体验 ››
            </div>
          </div>
        </div>
      </Visible>
    </SolutionWrapper>
  );
};
