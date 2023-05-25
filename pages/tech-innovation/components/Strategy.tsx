import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Visible, Hidden } from 'react-grid-system';

const MainWrap = styled.div`
    width: 1200px;
    padding: 80px 0;
    box-sizing:border-box;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 100%;
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
        @media(max-width: 768px) {
            font-size: 24px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 32px;
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
        @media(max-width: 768px) {
            margin-bottom: 32px;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 24px;
            color: rgba(0, 0, 0, 1);
            text-align: center;
        }
    }
}
`

const StrateWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear {
        transform: translateY(0);
        opacity: 1;
    }

    @media(max-width: 768px) {
        display: block;
        transition: none;
        opacity: 1;
    }
    .left{
        width: 432px;
        @media(max-width: 768px) {
            width: 100%;
            padding: 0 27px;
        }
        .copilot{
            font-size: 28px;
            font-weight: 500;
            line-height: 32px;
            color: rgba(26, 26, 26, 1);
            @media(max-width: 768px) {
                font-size: 22px;
                font-weight: 500;
                letter-spacing: 0px;
                line-height: 30px;
                color: rgba(26, 26, 26, 1);
            }
        }
        .copilot-sub{
            padding: 8px 0 24px;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            color: rgba(90, 90, 90, 1);
        }
        .copilot-tag{
            width: 407px;
            @media(max-width: 768px) {
                width: 100%;
            }
            span{
                display: inline-block;
                width: 136px;
                font-size: 14px;
                font-weight: 400;
                height: 24px;
                margin-bottom: 8px;
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
            @media(max-width: 768px) {
                padding-top: 40px;
            }
            .copilot-list-dom{
                padding-bottom: 17px;
                @media(max-width: 768px) {
                    padding-bottom: 20px;
                }
                img{
                    width: 159px;
                    height: 21px;
                    @media(max-width: 768px) {
                        display: block;
                        margin: 0;
                    }
                }
                .cop-title{
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
        position: relative;
        width: 660px;
        height: 378px;
        &::after{
            position: absolute;
            right: 0;
            top: 0;
            z-index: 1;
            content: '';
            width: 640px;
            height: 389px;
            border-radius: 8px;
            background: rgba(246, 252, 255, 1);
        }
        @media(max-width: 768px) {
            width: 100%;
            height: auto;
            padding: 20px 16px 0;
            &::after{
                display: block;
                position: absolute;
                right: 16px;
                top: 10px;
                z-index: 1;
                content: '';
                width: calc(100% - 42px);
                height: calc(100% - 15px);
                border-radius: 8px;
                background: rgba(246, 252, 255, 1);
            }
        }
        video{
            position: relative;
            z-index: 2;
            width: 640px;
            height: 378px;
            margin-top: 11px;
            margin-right: 20px;
            border-radius: 8px;
            @media(max-width: 768px) {
                width: calc(100% - 10px);
                height: auto;
                margin: 0;
            }
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
        img: '/copilot-1.svg',
        name: 'AI算法根据历史数据生成的客户模型标签，可精准圈选出目标人群；'
    },
    {
        img: '/copilot-2.svg',
        name: '输出策略搭建意图，系统自动匹配已有模版流程中相似度最高策略；'
    },
    {
        img: '/copilot-3.svg',
        name: '分析不同运营策略效果数据，根据prompt进行自动分析，得出结论。'
    }
]

const AISOLUTION = 'tech_Strategy';

export const Strategy: FC = () => {

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
            videoContent.classList.add('appear');
            controller.destroy();
        });
    }, []);

    return (
        <MainWrap>
            <div className="title">策略智能</div>
            
            <Visible md lg xl xxl xxxl>
                <div className="sec-title">策略自动生成、数据验证、自动化运行，提升关键指标和运营效率</div>
            </Visible>
            <Visible xs sm>
                <div className="sec-title">策略自动生成、数据验证、自动化运行<br />提升关键指标和运营效率</div>
            </Visible>
            <StrateWrap id={AISOLUTION}>
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
                                    <div className="cop-title">{item.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="right">
                    <video
                        src={imgurl+'/策略智能.mp4'}
                        controls
                        playsInline
                    />
                </div>
            </StrateWrap>
        </MainWrap>
    )
}