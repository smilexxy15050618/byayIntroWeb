import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const list = [
    {
        img: '/public_security.png',
        banner: '/security_icon1.png',
        content: '保险为本，科技赋能，百应AI助力加快实施数字化战略',
        label: '中国人寿'
    },
    {
        img: '/public_security2.png',
        banner: '/security_icon2.png',
        content: 'AI赋能获客提效，开启业绩高效增长之旅',
        label: '人民保险'
    },
    {
        img: '/public_security3.png',
        banner: '/security_icon3.png',
        content: '对话式AI高效触达客户，用数智化谱写新篇章',
        label: '众安保险'
    }
]

const Wrapper = styled.div`
width: 100%;
height: 650px;
background: #F6FCFF;
`
const MainWrapper = styled.div`
width: 1200px;
margin: 0 auto;
padding: 82px 0 100px;
`
const Title = styled.div`
font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
margin-bottom: 56px;
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
&:nth-child(2) {
    .detail {
        div:first-child {
            img {
                width: 50px;
                height: 50px;
            }
        }
    }
}
.banner {
    width: 100%;
    height: 160px;
    display:flex;
    justify-content: center;
    align-items: center;
    &::after {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 160px;
        border-radius: 8px 8px, 0px, 0px;
        background: rgba(51, 51, 51, 0.6);
        opacity: 0.2;
    }
    img{
        height:19px;
        margin-bottom:0;
    }
}
.detail {
    padding: 22px 24px 0 24px;
    // img {
    //     width: 24px;
    //     height: 24px;
    //     margin-bottom: 0px;
    // }
//     div:first-child {
//         font-size: 18px;
// font-weight: 500;
// letter-spacing: -0.19px;
// line-height: 26px;
// color: rgba(43, 88, 249, 1);
//     }
    div:nth-child(1) {
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
        &:hover {
          &::after {
            content: ' →';
          }
           text-decoration: underline;
        }
    }
}
`
const INSURE = 'insure_case'
export const CustomerCase: FC = () => {
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(INSURE);
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
                <Title>客户案例</Title>
                <ListWrapper id={INSURE}>
                    {
                        list.map(({ img, banner, content, label, bg }, index) => {
                            return (
                                <ListItem>
                                    <div style={{ background: `url(${imgurl}${img}) no-repeat`, backgroundSize: '100% 100%' }} className='banner'>
                                    </div>
                                    <div className="detail">
                                        {/* <div><img src={imgurl+banner} alt="" />{label}</div> */}
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
            </MainWrapper>
        </Wrapper>

    )
}