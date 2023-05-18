import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Visible } from 'react-grid-system';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';


const titleList = [
    {
        title: '赠险营销',
        subTitle: 'T时间内多次触达策略<br>数据建模精准营销<br>快速规模化触达<br>人群化利益点设计',
        url: '/bxjf1.png',
        urlm: '/bxjf1m.png'
    },
    {
        title: '赠险转短险',
        subTitle: 'AI精准过滤低转化人群<br>人机无缝切换、高意向转化<br>数据建模制定精准策略<br>用户触达策略自动执行',
        url: '/bxjf2.png',
        urlm: '/bxjf2m.png'
    },
    {
        title: '意向用户激活',
        subTitle: '客户意向深度挖掘策略<br>个性化场景模型搭建<br>场景专属AI训练',
        url: '/bxjf3.png',
        urlm: '/bxjf3m.png'
    },
    {
        title: '保险AI私域',
        subTitle: '提升客户团队接待效率<br>释放电话客服压力<br>“保险顾问”私域服务提升用户粘性',
        url: '/bxjf4.png',
        urlm: '/bxjf4m.png'
    },
]
export interface IAiProps {};
const Pane = styled.div`
padding: 80px 0;
@media(max-width: 768px) {
  padding: 40px 0;
  .swiper-slide {
    width: 300px !important;
  }
}
.title {
    font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
margin-bottom: 40px;

}
.sec-title{
    font-size: 22px;
font-weight: 400;
line-height: 32px;
color: rgba(51, 51, 51, 1);
margin-bottom: 40px;
text-align:center;
}
@media (max-width: 768px) {
   .title{
    font-size: 24px;
font-weight: 500;
letter-spacing: 0px;
line-height: 40px;
width:80%;
margin:0 auto;
margin-bottom: 40px;

   }
   .custom-bar-wrapper{
    width: 300px;
  }
  }
`
const ListWrapper = styled.div`
display: flex;
justify-content: space-between;
.lists {
    width: 296px;
}
.imgWrapper {
    width: 888px;
height: 560px;
opacity: 1;
border-radius: 8px;
background: rgba(246, 252, 255, 1);
padding: 16px;
box-sizing: border-box;
}
img {
    width: 100%;
    height: 528px;
    margin-bottom:0;
    @media (max-width: 768px) {
      width:auto;
      max-width:unset;
    }
}
.lists {
    width: 296px;
    @media (max-width: 768px) {
      width: 300px;
      height: 340px;
      padding: 24px 0 0 16px;
      box-sizing: border-box;
      border-radius: 8px;
      background: rgba(246, 252, 255, 1);
      div:first-child {
        font-size: 16px;
       font-weight: 600;
       letter-spacing: 0px;
       margin-bottom: 12px;
      }
      div:nth-child(2) {
        width: 268px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20px;
        color: rgba(0, 0, 0, 1);
        text-align: justify;
        margin-bottom: 24px;
      }
    }
  }
`
const ListItem = styled.div`
 width: 296px;
height: 104px;
padding-top: 38px;
padding-left: 40px;
background: rgba(246, 252, 255, 1);
 margin-bottom: 8px;
 border-radius: 8px;
 box-sizing:border-box;
 div:first-child { 
    font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
line-height: 24px;
color: rgba(90, 90, 90, 1);
&:hover {
    font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
line-height: 24px;
color: rgba(43, 88, 249, 1);
}
 }
 &.active {
    width: 296px;
    height: 224px;
    background: rgba(43, 88, 249, 1);
    color: rgba(255, 255, 255, 1);
    padding: 40px 46px 48px 40px;
    box-sizing: border-box;
    div:first-child {
        font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
line-height: 24px;
color: rgba(255, 255, 255, 1);
margin-bottom: 16px;
    }
    div:last-child {
        font-size: 14px;
font-weight: 300;
letter-spacing: 0px;
line-height: 24px;
color: rgba(255, 255, 255, 1);
text-align: left;
    }
 }
`
const MainWrap = styled.div`
.aitxs{
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
}

`

const AI = 'AI'
export const Ai: FC<IAiProps> = ({ }) => {
    const [currIndex, setCurrIndex] = useState(0);
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(AI);
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
    <MainWrap>
      <Visible md lg xl xxl xxxl>

        <Pane>
            <div className="title">聚焦四大场景，助力保险行业提升营销效果和服务效率</div>
            {/* <div className="sec-title">强力提升公安反诈预防全业务效能，助力电诈“双降”，持续保障居民生命财产安全</div> */}

            <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
            <div id={AI} className='aitxs'>
                <ListWrapper>
                    <div className="lists">
                    {titleList.map(({ title, subTitle }, index) => {
                        return (
                                <ListItem className={index==currIndex?'active':null} onClick={()=>setCurrIndex(index)}>
                                    <div>{title}</div>
                                    {index==currIndex&&<div dangerouslySetInnerHTML={{ __html: subTitle }}></div>}
                                </ListItem>
                        )
                    })}
                    </div>
                    <div className="imgWrapper">
                         <img src={`${imgurl}${titleList[currIndex].url}`} />
                    </div>
                </ListWrapper>
            </div>
            </div>
        </Pane>
      </Visible>

      <Visible xs sm>
      <Pane>
        <div className="title">聚焦四大场景，助力保险行业提升营销效果和服务效率</div>
        {/* <div className="sec-title">强力提升公安反诈预防全业务效能，助力电诈“双降”，持续保障居民生命财产安全</div> */}

        <div style={{  width: '100vw', margin: '0 auto' }}>
          <div id={AI} className="aitxs">
            <ListWrapper>
            <ByProgressSwiper
              newProgress={true}
              initialSlide={0}
              spaceBetween={12}
              slidesPerView="auto"
            >
             {titleList.map((item,index)=> {
               return (
                  <div className='lists'>
                  <div>{item.title}</div>
                  <div dangerouslySetInnerHTML={{ __html: item.subTitle }}></div>
                  <img style={{height: '200px'}} src={`${imgurl}${item.urlm}`} alt="" />
                  </div>
               )
             })}
            </ByProgressSwiper>
            </ListWrapper>
          </div>
        </div>
      </Pane>
      </Visible>
    </MainWrap>

    );
};
