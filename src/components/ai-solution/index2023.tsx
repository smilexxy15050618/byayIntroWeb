import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Pane from '../../components/homepage/version2023/Pane';
import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js'
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperClass from 'swiper/types/swiper-class';
interface SceneSolution {

}
const Wrapper = styled.div`
    
`
const HoveUp = styled.div`
   width: 1248px;
   margin:0 auto; 
   @media (max-width: 728px) {
    width: 100vw;
    .custom-bar-wrapper{
      width: 300px;
  }
  .swiper-slide {
    width: 224px !important;
    }
   }
   .carditem{
    width: 224px;
    height: 240px;
    opacity: 1;
    border-radius: 8px;
    background: rgba(43, 88, 249, 1);
    position: relative;
    img{
        position: absolute;
        right: 0;
        margin:0;
    }
    .textt_area{
        position: absolute;
        width: 181px;
        height: 112px;
        left:22px;
        bottom:22px;
        .title_area{
            font-size: 20px;
font-weight: 600;
line-height: 24px;
color: rgba(255, 255, 255, 1);
margin-bottom:16px;
        }
        .cont_area{
            font-size: 14px;
font-weight: 400;
letter-spacing: 0px;
line-height: 24px;
color: rgba(255, 255, 255, 1);
        }
    }
  }
`
const Card = styled.div<{ bg: number }>`
   width: 1200px;
   margin:0 auto;
   display:flex;
   justify-content: space-between;
   .carditem{
    width: 224px;
    height: 240px;
    opacity: 1;
    border-radius: 8px;
    background: rgba(43, 88, 249, 1);
    position: relative;
    img{
        position: absolute;
        right: 0;
        margin:0;
    }
    .textt_area{
        position: absolute;
        width: 181px;
        height: 112px;
        left:22px;
        bottom:22px;
        .title_area{
            font-size: 20px;
font-weight: 600;
line-height: 24px;
color: rgba(255, 255, 255, 1);
margin-bottom:16px;
        }
        .cont_area{
            font-size: 14px;
font-weight: 400;
letter-spacing: 0px;
line-height: 24px;
color: rgba(255, 255, 255, 1);
        }
    }
   }
    /* border-radius: 8px; */
    /* box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12); */
    
`


const carouselDataList = [{
  title: '智能提效',
  content: '赋能营销服务降本增效，节省85%以上的人力成本，提升服务效率',
  url: '/icon1.png'
}, {
  title: '精准营销',
  content: '自动化营销SOP，“千人千面”提供个性化服务，打造行业最佳转化模型',
  url: '/icon2.png'
}, {
  title: '极致体验',
  content: '定制化运营策略，让营销回归服务关怀，为用户提供极致的沟通体验',
  url: '/icon3.png'
}, {
  title: '自动打标',
  content: '智能分析用户意向，精细化用户分层，辅助运营人员管理用户资产',
  url: '/icon4.png'
}, {
  title: '数据管理',
  content: '持续追踪转化进度，通过效果评估，持续提升运营效率和用户体验',
  url: '/icon5.png'
},]
const MainWrap = styled.div`
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
`

const AISOLUTION = 'ai_jiejue_2918'
const SceneSolution: FC<SceneSolution> = ({ }) => {


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
      // .setClassToggle('.aitxs', 'appear')
      .addTo(controller)
      .on('enter', () => {
        videoContent.classList.add('appear')
        // console.log('进入');

        controller.destroy();
      });
  }, []);
  return (
    <Pane title="核心价值"
      titleStyle={{ marginBottom: '56px' }}
      paneBgColor="white" style={{ paddingBottom: 100 }} mobileStyle={{ paddingBottom: 40 }}>
      <Hidden xs sm>
        <MainWrap id={AISOLUTION}>
          <HoveUp>
            <Card bg={1}>
              {carouselDataList.map(item =>
                <div className='carditem'>
                  <img src={imgurl + item.url} width={117} />
                  <div className='textt_area'>
                    <div className='title_area'>
                      {item.title}
                    </div>
                    <div className='cont_area'>
                      {item.content}
                    </div>
                  </div>
                </div>
              )}

            </Card>
          </HoveUp>
        </MainWrap>
      </Hidden>
      <Visible xs sm>
        <MainWrap id={AISOLUTION}>
          <HoveUp>
            <ByProgressSwiper
          newProgress={true}
          initialSlide={0}
          slidesPerView="auto"
          autoplayDelay={5000}
          spaceBetween={16}
          centeredSlides={true}
            >
              {carouselDataList.map(item =>
                <div className='carditem'>
                  <img src={imgurl + item.url} width={117} />
                  <div className='textt_area'>
                    <div className='title_area'>
                      {item.title}
                    </div>
                    <div className='cont_area'>
                      {item.content}
                    </div>
                  </div>
                </div>
              )}
            </ByProgressSwiper>
          </HoveUp>
        </MainWrap>
      </Visible>
    </Pane>
  );
};


export default SceneSolution;
