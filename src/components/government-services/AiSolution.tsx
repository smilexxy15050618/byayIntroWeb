import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Pane from '../../components/homepage/version2023/Pane';
import { Hidden, Visible } from 'react-grid-system';
import ByProgressSwiper from '../common/ByProgressSwiper';
import imgurl from '../../../img.url.js'

interface  SceneSolution{
}

const carouselDataList = [
    {
        title:'统一运营',
        content:'支持电话、短信、邮件、微信、APP、网页、H5、公众号、抖音/快手等全渠道',
        url: '/government-sue-1.svg'
    },{
        title:'快速响应',
        content:'富媒体通讯服务平台，沟通形式灵活运用于咨询、办理、通知回访各场景，快捷支持服务需求',
        url: '/government-sue-2.svg'
    },{
        title:'主动触达',
        content:'覆盖智能接待、内部协同服务全流程，主动服务，有效提升内外协同的便捷性',
        url: '/government-sue-3.svg'
    },{
        title:'降本增效',
        content:'智能外呼+智能接待+智能质检+智能辅助，构建智能服务大脑，打造智能化群众服务平台',
        url: '/government-sue-4.svg'
    }
]

const Wrapper = styled.div`
    .Bigtitle{
        padding: 40px 0;
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;
        color: rgba(0, 0, 0, 1);
        text-align: center;
    }
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
    height: 234.19px;
    opacity: 1;
    border-radius: 8px;
    background: rgba(43,88,249,1);
    position: relative;
    &:hover {
        transform: translateY(-8px);
        @media (max-width: 768px) {
            transform: none;
        }
        transition: all 1s;
    }
    img{
        position: absolute;
        right: 0;
        margin:0;
    }
    .textt_area{
        position: absolute;
        width: 236px;
        height: 112px;
        left: 24px;
        top: 60px;
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
            text-align: justify;
        }
    }
   }
`

const MainWrap = styled.div`
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      position: relative;
      opacity: 1;
    }
`

const SolutionWap = styled.div`
    width: 100%;
    padding-bottom: 40px;
    @media (max-width: 768px) {
        .swiper-slide {
        width: 180px !important;
        }
        .custom-bar-wrapper{
            width: 300px;
        }
    }
    .solution-item{
        position: relative;
        width: 180px;
        height: 192px;
        padding: 56px 18px 0;
        border-radius: 8px;
        background: rgba(43, 88, 249, 1);
        box-sizing: border-box;
        img{
            position: absolute;
            right: 0;
            top: 0;
            width: 120px;
            height: 120px;
        }
        .title{
            font-size: 16px;
            font-weight: 600;
            color: rgba(255, 255, 255, 1);
        }
        .subtitle{
            padding-top: 12px;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            color: rgba(255, 255, 255, 1);
        }
    }
`

const AISOLUTION = 'ai_jiejue_2918'
const AiSolution: FC<SceneSolution> = ({}) => {
 

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
    <Wrapper>
        <Visible md lg xl xxl xxxl>
            <Pane title="核心价值"
            titleStyle={{marginBottom:'40px'}}
            paneBgColor="white" style={{ paddingBottom: 78 }} mobileStyle={{ paddingBottom: 40 }}>
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
            </Pane>
        </Visible>
        <Visible xs sm>
        <div className="Bigtitle">核心价值</div>
        <SolutionWap id={AISOLUTION}>
            <ByProgressSwiper
                newProgress={true}
                initialSlide={0}
                slidesPerView="auto"
                autoplayDelay={5000}
                spaceBetween={16}
                centeredSlides={true}>
                {carouselDataList.map((item, i) => (
                // 算垂直百分比时应该用对应(margin或padding)/父元素width，得到其占比
                <div className='solution-item'>
                    <img src={imgurl+item.url} />
                    <div className='title'>
                        {item.title}
                    </div>
                    <div className='subtitle'>
                        {item.content}
                    </div>
                </div>
                ))}
            </ByProgressSwiper>
        </SolutionWap>
        </Visible>
    </Wrapper>
    );
  };
  
  
export default AiSolution;
