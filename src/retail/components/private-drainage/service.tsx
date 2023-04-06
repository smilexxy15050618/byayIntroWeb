import { LeftCircle, RightCircle } from '@indata/icon-byai';
import { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../../lib/utils';

const ServiceWrapper = styled.div`
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
    padding-top: ${calWidthAndHeight(58)};
  }
  .desc {
    text-align: center;
    font-size: ${calWidthAndHeight(24)};
    font-weight: 500;
    color: #f66600;
    line-height: ${calWidthAndHeight(33)};
    padding: ${calWidthAndHeight(32)} 0 ${calWidthAndHeight(50)};
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${calWidthAndHeight(486)};
    .carousel-body {
      width: ${calWidthAndHeight(940)};
      height: ${calWidthAndHeight(322)};
      border-radius: ${calWidthAndHeight(32)};
      background-repeat: round;
    }
    .carousel,
    .carousel-inner,
    .carousel-item {
      height: 100%;
    }
    .carousel-control-prev {
      left: ${calWidthAndHeight(-134)};
    }
    .carousel-control-next {
      right: ${calWidthAndHeight(-134)};
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center
      width: ${calWidthAndHeight(224)};
      height: ${calWidthAndHeight(48)};
      background: #f66600;
      border-radius: 4px;
      font-size: ${calWidthAndHeight(16)};
      font-weight: 400;
      color: #ffffff;
      line-height: ${calWidthAndHeight(24)};
      cursor: pointer;
      margin: ${calWidthAndHeight(62)} 0 ${calWidthAndHeight(50)};
    }
  }
`;

const ServiceBody = styled.div`
  background: url('https://cdn.byai.com/by-fe-cdn/static/pmp/676f3189-6532-4741-a7ab-31f26f3a4666.png');
  background-repeat: round;
`;

const carouselList = [
  {
    url: 'https://cdn.byai.com/by-fe-cdn/static/pmp/32ff4c95-4758-43f1-9c96-bd9a70780019.png',
  },
  {
    url: 'https://cdn.byai.com/by-fe-cdn/static/pmp/1379fd03-a8c0-4e59-b4d1-f792649bfef1.png',
  },
  {
    url: 'https://cdn.byai.com/by-fe-cdn/static/pmp/c8c1b111-c119-45a4-9fdf-d023d25b9fa0.png',
  },
];

const Service: FC = () => {
  return (
    <ServiceWrapper>
      <ServiceBody>
        <div className="title">三大服务优势保障「召回」效果</div>
        <div className="desc">新一代NLP对话引擎，AI语音交互更智能</div>
        <div className="content">
          <div className="carousel-body">
            <Carousel
              indicators={false}
              interval={5000}
              prevIcon={<LeftCircle style={{ fontSize: 48 }} />}
              nextIcon={<RightCircle style={{ fontSize: 48 }} />}>
              {carouselList.map((item, i) => {
                return (
                  <Carousel.Item
                    key={i}
                    style={{
                      backgroundImage: `url(${item.url})`,
                      backgroundRepeat: 'round',
                      MozBackgroundSize: 'cover',
                    }}></Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div
            className="btn"
            onClick={() => {
              window.open(retailUrl('/form?formType=1'));
            }}>
            获取AI增长方案 ››
          </div>
        </div>
      </ServiceBody>
    </ServiceWrapper>
  );
};

export default Service;
