import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Visible } from 'react-grid-system';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';

const list = [
    {
        img: '/tj_i.png',
        banner: '/tj.png',
        content: '打造全国反诈成效逆势上扬的“天津样板”。'
    },
    {
        img: '/dg_i.png',
        banner: '/dg.png',
        content: '高发诈骗类型精准圈定，实效助力反诈指标“双降”。'
    },
    {
        img: '/lp_i.png',
        banner: '/lp.png',
        content: '宣传劝阻全量铺开，首创百万级居民反诈“新路径”。'
    }
]

const Wrapper = styled.div`
width: 100%;
height: 650px;
background: #F6FCFF;
@media(max-width: 768px) {
    height: 569px;
}
`
const MainWrapper = styled.div`
width: 1200px;
margin: 0 auto;
padding: 82px 0 100px;
@media(max-width: 768px) {
    width: 100vw;
    padding: 40px 0 40px;
    .custom-bar-wrapper{
        width: 300px;
      }
}
`
const Title = styled.div`
font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
margin-bottom: 56px;
@media(max-width: 768px) {
    font-size: 24px;
font-weight: 500;
letter-spacing: 0px;
line-height: 40px;
color: rgba(0, 0, 0, 1);
margin-bottom: 40px;
}
`
const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
`
const ListItem = styled.div`
width: 378px;
height: 364px;
border-radius: 8px;
background: rgba(255, 255, 255, 1);
box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
overflow: hidden;
position: relative;
@media(max-width: 768px) {
    width: 300px;
    height: 356px;
}
.banner {
    width: 100%;
    height: 160px;
    &::after {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 160px;
        border-radius: 8px 8px, 0px, 0px;
        background: #2B58F9;
        opacity: 0.2;
    }
}
.detail {
    padding: 22px 24px 0 24px;
    img {
        width: 260px;
        height: 26px;
    }
    div:nth-child(2) {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: -0.17px;
        line-height: 26px;
        color: rgba(0, 0, 0, 1);
        margin-top: 17px;
    }
    div:last-child {
        font-size: 16px;
        font-weight: 500;
        color: rgba(43, 88, 249, 1);
        position: absolute;
        bottom: 32px;
        cursor: pointer;
        &::after {
              content: ' →';
            }
        &:hover {
            &::after {
              content: ' →';
            }
             text-decoration: underline;
          }
    }
}
`
const UNFRAUD = 'unfraud_case'
export const CustomerStories: FC = () => {
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(UNFRAUD);
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
        <Wrapper>
            <MainWrapper>
                <Visible md lg xl xxl xxxl>
                <Title>客户案例</Title>
                <ListWrapper id={UNFRAUD}>
                    {
                        list.map(({ img, banner, content }, index) => {
                            return (
                                <ListItem>
                                    <div style={{ background: `url(${imgurl}${banner})`, backgroundSize: '100% 100%' }} className='banner'></div>
                                    <div className="detail">
                                        <img src={imgurl + img} alt="" />
                                        <div>{content}</div>
                                        <div onClick={() =>
                                            window.open('/form?formType=1')
                                        }>了解详情</div>
                                    </div>
                                </ListItem>
                            )
                        })
                    }
                </ListWrapper>
                </Visible>
                <Visible xs sm>
                <Title>客户案例</Title>
                <ListWrapper id={UNFRAUD}>
                <ByProgressSwiper
              newProgress={true}
              initialSlide={0}
              contentPadding="12px" progressPadding="0px"
              previewWidth="17%"
            >
                    {
                        list.map(({ img, banner, content }, index) => {
                            return (
                                <ListItem>
                                    <div style={{ background: `url(${imgurl}${banner})`, backgroundSize: '100% 100%' }} className='banner'></div>
                                    <div className="detail">
                                        <img src={imgurl + img} alt="" />
                                        <div>{content}</div>
                                        <div onClick={() =>
                                            window.open('/form?formType=1')
                                        }>了解详情</div>
                                    </div>
                                </ListItem>
                            )
                        })
                    }
                    </ByProgressSwiper>
                </ListWrapper>
                </Visible>
            </MainWrapper>
        </Wrapper>

    )
}