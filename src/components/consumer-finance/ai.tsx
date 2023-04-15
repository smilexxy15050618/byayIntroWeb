import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const titleList = [
    {
        title: '全生命周期用户运营',
        subTitle: '用户旅程触达策略设计分层用户精细化运营业务节点数据实时采集用户画像实时分析',
        url: '/run-01.png'
    },
    {
        title: '策略营销自动化',
        subTitle: '用户运营策略自动执行节点转化A/B测试自动化触达与分析数据自动回传',
        url: '/run-02.png'
    },
    {
        title: 'ROI导向策略优化',
        subTitle: '运营数据分析触达策略调优用户分层方案优化ROI持续提升',
        url: '/run-03.png'
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
 div:first-child { 
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(90, 90, 90, 1);
&:hover {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(43, 88, 249, 1);
}
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
            <div class="title">消费金融用户全渠道智能运营</div>
            <div class="desc">加强用户生命周期运营管理，以转化效果为导向，赋能消金机构运营效率提升100%，转化效果提升60%</div>
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
