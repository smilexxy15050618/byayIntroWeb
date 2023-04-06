import React from 'react';
import { Carousel } from 'react-bootstrap';
import * as SC from './styled';
const SolutionMobile = () => {
  const CarouselList = [
    {
      imgUrl: 'https://cdn.byai.com/static/oss-script/ec4805ceffa3414fbb30d8b86a51bd20.png',
      title: '私域加粉的必备工具',
      cardDesc: '15%-38%加粉转换率',
    },
    {
      imgUrl: 'https://cdn.byai.com/static/oss-script/ec4805ceffa3414fbb30d8b86a51bd20.png',
      title: '陪跑1000+头部电商',
      cardDesc: '构建百万级私域流量池',
    },
    {
      imgUrl: 'https://cdn.byai.com/static/oss-script/ec4805ceffa3414fbb30d8b86a51bd20.png',
      title: '新消费品牌信赖选择',
      cardDesc: '资深顾问团队，ROI有保障',
    },
  ];
  return (
    <SC.SolutionContainer>
      <div className="desc">
        <div>百应电商 AI</div>
        <div>私域增长解决方案</div>
      </div>
      <button onClick={() => window.open('/form?formType=1&origin=ecommerce')}>立即免费体验</button>
      <div className="img"></div>
      <SC.CarouselContainer controls={false}>
        {CarouselList.map(item => {
          return (
            <Carousel.Item key={item.title}>
              <img className="d-block w-100" src={item.imgUrl} />
              <Carousel.Caption>
                <div className="title">{item.title}</div>
                <div className="card-desc">{item.cardDesc}</div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </SC.CarouselContainer>
    </SC.SolutionContainer>
  );
};

export default SolutionMobile;
