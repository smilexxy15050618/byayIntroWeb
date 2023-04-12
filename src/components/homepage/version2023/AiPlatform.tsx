import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
export type IPlatformProps = {};
import imgurl from '../../../../img.url.js'

const contentList = [
    {
        name: '品牌零售',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务',
        url: '/ppls.png'
    },
    {
        name: '银行',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务',
        url: '/bank.png'
    },
    {
        name: '公安反诈',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务',
        url: '/police.png'
    },
    {
        name: '政务服务',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务',
        url: '/government.png'
    },
    {
        name: '互联网',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务',
        url: '/internet.png'
    },
    {
        name: '保险',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务',
        url: '/insure.png'
    },
    {
        name: '教育',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务',
        url: '/education.png'
    },
    {
        name: '汽车',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务',
        url: '/car.png'
    }
]
const Wrapper = styled.div`
  width: 1152px;
  background: #fff;
  padding: 77px 0 51px;
  margin: 0 auto;
 
  .title {
    font-family: PingFangSC;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
    margin-bottom: 60px;
  }
  .more {
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(43, 88, 249, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    img {
        width: 16px;
        height: 16px;
        margin-bottom: 0;
    }
  }
`
const ListWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   transform: translateY(50%);
   transition: all 0.4s;
   opacity: 0;
   &.appear{
     transform: translateY(0);
     opacity: 1;
   }
   .content {
    width: 264px;
    cursor:pointer;
    height: 266px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 24px 0;
    box-sizing: border-box;
    &:hover {
        border-radius: 8px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
        transform: translateY(-8px);
        transition: transform 1s;
        div:nth-child(2) {
            color: rgba(43, 88, 249, 1);
        }
    }
    img {
        width: 60px;
        height: 60px;
    }
    div {
        text-align: center;
        &:nth-child(2) {
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 24px;
            color: rgba(51, 51, 51, 1);
            margin-top: 32px;
        }
        &:last-child {
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 20px;
            color: rgba(90, 90, 90, 1);
            margin-top: 16px;
        }
    }
   }

`
const AIID = 'ai_id_2023'
const Platform: FC<IPlatformProps> = () => {
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(AIID);
          new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 0, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
          })
            // .setClassToggle('.video-wrapper-sticky', 'appear')
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear')
                controller.destroy();
            });
      }, []);
    return (
        <Wrapper >
            <div class="title">全行业AI用户运营平台与解决方案</div>
            <ListWrapper id={AIID}>
                {contentList.map(({ name, content, url }, index) => {
                    return (
                        <div class="content">
                            <img src={`${imgurl}${url}`}></img>
                            <div>{name}</div>
                            <div>{content}</div>
                        </div>
                    )
                })}
            </ListWrapper>
            <div class="more">
                   查看更多
                   <img src={imgurl+'/down.png'}></img>
                </div>
        </Wrapper>
    )
}

export default Platform;