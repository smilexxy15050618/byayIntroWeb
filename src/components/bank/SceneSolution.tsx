import { FC, useEffect} from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import {  Hidden, Visible } from 'react-grid-system';
interface  SceneSolution{

}
const Pane = styled.div`
    padding: 80px 0;
    @media (max-width: 768px) {
     padding: 40px 0;
   }
   .title {
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
    @media (max-width: 768px) {
      padding: 0 30px;
      font-size: 24px;
      font-weight: 500;
      line-height: 40px;
    }
  }
  .desc {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin: 16px auto 40px;
    @media (max-width: 768px) {
      padding: 0 40px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin: 16px auto 34px;
    }
  }
`
const HoveUp = styled.div`
   width: 1250px;
   margin:0 auto; 
   @media (max-width: 768px) {
     width: 100%;
     padding: 0 12px;
     img{
        width:100%;
        margin:147px;
      }
   }
   img{
        width:100%;
        margin:0;
    }
`

const MainWrap = styled.div`
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
    @media (max-width: 768px) {
        animation: none;
    }
`

const carouselDataList = imgurl+'/bank-scene-solution.svg'
const carouselDataListWap = '/static/img2023/bank-scene-solution-wap.png'

const SceneSolution: FC<SceneSolution> = ({}) => {
   
const HANGYE = 'hangye_2023_2009d'
useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(HANGYE);
      new ScrollMagic.Scene({
        triggerElement: videoContent, //触发元素
        triggerHook: 'onEnter', //触发元素开始离开视口时触发
        offset: 10, //从开始点滚动多少px触发（施法前摇）
        duration: 400, //效果持续的距离（法术持续时间/距离）
      })
        .addTo(controller)
        .on('enter', () => {
            videoContent.classList.add('appear')
            // console.log('进入');
            controller.destroy();
        });
  }, []);
    return (
        <Pane>
        <div class="title">行业化服务体系</div>
        <div class="desc">业务高适配产品和行业化服务体系保障行方业务像素级落地</div>
        <MainWrap id={HANGYE}>
            <Visible md lg xl xxl xxxl>
              <HoveUp>
                  <img src={carouselDataList} />
              </HoveUp>
            </Visible>
            <Visible xs sm>
              <HoveUp>
                  <img src={carouselDataListWap} />
              </HoveUp>
            </Visible>
        </MainWrap>
        </Pane>
    );
  };
  
  
export default SceneSolution;
