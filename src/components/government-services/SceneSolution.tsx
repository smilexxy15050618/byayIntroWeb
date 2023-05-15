import { FC, useEffect} from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js'
interface  SceneSolution{

}
const Pane = styled.div`
    .title {
        font-size: 40px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 48px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
        @media (max-width: 768px) {
            padding-top: 40px;
            font-size: 24px;
            font-weight: 500;
            line-height: 40px;
        }
    }
`
const HoveUp = styled.div`
   width: 1250px;
   margin:0 auto; 
   @media (max-width: 768px) {
     width: 100%;
     padding: 0 12px 34px;
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

const carouselDataList = imgurl+'/government-scen-img.png'


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
        <div class="title">应用场景</div>
        <MainWrap id={HANGYE}>
            <HoveUp>
                <img src={carouselDataList} />
            </HoveUp>
        </MainWrap>
        </Pane>
    );
  };
  
  
export default SceneSolution;
