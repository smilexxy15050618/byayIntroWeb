import styled from 'styled-components';

export const DataRecoveryPeriodImg = 'https://cdn.byai.com/static/oss-script/a7827b4c471989aebb325359a99e2f5c.svg';
export const SinglePlusMicroCostImg = 'https://cdn.byai.com/static/oss-script/d06cf61bc7bf3d30036989f8f0490a8a.svg';
export const IndustryAverageConversionRateImg =
  'https://cdn.byai.com/static/oss-script/dbc23f149c9b2b1c8f33aa172b8c6b03.svg';
export const DataUtilizationImg = 'https://cdn.byai.com/static/oss-script/cdc14ae8130112efadec5c8bae394ee7.svg';

export const NumberDataContainer = styled.div`
  &::before {
    content: '';
    width: 191px;
    height: 342px;
    top: 3067px;
    left: 0;
    position: absolute;
    z-index: 3;
    background-image: url('https://cdn.byai.com/static/oss-script/179d924bca56532d2e0ff3feb87bf6dc.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &::after {
    content: '';
    width: 125px;
    height: 254px;
    top: 3067px;
    right: 0;
    position: absolute;
    z-index: 2;
    background-image: url('https://cdn.byai.com/static/oss-script/55147a9dfdaba5a1bca91b2e82a52dad.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  width: 100%;
  height: 674px;
  padding: 100px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 36px;
    font-weight: 600;
    color: #2b2a35;
    line-height: 48px;
    letter-spacing: 1.5px;
  }
  .sub-title {
    margin: 20px 0 40px 0;
    font-size: 18px;
    font-weight: 400;
    color: rgba(43, 42, 53, 0.65);
    line-height: 26px;
  }
  .card-list {
    display: flex;
  }
  .card-list .small-title {
    margin: 8px 0 40px 0;
    font-size: 20px;
    font-weight: 500;
    color: #2b2a35;
    line-height: 28px;
  }
  .card-list .number {
    font-size: 16px;
    font-weight: 400;
    color: rgba(43, 42, 53, 0.45);
    line-height: 24px;
  }
  .card-data {
    width: 300px;
    height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding-top: 40px;
    animation: hoverOut 0.5s;
    animation-fill-mode: forwards;
    cursor: default;
    &:hover {
      animation: hoverOn 0.5s;
      animation-fill-mode: forwards;
    }
  }

  @keyframes hoverOn {
    from {
      box-shadow: 0px 4px 16px 0px transparent;
      padding-top: 40px;
    }
    to {
      box-shadow: 0px 4px 16px 0px rgba(69, 88, 128, 0.08);
      padding-top: 24px;
    }
  }

  @keyframes hoverOut {
    from {
      box-shadow: 0px 4px 16px 0px rgba(69, 88, 128, 0.08);
      padding-top: 24px;
    }
    to {
      box-shadow: 0px 4px 16px 0px transparent;
      padding-top: 40px;
    }
  }
`;
export const NumberContainer = styled.span`
  margin: 0 8px;
  font-size: 48px;
  font-weight: bold;
  color: #2b2a35;
  line-height: 56px;
  font-family: DINAlternate-Bold, DINAlternate;
`;
export const ImageContainer = styled.div<{ url: string }>`
  width: 160px;
  height: 120px;
  background-image: url(${props => props.url});
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
`;
