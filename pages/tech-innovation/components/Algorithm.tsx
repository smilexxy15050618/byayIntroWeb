import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const MainWrap = styled.div`    
    padding: 80px 0;
    background: rgba(246, 252, 255, 1);
    @media(max-width: 768px) {
        padding: 40px 0;
    }
    .wrapContent{
        transform: translateY(50%);
        transition: all 0.4s;
        opacity: 0;
        @media(max-width: 768px) {
            display: block;
            transform: translateY(0);
            transition: none;
            opacity: 1;
        }
        &.appear {
            transform: translateY(0);
            opacity: 1;
        }
    }
    .Bigtitle {
        font-size: 40px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 48px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
        margin-bottom: 56px;
        @media(max-width: 768px) {
            padding: 0 40px;
            font-size: 24px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 32px;
            color: rgba(26, 26, 26, 1);
            margin-bottom: 32px;
        }
    }
}
`

const AlgorithmList = styled.div`
    display: flex;
    width: 1200px;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 100%;
        padding: 0 16px;
        display: block;
    }
`

const AlgorItem = styled.div<{ backgroundColor?: string }>`
    position: relative;
    width: 384px;
    height: 400px;
    margin-right: 24px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 24px 0px rgba(52, 107, 183, 0.14);
    background:  ${props => props.backgroundColor};
    transition: all 1s;
    @media(max-width: 768px) {
        width: 100%;
        display: block;
        height: 270px;
        margin-right: 0;
        margin-bottom: 16px;
    }
    &:nth-child(1){
        &:hover{
            transition: all 1s;
            transform: translateY(-16px);
            .title{
                color: rgba(43, 88, 249, 1);
            }
            .subtitle{
                color: rgba(43, 88, 249, 1);
            }
        }
    }
    &:nth-child(2){
        &:hover{
            transition: all 1s;
            transform: translateY(-16px);
            .title{
                color: rgba(101, 67, 255, 1);
            }
            .subtitle{
                color: rgba(101, 67, 255, 1);
            }
        }
    }
    &:nth-child(3){
        margin-right: 0;
        &:hover{
            transition: all 1s;
            transform: translateY(-16px);
            .title{
                color: rgba(184, 67, 255, 1);
            }
            .subtitle{
                color: rgba(184, 67, 255, 1);
            }
        }
    }
    img{
        position: absolute;
        right: 0;
        top: 0;
        width: 186px;
        height: 164px;
        @media(max-width: 768px) {
            width: 196px;
            height: 163px;
        }

    }
    .title{
        padding: 56px 33px 16px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 40px;
        color: rgba(26, 26, 26, 1);
        @media(max-width: 768px) {
            font-size: 22px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 30px;
            color: rgba(26, 26, 26, 1);
        }
    }
    .subtitle{
        padding-left: 33px;
        font-size: 26px;
        font-weight: 400;
        line-height: 36px;
        color: rgba(51, 51, 51, 1);
        @media(max-width: 768px) {
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 24px;
            color: rgba(51, 51, 51, 1);
        }
    }
    .detail{
        padding: 72px 33px 0;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 32px;
        color: rgba(90, 90, 90, 1);
        @media(max-width: 768px) {
            padding: 40px 33px 0;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 22px;
            color: rgba(90, 90, 90, 1);
        }
    }
`
const AlgorithmTag  = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding-top: 46px;
    justify-content: center;
    @media(max-width: 768px) {
        width: 100%;
        flex-wrap: wrap;
        padding-top: 0;
        margin: 9px auto 0;
        justify-content: left;
    }
    .item{
        width: 240px;
        padding: 40px 30px 32px;
        text-align: center;
        &:hover{
            border-radius: 16px;
            background: rgba(255, 255, 255, 1);
            .tag-title{
                color: rgba(43, 88, 249, 1);
            }
        }
        @media(max-width: 768px) {
            width: 50%;
            padding: 35px 24px 32px;
            margin-right: 0;
        }
        &:nth-child(5){
            margin-right: 0;
        }
        img{
            display: block;
            width: 56px;
            height: 56px;
            margin: 0 auto;
            @media(max-width: 768px) {
                width: 48px;
                height: 48px;
                
            }
        }
        .tag-title{
            padding: 32px 0 16px;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 24px;
            color: rgba(0, 0, 0, 1);
            @media(max-width: 768px) {
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0px;
                line-height: 24px;
                color: rgba(0, 0, 0, 1);
            }
            
        }
        .tag-subtitle{
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
            @media(max-width: 768px) {
                font-size: 12px;
                font-weight: 400;
                line-height: 20px;
                color: rgba(90, 90, 90, 1);
            }
        }
    }
`

const list = [
    {
        title: '听得懂',
        subtitle: 'ASR语音识别',
        detail: '沉淀10+行业声学模型，采用8K声纹采集频率，可进行方言识别、热词矫正。识别准确率95%，语音情感分类正确率95%',
        backgroundImg: imgurl+'/algorithm-1.png',
        backgroundColor:'linear-gradient(150.94deg, rgba(153, 217, 255, 1) 0%, rgba(232, 251, 255, 1) 99.99%), rgba(255, 255, 255, 1)'
    },
    {
        title: '能理解',
        subtitle: 'NLP语义理解',
        detail: 'NLP能力基于BERT、ALBERT等模型拥有30+行业话术模板，覆盖50+场景，支持GPU、CPU实时训练，理解准确率高达96%',
        backgroundImg: imgurl+'/algorithm-2.png',
        backgroundColor:'linear-gradient(144.82deg, rgba(183, 214, 255, 1) 0%, rgba(239, 245, 255, 1) 100%), rgba(255, 255, 255, 1)'
    },
    {
        title: '会输出',
        subtitle: 'TTS语音合成',
        detail: '采用真人录音，丰富的TTS音色可选，高自然润率模型 ，支持合成音与真人录音结合。语音输出自然流畅，语音自然度远高于行业',
        backgroundImg: imgurl+'/algorithm-3.png',
        backgroundColor:'linear-gradient(146.87deg, rgba(230, 216, 255, 1) 0%, rgba(251, 251, 255, 1) 100%)'
    }
]

const tag = [
    {
        img: '/algorithm-tag-1.png',
        title: '大模型参数',
        content: '自训练大语言模型提高语言理解和泛化能力，自建大模型参数在100亿-300亿之间'
    },
    {
        img: '/algorithm-tag-2.png',
        title: '场景包模型',
        content: '累计沉淀出场景包模型30+，每个场景包知识库数量300+，识别准确率90%+'
    },
    {
        img: '/algorithm-tag-3.png',
        title: 'AI对话引擎',
        content: '50+核心模块，支撑全双工、主动式对话引导、高拟人度的对话管理'
    },
    {
        img: '/algorithm-tag-4.png',
        title: '知识体系',
        content: '4级知识体系，5000+的知识点数量，覆盖零售、金融、公安等多个行业应用场景'
    },
    {
        img: '/algorithm-tag-5.png',
        title: '实体识别',
        content: '支持实体识别类型200+，重点关注关键信息，支撑用户精细化的意图理解和响应'
    }
]

const AISOLUTION = 'tech_Algor';

export const Algorithm: FC = () => {

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
            <div className="Bigtitle">深度应用AI语音语义三大算法，更优质的人机交互体验</div>
            <div className="wrapContent" id={AISOLUTION}>
                <AlgorithmList>
                    {list.map((item, i) => {
                        return (
                            <AlgorItem backgroundColor={item.backgroundColor}>
                                <img src={item.backgroundImg} />
                                <div className="title">{item.title}</div>
                                <div className="subtitle">{item.subtitle}</div>
                                <div className="detail">{item.detail}</div>
                            </AlgorItem>
                        );
                    })}
                </AlgorithmList>
                <AlgorithmTag>
                    {tag.map((item, i) => {
                        return (
                            <div className="item">
                                <img src={imgurl + item.img} />
                                <div className="tag-title">{item.title}</div>
                                <div className="tag-subtitle">{item.content}</div>
                            </div>
                        );
                    })}
                </AlgorithmTag>
            </div>
        </MainWrap>
    )
}