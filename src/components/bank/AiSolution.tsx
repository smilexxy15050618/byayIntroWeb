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
        url: '/bank-scene-1.png',
        title:'个人金融部',
        content:[
            {name: '投资理财'},
            {name: '支付预算'},
            {name: '贷款业务'},
            {name: '卡片通知'},
            {name: '储蓄业务'}
        ],
    },
    {
        url: '/back-scene-2.png',
        title:'信用卡中心',
        content:[
            {name: '交叉营销'},
            {name: '电子渠道'},
            {name: '通知服务'},
            {name: '分期营销'},
            {name: '财富产品'}
        ],
    },
    {
        url: '/back-scene-3.png',
        title:'电子银行部',
        content:[
            {name: '手机银行'},
            {name: '微信银行'},
            {name: '网上银行'}
        ],
    },
    {
        url: '/back-scene-4.png',
        title:'小微企业部',
        content:[
            {name: '贷款业务'},
            {name: '综合开发'},
            {name: '大额异动'}
        ],
    },
    {
        url: '/back-scene-5.png',
        title:'直销银行',
        content:[
            {name: '开户及入金'},
            {name: '电子银行'},
            {name: '财富产品'}
        ],
    }
]

const Wrapper = styled.div`
    background: rgba(246, 252, 255, 1);
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
    width: 224px;
    height: 325px;
    border-radius: 8px;
    cursor: pointer;
    background: rgba(255, 255, 255, 1);
    transition: all 0.3s ease-in;
    margin-right: 20px;
    &:nth-child(5){
        margin-right: 0;
    }
    &:hover{
        transform: translateY(-8px);
        .title{
            color: rgba(43, 88, 249, 1);
        }
    }
    img{
        display: block;
        width: 46px;
        height: 46px;
        margin: 27px auto 20px;
    }
    .title{
        width: 184px;
        margin: 0 auto;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        padding-bottom: 20px;
        text-align: center;
        color: rgba(26, 26, 26, 1);
        border-bottom: 1px solid rgba(240, 240, 240, 1);
    }
    &:nth-child(3),&:nth-child(4),&:nth-child(5){
        .tag-label{
            &::after{
                position: absolute;
                content: '…';
                left: 50%;
                bottom: 10px;
            }
            span{
                width: 100%;
            }
        }
    }
    .tag-label{
        position: relative;
        width: 184px;
        margin: 0 auto;
        padding: 25px 0;
        span{
            display:inline-block;
            width: 50%;
            margin-bottom: 14px;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: rgba(26, 26, 26, 1);
            text-align: center;
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
        .custom-bar-wrapper{
            width: 300px;
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
            <Pane title="应用场景"
            titleStyle={{marginBottom:'40px'}} style={{ paddingBottom: 80, background: 'rgba(246, 252, 255, 1)' }} mobileStyle={{ paddingBottom: 40 }}>
            <MainWrap id={AISOLUTION}>
                <HoveUp>
                    <Card>
                        {carouselDataList.map(item => 
                            <div className='carditem'>
                                <img src={imgurl+item.url} />
                                <div className='title'>{item.title}</div>
                                <div className='tag-label'>
                                    {item.content.map(items => 
                                       <span>{items.name}</span>
                                    )}
                                </div>
                            </div>
                        )}
                    </Card>
                </HoveUp>
            </MainWrap>
            </Pane>
        </Visible>
        <Visible xs sm>
        <div className="Bigtitle">深耕行业多年的产品服务优势</div>
        <SolutionWap id={AISOLUTION}>
            <ByProgressSwiper
                newProgress={true}
                initialSlide={0}
                contentPadding="32px"
                progressPadding="0px"
                previewWidth="200px">
                {carouselDataList.map((item, i) => (
                // 算垂直百分比时应该用对应(margin或padding)/父元素width，得到其占比
                <div className='carditem'>
                    <img src={imgurl+item.url} />
                    <div className='title'>{item.title}</div>
                    <div className='tag-label'>
                        {item.content.map(items => 
                            <span>{items.name}</span>
                        )}
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
