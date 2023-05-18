import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Pane from '../../../src/components/homepage/version2023/Pane';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';

import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js';
interface SceneSolution {}
const Wrapper = styled.div``;
const HoveUp = styled.div`
  width: 1248px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100vw;
}

@media (max-width: 768px) {
    width: 100%;
    display: block;
    .swiper-slide {
  width: 285px !important;
}
    .carditem {
    position: relative;
    width: 285px;
    height: 364px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
    overflow: hidden;
    img.logo {
      height: 160px;
      border-radius: 8px 8px 0 0;
      &:hover {
        transform: scale(1.02);
        transition: transform 0.4s;
      }
    }

    .textt_area {
      padding: 32px 24px;
      font-size: 16px;
      line-height: 26px;
      font-size: 16px;
      line-height: 26px;
      color: rgba(0, 0, 0, 1);
    }
    .demo-go {
      display: block;
      padding-left: 24px;
      padding-top: 26px;
      font-size: 16px;
      color: rgba(43, 88, 249, 1);
      &:hover {
      }
    }
  }
  .custom-bar-wrapper{
    width: 300px;
  }
}
`;
const Card = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .carditem {
    position: relative;
    width: 284px;
    height: 364px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
    overflow: hidden;
    img.logo {
      height: 160px;
      border-radius: 8px 8px 0 0;
      &:hover {
        transform: scale(1.02);
        transition: transform 0.4s;
      }
    }

    .textt_area {
      padding: 32px 24px;
      font-size: 16px;
      line-height: 26px;
      font-size: 16px;
      line-height: 26px;
      color: rgba(0, 0, 0, 1);
    }
    .demo-go {
      display: block;
      padding-left: 24px;
      padding-top: 26px;
      font-size: 16px;
      color: rgba(43, 88, 249, 1);
      &:hover {
      }
    }
  }
 
`;

const CustomerCaseList = [
  {
    title: '陪跑中国领先的汽车消费者在线服务平台数字化进阶之路',
    imgUrl: '/qczjcar.png',
    pageUrl: '/form?formType=1',
  },
  {
    title: '助力科技型智能电动汽车品牌实现营销服务数智化升级',
    imgUrl: '/lpqccar.png',
    pageUrl: '/form?formType=1',
  },
  {
    title: '携手瓜子二手车，打造行业领军的汽车消费服务智能新体验',
    imgUrl: '/gzcar.png',
    pageUrl: '/form?formType=1',
  },
  {
    title: '中国领先的汽车互联网企业的营销服务数字化升级之旅',
    imgUrl: '/yccar.png',
    pageUrl: '/form?formType=1',
  },
];
const MainWrap = styled.div`
  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AISOLUTION = 'ai_jiejue_2919';
const CustomerCase: FC<SceneSolution> = ({}) => {
  const [wrapindex, setWrapindex] = useState(0);

  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(AISOLUTION);
    new ScrollMagic.Scene({
      triggerElement: videoContent, //触发元素
      triggerHook: 'onEnter', //触发元素开始离开视口时触发
      offset: 10, //从开始点滚动多少px触发（施法前摇）
      duration: 400, //效果持续的距离（法术持续时间/距离）
    })
      .addTo(controller)
      .on('enter', () => {
        videoContent.classList.add('appear');
        controller.destroy();
      });
  }, []);

  return (
    <>
    <Hidden xs sm>
    <Pane
      title="客户案例"
      titleStyle={{ marginBottom: '56px' }}
      paneBgColor="white"
      style={{ paddingBottom: 100 }}
      mobileStyle={{ paddingBottom: 40 }}>
         
      <MainWrap id={AISOLUTION}>
        <HoveUp>
          <Card>
            {CustomerCaseList.map(item => (
              <div className="carditem">
                <img className="logo" src={imgurl + item.imgUrl} />
                <div className="textt_area">{item.title}</div>
                <a href={item.pageUrl} className="demo-go">
                  了解详情 →
                </a>
              </div>
            ))}
          </Card>
        </HoveUp>
      </MainWrap>


    </Pane>
    </Hidden>

<Visible xs sm>
<Pane
      title="客户案例"
      titleStyle={{ marginBottom: '56px' }}
      paneBgColor="white"
      style={{ paddingBottom: 100 }}
      mobileStyle={{ paddingBottom: 40 }}>
<MainWrap id={AISOLUTION}>
<HoveUp>
<ByProgressSwiper
// newProgress={true}
// initialSlide={0}
// contentPadding="12px"
// progressPadding="0px"
// previewWidth="100px"
// autoplayDelay={5000}
newProgress={true}
initialSlide={0}
slidesPerView="auto"
autoplayDelay={5000}
spaceBetween={12}
centeredSlides={true}
>
  {/* <Card> */}
   {CustomerCaseList.map(item => (
     <div className="carditem">
       <img className="logo" src={imgurl + item.imgUrl} />
       <div className="textt_area">{item.title}</div>
       <a href={item.pageUrl} className="demo-go">
         了解详情 →
       </a>
     </div>
   ))}
 {/* </Card> */}
     </ByProgressSwiper>

</HoveUp>
</MainWrap>
</Pane>
</Visible>
</>
  );
};

export default CustomerCase;
