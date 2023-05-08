import React, { useEffect, useState } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import imgurl from '../../img.url.js';
import { divide } from 'lodash';

const AITime = styled.div`
 background: url(${imgurl}/aisd.png) no-repeat;
 background-size: 100% 100%;
`
const Title = styled.div`
font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
padding-top: 143px;
`
const SubTitle = styled.div`
font-size: 16px;
font-weight: 400;
letter-spacing: 0.73px;
line-height: 24px;
color: rgba(51, 51, 51, 1);
text-align: center;
margin-top: 24px;
`
const ListWrapper = styled.div`
width: 1200px;
margin: 56px auto 0;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
  .listItem {
    width: 590px;
height: 264px;
position: relative;
padding: 40px;
opacity: 1;
border-radius: 8px;
background: rgba(255, 255, 255, 1);
box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
margin-bottom: 20px;
&:nth-child(5),&:nth-child(6) {
  width: 100%;
}
>div:first-child {
  font-size: 20px;
font-weight: 600;
letter-spacing: 0px;
line-height: 24px;
color: rgba(26, 26, 26, 1);
margin-bottom: 16px;
}
>div:nth-child(2) {
  font-size: 14px;
font-weight: 400;
letter-spacing: 0px;
line-height: 24px;
color: rgba(51, 51, 51, 1);
}
.button-group {
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  div {
    height: 22px;
opacity: 1;
border-radius: 2px;
background: rgba(250, 251, 253, 1);

border: 1px solid rgba(219, 219, 224, 1);
font-size: 12px;
font-weight: 400;
letter-spacing: 0px;
line-height: 20px;
color: rgba(10, 15, 44, 0.85);
text-align: center;
margin-right: 8px;
margin-bottom: 10px;
padding: 0 8px;
  }
}
.bottomImg {
  width: 168px;
  height: 152px;
  position: absolute;
  bottom: 0;
  right: 0;
  img {
    width: 100%;
  }
}
  }
`
const lists = [
  {
    title: '用户画像洞察',
    subTitle: '综合客户数据建立多維标签,构建金景客户画像，获得深入洞察,为精细化运营提供策略基础。',
    contents: ['体系化标签管理','个性化用户分群','360°深度洞察','行业算法模型标签'],
    url: `${imgurl}/aiimg1.png`
  },
  {
    title: '策略智能与自动化',
    subTitle: '充分收集井洞察客户行为、属性、标签，井针对性制定触达与沟通第略，实现目标人群精准自动化触达，提升关键指标和运营效率。',
    contents: ['智能化生成运营策略','自动化完成策略触达','科学性验证效果数据','实时性增强客户洞察'],
    url: `${imgurl}/aiimg2.png`
  },
  {
    title: '多模态情感化对话式AI',
    subTitle: '在不同的渠道和场景中使用多模态Al形式沟通，情感化沟通感知，跨端能力共享，为用户提供个性化服务和推荐，提高用户体验。',
    contents: ['文本交互','语音交互','视觉交互','虚拟数字人','情感化','拟人化','全双工','主动式'],
    url: `${imgurl}/aiimg3.png`
  },
  {
    title: '全场景连接触达',
    subTitle: '充分洞紧用户，井针对性制定触达与沟通策略，使用合适的内容，在合适的时间触达合适的客户。',
    contents: ['通信：AI智能电话｜短信｜5G消息','在线：音视频｜直播交互','微信：加微｜单聊｜群聊｜视频号｜公众号','线下：智能终端'],
    url: `${imgurl}/aiimg4.png`
  },
  {
    title: '认知智能能力平台',
    subTitle: '认知智能能力平台',
    contents: ['非结构化数据感知','文本智能（NLP）','语音识别（ASR）','智能对话技术','人机互动','多模态情绪识别','可信策略生成'],
    url: `${imgurl}/aiimg5.png`
  },
  {
    title: '数据智能能力平台',
    subTitle: '连接全局客户数据，构建第一方用户池，专为保障企业在数据共享和流通过程中的隐私安全性而设计',
    contents: ['结构化数据感知','大规模模型训练','特征提取和选择','多方安全计算','联邦学习','安全计算引擎'],
    url: `${imgurl}/aiimg6.png`
  }
]
export const NewVideo = () => {
    return (<AITime>
      <Title>AI时代的新一代智能用户运营平台</Title>
      <SubTitle>以“数据、智能、互动式内容、连接通道、运营策略”为核心运营要素，打造智能用户运营平台</SubTitle>
      <ListWrapper>
        {lists.map((item,index)=> {
          return (<div className='listItem'>
            <div>{item.title}</div>
            <div>{item.subTitle}</div>
            <div className='button-group'>
            {item.contents.map((item,index)=> {
                  return (
                    <div>{item}</div>
                  )
            })}
            </div>
            <div className='bottomImg'>
              <img src={item.url} alt="" />
            </div>
            
          </div>)
        })}
      </ListWrapper>
    </AITime>)
}