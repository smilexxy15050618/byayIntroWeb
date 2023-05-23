import { FC, ReactNode, useEffect, useState } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import imgurl from '../../../../img.url.js';
import Number from '../../../components/homepage/version2023/Number';
import classNames from 'classnames';
const list = [
  {
    title: 300,
    unit: '',
    sub: '亿规模',
    content: '任务模型参数量',
  },
  {
    title: 20,
    unit: 'w+',
    sub: '套',
    content: '营销场景库',
  },
  {
    title: 6,
    unit: '',
    sub: '级',
    content: '知识体系及标签体系',
  },
  {
    title: 5000,
    unit: '+',
    sub: '',
    content: '知识点数量',
  },
  {
    title: 200,
    unit: '+',
    sub: '',
    content: '支持实体识别类型',
  },
  {
    title: 100,
    unit: 'w+',
    sub: '',
    content: '实时并发量',
  },
  {
    title: '',
    unit: '亿',
    sub: '级',
    content: '日对话服务频次',
  },
  {
    title: '96%+',
    unit: '',
    sub: '',
    content: '识别准确率',
  },
];

const contentImg = [`${imgurl}/zstp_content.png`];

const menuList = [
  {
    title: '智能语音技术',
    squire: imgurl + '/pakksl1.svg',
    subTitle: 'IST',
    subTitle1: 'Intelligent Speech Technology',
    a: 0,
    content: [
      'ASR：字准率97%、句准率92%，具备语言模型、声学模型高度可定制；',
      'TTS：采用双向LSTM+Attention，研发端到端的语音合成模型，发声人相似度超过90%',
    ],
  },
  {
    title: '知识图谱',
    squire: imgurl + '/pakksl1.svg',
    a: 5,
    subTitle: 'Knowledge Graph',
    subTitle1: 'Knowledge Graph',
    content: [
      '丰富的行业知识图谱：行业知识库、金牌话术库、会话策略库、画像标签库、闲聊库、常识库...',
      '构建机器人大脑知识体系，不断优化和升级AI模型，为各个垂直行业提供智能化服务。',
    ],
  },
  {
    a: 1,
    title: '自然语言处理',
    squire: imgurl + '/pakksl1.svg',

    subTitle: 'NLP',
    subTitle1: 'Natural Language Processing',
    content: [
      '拥有实体识别、意图分类、句法分析、关系抽取等NLU相关算法能力；自研基于深度学习的NLG技术，在26个行业中积累了大量生成语料',
      '意图准确率：在10+行业，50+场景平均识别准确率95%',
      '问答准确率：每亿次真实场景对话轮次准确率92%',
    ],
  },
  {
    title: '大规模预训练模型',
    squire: imgurl + '/pakksl1.svg',
    a: 4,
    subTitle: 'LPTM',
    subTitle1: 'Pre-trained Language Model',
    content: [
      '基于深度学习技术，具备大规模预训练、微调（Fine-tuning）能力，能够对海量数据进行学习和训练，从而实现在多种NLP任务中的优异表现；在自研大模型上引入了人工反馈强化学习（RLHF），提高对话式AI系统的准确率和响应速度',
    ],
  },
  {
    title: '多模态情感技术',
    squire: imgurl + '/pakksl1.svg',
    a: 2,
    subTitle: 'MER',
    subTitle1: 'Multimodal Emotion Recognition Technology',
    content: [
      '拥有情感特征提取、情感信息融合、情感表达等多模态情感技术，通过计算机识别人类语言中的情感成分，进而能够对话机器人的回应进行情感调节，提高对话的亲和力，实现情感化交互，提升用户体验',
    ],
  },
  {
    title: '全双工连续对话',
    squire: imgurl + '/pakksl1.svg',
    a: 3,
    subTitle: 'FDCC',
    subTitle1: 'Full-duplex continuous conversation',
    content: [
      '基于语音识别、自然语言理解、对话管理、语音合成、语音增强、连续对话等技术；在语音和数字人场景中，实现听说状态的实时切换，并自适应不同领域的对话场景，使人机对话更加贴近真实的人际沟通',
    ],
  },
];
const Wrapper = styled.div`
  font-family: 'PingFangSC';
  width: 100%;
  padding-top: 56px;

//   background: url(${imgurl}/qzzy_bg.png) no-repeat;
  background: url(${imgurl}/全栈自研背景色.png) no-repeat;
  background-size: 100% 100%;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
//   background: url(${imgurl}/maps.png) no-repeat;
  background: url(${imgurl}/全栈自研地图.png) no-repeat;
  background-size: 923px 447px;
  background-position: center top;
  width: 100%;
  padding: 0 34px;
  padding-top: 40px;
`;
const Item = styled.div`
  width: 50%;
  height: 72px;
  padding-left: 26px;
  position: relative;
  margin-bottom: 29px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    width: 2px;
    height: 72px;
    opacity: 1;
    background: rgba(0, 200, 189, 1);
  }
  div:first-child {
    font-size: 33px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 40px;
    color: rgba(51, 51, 51, 1);
    span:first-child {
      font-size: 33px;
      font-weight: 700;
      letter-spacing: 0px;
      line-height: 33.6px;
      color: rgba(51, 51, 51, 1);
    }
    span:last-child {
      font-size: 11.2px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 22.4px;
      color: rgba(51, 51, 51, 1);
    }
  }
  div:last-child {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16.8px;
    color: rgba(51, 51, 51, 1);
  }
`;
const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 32px;
  color: rgba(0, 0, 0, 1);
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 auto 0;
  position: relative;
  transform: translateY(50%);
  transition: all 0.3s;
  opacity: 0;
  flex-direction: column;

  &.appear {
    transform: translateY(0);
    opacity: 1;
  }
  .left-menu {
    transform: scale(.9);
    margin-left: 6px;
    width: 100%;
    height: 260px;
    position: relative;
    // background: url(${imgurl}/qzzy_video.png) no-repeat;
    background-size: 216px 221px;
    background-position: center;

    .menu-item {
      cursor: pointer;
      &:hover {
        div:first-child {
          color: #2b58f9;
        }
      }

      div:first-child {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 20.16px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
        vertical-align: top;
      }
      div:last-child {
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 14.4px;
        color: rgba(90, 90, 90, 1);
        text-align: center;
        vertical-align: top;
      }
    }
    .menu-item:first-child {
      position: absolute;
      width: 72px;
      top: 22px;
      left: 50%;
      margin-left: -40px;
    }
    .menu-item:nth-child(2) {
      position: absolute;
      top: 82px;
      left: 4px;
      div {
        text-align: right;
      }
    }
    .menu-item:nth-child(3) {
      position: absolute;
      right: 38px;
      top: 84px;
      div {
        text-align: left;
      }
    }
    .menu-item:nth-child(4) {
      position: absolute;
      top: 165px;
      left: 4px;
      div {
        text-align: right;
      }
    }
    .menu-item:nth-child(5) {
      position: absolute;
      right: 28px;
      top: 164px;
      div {
        text-align: left;
      }
    }
    .menu-item:nth-child(6) {
      position: absolute;
      top: 228px;
      left: 50%;
      margin-left: -50px;
      div {
        text-align: center;
      }
    }
    .activeTitle {
      color: #2b58f9 !important;
    }
  }
  @keyframes fangda {
    0% {
      transform: scale(0.83);
    }

    50% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(0.83);
    }
  }
  .pakksl {
    width: 156px;
    position: absolute;
    left: 50%;
    height: 155px;
    top: 58%;
    transform: translate(-50%, -50%);
    img {
      margin-bottom: 0;
    }
    .fangkuan {
      position: absolute;
      top: -8px;
      left: -6px;
    }
    .squire {
      position: absolute;
      animation: fangda 3s ease-in-out infinite alternate;
      left: 50%;
      top: 50%;
      margin-left: -80px;
      margin-top: -89px;
      transform-origin: center;
    }
  }
  .right-menu {
    width: 100%;
    // height: 358px;
    padding: 30px 42px;

    box-sizing: border-box;
    background: url(${imgurl}/rotatebg.png) no-repeat;
    background-size: 105% 100%;
    .title {
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 23.48px;
      color: rgba(43, 88, 249, 1);
      margin-bottom: 6px;

      &::after {
        display: block;
        content: '';
        width: 24px;
        height: 2px;
        opacity: 1;
        border-radius: 20px;
        background: rgba(0, 200, 189, 1);
      }
    }
    .sub {
      width: 100%;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 20.54px;
      color: rgba(90, 90, 90, 1);
      margin-bottom: 22px;
    }
    .contentImg {
      width: 100%;
      margin-bottom: 24px;
      p {
        text-align: justify;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
      }
      p:nth-child(1) {
        margin-bottom: 0;
      }
    }
    .goknoemow{
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 20px;
      color: rgba(26, 26, 26, 1);
      &:hover{
        color: #2b58f9;
        cursor: pointer;
      }
    }
  }
`;
const GLOBAL_ID_WRAP = 'global_number_wrap';
export const GlobaNumberPhone = ({}) => {
  const [current, setCurrent] = useState(0);
  const [showNumber, setShowNumber] = useState(false);
  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(GLOBAL_ID_WRAP);
    new ScrollMagic.Scene({
      triggerElement: videoContent, //触发元素
      triggerHook: 'onEnter', //触发元素开始离开视口时触发
      offset: 0, //从开始点滚动多少px触发（施法前摇）
      duration: 400, //效果持续的距离（法术持续时间/距离）
    })
      // .setClassToggle('.video-wrapper-sticky', 'appear')
      .addTo(controller)
      .on('enter', () => {
        videoContent.classList.add('appear');
        setShowNumber(true);
        controller.destroy();
      });
  }, []);
  return (
    <Wrapper>
      <Title>全栈自研，行业前沿技术水平</Title>
      <Menu id={GLOBAL_ID_WRAP}>
        <div className="left-menu">
          {menuList.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setCurrent(index);
                }}
                className="menu-item">
                <div
                  className={classNames({
                    activeTitle: index == current,
                  })}>
                  {item.title}
                </div>
                <div>{item.subTitle}</div>
              </div>
            );
          })}
          <div className="pakksl">
            <img
              src={menuList[current].squire}
              style={{ transform: `rotate(${menuList[current].a * 60}deg)` }}
              className="fangkuan"
            />
            <img src={imgurl + '/skxmxn.svg'} className={classNames('squire', {})} />
          </div>
        </div>
        <div className="right-menu">
          <div className="title">{menuList[current].title}</div>
          <div className="sub">{menuList[current].subTitle1}</div>
          <div className="contentImg">
            {menuList[current].content.map((item, index) => {
              return <p>{item}</p>;
            })}
          </div>
          <p className='goknoemow' onClick={() => {
              window.open('/form?formType=1');
            }}>了解更多&nbsp;&nbsp;></p>
        </div>
      </Menu>
      <Content>
        {list.map(({ title, content, sub, unit }, index) => {
          return (
            <Item key={index}>
              <div>
                {showNumber && <Number number={title} />}
                <span>{unit}</span>
                <span>{sub}</span>
              </div>
              <div>{content}</div>
            </Item>
          );
        })}
      </Content>
    </Wrapper>
  );
};
