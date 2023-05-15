import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const list = [
    {
        banner: '/government-jn.svg',
        title: '济南社保',
        content: '实现业务办理从“多次跑”转变为“零次跑”。'
    },
    {
        banner: '/government-dq.svg',
        title: '德清公安',
        content: '聚焦高频办理业务，打造智能、便利公安服务。'
    },
    {
        banner: '/government-hz.svg',
        title: '杭州医保',
        content: '引入智能AI客服垂直深耕，助力医保服务智能化升级。'
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
    padding: 80px 0;
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
        border-radius: 8px 8px 0px, 0px;
        background: #2B58F9;
        opacity: 0.2;
    }
}
.detail {
    padding: 22px 24px 0 24px;
    .title{
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
        color: rgba(43, 88, 249, 1);
        &::before{
            display: inline-block;
            content: '';
            width: 17px;
            height: 20px;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAYAAACb3CikAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHPSURBVFiFzZdhcoIwEIXf0pk6PQvcoXiL3Ea4Dbcw3kHP4tAZSX/gKoVINlnS9v1xZHD345lsHoQIVeZaA4DD2+F51dXjJ1kAILgTAJy7XRNTm+Kac1NxeUtwJwnUS5DKXOu05i8btcBrpxYgWwN4WnpdIm4OFLUDDp5fZhMBLQNRab6O+Z5eDkSl6d1fQrAKbQECWl6IqjpaRy7djgBAW0flyNQJrSsqR9gNlqZWsiM+BzSuJDsyd4OVWk8AMk5CYLAAcO4+rKQwD0n+HhqWARCyl+59L2kcBuubNZjAGnF1ZfomN4QAZLRUAyOBEIFoYKQQd5AxWW0NEwMBkI2aIw70meNeIHKgcR7NcW9BuKlPTr/GuSNV5IhfFudwrdNg70e4LKXNx/p0QU5jH0s67i/djpIOvcr0TWl6N90VDjiUpnc/d1Z4R/JB+QjPDsUxjEBWmm8JaCXbl10uAD7IJPNEHrIlENPYUDwv5to9Mj1Azt2H3SIESzVf3Itw81uvF/MduNg1hGGT/LEmn/MLkNx/kW/e3K/7FXd66iBWQbaGWYMIgmwFE4IQgWhhCMNekvxFIClAEheSQWRAZAm3Vvr+owKZAgFjLExp/i/1DVTs8sHhjj1fAAAAAElFTkSuQmCC');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            vertical-align: -4px;
            margin-right: 6px;
        }
    }
    .content {
        padding-right: 110px;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: -0.17px;
        line-height: 26px;
        color: rgba(0, 0, 0, 1);
        margin-top: 17px;
    }
    .more{
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
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear')
                controller.destroy();
            });
    }, []);
    return (
        <Wrapper>
            <MainWrapper>
                <Title>客户案例</Title>
                <ListWrapper id={UNFRAUD}>
                    {
                        list.map(({ title, banner, content }, index) => {
                            return (
                                <ListItem>
                                    <div style={{ background: `url(${imgurl}${banner})`, backgroundSize: '100% 100%' }} className='banner'></div>
                                    <div className="detail">
                                        <div className="title">{title}</div>
                                        <div className="content">{content}</div>
                                        <div className="more" onClick={() =>
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