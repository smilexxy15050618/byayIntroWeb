import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const titleList = [
    {
        title: '三大保障&提升方案',
        subTitle: '自研产品，全面保障用户体验专业知识库，运营效率不断提升行业方法论，保障外呼效果全面运营服务，为效果负责',
        url: '/internet-solution-1.svg'
    },
    {
        title: '高转化模型测试',
        subTitle: '自研产品，全面保障用户体验专业知识库，运营效率不断提升行业方法论，保障外呼效果全面运营服务，为效果负责',
        url: '/internet-solution-2.svg'
    },
    {
        title: '全流程智能化、自动化',
        subTitle: '人群精细拆分，千人千面策略运营用户数据分析，规划运营增长旅途智能、流畅、自然，提升用户体验',
        url: '/internet-solution-3.svg'
    },
]
export type IAiProps = {};
    const Pane = styled.div`
    padding: 80px 0;
    .title {
        font-size: 40px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 48px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
    }
    .desc {
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 32px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        margin: 16px auto 40px;
    }
`
const ListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 448px;
    .lists {
        width: 296px;
        
    }
    .imgWrapper {
        width: 888px;
        height: 448px;
        border-radius: 8px;
        background: rgba(246, 252, 255, 1);
        box-sizing: border-box;
    }
    img {
        width: 100%;
        height: 448px;
        margin: 0;
    }
`
const ListItem = styled.div`
    width: 296px;
    height: 104px;
    padding-top: 38px;
    padding-left: 40px;
    background: rgba(246, 252, 255, 1);
    margin-bottom: 8px;
    border-radius: 8px;
    box-sizing:border-box;
    &:hover{
        cursor: pointer;
        div:first-child{
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 24px;
            color: rgba(43, 88, 249, 1);
        }
    }
 div:first-child { 
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(90, 90, 90, 1);
 }
 &.active {
    width: 296px;
    height: 224px;
    background: rgba(43, 88, 249, 1);
    color: rgba(255, 255, 255, 1);
    padding: 40px 46px 48px 40px;
    box-sizing: border-box;
    div:first-child {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 16px;
    }
    div:last-child {
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }
 }
`
const MainWrap = styled.div`
.aitxs{
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
}

`
const AiTSXID = 'aitsx';
const AI: FC<IAiProps> = ({ }) => {
    const [currIndex, setCurrIndex] = useState(0);
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(AiTSXID);
          new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 10, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
          })
            .setClassToggle('.aitxs', 'appear')
            .addTo(controller)
            .on('enter', () => {
                // videoContent.classList.add('appear')
                // console.log('进入');
                
                controller.destroy();
            });
      }, []);
    return (
    <MainWrap id={AiTSXID} >
        <Pane>
            <div class="title">以数智化助力互联网企业增长，提升用户活跃度</div>
            <div class="desc">助力品牌激活会员、高效转化、差异化触达营销，实现运营效率质变</div>
            <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
            <div className='aitxs'>
                <ListWrapper>
                    <div class="lists">
                    {titleList.map(({ title, subTitle }, index) => {
                        return (
                                <ListItem 
                                    className={index==currIndex?'animate__animated animate__fadeIn animate__ahead_300ms active':''} 
                                    onClick={()=>setCurrIndex(index)}
                                >
                                    <div>{title}</div>
                                    {index==currIndex&&<div>{subTitle}</div>}
                                </ListItem>
                        )
                    })}
                    </div>
                    <div class="imgWrapper">
                         <img src={`${imgurl}${titleList[currIndex].url}`} />
                    </div>
                </ListWrapper>
            </div>
            </div>
        </Pane>
    </MainWrap>

    );
};

export default AI;
