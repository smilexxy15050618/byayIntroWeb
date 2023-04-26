import { FC, useEffect, useRef, useState } from 'react';
import { Controller } from 'scrollmagic';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const labelList = [
    {
        img: `${imgurl}/MarketingCanvas1.png`,
        activeImg: `${imgurl}/MarketingCanvas.png`,
        text: '营销画布',
        english_text: 'Marketing Canvas'
    },
    {
        img: `${imgurl}/OperationFlow1.png`,
        activeImg: `${imgurl}/OperationFlow.png`,
        text: '业务流程',
        english_text: 'Operation Flow'
    },
    {
        img: `${imgurl}/KnowledgeGraph1.png`,
        activeImg: `${imgurl}/KnowledgeGraph.png`,
        text: '知识图谱',
        english_text: 'Knowledge Graph'
    }
]
const Wrapper = styled.div`
  padding-top: 100px;
`
const Title = styled.div`
font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
margin-bottom: 40px;
`
const Label = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`
const LabelItem = styled.div`
  width: 190px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 90px;
  padding-top: 40px;
  &:last-child {
    margin-right: 0;
  }
  img {
    width: 36px;
    height: 36px;
    margin-bottom: 16px;
  }
  span:nth-child(2) {
    font-size: 20px;
font-weight: 600;
letter-spacing: 1.43px;
line-height: 28px;
color: rgba(26, 26, 26, 1);
  }
  span:last-child {
    font-size: 14px;
font-weight: 500;
letter-spacing: 0px;
line-height: 24px;
color: rgba(90, 90, 90, 1);
  }
  &.active {
    border-bottom: 4px solid #2B58F9;
  }
`
const Content = styled.div`
  img {
    margin-bottom: 0px;
  }
  div div {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 100px 0;
  }
  >div:last-child div {
        padding-bottom: 116px;
  }
  >div {
    width: 100%;
    &:last-child {
        background: #F4F8FE;
    }
  }
`
export const ProductCapability = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        const controller = new ScrollMagic.Controller();
        const scrollcContent = document.getElementById('ProductCapContent');
        const scrollcContent1 = document.getElementById('ProductCapContent1');
        const scrollcContent2 = document.getElementById('ProductCapContent2');
        var scene = new ScrollMagic.Scene({
            triggerElement: scrollcContent,
            offset: 10, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            .on('enter', (e) => {
            //    setActiveIndex(0)
                // controller.destroy();
            });
        var scene1 = new ScrollMagic.Scene({
            triggerElement: scrollcContent1,
            offset: 10, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            .on('enter', (e) => {
                // setActiveIndex(1)
                // controller.destroy();
            });
        var scene2 = new ScrollMagic.Scene({
            triggerElement: scrollcContent2,
            offset: 10, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            .on('enter', (e) => {
                // setActiveIndex(2)
                // controller.destroy();
            });
        controller.addScene([scene, scene1, scene2]);
    })
    const scrollTo = (index) => {
        setActiveIndex(index);
        var dom = document.querySelectorAll('.contents>div');
        console.log(dom[index])
        dom[index].scrollIntoView({ behavior: "smooth" });
    }
    return (
        <Wrapper>
            <Title>产品能力</Title>
            <Label>
                {
                    labelList.map((({ img, activeImg, text, english_text }, index) => {
                        return (
                            <LabelItem onClick={()=>scrollTo(index)} className={activeIndex == index ? 'active' : ''}>
                                <img src={activeIndex == index ? activeImg : img} alt="" />
                                <span>{text}</span>
                                <span>{english_text}</span>
                            </LabelItem>
                        )
                    }))
                }
            </Label>
            <Content className='contents'>
                <div id="ProductCapContent">
                    <div>
                        <img style={{ width: '450px', height: '474px' }} src={imgurl + '/yxhb_text.png'} alt="" />
                        <img style={{ width: '680px' }} src={imgurl + '/yxhb.svg'} alt="" />
                    </div>
                </div>
                <div id="ProductCapContent1">
                    <div>
                        <img style={{ width: '680px' }} src={imgurl + '/ywlc.svg'} alt="" />
                        <img style={{ width: '450px', height: '408px' }} src={imgurl + '/ywlc_text.png'} alt="" />
                    </div>
                </div>
                <div id="ProductCapContent2">
                    <div>
                        <img style={{ width: '480px', height: '438px' }} src={imgurl + '/zstp_text.svg'} alt="" />
                        <img style={{ width: '680px' }} src={imgurl + '/zstp.svg'} alt="" />
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}