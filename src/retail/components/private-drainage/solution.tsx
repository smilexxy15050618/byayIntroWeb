import { FC } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../../lib/utils';

export const SolutionWrapper = styled.div`
  width: 100%;
  padding: ${calWidthAndHeight(152)} ${calWidthAndHeight(120)} 0 ${calWidthAndHeight(156)};
  background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/b0803c76-4a5b-47d3-9424-8993825dbf1c.png');
  background-repeat: round;
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
    background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/a8acedb2-f2ff-4335-bf22-390fec16ef3e.png');
    background-repeat: round;
    text-align: -webkit-center;

    .solution-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .top-body {
      margin-top: ${calWidthAndHeight(96)};
      margin-bottom: ${calWidthAndHeight(32)};
      text-align: center;
    }

    .bottom-body {
      width: ${calWidthAndHeight(328)};
      height: ${calWidthAndHeight(194)};
      margin: 0 auto;
      padding: ${calWidthAndHeight(10)};
      background: url('https://cdn.byai.com/by-fe-cdn/static/pmp/e25c37ef-256d-4c0e-ba92-4fe0f24e0ef0.png');
      background-repeat: round;
      > video {
        height: ${calWidthAndHeight(172)};
        border-radius: 5px;
      }
    }

    .main-title {
      font-size: ${calWidthAndHeight(36)};
      line-height: ${calWidthAndHeight(48)};
      margin-bottom: 0;
      font-weight: 400;
    }

    .sub-title {
      font-size: ${calWidthAndHeight(14)};
      line-height: ${calWidthAndHeight(24)};
      font-weight: 300;
      margin-top: ${calWidthAndHeight(8)};
    }

    .free-btn {
      width: ${calWidthAndHeight(280)};
      margin-top: ${calWidthAndHeight(40)};
      margin-bottom: ${calWidthAndHeight(76)};
      border-radius: 4px;
    }
  }
`;

export const Solution: FC = () => {
  return (
    <SolutionWrapper>
      <Visible md lg xl xxl xxxl>
        <div className="solution-body">
          <div className="left-body">
            <div className="main-title">私域引流</div>
            <div className="main-title">数智化解决方案</div>
            <div className="sub-title">规模化、精细化、自动化打造高价值用户场域</div>
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
              src={'https://cdn.byai.com/by-fe-cdn/static/pmp/c1a508fa-1993-4e58-aedb-46e3f27c6f46.mp4'}
              poster="https://cdn.byai.com/by-fe-cdn/static/pmp/a9b98011-86eb-4a9e-9e0f-b826ddbd8f18.png"
            />
          </div>
        </div>
      </Visible>
      <Visible xs sm>
        <div className="solution-body">
          <div className="top-body">
            <div className="main-title">私域引流</div>
            <div className="main-title">数智化解决方案</div>
            <div className="sub-title">
              <div>规模化、精细化、自动化</div>
              <div>打造高价值用户场域</div>
            </div>
          </div>
          <div className="bottom-body">
            <video
              controls
              preload="auto"
              src={'https://cdn.byai.com/by-fe-cdn/static/pmp/c1a508fa-1993-4e58-aedb-46e3f27c6f46.mp4'}
              poster="https://cdn.byai.com/by-fe-cdn/static/pmp/a9b98011-86eb-4a9e-9e0f-b826ddbd8f18.png"
            />
          </div>
        </div>
        <div
          className="free-btn"
          onClick={() => {
            window.open(retailUrl('/form?formType=1'));
          }}>
          免费体验 ››
        </div>
      </Visible>
    </SolutionWrapper>
  );
};
