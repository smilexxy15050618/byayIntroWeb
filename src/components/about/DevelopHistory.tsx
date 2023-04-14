import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';
import imgurl from '../../../img.url.js'


const SERVICE_DEMAND = [
  {
    title: '2017',
    cover: `${imgurl}/year-2017.png`,
    list:[
      {
        time: '2022.03',
        title: '入选浙江省2021年度人工智能典型应用场景',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.03',
        title: '通过全球软件领域最高级别CMMI5认证',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.06',
        title: '获评腾讯智慧零售“千域计划年度认证合作伙伴”',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.10',
        title: '入选《国家人工智能创新应用先导区“智赋百景”》',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.12',
        title: '入选2022中国企业数智化创新TOP50',
        urlLink: 'http://baidu.com'
      }
    ]
  },
  {
    title: '2018',
    cover: `${imgurl}/year-2018.png`,
    list:[
      {
        time: '2022.03',
        title: '入选浙江省2021年度人工智能典型应用场景',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.03',
        title: '通过全球软件领域最高级别CMMI5认证',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.06',
        title: '获评腾讯智慧零售“千域计划年度认证合作伙伴”',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.10',
        title: '入选《国家人工智能创新应用先导区“智赋百景”》',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.12',
        title: '入选2022中国企业数智化创新TOP50',
        urlLink: 'http://baidu.com'
      }
    ]
  },
  {
    title: '2019',
    cover: `${imgurl}/year-2019.png`,
    list:[
      {
        time: '2022.03',
        title: '入选浙江省2021年度人工智能典型应用场景',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.03',
        title: '通过全球软件领域最高级别CMMI5认证',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.06',
        title: '获评腾讯智慧零售“千域计划年度认证合作伙伴”',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.10',
        title: '入选《国家人工智能创新应用先导区“智赋百景”》',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.12',
        title: '入选2022中国企业数智化创新TOP50',
        urlLink: 'http://baidu.com'
      }
    ]
  },
  {
    title: '2020',
    cover: `${imgurl}/year-2020.png`,
    list:[
      {
        time: '2022.03',
        title: '入选浙江省2021年度人工智能典型应用场景',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.03',
        title: '通过全球软件领域最高级别CMMI5认证',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.06',
        title: '获评腾讯智慧零售“千域计划年度认证合作伙伴”',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.10',
        title: '入选《国家人工智能创新应用先导区“智赋百景”》',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.12',
        title: '入选2022中国企业数智化创新TOP50',
        urlLink: 'http://baidu.com'
      }
    ]
  },
  {
    title: '2021',
    cover: `${imgurl}/year-2021.png`,
    list:[
      {
        time: '2022.03',
        title: '入选浙江省2021年度人工智能典型应用场景',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.03',
        title: '通过全球软件领域最高级别CMMI5认证',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.06',
        title: '获评腾讯智慧零售“千域计划年度认证合作伙伴”',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.10',
        title: '入选《国家人工智能创新应用先导区“智赋百景”》',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.12',
        title: '入选2022中国企业数智化创新TOP50',
        urlLink: 'http://baidu.com'
      }
    ]
  },
  {
    title: '2022',
    cover: `${imgurl}/year-2022.png`,
    list:[
      {
        time: '2022.03',
        title: '入选浙江省2021年度人工智能典型应用场景',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.03',
        title: '通过全球软件领域最高级别CMMI5认证',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.06',
        title: '获评腾讯智慧零售“千域计划年度认证合作伙伴”',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.10',
        title: '入选《国家人工智能创新应用先导区“智赋百景”》',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.12',
        title: '入选2022中国企业数智化创新TOP50',
        urlLink: 'http://baidu.com'
      }
    ]
  },
  {
    title: '2023',
    cover: `${imgurl}/year-2023.png`,
    list:[
      {
        time: '2022.03',
        title: '入选浙江省2021年度人工智能典型应用场景',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.03',
        title: '通过全球软件领域最高级别CMMI5认证',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.06',
        title: '获评腾讯智慧零售“千域计划年度认证合作伙伴”',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.10',
        title: '入选《国家人工智能创新应用先导区“智赋百景”》',
        urlLink: 'http://baidu.com'
      },
      {
        time: '2022.12',
        title: '入选2022中国企业数智化创新TOP50',
        urlLink: 'http://baidu.com'
      }
    ]
  }
];


const Intro = styled.div`
  background: rgba(246, 252, 255, 1);
`;


const IntroContent = styled.div`
  @media (min-width: 768px) {
    max-width: ${props => Theme.ContentWidth};
    min-width: ${props => 'unset'};
    width: calc(
        100vw/${splitCssValue(Theme.DesignDraftWidth).num} *${splitCssValue(Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const Title = styled.div`
  padding-top: 80px;
  padding-bottom:44px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(43, 43, 43, 1);
  text-align: center;
  p{
    font-size:18px;
    line-height:44px;
    color:rgba(43, 88, 249, 1)
  }
`;



const DemandItem = styled.div<{ ACTIVEBG: string; ACTIVEBG: string; active: boolean }>`
  position: relative;
  width: 212px;
  height: 80px;
  padding-left: 70px;
  font-size: 24px;
  color: ${props => (props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(51, 51, 51, 1)')};
  line-height: 80px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    left: ${props => (props.active ? '0' : '186px')};
    top: ${props => (props.active ? '0' : '22px')};
    width: 223px;
    height: 80px;
    background-image: ${props => (props.active ? `url(${props.activeBg})` : `url(${props.normalBg})`)};
    background-repeat: no-repeat;
    transition: all 0.3s ease;
  }
  p{
    position: absolute;
    z-index: 2;
  }
`;

const DemandWrap = styled.div`
  display: flex;
  position: relative;
  &::before {
    position: absolute;
    display: block;
    content: '';
    left: 188px;
    top: 0;
    width: 4px;
    height: 566px;
    opacity: 1;
    background: linear-gradient(180deg, rgba(43, 88, 249, 1) 0%, rgba(44, 89, 249, 1) 30.34%, rgba(255, 255, 255, 0) 94.05%, rgba(255, 255, 255, 0) 100%);
  }
`;

const DemandLeft = styled.div`
  width:212px;
  margin-left: -12px;
`;

const DemandRight = styled.div`
  flex: 1;
  padding-left: 120px;
  padding-top: 10px;
  ul{
    list-style: none;
    li{
      position: relative;
      height: 53px;
      line-height: 53px;
      padding-left: 24px;
      list-style: none;
      font-size: 18px;
      color: rgba(51, 51, 51, 1);
      &::before {
        display: block;
        position: absolute;
        left: 0;
        top: 16px;
        width: 6px;
        height: 21px;
        content: '';
        background: linear-gradient(180deg, rgba(139, 172, 255, 1) 0%, rgba(43, 88, 249, 1) 100%);
      }
      span{
        padding-right: 66px;
      }
      a{
        color: rgba(51, 51, 51, 1);
      }
      a:hover{
        color:rgba(43, 88, 249, 1);
        text-decoration: none;
      }
    }  
  }
`;

interface IBriefProps {
  NORMALBG: string;
  ACTIVEBG?: string;
  minWidthPC?: string;
}
const AiTSXID = 'aitsx';

const DevelopHistory: FC<IBriefProps> = ({ minWidthPC,NORMALBG, ACTIVEBG }) => {
  
  const [demandIndex, setDemandIndex] = React.useState(0);
  function handleDemandHover(index) {
    setDemandIndex(index);
  }

  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(AiTSXID);
      new ScrollMagic.Scene({
        triggerElement: videoContent, //触发元素
        triggerHook: 'onEnter', //触发元素开始离开视口时触发
        offset: 10, //从开始点滚动多少px触发（施法前摇）
        duration: 400, //效果持续的距离（法术持续时间/距离）
      })
        .setClassToggle('.BriefContainerWrap', 'appear')
        .addTo(controller)
        .on('enter', () => {
            controller.destroy();
        });
  }, []);
  return (
  <Intro id="DevelopHistory">
    <IntroContent>
      <Title>发展历程<p>2016.09 百应科技成立</p></Title>
      <DemandWrap>
        <DemandLeft>
          {SERVICE_DEMAND.map((item, index) => (
            <DemandItem
              key={index}
              active={demandIndex === index}
              NORMALBG={NORMALBG}
              ACTIVEBG={ACTIVEBG}
              onMouseEnter={() => {
                handleDemandHover(index);
              }}>
              <p>{item.title}</p>
            </DemandItem>
          ))}
        </DemandLeft>
        <DemandRight>
          <img src={SERVICE_DEMAND[demandIndex].cover} alt="" />
          <ul>
            {SERVICE_DEMAND[demandIndex].list.map((item, index) => (
              <li><span>{item.time}</span><a href={item.urlLink}>{item.title}</a></li>
            ))}
          </ul>
        </DemandRight>
        </DemandWrap>
    </IntroContent>
  </Intro>
 );
};

export default DevelopHistory;
