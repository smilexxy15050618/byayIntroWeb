import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const MainWrap = styled.div`
width: 1200px;
margin: 0 auto;
.title {
    font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
}
.content {
width: 100%;
height: 288px;
background: url(${imgurl}/gafz_yycj2.png) no-repeat;
background-size: 100% 100%;
position: relative;
margin-top: 58px;
transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
img {
    width: 288px;
    height: 255px;
    position: absolute;
    right: 0;
    top: 0;
}
}
`
const ApplicationIndustrys = 'ApplicationIndustrys'
export const ApplicationIndustry: FC = () => {
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(ApplicationIndustrys);
        new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 10, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            // .setClassToggle('.aitxs', 'appear')
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear')
                // console.log('进入');

                controller.destroy();
            });
    }, []);
    return (
        <MainWrap>
            <div className="title">应用场景</div>
            <div id={ApplicationIndustrys} className="content">
                <img src={imgurl+'/gafz_yycj.png'} alt="" />
            </div>
        </MainWrap>
    )
}