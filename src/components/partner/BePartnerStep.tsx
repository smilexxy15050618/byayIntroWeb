import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';
import { media } from '../../constants/style';

const PREFIX = 'https://cdn.byai.com/static/official-website/cooperation';
const IMG_POINTER = `${PREFIX}/pointer.png`;
const IMG_POINTER_COL = `${PREFIX}/pointer-col.png`;

const Wrap = styled.div`
  display: flex;
  algin-items: center;
  justify-content: center;
  min-width: 1120px;
  padding-bottom: 65px;
  img {
    margin: 0px;
  }
  .step-item {
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
        text-align: center;
        width: 240px;
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
    flex-direction: column;
    min-width: 0;
    padding-bottom: 150px;
    .step-item{
      flex-direction: column;
      .step-img-wrap {
        margin: -8px 0px 48px;
      }
    }
  `}
`;

interface IBePartnerStepProps {
  imgs: { url: string; desc: string }[];
}
const BePartnerStep: React.FunctionComponent<IBePartnerStepProps> = ({ imgs }) => {
  const [imgUrl, setImgUrl] = React.useState('');
  React.useEffect(() => {
    const handleResize = _.throttle(
      () => {
        const winWidth = document.body.clientWidth;
        if (winWidth <= 768) {
          setImgUrl(IMG_POINTER_COL);
          return;
        }
        setImgUrl(IMG_POINTER);
      },
      300,
      {
        leading: true,
      },
    );

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Wrap>
      {imgs.map((img, index) => (
        <div className="step-item" key={index}>
          <div className="step-img-wrap">
            <img src={img.url} />
            <div className="desc">{img.desc}</div>
          </div>
          <img src={imgUrl} style={{ display: index === imgs.length - 1 ? 'none' : '' }} />
        </div>
      ))}
    </Wrap>
  );
};
export default BePartnerStep;
