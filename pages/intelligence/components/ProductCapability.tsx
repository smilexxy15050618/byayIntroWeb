import { useEffect, useRef, useState } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import imgurl from '../../../img.url.js';


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
  @media (max-width: 768px) {
    padding-top: 40px; 
   }
  .bottom_border{
    position: relative;
    border-bottom:4px solid #f5f5f5; 
    @media (max-width: 768px) {
    padding: 0 4%;
    border-bottom:2px solid #f5f5f5; 
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
margin-bottom: 40px;
@media (max-width: 768px) {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0;
}
`
const Label = styled.div`
  width: 100%;
  padding: 0 24%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &.fixedTop{
    z-index: 9;
    position: fixed;
    top: 64px;
    width: 100vw;
    background:#fff;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`
const LabelItem = styled.div`
  height: 170px;
  position: relative;
  top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  @media (max-width: 768px) {
      font-size: 10px;
      font-weight: 600;
      height: 116px;
      padding-top: 20px;
      top: 2px;
      height: 86px;
    }
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
    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
      margin-bottom: 8px;
    }
  }
  img:nth-child(1){
    display: inline-block;
  }
  img:nth-child(2){
    display: none;
  }
  .title-tab{
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 28px;
    color: rgba(26, 26, 26, 1);
    @media (max-width: 768px) {
      font-size: 10px;
      font-weight: 600;
      /* transform: scale(0.8); */
      line-height: 14px;
    }
  }
  .subtitle{
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(90, 90, 90, 1);
    @media (max-width: 768px) {
      font-size: 7px;
      transform: scale(0.6);
      line-height: 12px;
    }
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
    @media (max-width: 768px) {
      border-bottom: 2px solid #2B58F9;
    }
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
  #img4,#img3,#img2,#img1{
    @media (max-width: 768px) { 
     margin-bottom: 32px;
    }
  }
  .animate__fadeInRight,.animate__fadeInLeft{
    transform: translateX(0) !important;
    opacity: 1 !important;
  }
  div div {
     max-width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) { 
      padding: 24px 0;
      justify-content: center;
      img {
        transform: translateX(0) !important;
      }
    }
  }
  >div:last-child div {
        padding-bottom: 116px;
        @media (max-width: 768px) { 
          padding-bottom: 59px;
    }
  }
  >div {
    width: 100%;
    &:last-child {
        background: #F4F8FE;
    }
  }
  #ProductCapContent3,#ProductCapContent2,#ProductCapContent1 {
    width: 100%;
    >div {
      width: 100%;
      @media (max-width: 768px) { 
      padding-top: 36px;
      /* padding-bottom: 0; */
    }
    }
  }
`
export const ProductCapability = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [is_fixed, set_is_fixed] = useState(false);
  const navRef = useRef(null);
  const [lock, setLock] = useState(false);
  useEffect(() => {
    try {
      const fixedTop = navRef.current.offsetTop;
    } catch (error) {
      // console.log(error);
    }
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

    window.onscroll = () => {
      // return false;
      let scrollTop = document.documentElement.scrollTop;
      // const isFixed = scrollTop >= fixedTop;
      // set_is_fixed(isFixed);
      if (!lock) {
        if (scrollTop >= scrollContent1.offsetTop - 220) {
          setActiveIndex(0)
        }
        if (scrollTop >= scrollContent2.offsetTop - 220) {
          setActiveIndex(1)
        }
        if (scrollTop >= scrollContent3.offsetTop - 220) {
          setActiveIndex(2)
        }
        setLock(false);
      }
      // if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
        if (scrollTop >= scrollContent1.offsetTop) {
          set_is_fixed(true);
        } 
        if(scrollTop<scrollContent1.offsetTop) {
          set_is_fixed(false);
        }
        if(scrollTop>=scrollContent3.offsetHeight+scrollContent3.offsetTop) {
          set_is_fixed(false);
        }
        // else if (scrollTop >= fixedTop) {
        //   set_is_fixed(true);
        // }
      // }
    }



  })
  const scrollTo = (index) => {
    setLock(true);
    setActiveIndex(index);
    var dom = document.querySelectorAll('.contents>div')[index];
    var scrollHeight = dom.offsetTop - '220';
    if(index==1) {
      scrollHeight = dom.offsetTop - '230';
    }
    if (dom) {
      // dom.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      })
    }
  }
  return (
    <Wrapper>
      <Title>产品能力</Title>
      <Visible md lg xl xxl xxxl>
        <Label ref={navRef} className={`bottom_border ${is_fixed ? 'fixedTop' : ''}`}>
          {
            labelList.map((({ img, activeImg, text, english_text }, index) => {
              return (
                <LabelItem onClick={() => scrollTo(index)} className={activeIndex == index ? 'active' : ''}>
                  <img src={activeIndex == index ? activeImg : img} alt="" />
                  <img src={activeImg} alt="" />
                  <div className="title-tab">{text}</div>
                  <div className="subtitle">{english_text}</div>
                </LabelItem>
              )
            }))
          }
        </Label>
        <Content className='contents'>
          <div id="ProductCapContent1">
            <div>
              <img style={{ width: '450px', height: '474px' }} src={imgurl + '/yxhb_text.svg'} alt="" />
              <img id='img1' style={{ width: '680px', transform: 'translateX(20%)' }} src={imgurl + '/yxhb.svg'} alt="" />
            </div>
          </div>
          <div id="ProductCapContent2">
            <div>
              <img id='img2' style={{ width: '680px', transform: ' translateX(-20%)' }} src={imgurl + '/ywlc.svg'} alt="" />
              <img style={{ width: '450px', height: '408px' }} src={imgurl + '/ywlc_text.svg'} alt="" />
            </div>
          </div>
          <div id="ProductCapContent3">
            <div>
              <img style={{ width: '480px', height: '438px' }} src={imgurl + '/zstp_text.svg'} alt="" />
              <img id='img3' style={{ width: '680px', transform: ' translateX(20%)' }} src={imgurl + '/zstp.svg'} alt="" />
            </div>
          </div>
        </Content>
      </Visible>
      <Visible xs sm>
        {/* <Label ref={navRef} className={`bottom_border ${is_fixed ? 'fixedTop' : ''}`}>
          {
            labelList.map((({ img, activeImg, text, english_text }, index) => {
              return (
                <LabelItem onClick={() => scrollTo(index)} className={activeIndex == index ? 'active' : ''}>
                  <img src={activeIndex == index ? activeImg : img} alt="" />
                  <img src={activeImg} alt="" />
                  <div className="title-tab">{text}</div>
                </LabelItem>
              )
            }))
          }
        </Label> */}
        <Content className='contents'>
          <div id="ProductCapContent1">
            <div>
              <img id='img1' style={{ width: '343px', }} src={imgurl + '/yxhbm.png'} alt="" />
              <img style={{ width: '335px' }} src={imgurl + '/yxhb_textm.png'} alt="" />
            </div>
          </div>
          <div id="ProductCapContent2">
            <div>
              <img id='img2' style={{ width: '343px', }} src={imgurl + '/ywlcm.png'} alt="" />
              <img style={{ width: '335px' }} src={imgurl + '/ywlc_textm.png'} alt="" />
            </div>
          </div>
          <div id="ProductCapContent3">
            <div>
              <img id='img3' style={{ width: '343px', }} src={imgurl + '/zstpm.png'} alt="" />
              <img style={{ width: '335px' }} src={imgurl + '/zstp_textm.png'} alt="" />
            </div>
          </div>
        </Content>
      </Visible>
    </Wrapper>
  )
}