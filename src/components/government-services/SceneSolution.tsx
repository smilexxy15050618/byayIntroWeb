import { FC, useEffect} from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js'
import ByProgressSwiper from '../common/ByProgressSwiper';
interface  SceneSolution{
}
const Pane = styled.div`
    padding: 80px 0;
    @media (max-width: 768px) {
     padding: 40px 0;
   }
   @media (max-width: 768px) {
    .custom-bar-wrapper{
      width: 300px;
    }
  }
   .title {
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
    @media (max-width: 768px) {
      padding-bottom: 40px;
      font-size: 24px;
      font-weight: 500;
      line-height: 40px;
    }
  }
  .desc {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin: 16px auto 40px;
    @media (max-width: 768px) {
      padding: 0 40px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin: 16px auto 34px;
    }
  }
`
const HoveUp = styled.div`
   width: 1250px;
   margin:0 auto; 
   @media (max-width: 768px) {
     width: 100%;
     padding: 0 12px;
     img{
        width:100%;
        margin:147px;
      }
   }
   img{
        width:100%;
        margin:0;
    }
`

const MainWrap = styled.div`
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
   
    @media (max-width: 768px) {
        transition: none;
        transform: translateY(0);
        opacity: 1;
        .swiper-slide {
        width: 300px !important;
        }
        .custom-bar-wrapper{
            width: 300px;
        }
        .custom-bar-wrapper{
            display:none;
        }
        .swiper-counter {
            display:none;
        }
    }
    
    .channel-item{
        position: relative;
        width: 300px;
        height: 116px;
        padding: 23px 16px;
        border-radius: 8px;
        background: rgba(246, 252, 255, 1);
        box-sizing: border-box;
        .title-item {
            height: 20px;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
        }
        .subtitle {
            padding-top: 6px;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            color: rgba(0, 0, 0, 1);
        }
    }
    .wap-bg{
        display: block;
        width:300px;
        height:210px;
        margin: 20px auto 0;
    }
`

const carouselDataList = imgurl+'/government-scen-img.png'
const carouselDataListBg = imgurl+'/government-scen-bg.png'
const carouselWapList = [
    {
        title:'公安行业咨询场景',
        subtitle: '围绕户籍、户政等高频公安业务办理事项，提供一体化智能业务咨询办理'
    },
    {
        title:'社保行业帮办场景',
        subtitle: '立足社保业务场景，让群众办事由繁到简、由难到易'
    },
    {
        title:'医保行业服务场景',
        subtitle: '打造线上“枢纽”服务站，精准指导群众网办流程，打通服务群众“最后一公里”'
    }
]

const SceneSolution: FC<SceneSolution> = ({}) => {
   
const HANGYE = 'hangye_2023_2009d'
useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(HANGYE);
      new ScrollMagic.Scene({
        triggerElement: videoContent, //触发元素
        triggerHook: 'onEnter', //触发元素开始离开视口时触发
        offset: 10, //从开始点滚动多少px触发（施法前摇）
        duration: 400, //效果持续的距离（法术持续时间/距离）
      })
        .addTo(controller)
        .on('enter', () => {
            videoContent.classList.add('appear')
            // console.log('进入');
            controller.destroy();
        });
  }, []);
    return (
        <Pane>
        <div class="title">应用场景</div>
        <MainWrap id={HANGYE}>
            <Visible md lg xl xxl xxxl>
              <HoveUp>
                  <img src={carouselDataList} />
              </HoveUp>
            </Visible>
            <Visible xs sm>
              <ByProgressSwiper
                newProgress={true}
                initialSlide={0}
                slidesPerView="auto"
                spaceBetween={12}>
                {carouselWapList.map((item, i) => (
                // 算垂直百分比时应该用对应(margin或padding)/父元素width，得到其占比
                <div className="channel-item">
                    <div className="title-item">{item.title}</div>
                    <div className="subtitle" dangerouslySetInnerHTML={{ __html: item.subtitle }}></div>
                </div>
                ))}
                </ByProgressSwiper>
                <img className='wap-bg' src={carouselDataListBg} />
            </Visible>
        </MainWrap>
        </Pane>
    );
  };
  
  
export default SceneSolution;
