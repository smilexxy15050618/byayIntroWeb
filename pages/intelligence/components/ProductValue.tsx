import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const list = [
    {
        img1: `${imgurl}/1-1.png`,
        img2: `${imgurl}/1-2.svg`,
        text1: '策略的智能化生成',
        text2: '结合Al算法和技术，及多年行业服务经验，提炼行业运营知识，并将其应用于策略生成，快速实现业务目标，使运营更加智能化和高效化，助力在市场竞争中脱颖而出。'
    },
    {
        img1: `${imgurl}/2-1.png`,
        img2: `${imgurl}/2-2.svg`,
        text1: '策略的数据化验证',
        text2: '以数据驱动为核心，对策略效果进行科学严谨的验证，不断优化和改进策略，保证策略的有效性和可行性，降低运营风险和成本，实现稳健可持续的运营发展。'
    },
    {
        img1: `${imgurl}/3-1.png`,
        img2: `${imgurl}/3-2.svg`,
        text1: '策略的自动化运行',
        text2: '用实时数据分析和洞察技术，更好地了解用户需求和行为，实现策略的自动化触达和调整。支持动态调整和优化策略，实现智能化运营和管理，提高运营竞争力和用户体验。'
    }
]
const Wrapper = styled.div`
padding-top: 100px;
padding-bottom: 100px;
  .title {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
  }
  .content {
    display: flex;
    width: 1200px;
    margin: 80px auto 0;
    justify-content: space-between;
    opacity: 0;
    transform: translateY(50%);
    transition: all 0.4s;
    &.appear {
        opacity: 1;
        transform: translateY(0);
    }
    .list-item {
        width: 400px;
        height: 349px;
        background: #F3F8FF;
        padding: 69px 50px 0;
        img {
            transition: all 0.3s;
        }
        &:hover {
            background: #F9FDFF;
            div {
                img:first-child {
                    transform: translate(5px,-5px);
                }
                img:last-child {
                    transform: translate(-5px,5px);
                }
            }
            
        }
        div:first-child {
            position: relative;
            width: 80px;
            height: 80px;
            margin: 0 auto 24px;
        }
        div:nth-child(2) {
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 0px;
            color: rgba(26, 26, 26, 1);
            text-align: center;
        }
        div:last-child {
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0px;
            color: rgba(26, 26, 26, 0.65);
            text-align: left;
        }
            img {
                position: absolute;
                &:first-child {
                    width: 48px;
                    height: 48px;
                    top: 9px;
                    right: 7px;
                }
            }
        &:nth-child(2) {
            &:hover {
                div {
                    img:first-child {
                        transform: translateY(5px);
                    }
                    img:last-child {
                        transform: translateY(-5px);
                    }
                }
                
            }
            img {
                position: absolute;
                margin-bottom: 0;
                &:first-child {
                    width: 35px;
                    height: 47px;
                    top: 27px;
                    right: 22px;
                }
            }
        }
    }
  }
`
export const ProductValue = () => {
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        const controller = new ScrollMagic.Controller();
        const scrollContent = document.getElementsByClassName('content')[0];
        var scene = new ScrollMagic.Scene({
            triggerElement: scrollContent,
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 10, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            .addTo(controller)
            .on('enter', (e) => {
                scrollContent.classList.add('appear')
                // controller.destroy();
            })
    })
    return (
        <Wrapper>
            <div className='title'>产品价值</div>
            <div className='content'>
                {list.map((item, index) => {
                    return (
                        <div className='list-item'>
                            <div>
                                <img src={item.img1} alt="" />
                                <img src={item.img2} alt="" />
                            </div>
                            <div>{item.text1}</div>
                            <div>{item.text2}</div>
                        </div>
                    )
                })}
            </div>
        </Wrapper>
    )
}