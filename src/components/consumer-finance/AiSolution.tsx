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
        title:'丰富的行业知识库',
        content:'覆盖各业务场景的丰富知识库，知识库覆盖率达90%，准确率达95%',
        url: '/use-bank-01.png'
    },{
        title:'资深行业运营经验',
        content:'专业运营服务团队，众多行业标杆客户服务案例，运营效果行业领先',
        url: '/use-bank-02.png'
    },{
        title:'精准的营销触达',
        content:'用户精准分层，过滤无效用户，避免无差别同质化营销，提高用户体验',
        url: '/use-bank-03.png'
    },{
        title:'数据安全保障',
        content:'隐私计算、数据加密等成熟技术方案，保障数据传输、存储及应用安全',
        url: '/use-bank-04.png'
    },{
        title:'开放平台支持',
        content:'开放的系统级数据导入、导出能力，便捷实现与业务系统打通',
        url: '/use-bank-05.png'
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
    .solution-item{
        position: relative;
        width: 180px;
        height: 192px;
        padding: 72px 18px 0;
        border-radius: 8px;
        background: rgba(43, 88, 249, 1);
        box-sizing: border-box;
        img{
            position: absolute;
            right: 0;
            top: 0;
            width: 90px;
            height: 90px;
        }
        .title{
            font-size: 16px;
            font-weight: 600;
            color: rgba(255, 255, 255, 1);
        }
        .subtitle{
            padding-top: 10px;
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
            titleStyle={{marginBottom:'56px'}}
            paneBgColor="white" style={{ paddingBottom: 100 }} mobileStyle={{ paddingBottom: 40 }}>
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
        <div className="Bigtitle">深耕行业多年的产品服务优势</div>
        <SolutionWap id={AISOLUTION}>
            <ByProgressSwiper
                newProgress={true}
                initialSlide={0}
                contentPadding="32px"
                progressPadding="0px"
                previewWidth="170px">
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
