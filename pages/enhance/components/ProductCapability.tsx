import { useEffect, useRef, useState } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import imgurl from '../../../img.url.js';


const labelList = [
  {
    img: `${imgurl}/DataAcquisition1.svg`,
    activeImg: `${imgurl}/DataAcquisition.svg`,
    text: '数据采集',
    english_text: 'Data Acquisition'
  },
  {
    img: `${imgurl}/UserIdentification1.svg`,
    activeImg: `${imgurl}/UserIdentification.svg`,
    text: '用户识别',
    english_text: 'User Identification'
  },
  {
    img: `${imgurl}/DataMining1.svg`,
    activeImg: `${imgurl}/DataMining.svg`,
    text: '数据挖掘',
    english_text: 'Data Mining'
  },
  {
    img: `${imgurl}/PortraitInsight1.svg`,
    activeImg: `${imgurl}/PortraitInsight.svg`,
    text: '画像洞察',
    english_text: 'Portrait Insight'
  }
]
const Wrapper = styled.div`
  padding-top: 100px;
  @media (max-width: 768px) {
    padding-top: 40px; 
   }
  .bottom_border{
    position: relative;
    border-bottom:2px solid #f5f5f5; 
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
  display: flex;
  justify-content: center;
  cursor: pointer;
  &.fixedTop{
    z-index: 9;
    position: fixed;
    top: 0;
    width: 100vw;
    background:#fff;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0;
  }
`

const LabelPlaceholder = styled.div`
  width: 100%;
  height: 172px;
`

const LabelItem = styled.div`
  width: 190px;
  height: 170px;
  display: flex;
  flex-direction: column;
  position: relative;
    top: 4px;
    align-items: center;
  margin-right: 90px;
  padding-top: 40px;
  @media (max-width: 768px) {
      width: 95px;
      font-size: 10px;
      font-weight: 600;
      padding-top: 20px;
      height: 86px;
      top: 2px;
      margin-right: 0;
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
      // width: 120px;
      text-align: center;
    }
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
    @media (max-width: 768px) {
      border-bottom: 2px solid #2B58F9;
    }
  }
`
const Content = styled.div`
    opacity: 1;
  img {
    margin-bottom: 0px;
  }
  div div {
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 100px 0;
    @media (max-width: 768px) { 
      padding: 32px 0 40px;
      justify-content: center;
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
    &:nth-child(2) {
        background: #F4F8FE;
    }
  }
 
  #img4,#img3,#img2,#img1{
    opacity:0;
  
    transition: all 0.4s;
    @media (max-width: 768px) { 
      opacity: 1;
      transition: none;
    }
  }
  .animate__fadeInRight,.animate__fadeInLeft{
    transform: translateX(0) !important;
    opacity:1 !important;
  }
  .animate__fadeInLeft{
    opacity:1;
  }
`
export const ProductCapability = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [is_fixed, set_is_fixed] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    
    const fixedTop = navRef.current.offsetTop;
    const ScrollMagic = require('scrollmagic');
    const controller1 = new ScrollMagic.Controller();
    const scrollContent1 = document.getElementById('ProductCapContent');
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
    const scrollContent2 = document.getElementById('ProductCapContent1');
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
    const scrollContent3 = document.getElementById('ProductCapContent2');
    var scene = new ScrollMagic.Scene({
      triggerElement: scrollContent3,
      offset: 0, //从开始点滚动多少px触发（施法前摇）
      duration: 400, //效果持续的距离（法术持续时间/距离）
    })
      .addTo(controller3)
      .on('enter', (e) => {
        scrollContent3.querySelector('#img3').classList.add('animate__fadeInRight');
        controller3.destroy();
      });

    const controller = new ScrollMagic.Controller();
    const scrollContent = document.getElementById('ProductCapContent4');
    var scene = new ScrollMagic.Scene({
      triggerElement: scrollContent,
      offset: 0, //从开始点滚动多少px触发（施法前摇）
      duration: 400, //效果持续的距离（法术持续时间/距离）
    })
      .addTo(controller)
      .on('enter', (e) => {
        scrollContent.querySelector('#img4').classList.add('animate__fadeInLeft');
        controller.destroy();
      });
    window.onscroll = () => {
      // 以下代码为移动端滚动 tab跟随高亮
      // return false;
      let scrollTop = document.documentElement.scrollTop;

        if (scrollTop >= scrollContent1.offsetTop - 220) {
          setActiveIndex(0)
        }
        if (scrollTop >= scrollContent2.offsetTop - 220) {
          setActiveIndex(1)
        }
        if (scrollTop >= scrollContent3.offsetTop - 220) {
          setActiveIndex(2)
        }
        if (scrollTop >= scrollContent.offsetTop - 220) {
          setActiveIndex(3)
        }
      if(scrollTop < 1372) {
        set_is_fixed(false);
      } else if(scrollTop>=scrollContent.offsetHeight+scrollContent.offsetTop-164) {
        set_is_fixed(false);
      } else {
        set_is_fixed(true);
      }
    }
  })
  const scrollTo = (index) => {
    var dom = document.querySelectorAll('.contents>div')[index];
    var scrollHeight = dom.offsetTop - '220';
    if (dom) {
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
        <Label className={`bottom_border ${is_fixed ? 'fixedTop' : ''}`} ref={navRef}>
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
        <LabelPlaceholder style={{display: is_fixed ? 'block' : 'none'}}></LabelPlaceholder>
        <Content className='contents'>
          <div id='ProductCapContent'>
            <div>
              <img style={{ width: '450px', height: '474px' }} src={imgurl + '/qdsjcj_text.svg'} alt="" />
              <img id='img1' style={{ width: '680px', transform: 'translateX(20%)' }} src={imgurl + '/qdsjcj.svg'} alt="" />
            </div>
          </div>
          <div id='ProductCapContent1'>
            <div>
              <img id='img2' style={{ width: '680px', transform: 'translateX(-20%)' }} src={imgurl + '/oneidsb.svg'} alt="" />
              <img style={{ width: '450px', height: '408px' }} src={imgurl + '/oneidsb_text.svg'} alt="" />
            </div>
          </div>
          <div id='ProductCapContent2'>
            <div>
              <img style={{ width: '480px', height: '438px' }} src={imgurl + '/fjghsjwj_text.svg'} alt="" />
              <img id='img3' style={{ width: '680px', transform: 'translateX(20%)' }} src={imgurl + '/fjghsjwj.svg'} alt="" />
            </div>
          </div>
          <div id='ProductCapContent4'>
            <div>
              <img id='img4' style={{ width: '680px', transform: 'translateX(-20%)' }} src={imgurl + '/yhhxdc.svg'} alt="" />
              <img style={{ width: '450px', height: '465px' }} src={imgurl + '/yhhxdc_texts.svg'} alt="" />
            </div>
          </div>
        </Content>
      </Visible>
      <Visible xs sm>
        <Content className='contents' ref={navRef}>
          <div id='ProductCapContent'>
            <div>
              {/*<img id='img1' style={{ width: '343px', marginBottom: '32px' }} src={imgurl + '/qdsjcjm.png'} alt="" />
              <img style={{ width: '335px' }} src={imgurl + '/qdsjcj_textm.png'} alt="" />*/}

              <img id='img1' style={{ marginBottom: '32px' }} src={imgurl + '/qdsjcjm.png'} alt="" />
              <img src={imgurl + '/qdsjcj_textm.png'} alt="" />
            </div>
          </div>
          <div id='ProductCapContent1'>
            <div>
              {/*<img id='img2' style={{ width: '343px', marginBottom: '32px' }} src={imgurl + '/oneidsbm.png'} alt="" />
              <img style={{ width: '335px' }} src={imgurl + '/oneidsb_textm.png'} alt="" />*/}

              <img id='img2' style={{marginBottom: '32px' }} src={imgurl + '/oneidsbm.png'} alt="" />
              <img src={imgurl + '/oneidsb_textm.png'} alt="" />
            </div>
          </div>
          <div id='ProductCapContent2'>
            <div>
              {/*<img id='img3' style={{ width: '343px', marginBottom: '32px' }} src={imgurl + '/fjghsjwjm.png'} alt="" />
              <img style={{ width: '335px' }} src={imgurl + '/fjghsjwj_textm.png'} alt="" />*/}

              <img id='img3' style={{ marginBottom: '32px' }} src={imgurl + '/fjghsjwjm.png'} alt="" />
              <img src={imgurl + '/fjghsjwj_textm.png'} alt="" />
            </div>
          </div>
          <div id='ProductCapContent4'>
            <div>
              {/*<img id='img4' style={{ width: '343px', marginBottom: '32px' }} src={imgurl + '/yhhxdcm.png'} alt="" />
              <img style={{ width: '335px' }} src={imgurl + '/yhhxdc_textm.png'} alt="" />*/}

              <img id='img4' style={{ marginBottom: '32px' }} src={imgurl + '/yhhxdcm.png'} alt="" />
              <img src={imgurl + '/yhhxdc_textm.png'} alt="" />
            </div>
          </div>
        </Content>
      </Visible>
    </Wrapper>
  )
}