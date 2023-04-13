import React, { FC, useState, useEffect, useRef, useCallback, useMemo ,ComponentLifecycle} from 'react';
import { Visible } from 'react-grid-system';
import { HOST_ENUM } from '../../../lib/utils';
import Accordion from '../../accordion';
import AccordionForMobile from '../../accordion/AccordionForMobile';
import Pane from './Pane';
import styled from 'styled-components';
import imgurl from '../../../../img.url.js'

export type ISolutionProps = {};

const labelInfo = [
    {
        name: '企业',
        url: '/solution_company.png'
    },
    {
        name: '政务',
        url: '/solution_kol.png'
    }
]
const LabelList = styled.div`
width: 300px;
height: 56px;
display: flex;
justify-content: center;
width: 100%;
border-bottom: 2px solid rgba(0, 0, 0, 0.04);
`
const LabelWrapper = styled.div`
width: 300px;
height: 56px;
line-height: 54px;
text-align: center;
font-size: 18px;
font-weight: 400;
letter-spacing: 0px;
cursor:pointer;
color: rgba(51, 51, 51, 1);
&.active {
    color: rgba(43, 88, 249, 1);
    font-weight: 600;
    border-bottom: 2px solid rgba(43, 88, 249, 1);  
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
const ContentWrapper = styled.div`
div:first-child {
    font-family: PingFangSC;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin-top: 39.95px;
}
div:nth-child(2) {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.73px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin-top: 8px;
}
img {
  display: block;
  width: 1012px;
  margin: 40px auto 0;
}
`

export const SOLUTION_ID = 'solution';
const SOLUTION_ID_WRAP = 'solution_wrap';
const Solution: FC<ISolutionProps> = ({}) => {
const myRef = useRef(null);
  // contentList: { color: string; title: string; maxDesc: string[]; minDesc: string[]; tagList: string[]  }[];
const [currIndex,setCurrIndex] = useState(0);
useEffect(() => {
 
  const timer =  setInterval(()=>{
    if(myRef.current){
      clearInterval(timer);
      const ScrollMagic = require('scrollmagic');
      var controller = new ScrollMagic.Controller();
      const videoContent = myRef.current;
        new ScrollMagic.Scene({
          triggerElement: videoContent, //触发元素
          triggerHook: 'onEnter', //触发元素开始离开视口时触发
          offset: 0, //从开始点滚动多少px触发（施法前摇）
          duration: 400, //效果持续的距离（法术持续时间/距离）
        })
          .addTo(controller)
          .on('enter', () => {
              videoContent.classList.add('appear')
              controller.destroy();
          });
    }
  })
}, [myRef]);
  return (
    <Pane id={SOLUTION_ID} title="场景解决方案" 
    style={{background: 'rgba(246, 252, 255, 1',paddingTop: '77px'}}
    titleMarginBottom={58}>
    <MainWrap id={SOLUTION_ID_WRAP}      ref={myRef}>

        <LabelList>
            {labelInfo.map(({name},i)=> {
                return (
                    <LabelWrapper onMouseEnter={()=>{setCurrIndex(i)}} className={i==currIndex?'active':''}>
                        {name}
                    </LabelWrapper>
                )
            })}
        </LabelList>
        <ContentWrapper>
          <div>G2C基层服务和治理自动化解决方案</div>
          <div>打造数字化连接平台，助力政府高效服务及治理，提升平安建设三率</div>
          <img src={`${imgurl}${labelInfo[currIndex].url}`} alt="" />
        </ContentWrapper>
    </MainWrap>
     
    </Pane>
  );
};

export default Solution;
