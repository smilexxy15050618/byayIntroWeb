import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const MainWrap = styled.div`    
    padding: 80px 0;
    background: rgba(246, 252, 255, 1);
    @media(max-width: 768px) {
        padding: 40px 0;
    }
    .Bigtitle {
        font-size: 40px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 48px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
        margin-bottom: 56px;
    }
}
`

const AlgorithmList = styled.div`
    display: flex;
    width: 1200px;
    margin: 0 auto;
    .item{
        
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
    &:nth-child(3){
        margin-right: 0;
    }
    img{
        position: absolute;
        right: 0;
        top: 0;
        width: 186px;
        height: 164px;

    }
    .title{
        padding: 56px 33px 16px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 40px;
        color: rgba(26, 26, 26, 1);
    }
    .subtitle{
        padding-left: 33px;
        font-size: 26px;
        font-weight: 400;
        line-height: 36px;
        color: rgba(51, 51, 51, 1);
    }
    .detail{
        padding: 72px 33px 0;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 32px;
        color: rgba(90, 90, 90, 1);
    }
`
const AlgorithmTag  = styled.div`
    width: 1200px;
    margin: 40px auto 0;
    display: flex;
    padding-top: 46px;
    justify-content: center;
    .item{
        width: 180px;
        margin-right: 60px;
        text-align: center;
        &:nth-child(5){
            margin-right: 0;
        }
        img{
            display: block;
            width: 56px;
            height: 56px;
            margin: 0 auto;
        }
        .tag-title{
            padding: 32px 0 16px;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 24px;
            color: rgba(0, 0, 0, 1);
        }
        .tag-subtitle{
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
        }
    }
`

const list = [
    {
        title: '听得懂',
        subtitle: 'ASR语音识别',
        detail: '沉淀10+行业声学模型，采用8K声纹采集频率，可进行方言识别、热词矫正。识别准确率95% 语音情感分类正确率95%',
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
        detail: '采用真人录音，丰富的TTS音色可选，高自然润率模型 ，支持合成音与真人录音结合。语音输出自然流畅，语音自然度远高于行业。',
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

export const Algorithm: FC = () => {
    return (
        <MainWrap>
            <div className="Bigtitle">深度应用AI语音语义三大算法，更优质的人机交互体验</div>
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
                            <img src={'static/img2023' + item.img} />
                            <div className="tag-title">{item.title}</div>
                            <div className="tag-subtitle">{item.content}</div>
                        </div>
                    );
                })}
            </AlgorithmTag>
        </MainWrap>
    )
}