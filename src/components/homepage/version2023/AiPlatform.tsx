import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
export type IPlatformProps = {};
import imgurl from '../../../../img.url.js'

const contentList = [
    {
        name: '品牌零售',
        content: '通过对话式AI助力品牌实现「极致用户体验+极致ROI」的全域营销服务',
        url: '/ppls.png',
        href:'/retail'
    },
    {
        name: '银行',
        content: '全场景智能用户触达，助力银行实现数字化营销及服务转型',
        url: '/bank.png',
        href:''
    },
    {
        name: '公安反诈',
        content: '以AI能力为核心，强力提升公安反诈预防全业务效能，助力电诈“双降”',
        url: '/police.png'
        ,href:'/unfraud'
    },
    {
        name: '政务服务',
        content: '依托AI实现专业、智能、即时地响应居民业务办理需求，提高居民满意度',
        url: '/government.png'
        ,href:'/technology-service/service'
    },
    {
        name: '互联网',
        content: '构建高转化的用户AI触达模型，深度挖掘会员用户价值，拉升LTV',
        url: '/internet.png'
        ,href:''
    },
    {
        name: '保险',
        content: '“大数据+AI+人”三驱模式，助力保险行业提升营销效果和服务效率',
        url: '/insure.png'
        ,href:'insure'
    },
    {
        name: '消费金融',
        content: '全自动、智能化运营，以转化效果为导向，赋能机构运营效率提升',
        url: '/education.png'
        ,href:''
    },
    {
        name: '汽车',
        content: '以数智化提升车企用户服务能力及转化效果，达成客户体验闭环',
        url: '/car.png'
        ,href:'/car'
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    a {
        font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(43, 88, 249, 1);
    display: flex;
    align-items: center;
    }
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
    width: 273px;
    // cursor:pointer;
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
            <div className="title">全行业AI用户运营平台与解决方案</div>
            <ListWrapper id={AIID}>
                {contentList.map(({ name, content, url, href }, index) => {
                    return (
                        <div className="content" key={index} onClick={()=>{
                            // window.location.href = href
                        }}>
                            <img src={`${imgurl}${url}`}></img>
                            <div>{name}</div>
                            <div>{content}</div>
                        </div>
                    )
                })}
            </ListWrapper>
            <div className="more">
            <a href="/form?formType=1" target="_blank" rel="noreferrer">
            了解更多
                   <img src={imgurl+'/down.png'} style={{transform: 'rotate(-90deg)'}}></img>
                </a>
                </div>
        </Wrapper>
    )
}

export default Platform;