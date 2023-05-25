import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import imgurl from '../../../img.url.js'

const MainWrap = styled.div`
    width: 1200px;
    padding: 80px 0;
    box-sizing:border-box;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 100%;
        padding: 40px 0 8px;
    }
    .title {
        font-size: 40px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 48px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
        margin-bottom: 46px;
        @media(max-width: 768px) {
            font-size: 24px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 32px;
            color: rgba(26, 26, 26, 1);
            margin-bottom: 0;
        }
    }
    .content{
        width: 1200px;
        img{
            display: block;
            margin: 0 auto;
            width: 1181px;
            height: 488px;
        }
    }
    .content-wap{
        width: 100%;
        padding: 32px 16px;
        .honor1{
            width: 100%;
            height: auto;
            margin-bottom: 32px;
        }
        .honor2{
            width: 100%;
            height: auto;
            margin-bottom: 0;
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
        transition: 1;
        opacity: 1;
        transform: translateY(0);
    }

    &.appear {
        transform: translateY(0);
        opacity: 1;
    }

    img{
        display: block;
        margin: 0 auto;
        width: 1181px;
        height: 488px;
    }
`

const AISOLUTION = 'tech_Core';
export const CoreAi: FC = () => {

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
            <ContentWrap id={AISOLUTION}>
            <Visible md lg xl xxl xxxl>
                <div className="title">百余项核心AI技术专利，赢得行业广泛认可</div>
                <div class="content">
                    <img src={imgurl+'/honor-pc.png'} alt="" />
                </div>
            </Visible>
            <Visible xs sm>
                <div className="title">百余项核心AI技术专利<br />赢得行业广泛认可</div>
                <div class="content-wap">
                    <img className="honor1" src={imgurl+'/honor-wap-tech-1.png'} alt="" />
                    <img className="honor2" src={imgurl+'/honor-wap-tech-2.png'} alt="" />
                </div>
            </Visible>
            </ContentWrap>
        </MainWrap>
    )
}