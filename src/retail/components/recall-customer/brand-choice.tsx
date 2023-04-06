import { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight } from '../../../lib/utils';

const BrandChoiceWrapper = styled.div`
  width: ${calWidthAndHeight(1200)};
  height: ${calWidthAndHeight(800)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${calWidthAndHeight(100)} ${calWidthAndHeight(120)};
  box-shadow: 0px 14px 55px 9px rgba(246, 102, 0, 0.08);
  border-radius: 32px;
  background-color: #ffffff;
  .title {
    text-align: center;
    font-size: ${calWidthAndHeight(40)};
    font-weight: 500;
    font-family: PingFangSC-Medium, PingFang SC;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(68)};
    padding: ${calWidthAndHeight(58)} 0 ${calWidthAndHeight(56)};
  }
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    display: flex;
    justify-content: center;
    height: ${calWidthAndHeight(576)};
    .carousel-body {
      width: ${calWidthAndHeight(1040)};
      height: ${calWidthAndHeight(478)};
      border-radius: ${calWidthAndHeight(32)};
      background-repeat: round;
    }
    .carousel,
    .carousel-inner,
    .carousel-item {
      height: 100%;
    }
    .carousel-indicators {
      bottom: ${calWidthAndHeight(-72)};
    }
    .carousel-indicators li {
      width: ${calWidthAndHeight(24)};
      height: ${calWidthAndHeight(4)};
      background: rgba(246, 102, 0, 0.14);
      border-radius: 4px;
      border: none;
      opacity: 1;
    }
    .carousel-indicators .active {
      background: #f66600;
    }
  }

  @media (max-width: 768px) {
    width: ${calWidthAndHeight(342)};
    height: ${calWidthAndHeight(238)};
    margin: ${calWidthAndHeight(16)};
    padding: ${calWidthAndHeight(10)};
    border-radius: ${calWidthAndHeight(8)};

    .title {
      font-size: ${calWidthAndHeight(20)};
      line-height: ${calWidthAndHeight(24)};
      padding: ${calWidthAndHeight(16)} 0;
    }

    .content {
      height: ${calWidthAndHeight(170)};
    }

    .carousel-body {
      height: ${calWidthAndHeight(158)} !important;
      background-repeat: round;
    }

    .carousel-indicators {
      bottom: -${calWidthAndHeight(8)} !important;
    }
  }
`;

const BrandChoiceBody = styled.div`
  width: ${calWidthAndHeight(1152)};
  height: ${calWidthAndHeight(752)};
  background: url('https://cdn.byai.com/by-fe-cdn/static/pmp/676f3189-6532-4741-a7ab-31f26f3a4666.png');
  background-repeat: round;

  @media (max-width: 768px) {
    width: ${calWidthAndHeight(320)};
    height: ${calWidthAndHeight(218)};
    border-radius: ${calWidthAndHeight(8)};
  }
`;

const carouselList = [
  {
    url: 'https://cdn.byai.com/by-fe-cdn/static/pmp/89510eea-55b9-4376-b171-bcf4193f6474.png',
  },
  {
    url: 'https://cdn.byai.com/by-fe-cdn/static/pmp/5782baab-2acf-4135-ae3e-fa388eefe6f8.png',
  },
  {
    url: 'https://cdn.byai.com/by-fe-cdn/static/pmp/8eeaf55a-eb83-4c94-862d-f8830d71002c.png',
  },
  {
    url: 'https://cdn.byai.com/by-fe-cdn/static/pmp/30e95c9f-cd1e-454b-854f-0ee6bcb8c7b6.png',
  },
];

const BrandChoice: FC = () => {
  return (
    <BrandChoiceWrapper>
      <Visible md lg xl xxl xxxl>
        <BrandChoiceBody>
          <div className="title">更懂客户的百应AI 正在被更多的TOP品牌选择</div>
          <div className="content">
            <div className="carousel-body">
              <Carousel style={{ width: '100%' }} controls={false} indicators={true} interval={5000}>
                {carouselList.map((item, i) => {
                  return (
                    <Carousel.Item
                      key={i}
                      style={{
                        backgroundImage: `url(${item.url})`,
                        backgroundSize: 'cover',
                      }}></Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </BrandChoiceBody>
      </Visible>
      <Visible xs sm>
        <BrandChoiceBody>
          <div className="title">百应AI被更多TOP品牌选择</div>
          <div className="content">
            <div className="carousel-body">
              <Carousel style={{ width: '100%' }} controls={false} indicators={true} interval={5000}>
                {carouselList.map((item, i) => {
                  return (
                    <Carousel.Item
                      key={i}
                      style={{
                        backgroundImage: `url(${item.url})`,
                        backgroundSize: 'cover',
                      }}></Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </BrandChoiceBody>
      </Visible>
    </BrandChoiceWrapper>
  );
};

export default BrandChoice;
