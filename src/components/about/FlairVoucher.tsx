import React, { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';

const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 16px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(255, 255, 255, 1);
  text-align: center;
`;

const SubTitle = styled.div`
padding-bottom: 44px;
font-size: 22px;
line-height: 44x;
color:rgba(255, 255, 255, 1);
text-align: center;
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 105px;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: '';
    width: 100%;
    height: 287px;
    background: rgba(43, 88, 249, 1);
  }
`;

const FlairVoucherContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  position: relative;
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const FlairVoucherSlide = styled.div`
  display: flex;
  justify-content: center;

  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear{
    transform: translateY(0);
    opacity: 1;
  }

  .FlairVoucherItem{
    width: 300px;
    height: 433px;
    border-radius: 9px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 37px 0px rgba(0, 0, 0, 0.06);
    text-align: center;
    img{
      transition: all 0.5s;
    }
    img:hover{
      transform: scale(1.05);
    }
    h4{
      font-size: 22px;
      line-height: 30px;
      color: rgba(51, 51, 51, 1);
      font-weight: normal;
      margin: 0;
    }
    p{
      font-size: 16px;
      color: rgba(51, 51, 51, 1);
      line-height: 30px;
    }
  }
  .FlairVoucherItem:nth-child(2){
    width: 434px;
    height: 433px;
    margin: 0 18px;
    img{
      margin: 28px auto;
    }
  }
  
`;

const SERVICE_DEMAND = [
  {
    img: 'https://img.js.design/assets/img/6432621387c0190b718c1e31.png',
    title: '国际软件领域最高级别认证',
    subtitle: '信息通过CMMI5认定'
  },
  {
    img: 'https://img.js.design/assets/img/6432621302bdc4f1e054d1be.png',
    title: '信息系统安全等级保护（第三级）',
    subtitle: '非银行机构的最高登记保护认证'
  },
  {
    img: 'https://img.js.design/assets/img/643262133d1ec540d034f56c.png',
    title: '中国信通院“可信云”',
    subtitle: '企业级SaaS安全评估认证'
  }
];

interface SocietyDutyProps {
  minWidthPC?: string;
}

const FlairVoucher: FC<SocietyDutyProps> = ({ minWidthPC }) => {

  const myRef = useRef(null);
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
  <Wrapper id="FlairVoucher">
    <FlairVoucherContainer maxWidthPc="1200px" minWidthPC={minWidthPC}>
      <Title>资质凭证</Title>
      <SubTitle>从自身产品安全性到对外数据服务，为数据安全保驾护航</SubTitle>
      <FlairVoucherSlide ref={myRef}>
        {SERVICE_DEMAND.map((item, index) => (
          <div className='FlairVoucherItem'>
            <img src={item.img} />
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </FlairVoucherSlide>
    </FlairVoucherContainer>
  </Wrapper>
)
};

export default FlairVoucher;
