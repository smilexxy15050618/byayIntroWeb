import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const MainWrap = styled.div`
    width: 1200px;
    padding: 80px 0;
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
}
`

const StrateWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
        width: 432px;
        .copilot{
            font-size: 28px;
            font-weight: 500;
            line-height: 32px;
            color: rgba(26, 26, 26, 1);
        }
        .copilot-sub{
            padding: 8px 0 24px;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            color: rgba(90, 90, 90, 1);
        }
        .copilot-tag{
            span{
                display: inline-block;
                width: 136px;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                color: rgba(51, 51, 51, 1);
                &::before{
                    display: inline-block;
                    content: '';
                    width: 24px;
                    height: 24px;
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF7SURBVEiJvZfdkkQwEIVPZ/ehuJqg5rnwXMqwV/FSK3uRMYIkWrDnRhXh6z756UbgSjUS9FXON7Q0V+qh9Q8AIC0q7udod8Tw6mYIQxo1Jwg/WLUVCKX3OSeAANwNPgtdBDBmSJ/9PviotZFwsRig2upyKACQ6Na3ZvCV9ro0vBbw2eqh1bdBJ1mWm4xVW90OBWCfAwZ8qcXU+59pCdVIA74yWz1mSPIMesz8cZmshXdADPSzZYQMDJQGTPQIfzFknQOqGrk7daqRIrhvNepd6zbQ7Z51iWd1+uyd8EjoPphQTqtwAz8BfYN35pBEt4GfhAIAsYuCq8pEQpEUJKB/a16IVuZnoG+Hv4+9IzqotgbGPg4KTG2SKRJ31GCfkoKAaVVz7T6rqR/Doiz+Q9bvbAF7Hyd5xjoeY2VluwQD91nu6Di3zV70NuFD3eBJV8y5p7UFQmd1kmfreeEDUSMpyAcFOL8wwNyTBess9Z81EgAeA28CsY5OJmitP4zTwmyzAME6AAAAAElFTkSuQmCC');
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 15px;
                    vertical-align: -6px;
                }
            }
        }
        .copilot-list{
            padding-top: 44px;
            .copilot-list-dom{
                img{
                    width: 159px;
                    height: 21px;
                }
                div{
                    padding-top: 8px;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px;
                    color: rgba(90, 90, 90, 1);
                }
            }
        }
    }
    .right{
        width: 660px;
        height: 378px;
        img{
            width: 660px;
            height: 378px;
        }
    }
`

const copilotTag = [
    {name: '精准触达人群'},
    {name: '策略自动生成'},
    {name: '自动化运行 '},
    {name: '数据验证'},
]

const copilotList = [
    {
        img: 'copilot-1.svg',
        name: 'AI算法根据历史数据生成的客户模型标签，可精准圈选出目标人群；'
    },
    {
        img: 'copilot-2.svg',
        name: '输出策略搭建意图，系统自动匹配已有模版流程中相似度最高策略；'
    },
    {
        img: 'copilot-3.svg',
        name: '分析不同运营策略效果数据，根据prompt进行自动分析，得出结论。'
    }
]
export const Strategy: FC = () => {
    return (
        <MainWrap>
            <div className="title">策略智能</div>
            <div className="sec-title">策略自动生成、数据验证、自动化运行，提升关键指标和运营效率</div>
            <StrateWrap>
                <div className="left">
                    <div className="copilot">MA Copilot</div>
                    <div className="copilot-sub">一键拓展思路，高效生成运营策略</div>
                    <div className="copilot-tag">
                        {copilotTag.map((item, i) => {
                            return (
                                <span>{item.name}</span>
                            );
                        })}
                    </div>
                    <div className='copilot-list'>
                        {copilotList.map((item, i) => {
                            return (
                                <div className="copilot-list-dom">
                                    <img src={imgurl + item.img} />
                                    <div className="title">{item.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="right"><img src='/static/img2023/join-wap.png' /></div>
            </StrateWrap>
        </MainWrap>
    )
}