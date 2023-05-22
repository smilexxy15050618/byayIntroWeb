import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import styled from 'styled-components';
import imgurl from '../../../img.url.js';

const DevelopBg = `${imgurl}/devehistBg.png`;
const DevelopLeft = `${imgurl}/devehisLeft.svg`;
const DevelopRight = `${imgurl}/devehisLeft.svg`;

const DevelopWrap = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  height: 360px;
  padding-top: 118px;
  background-image: ${`url(${DevelopBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  box-sizing: border-box;
  .title{
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 40px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
  }
  .left{
    width: 18px;
    height: 40px;
    background-image: ${`url(${DevelopLeft})`};
    background-repeat: no-repeat;
    background-size: cover;
  }
  .right{
    width: 18px;
    height: 40px;
    background-image: ${`url(${DevelopRight})`};
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotate(180deg);
  }
`

const Wrap = styled.div`
  width: 224px;
  height: 122px;
  margin: 0 auto;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 122px;
    transition: transform 0.3s ease-in-out;
  }
  h3 {
    font-size: 26px;
    font-weight: 500;
    height: 49px;
    line-height: 49px;
    color: rgba(90, 90, 90, 1);
    margin: 0;
  }
  h6 {
    width: 224px;
    margin-top: 9px;
    margin-bottom: 0;
    height: 64px;
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    color: rgba(90, 90, 90, 1);
    text-align: center;
  }
`;


export type IAiProps = {};

const COURSE_TIME = [
  {
    time: '2023.04',
    desc: '发布“智能用户运营平台”，对话式AI产品全线升级',
  },
  {
    time: '2023.03',
    desc: '成为“新华网元宇宙及AIGC创新联盟”成员',
  },
  {
    time: '2023.01',
    desc: '获评「AI中国」2022最佳人工智能企业TOP30',
  },
  {
    time: '2022.12',
    desc: '入选2022中国企业数智化创新TOP50',
  },
  {
    time: '2022.10',
    desc: '入选《国家人工智能创新应用先导区“智赋百景”》',
  },
  {
    time: '2022.06',
    desc: '获评腾讯智慧零售“千域计划年度认证合作伙伴”',
  },
  {
    time: '2022.04',
    desc: '通过全球软件领域最高级别CMMI5认证',
  },
  {
    time: '2022.03',
    desc: '入选浙江省2021年度人工智能典型应用场景',
  },
  {
    time: '2021.12',
    desc: '获评浙江省高新技术企业研究开发中心<br />荣获2021年浙江省软件核心竞争力企业',
  },
  {
    time: '2021.06',
    desc: '入选杭州市重点建设人工智能应用场景',
  },
  {
    time: '2021.04',
    desc: '连续2年荣登杭州准独角兽榜单',
  },
  {
    time: '2021.03',
    desc: '获余杭区首批准鲲鹏企业认定',
  },
  {
    time: '2021.01',
    desc: '与华为签约合作，聚力共建全场景智慧',
  },
  {
    time: '2020.10',
    desc: '入选国际权威机构IDC《2020中国对话式人工智能厂商评估》报告，“Major Player-主要厂商”象限第一梯队',
  },
  {
    time: '2020.09',
    desc: '成立百应-杭州电子科技大学人工智能联合研发中心入选腾讯SaaS加速器，生态共创驱动数字化升级',
  },
  {
    time: '2020.07',
    desc: '获中国信通院企业级SaaS可信云认证',
  },
  {
    time: '2020.06',
    desc: '入选2020杭州准独角兽企业',
  },
  {
    time: '2020.05',
    desc: '打造杭州社保“易窗”智能服务平台上线',
  },
  {
    time: '2020.04',
    desc: '发布「智能疫情通知回访」系统，支持全国复工复产',
  },
  {
    time: '2019.12',
    desc: '荣获“国家高新技术企业”认定',
  },
  {
    time: '2019.08',
    desc: '成为华为云生态战略合作伙伴',
  },
  {
    time: '2019.07',
    desc: '成为UCloud战略合作伙伴',
  },
  {
    time: '2019.06',
    desc: '获恒生电子、信雅达亿元级战略投资',
  },
  {
    time: '2019.05',
    desc: '获光信资本领投1.2亿元A轮融资',
  },
  {
    time: '2019.02',
    desc: '企业客户突破25000家',
  },
  {
    time: '2018.08',
    desc: '成为信雅达战略合作伙伴',
  },
  {
    time: '2018.06',
    desc: '成为恒生电子智慧金融合作伙伴',
  },
  {
    time: '2018.05',
    desc: '获阿米巴资本6000万Pre-A轮融资',
  },
  {
    time: '2018.04',
    desc: '成为阿里云生态科技先锋ITP、今日头条独家AI语音供应商、腾讯头条AI语音供应商',
  },
  {
    time: '2017.08',
    desc: '发布智能联络中心（AICC）产品',
  },
  {
    time: '2017.06',
    desc: '成为阿里云ET城市大脑战略合作伙伴',
  },
  {
    time: '2017.01',
    desc: '成为阿里云金牌合作伙伴',
  },
  {
    time: '2016.09',
    desc: '百应科技成立',
  },
];

const DevelopHistoryWap: React.SFC<IAiProps> = ({}) => (
  <DevelopWrap id="DevelopHistory">
    <div className="title">发展历程</div>
    <Carousel
      nextIcon={
        <div className="right"></div>
      }
      prevIcon={
        <div className="left"></div>
      }
      indicators={false}>
      { 
        COURSE_TIME.map(item => (
          <CarouselItem key={item.time}>
            <Wrap>
              <div>
                <h3>{item.time}</h3>
                <h6 dangerouslySetInnerHTML={{ __html: item.desc }}></h6>
              </div>
            </Wrap>
          </CarouselItem>
        ))
      }
    </Carousel>
  </DevelopWrap>
);

export default DevelopHistoryWap;