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
        title:'降本增效<br />长效运营',
        content:'搭建统一的知识库后台，<br />沉淀公安业务知识，重复<br />性常规性问题，机器人可<br />以做到100%标准专业回复',
        url: '/goan-use-1.png'
    },{
        title:'精准触达<br />千人千面',
        content:'通过居民画像打标，熟知<br />每个居民特征特性，协助<br />民警在1对1的沟通中提供<br />更加精准的便民服务',
        url: '/goan-use-2.png'
    },{
        title:'及时响应<br />满意度提升',
        content:'AI民警7*24小时全天候服<br />务，及时响应居民咨询，<br />提升基层工作，提升便民<br />服务效能和群众满意度',
        url: '/goan-use-3.png'
    },{
        title:'形象统一<br />公信力强',
        content:'树立统一的公安形象，如<br />果辖区民警有人员变化，<br />不用重新与居民建立关联<br />关系，居民有问题依然会<br />直接找虚拟民警',
        url: '/goan-use-4.png'
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
    width: 288px;
    height: 240px;
    opacity: 1;
    border-radius: 8px;
    background: rgba(43, 88, 249, 1);
    position: relative;
    transition: all 0.3s ease-in;
    margin-right: 16px;
    &:nth-child(4){
        margin-right: 0;
    }
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
        width: 240px;
        left:22px;
        top:30px;
        .title_area{
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
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
        padding: 18px 0 0 18px;
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
                                    <div className='title_area' dangerouslySetInnerHTML={{ __html: item.title }}></div>
                                    <div className='cont_area' dangerouslySetInnerHTML={{ __html: item.content }}></div>
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
                centeredSlides={true}
              >
                {carouselDataList.map((item, i) => (
                // 算垂直百分比时应该用对应(margin或padding)/父元素width，得到其占比
                <div className='solution-item'>
                    <img src={imgurl+item.url} />
                    <div className='title' dangerouslySetInnerHTML={{ __html: item.title }}></div>
                    <div className='subtitle' dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </div>
                ))}
            </ByProgressSwiper>
        </SolutionWap>
        </Visible>
    </Wrapper>
    );
  };
  
  
export default AiSolution;
