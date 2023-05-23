import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Visible, Hidden } from 'react-grid-system';
import imgurl from '../../../img.url.js'

export interface IAiProps {};

const MainWrap = styled.div``

const Pane = styled.div`
    width: 1200px;
    padding: 267px 0 50px;
    box-sizing:border-box;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 100%;
        padding: 344px 0 50px;
    }
    .title {
        font-size: 40px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 48px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
        margin-bottom: 16px;
        @media (max-width: 768px) {
            padding-top: 40px;
            font-size: 24px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 40px;
            color: rgba(0, 0, 0, 1);
        }
    }
    .sec-title{
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 56px;
        text-align:center;
        @media (max-width: 768px) {
            line-height: 24px;
            margin-bottom: 32px;
        }
        
    }
`

const LabelList = styled.div`
  height: 64px;
  line-height: 64px;
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  background: rgba(246, 252, 255, 1);
`;

const LabelWrapper = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: rgba(90, 90, 90, 1);
    cursor: pointer;
    flex: 1;
    text-align: center;
    img{
        display: inline-block;
        width: 28px;
        height: 28px;
        margin-right: 10px;
        margin-bottom: 0;
    }
    img.normal{
        display: inline-block;
    }
    img.active{
        display: none;
    }
    &:hover{
        color: rgba(43, 88, 249, 1);
    }
    &.active {
        color: #fff;
        border-radius: 4px;
        background: rgba(43, 88, 249, 1);
        img.normal{
            display: none;
        }
        img.active{
            display: inline-block;
        }
    }
`;

const ContentWrapper = styled.div`
    position: relative;
    margin-top: 16px;
    height: 472px;
    border-radius: 4.72px;
    background: rgba(246, 252, 255, 1);
    img{
        display: block;
        margin: 0 auto;
         width:1200px;
        height: 280px;
    }
    
    .con-title{
        padding: 45px 40px 0;
        font-size: 26px;
        font-weight: 500;
        line-height: 37.76px;
        color: rgba(26, 26, 26, 1);
    }
    .ljzx{
        position: absolute;
        left: 40px;
        bottom: 60px;
        width: 120px;
        height: 36px;
        font-size: 16px;
        font-weight: 400;
        line-height: 36px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        border-radius: 4px;
        background: rgba(43, 88, 249, 1);
    }
`;

const LabelListWap = styled.div`
    display: flex;
    margin-left: 16px;
    border-radius: 4px;
    background: rgba(246, 252, 255, 1);
    .one-slide{
        width: 150px;
        height: 52px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 52px;
        color: rgba(90, 90, 90, 1);
        text-align: center;
        img{
            display: inline-block;
            width: 24px;
            height: 24px;
            margin-right: 8px;
            margin-bottom: 0;
        }
        img.normal{
            display: inline-block;
        }
        img.active{
            display: none;
        }
    }
    .one-slide-active{
        color: #fff;
        border-radius: 4px;
        background: rgba(43, 88, 249, 1);
        img.normal{
            display: none;
        }
        img.active{
            display: inline-block;
        }
    }
`

const LabelContentWap = styled.div`
    margin: 24px 16px;
    border-radius: 4.72px;
    background: rgba(246, 252, 255, 1);
`

const labelInfo = [
    {
      name: '自建大模型',
      titleImg: '/intell-nav-1.png',
      activeImg: '/intell-nav-2.png',
      imgs: '/intelligence-1.png'
    },
    {
        name: '智能语音技术',
        titleImg: '/intell-nav-3.png',
        activeImg: '/intell-nav-4.png',
        imgs: '/intelligence-2.png'
    },
    {
        name: '全双工连续对话',
        titleImg: '/intell-nav-5.png',
        activeImg: '/intell-nav-6.png',
        imgs: '/intelligence-3.png'
    },
    {
        name: '知识工程',
        titleImg: '/intell-nav-7.png',
        activeImg: '/intell-nav-8.png',
        imgs: '/intelligence-4.png'
    },
    {
        name: '阅读理解',
        titleImg: '/intell-nav-10.png',
        activeImg: '/intell-nav-11.png',
        imgs: '/intelligence-5.png'
    },
  ];

  const labelInfoWap = [
    {
      name: '自建大模型',
      titleImg: '/intell-nav-wap-1.png',
      activeImg: '/intell-nav-wap-2.png',
      fontTitle: '基于深度学习技术，具备大规模预训练、微调（Fine-tuning）能力，能够对海量数据进行学习和训练，从而实现在多种NLP任务中的优异表现；在语义理解、生成创作、上下文理解、逻辑推理等方面具有优秀的模型能力。',
      imgs: '/intelligence-wap-1.png'
    },
    {
        name: '智能语音技术',
        titleImg: '/intell-nav-wap-3.png',
        activeImg: '/intell-nav-wap-4.png',
        fontTitle: '',
        imgs: '/intelligence-wap-2.png'
    },
    {
        name: '全双工连续对话',
        titleImg: '/intell-nav-wap-5.png',
        activeImg: '/intell-nav-wap-6.png',
        fontTitle: '基于语音增强：降噪、声音增强、角色分离等方式，改善语音信号的质量和可理解性；通过智能打断，实现智能对话流程控制，百应科技全双工连续对话技术，实现听说状态的实时切换，使人机对话更加贴近真实的人际沟通。',
        imgs: '/intelligence-wap-3.png'
    },
    {
        name: '知识工程',
        titleImg: '/intell-nav-wap-7.png',
        activeImg: '/intell-nav-wap-8.png',
        fontTitle: '',
        imgs: '/intelligence-wap-4.png'
    },
    {
        name: '阅读理解',
        titleImg: '/intell-nav-wap-10.png',
        activeImg: '/intell-nav-wap-11.png',
        fontTitle: '',
        imgs: '/intelligence-wap-5.png'
    },
  ];


export const Ai: FC<IAiProps> = ({ }) => {
    const [currIndex, setCurrIndex] = useState(0);
    const [controlledSwiper, setControlledSwiper] = useState(null);

    useEffect(() => {
        
    }, []);
    return (
    <MainWrap>
        <Pane>
            <div className="title">认知智能</div>
            <Visible md lg xl xxl xxxl>
                <div className="sec-title">先进的认知智能算法和模型，高度模拟人类思维和理解的能力</div>
            </Visible>
            <Visible xs sm>
                <div className="sec-title">先进的认知智能算法和模型<br />高度模拟人类思维和理解的能力</div> 
            </Visible>     
            <Hidden xs sm>
                <LabelList>
                {labelInfo.map((item, i) => {
                    return (
                    <LabelWrapper
                        onClick={() => {
                        setCurrIndex(i);
                        }}
                        className={i == currIndex ? 'active' : ''}>
                        <img className="normal" src={imgurl + item.titleImg} />
                        <img className="active" src={imgurl + item.activeImg} />
                        {item.name}
                    </LabelWrapper>
                    );
                })}
                </LabelList>
                <ContentWrapper>
                    <div className="con-title">{labelInfo[currIndex].name}</div>
                    <img src={imgurl+labelInfo[currIndex].imgs} className={'img'+currIndex} />
                    <div onClick={() => window.open('/form?formType=1')} className="ljzx">
                        立即咨询
                    </div>
                </ContentWrapper>
            </Hidden>
            <Visible xs sm>
                <LabelListWap>
                    <Swiper
                        slidesPerView="auto"
                        onSwiper={swiper => setControlledSwiper(swiper)}
                    >
                        {labelInfoWap.map((item, navIndex) => {
                            return (
                            <SwiperSlide 
                                className={currIndex == navIndex ? 'one-slide-active one-slide' : 'one-slide'} 
                                key={navIndex} 
                                onClick={() => {
                                    setCurrIndex(navIndex)
                                }}
                            >
                                <img className="normal" src={'static/img2023' + item.activeImg} />
                                <img className="active" src={'static/img2023' + item.titleImg} />
                                {item.name}
                            </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </LabelListWap>
                <LabelContentWap>

                </LabelContentWap>
            </Visible>
        </Pane>
    </MainWrap>
    );
};
