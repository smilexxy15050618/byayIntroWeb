import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Visible, Hidden } from 'react-grid-system';

export interface IAiProps {};

const MainWrap = styled.div``

const Pane = styled.div`
    width: 1200px;
    padding: 267px 0 50px;
    box-sizing:border-box;
    margin: 0 auto;
    @media(max-width: 768px) {
        padding: 40px 0;
        }
    .title {
        font-size: 40px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 48px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
        margin-bottom: 16px;
    }
    .sec-title{
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 56px;
        text-align:center;
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
        display: inline-block
        width: 30px;
        height: 30px;
    }
    img.normal{
        display: inline-block;
    }
    img.active{
        display: none;
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
    margin-top: 16px;
    height: 472px;
    border-radius: 4.72px;
    background: rgba(246, 252, 255, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
        width: 506px;
        padding-left: 40px;
        box-sizing: border-box;
        .con-title{
            padding: 45px 0 30px;
            font-size: 26px;
            font-weight: 500;
            line-height: 37.76px;
            color: rgba(26, 26, 26, 1);
        }
        .con-subtitle{
            font-size: 16px;
            font-weight: 400;
            line-height: 32px;
            color: rgba(90, 90, 90, 1);
        }
        .ljzx{
            margin-top: 88px;
            width: 120px;
            height: 36px;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 36px;
            text-align: center;
            color: rgba(255, 255, 255, 1);
            border-radius: 4px;
            background: rgba(43, 88, 249, 1);
        }
    }
    .right{
        width: 694px;
        text-align: right;
        img{
            width: 636px;
            height: 200px;
        }
    }
`;

const labelInfo = [
    {
      name: '自建大模型',
      titleImg: 'intell-nav-1.png',
      activeImg: 'intell-nav-2.png',
      fontTitle: '基于深度学习技术，具备大规模预训练、微调（Fine-tuning）能力，能够对海量数据进行学习和训练，从而实现在多种NLP任务中的优异表现；在语义理解、生成创作、上下文理解、逻辑推理等方面具有优秀的模型能力。',
      imgs: 'intelligence-1.png'
    },
    {
        name: '只能语音技术',
        titleImg: 'intell-nav-3.png',
        activeImg: 'intell-nav-4.png',
        fontTitle: '基于深度学习技术，具备大规模预训练、微调（Fine-tuning）能力，能够对海量数据进行学习和训练，从而实现在多种NLP任务中的优异表现；在语义理解、生成创作、上下文理解、逻辑推理等方面具有优秀的模型能力。',
        imgs: 'intelligence-1.png'
    },
    {
        name: '全双工连续对话',
        titleImg: 'intell-nav-5.png',
        activeImg: 'intell-nav-6.png',
        fontTitle: '基于深度学习技术，具备大规模预训练、微调（Fine-tuning）能力，能够对海量数据进行学习和训练，从而实现在多种NLP任务中的优异表现；在语义理解、生成创作、上下文理解、逻辑推理等方面具有优秀的模型能力。',
        imgs: 'intelligence-1.png'
    },
    {
        name: '知识工程',
        titleImg: 'intell-nav-7.png',
        activeImg: 'intell-nav-8.png',
        fontTitle: '基于深度学习技术，具备大规模预训练、微调（Fine-tuning）能力，能够对海量数据进行学习和训练，从而实现在多种NLP任务中的优异表现；在语义理解、生成创作、上下文理解、逻辑推理等方面具有优秀的模型能力。',
        imgs: 'intelligence-1.png'
    },
    {
        name: '阅读理解',
        titleImg: 'intell-nav-10.png',
        activeImg: 'intell-nav-11.png',
        fontTitle: '基于深度学习技术，具备大规模预训练、微调（Fine-tuning）能力，能够对海量数据进行学习和训练，从而实现在多种NLP任务中的优异表现；在语义理解、生成创作、上下文理解、逻辑推理等方面具有优秀的模型能力。',
        imgs: 'intelligence-1.png'
    },
  ];


export const Ai: FC<IAiProps> = ({ }) => {
    const [currIndex, setCurrIndex] = useState(0);
    useEffect(() => {
        
    }, []);
    return (
    <MainWrap>
        <Pane>
            <div className="title">认知智能</div>
            <div className="sec-title">先进的认知智能算法和模型，高度模拟人类思维和理解的能力</div>
            <Hidden xs sm>
                <LabelList>
                {labelInfo.map((item, i) => {
                    return (
                    <LabelWrapper
                        onClick={() => {
                        setCurrIndex(i);
                        }}
                        className={i == currIndex ? 'active' : ''}>
                        <img className="normal" src={imgurl + item.activeImg} />
                        <img className="active" src={imgurl + item.titleImg} />
                        {item.name}
                    </LabelWrapper>
                    );
                })}
                </LabelList>
                <ContentWrapper>
                    <div className="left">
                        <div className="con-title">{labelInfo[currIndex].name}</div>
                        <div className="con-subtitle">{labelInfo[currIndex].fontTitle}</div>
                        <div onClick={() => window.open('/form?formType=1')} className="ljzx">
                            立即咨询
                        </div>
                    </div>
                    <div className="right">
                        <img src={imgurl + labelInfo[currIndex].imgs} />
                    </div>
                </ContentWrapper>
            </Hidden>
        </Pane>
    </MainWrap>
    );
};
