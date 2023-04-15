import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Pane from '../../../src/components/homepage/version2023/Pane';
import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperClass from 'swiper/types/swiper-class';
interface  CoreValues{

}
const Wrapper = styled.div`
    
`
const HoveUp = styled.div`
   width: 1248px;
   margin:0 auto; 
`
const Card = styled.div<{bg:number}>`
   width: 1200px;
   margin:0 auto;
   display:flex;
   justify-content: space-between;
   flex-wrap: wrap;
   .carditem{
    width: 284px;
height: 234.19px;
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
        left:24px;
        top:89px;
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
    title:'精细化运营触达',
    content:'运营模型精细化程度升级，业务部署不断成熟，触达更精准',
    url: '/value1_i.png'
},{
    title:'筛选高价值玩家',
    content:'以行为反馈评估用户价值，持续调整触达运营策略，实现业务闭环',
    url: '/02.png'
},{
    title:'打造极致沟通体验',
    content:'连接品牌和玩家的沟通桥梁，提供丰富的玩家触达运营攻略',
    url: '/value3_i.png'
},{
    title:'提高玩家活跃度',
    content:'投放更匹配的利益点，合理调整运营侧重，提升玩家参与活动的积极性',
    url: '/value4_i.png'
}]
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
export const CoreValues: FC<CoreValues> = ({}) => {
 

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
        titleStyle={{marginBottom:'56px'}}
         paneBgColor="white" style={{ paddingBottom: 100 }} mobileStyle={{ paddingBottom: 40 }}>
          <Hidden xs sm>
            <MainWrap id={AISOLUTION}>
            <HoveUp>
                <Card bg={1}>
                    {carouselDataList.map(item => 
                        <div className='carditem'>
                          <img src={imgurl+item.url} width={117}/>
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
            {/* <CarouselMobile dataList={carouselDataList}></CarouselMobile> */}
          </Visible>
        </Pane>
    );
  };

