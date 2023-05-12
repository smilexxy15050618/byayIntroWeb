import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Visible } from 'react-grid-system';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';

const list = [
    {
        img1: `${imgurl}/yhhx1-1.svg`,
        img2: `${imgurl}/yhhx1-2.svg`,
        text1: '用户画像',
        text2: '清晰精准地了解客户的行为和特征',
        style: { width: '58px', height: '64px' }
    },
    {
        img1: `${imgurl}/jzyx2-1.svg`,
        img2: `${imgurl}/jzyx2-2.svg`,
        text1: '精准营销',
        text2: '有效支持千人千面的个性化精准营销',
        style: { width: '55px', height: '62px' }
    },
    {
        img1: `${imgurl}/oneid3-2.svg`,
        img2: `${imgurl}/oneid3-1.svg`,
        text1: 'One ID',
        text2: '多渠道重复客户归并，避免重复营销触达',
        style: { width: '60px', height: '57px' }
    }
    ,
    {
        img1: `${imgurl}/ycsclsc1-1.svg`,
        img2: `${imgurl}/ycsclsc1-2.svg`,
        text1: '预测式策略生成',
        text2: '预测式生成运营策略',
        style: { width: '67px', height: '49px' }
    }
]
const Wrapper = styled.div`
padding-top: 100px;
padding-bottom:90px;
@media (max-width: 768px) {
    padding-top: 40px;
    }
  .title {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
    @media (max-width: 768px) {
        font-size: 24px;
        font-weight: 500;
    }
  }
  .content {
    display: flex;
    width: 1200px;
    margin: 80px auto 0;
    justify-content: space-between;
    opacity: 0;
    transform: translateY(50%);
    transition: transform 0.4s;
    @media (max-width: 768px) {
        width: 100vw;
        margin-top: 24px;
        .custom-bar-wrapper{
            width: 300px;
        }
      }
    &.appear {
        opacity: 1;
        transform: translateY(0);
    }
    .list-item {
        width: 400px;
        height: 349px;
        background: #F3F8FF;
        padding: 69px 0px 0;
        transition: all 0.3s;
        @media (max-width: 768px) {
        width: 280px;
        height: 255px;
            box-sizing: border-box;
            padding: 40px 0px 0;
      }
        img {
            transition: all 0.3s;
        }
        &:hover {
            transform: translateY(-8px);
            div {
                img:first-child {
                    transform: translate(5px,-5px);
                }
                img:last-child {
                    transform: translate(-5px,5px);
                }

                @media (max-width: 768px) {
                    img:first-child {
                    transform: none;
                }
                img:last-child {
                    transform: none;
                }
      }
            }
        }
        &:nth-child(2) {
            background: #F9FDFF;
        }
        &:nth-child(3) {
            &:hover {
                div {
                    img:last-child {
                        transform: translate(5px,-5px);
                    }
                    img:first-child {
                        transform: translate(-5px,5px);
                    }
                    @media (max-width: 768px) {
                    img:first-child {
                    transform: none;
                }
                img:last-child {
                    transform: none;
                }
      }
                }
            }
        }
        &:nth-child(4) {
            background: #F9FDFF;
            &:hover {
                div {
                    img:last-child {
                        transform: translateY(5px);
                    }
                    img:first-child {
                        transform: translateY(-5px);
                    }
                }
                @media (max-width: 768px) {
                    img:first-child {
                    transform: none;
                }
                img:last-child {
                    transform: none;
                }
      }
            }
        }
        div:first-child {
            position: relative;
            width: 80px;
            height: 80px;
            @media (max-width: 768px) {
                    /* width: 40px;
                    height: 40px; */
                    }
            margin: 0 auto 24px;
        }
        div:nth-child(2) {
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 0px;
            color: rgba(26, 26, 26, 1);
            text-align: center;
            @media (max-width: 768px) {
                /* font-size: 14px; */

                    }
        }
        div:last-child {
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0px;
            color: rgba(26, 26, 26, 0.65);
            text-align: center;
            margin-top: 18px;
            @media (max-width: 768px) {
                /* font-size: 12px; */

                    }
        }
        img {
            position: absolute;
            margin-bottom: 0;
            &:first-child {
                width: 80px;
                top: -1px;
                right: 0px;
                
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
                controller.destroy();
            })
    })
    return (
        <Wrapper>
            <div className='title'>产品价值</div>
            <Visible md lg xl xxl xxxl>
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
            </Visible>
            <Visible xs sm>
                <div className='content'>
                    <ByProgressSwiper
                        newProgress={true}
                        initialSlide={0}
                        contentPadding="20px" progressPadding="0px"
                        previewWidth="70px"
                      >
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
                    </ByProgressSwiper>

                </div>
            </Visible>
        </Wrapper>
    )
}