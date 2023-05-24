import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import imgurl from '../../../img.url.js'

const MainWrap = styled.div`
    width: 1200px;
    padding: 80px 0 0;
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
        margin-bottom: 22px;
        text-align:center;
        @media(max-width: 768px) {
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 24px;
            margin-bottom: 32px;
            color: rgba(0, 0, 0, 1);
        }
    }
    .content{
        width: 1200px;
        @media(max-width: 768px) {
            width: 100%;
            height: auto;
        }
        img{
            width: 1142px;
            margin: 0 auto;
            @media(max-width: 768px) {
                width: 100%;
                height: auto;
                margin: 0;
            }
        }
    }
}
`

const ContentWrap = styled.div`
    width: 1200px;
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;

    @media(max-width: 768px) {
        width: 100%;
        height: auto;
        transition: none;
        opacity: 1;
    }

    &.appear {
        transform: translateY(0);
        opacity: 1;
    }
`


const AISOLUTION = 'tech_applicat';

export const ApplicationIndustry: FC = () => {

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
            <div className="title">数据智能</div>
            <ContentWrap id={AISOLUTION}>
                <Visible md lg xl xxl xxxl>
                    <div className="sec-title">利用大数据、人工智能和机器学习技术，挖掘数据价值、优化决策</div>
                    <div class="content">
                        <img src={imgurl+'/data-intell.png'} alt="" />
                    </div>
                </Visible>
                <Visible xs sm>
                <div className="sec-title">利用大数据、人工智能和机器学习技术<br />挖掘数据价值、优化决策</div>
                <div class="content">
                    <img src={imgurl+'/data-intell-wap.png'} alt="" />
                </div>
                </Visible>
            </ContentWrap>
        </MainWrap>
    )
}