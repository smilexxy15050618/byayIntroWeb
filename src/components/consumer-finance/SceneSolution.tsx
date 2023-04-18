import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
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
    }
    .desc {
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 32px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        margin: 16px auto 40px;
    }
`
const HoveUp = styled.div`
   width: 1250px;
   margin:0 auto; 
`
const Card = styled.div<{bg:number}>`
   margin:0 auto;
    img{
        width:100%;
        margin:0;
    }
`

const Tab = styled.div`
    width:1200px;
    margin:0 auto;
    margin-bottom:40px;
    display:flex;
    box-sizing:border-box;
    padding:0 220px ;
    justify-content:space-between;
li{
    border-radius: 32px;
    list-style:none;
    width: 172px;
    height: 48px;
    background: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    img{
        width:24px;
        height:24px;
        margin:0;
        margin-right:10px;
    }
    span{
        font-size: 18px;
        font-weight: 500;
        /* color: rgba(43, 88, 249, 1); */
        color: rgba(51, 51, 51, 1);
    }
    &.active{
        background: rgba(246, 252, 255, 1);
        span{
        color: rgba(43, 88, 249, 1);
        }
    }
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
`

const carouselDataList = imgurl+'/scenario-img.png'


const SceneSolution: FC<SceneSolution> = ({}) => {
   
const HANGYE = 'hangye_2023_2009d'
const [wrapindex, setWrapindex] = useState(0);
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
        // .setClassToggle('.aitxs', 'appear')
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
            <div class="desc">运营策略覆盖消费金融业务全链路</div>
          <Hidden xs sm>
            <MainWrap id={HANGYE}>
            <HoveUp>
                <Card bg={1}>
                    <img src={carouselDataList} alt="" />
                </Card>
            </HoveUp>
            </MainWrap>
          </Hidden>
          <Visible xs sm>
            {/* <CarouselMobile dataList={carouselDataList}></CarouselMobile> */}
          </Visible>
        </Pane>
    );
  };
  
  
export default SceneSolution;
