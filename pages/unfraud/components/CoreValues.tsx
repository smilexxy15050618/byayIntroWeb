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
        width: 236px;
        height: 112px;
        left:24px;
        top:60px;
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
    title:'AI技术实力领先，提升居民沟通体验',
    content:'全栈全自研的语音技术、智能对话技术，能够顺畅的进行语义理解和语言交互，提升居民沟通体验',
    url: '/gafz_hxjz1.png'
},{
    title:'知识内容沉淀深厚，提升AI灵敏度',
    content:'已沉淀1000+语料模型，确保上下文链接流畅自然，并能以引导式沟通获得关键信息，展现AI的专业灵敏度',
    url: '/gafz_hxjz2.png'
},{
    title:'及时性、强闭环，实现持续保护',
    content:'通过双通道反诈，在保障及时性预警劝阻措施同时，持续定期微信/电话回访，实现长期保护人民群众财产安全',
    url: '/gafz_hxjz3.png'
},{
    title:'场景覆盖丰富，提升宣传劝阻成效',
    content:'拥有150+话术场景，覆盖市面90%以上诈骗类型，反诈场景全面铺开，强力提升宣传劝阻成效',
    url: '/gafz_hxjz4.png'
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

