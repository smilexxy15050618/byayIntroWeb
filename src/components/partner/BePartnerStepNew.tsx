import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';
import { media } from '../../constants/style';

const PREFIX = 'https://cdn.byai.com/static/official-website/cooperation';
const IMG_POINTER = `${PREFIX}/pointer.png`;
const IMG_POINTER_COL = `${PREFIX}/pointer-col.png`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 65px;
  img {
    margin: 0px;
  }
  .step-item {
    flex: none;
    display: flex;
    align-items: center;
    .step-img-wrap {
      width: 142px;
      height: 142px;
      background: #ffffff;
      box-shadow: 0px 16px 24px 0px rgba(3, 43, 183, 0.08);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .desc {
        width: 240px;
        text-align: center;
        position: absolute;
        bottom: -65px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 24px;
        font-weight: 400;
        color: #000000;
        line-height: 33px;
      }
      img {
        width: 55px;
        height: 55px;
        margin: 0px;
      }
    }
  }
  ${media.phone`
    min-width: 0;
    .step-item{
      .step-img-wrap {
        width: 50px;
        height: 50px;
        background: #FFFFFF;
        box-shadow: 0px 14px 22px 0px rgba(145, 152, 177, 0.08);
        .desc {
          width: 72px;
          height: 34px;
          font-size: 12px;
          line-height: 17px;
          bottom: -45px;
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
      >img {
        width: 50px;
      }
    }
  `}
`;

interface IBePartnerStepProps {
  steps: { url: string; desc: string }[];
}
const BePartnerStep: React.FunctionComponent<IBePartnerStepProps> = ({ steps }) => {
  return (
    <Wrap>
      {steps.map((img, index) => (
        <div className="step-item" key={index}>
          <div className="step-img-wrap">
            <img src={img.url} />
            <div className="desc">{img.desc}</div>
          </div>
          <img src={IMG_POINTER} style={{ display: index === steps.length - 1 ? 'none' : '' }} />
        </div>
      ))}
    </Wrap>
  );
};
export default BePartnerStep;
