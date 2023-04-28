import { FC, useEffect, useRef, useState } from 'react';
import { Controller } from 'scrollmagic';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import classNames from 'classnames';


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
  .bottom_border{
    position: relative;
    border-bottom:4px solid #f5f5f5; 
  }
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
  position: relative;
  top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 90px;
  padding-top: 40px;
  &:hover{
    img:nth-child(1){
      display: none;
    }
    img:nth-child(2){
      display: inline-block;
    }
  }
  &:last-child {
    margin-right: 0;
  }
  img {
    width: 36px;
    height: 36px;
    margin-bottom: 16px;
  }
  img:nth-child(1){
    display: inline-block;
  }
  img:nth-child(2){
    display: none;
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
opacity: 1;
    // transform: translateY(20%);
    // transition: all 0.4s;
    // &.appear {
    //     opacity: 1;
    //     transform: translateY(0);
    // }
  img {
    margin-bottom: 0px;
  }
  #img4,#img3,#img2,#img1{
    opacity:0;
  
    transition: all 0.4s;
  }
  .animate__fadeInRight,.animate__fadeInLeft{
    transform: translateX(0) !important;
    opacity:1 !important;
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
        const controller1 = new ScrollMagic.Controller();
        const scrollContent1 = document.getElementById('ProductCapContent1');
        var scene = new ScrollMagic.Scene({
            triggerElement: scrollContent1,
            offset: 0, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            .addTo(controller1)
            .on('enter', (e) => {
                scrollContent1.querySelector('#img1').classList.add('animate__fadeInRight');
                controller1.destroy();
            });


            const controller2 = new ScrollMagic.Controller();
        const scrollContent2 = document.getElementById('ProductCapContent2');
        var scene = new ScrollMagic.Scene({
            triggerElement: scrollContent2,
            offset: 0, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            .addTo(controller2)
            .on('enter', (e) => {
                scrollContent2.querySelector('#img2').classList.add('animate__fadeInLeft');
                controller2.destroy();
            });


            const controller3 = new ScrollMagic.Controller();
        const scrollContent3 = document.getElementById('ProductCapContent3');
        var scene = new ScrollMagic.Scene({
            triggerElement: scrollContent3,
            offset: 0, //从开始点滚动多少px触发（施法前摇）
            duration: 200, //效果持续的距离（法术持续时间/距离）
        })
            .addTo(controller3)
            .on('enter', (e) => {
                scrollContent3.querySelector('#img3').classList.add('animate__fadeInRight');
                controller3.destroy();
            });

    })
    const scrollTo = (index) => {
        setActiveIndex(index);
        var dom = document.querySelectorAll('.contents>div')[index];
        if(dom) {
            dom.scrollIntoView({ behavior: "smooth" });
        }  
    }
    return (
        <Wrapper>
            <Title>产品能力</Title>
            <Label className='bottom_border'>
                {
                    labelList.map((({ img, activeImg, text, english_text }, index) => {
                        return (
                            <LabelItem onClick={() => scrollTo(index)} className={activeIndex == index ? 'active' : ''}>
                                <img src={activeIndex == index ? activeImg : img} alt="" />
                                <img src={activeImg} alt="" />
                                <span>{text}</span>
                                <span>{english_text}</span>
                            </LabelItem>
                        )
                    }))
                }
            </Label>
            <Content  className='contents'>
                <div id="ProductCapContent1">
                    <div>
                        <img style={{ width: '450px', height: '474px' }} src={imgurl + '/yxhb_text.svg'} alt="" />
                        <img id='img1'  style={{ width: '680px',  transform: 'translateX(20%)' }} src={imgurl + '/yxhb.svg'} alt="" />
                    </div>
                </div>
                <div id="ProductCapContent2">
                    <div>
                        <img id='img2'  style={{ width: '680px',  transform:' translateX(-20%)' }} src={imgurl + '/ywlc.svg'} alt="" />
                        <img style={{ width: '450px', height: '408px' }} src={imgurl + '/ywlc_text.svg'} alt="" />
                    </div>
                </div>
                <div id="ProductCapContent3">
                    <div>
                        <img  style={{ width: '480px', height: '438px' }} src={imgurl + '/zstp_text.svg'} alt="" />
                        <img id='img3'  style={{ width: '680px', transform:' translateX(20%)'  }} src={imgurl + '/zstp.svg'} alt="" />
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}