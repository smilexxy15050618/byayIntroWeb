import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Pane from '../../components/homepage/version2023/Pane';
import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperClass from 'swiper/types/swiper-class';
interface  SceneSolution{

}
const Wrapper = styled.div`
    
`
const HoveUp = styled.div`
   width: 1250px;
   margin:0 auto; 
`
const Card = styled.div<{bg:number}>`
   margin:0 auto;
    /* border-radius: 8px;
    box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12); */
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

const carouselDataList = [imgurl+'/proinfo1.png','2','3','4']


const SceneSolution: FC<SceneSolution> = ({}) => {
    const [tabList, setTabList]=  useState( [
{img:'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/a-1.png',title:'美妆行业',chose:true},
{img:'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/a-2.png',title:'鞋服行业',chose:false},
{img:'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/a-3.png',title:'食品行业',chose:false},
{img:'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/a-3.png',title:'百购行业',chose:false}])
const choseOne = (i)=>{
    const arr = tabList.map((ele,index)=>{
        ele.chose = false
        if(i === index){
            ele.chose = true;
            setWrapindex(i)
        }
        return ele;
    })
    setTabList(arr)
}
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
        <Pane title="场景解决方案"
        titleStyle={{marginBottom:'48px'}}
         paneBgColor="white" style={{ paddingBottom: 80 }} mobileStyle={{ paddingBottom: 40 }}>
          <Hidden xs sm>
            <MainWrap id={HANGYE}>
            <HoveUp>
                <Tab>
                    {tabList.map((item,i)=>{
                       return <li onClick={()=>{
                        choseOne(i)
                       }} className={item.chose === true?'active': ''}>
                             <img src={item.img} />
                             <span >{item.title}</span>
                         </li>    
                    })}
                   
                </Tab>
                <Card bg={1}>
                    <img src={carouselDataList[wrapindex]} alt="" />
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
