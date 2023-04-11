import { FC, ReactNode, useEffect, useState } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import imgurl from '../../../../img.url.js'
import Number from '../../../components/homepage/version2023/Number'
const list = [
    {
        title: 10,
        unit: '',
        sub: '亿规模',
        content: '任务模型参数量'
    },
    {
        title: 20,
        unit: 'w+',
        sub: '套',
        content: '营销场景库'
    },
    {
        title: 6,
        unit: '',
        sub: '级',
        content: '知识体系及标签体系'
    },
    {
        title: 5000,
        unit: '+',
        sub: '',
        content: '知识点数量'
    },
    {
        title: 200,
        unit: '+',
        sub: '',
        content: '支持实体识别类型'
    },
    {
        title: 100,
        unit: 'w+',
        sub: '',
        content: '实时并发量'
    },
    {
        title: '',
        unit: '亿',
        sub: '级',
        content: '日对话服务频次'
    },
    {
        title: 96,
        unit: '%+',
        sub: '',
        content: '识别准确率'
    }
]

const Wrapper = styled.div`
    width: 100%;
    height: 448px;
    padding-top: 114px;
    background: url(${imgurl}/maps.png) no-repeat;
    background-size: 100% 100%;
    transform: translateY(50%);
    transition: all 0.4s;
opacity: 0;
&.appear{
  transform: translateY(0);
  opacity: 1;
}
`
const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 1200px;
    margin: 0 auto;
`
const Item = styled.div`
    width: 298px;
    height: 72px;
    padding-left: 24px;
    position: relative;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:nth-child(4n) {
        width: 170px;
    }
    &:before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 72px;
      opacity: 1;
      background: rgba(0, 200, 189, 1);
    }
    div:first-child {
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 0px;
        line-height: 30px;
        color: rgba(51, 51, 51, 1);
 span:last-child {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgba(51, 51, 51, 1);
 }
 div:last-child {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
 }
    }
`
const GLOBAL_ID_WRAP = 'global_number_wrap';
const GlobalNumber = ({ }) => {
    const [showNumber,setShowNumber] = useState(false);
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(GLOBAL_ID_WRAP);
          new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 0, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
          })
            // .setClassToggle('.video-wrapper-sticky', 'appear')
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear');
                setShowNumber(true);
                controller.destroy();
            });
      }, []);
    return (
        <Wrapper id={GLOBAL_ID_WRAP}>
            <Content>
            {list.map(({ title, content, sub, unit }, index) => {
                return (
                    <Item>
                        <div>
                        {showNumber&&<Number number={title}/>}<span>{unit}</span><span>{sub}</span>
                        </div>
                        <div>{content}</div>
                    </Item>
                )
            })}
            </Content>
        </Wrapper>
    )
}

export default GlobalNumber;