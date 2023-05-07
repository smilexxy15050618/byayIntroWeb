import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Pane from '../../../src/components/homepage/version2023/Pane';
import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperClass from 'swiper/types/swiper-class';
interface  SceneSolution{

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
   .carditem{
    width: 284px;
    height: 240px;
    opacity: 1;
    border-radius: 8px;
    background: rgba(43, 88, 249, 1);
    position: relative;
    transition: all 0.3s ease-in;
    &:hover{
        transform: translateY(-8px);
    }
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


const carouselDataList = [
    {
        title:'全渠道触点管理',
        content:'每个触点回流后导向下一次触点判断，提升再触达精准度和用户转化效率',
        url: '/use-bank-01.png'
    },{
        title:'私域联动多维触达',
        content:'为企业设计阶段性增长解决方案，优化沟通体验，提升用户的全生命周期价值',
        url: '/use-bank-02.png'
    },{
        title:'旅程自动化运营',
        content:'优化服务流程，有效降低人工时间成本和运营压力，助力企业营销提质增效',
        url: '/use-bank-03.png'
    },{
        title:'数字化全景运营',
        content:'拓宽自动化SOP的全场景应用边界，为企业构建并持续迭代精细化运营体系',
        url: '/use-bank-04.png'
    }
]
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
const AiSolution: FC<SceneSolution> = ({}) => {
 

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
                <Card>
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
        </Pane>
    );
  };
  
  
export default AiSolution;
