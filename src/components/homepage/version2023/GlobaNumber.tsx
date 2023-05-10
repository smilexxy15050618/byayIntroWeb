import { FC, ReactNode, useEffect, useState } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import imgurl from '../../../../img.url.js'
import Number from '../../../components/homepage/version2023/Number'
import classNames from 'classnames';
const list = [
    {
        title: 300,
        unit: '',
        sub: '亿规模',
        content: '任务模型参数量'
    },
    {
        title: 20,
        unit: 'w+',
        sub: '套',
        content: '营销场景库'
    },
    {
        title: 6,
        unit: '',
        sub: '级',
        content: '知识体系及标签体系'
    },
    {
        title: 5000,
        unit: '+',
        sub: '',
        content: '知识点数量'
    },
    {
        title: 200,
        unit: '+',
        sub: '',
        content: '支持实体识别类型'
    },
    {
        title: 100,
        unit: 'w+',
        sub: '',
        content: '实时并发量'
    },
    {
        title: '',
        unit: '亿',
        sub: '级',
        content: '日对话服务频次'
    },
    {
        title: 96,
        unit: '%+',
        sub: '',
        content: '识别准确率'
    }
]

const contentImg = [
    `${imgurl}/zstp_content.png`
]

const menuList = [
    {
        title: '语音技术',
        squire:imgurl+'/pakksl1.svg',
        subTitle: 'Speech tech',
        subTitle1: 'Speech technology',
        a:0,
        content: ['ASR：字准率97%、句准率92%，具备语言模型、声学模型高度可定制；','TTS：采用双向LSTM+Attention，研发端到端的语音合成模型，发声人相似度超过90%']
    },
    {
        title: '知识图谱',
        squire:imgurl+'/pakksl1.svg',
        a:5,
        subTitle: 'Knowledge Graph',
        subTitle1: 'Knowledge Graph',
        content: ['丰富的行业知识图谱：行业知识库、金牌话术库、会话策略库、画像标签库、闲聊库、常识库...','构建机器人大脑知识体系，不断优化和升级AI模型，为各个垂直行业提供智能化服务。']
    },
    {
        a:1,
        title: '自然语言处理',
        squire:imgurl+'/pakksl1.svg',

        subTitle: 'NLP',
        subTitle1: 'Natural Language Processing',
        content: ['拥有实体识别、意图分类、句法分析、关系抽取等NLU相关算法能力；自研基于深度学习的NLG技术，在26个行业中积累了大量生成语料','意图准确率：在10+行业，50+场景平均识别准确率95%','问答准确率：每亿次真实场景对话轮次准确率92%']
    },
    {
        title: '大规模预训练模型',
        squire:imgurl+'/pakksl1.svg',
        a:4,
        subTitle: 'LPTM',
        subTitle1: 'Pre-trained Language Model',
        content: ['基于深度学习技术，具备大规模预训练、微调（Fine-tuning）能力，能够对海量数据进行学习和训练，从而实现在多种NLP任务中的优异表现；在自研大模型上引入了人工反馈强化学习（RLHF），提高对话式AI系统的准确率和响应速度']
    },
    {
        title: '多模态情感技术',
        squire:imgurl+'/pakksl1.svg',
        a:2,
        subTitle: 'MER',
        subTitle1: 'Multimodal Emotion Recognition Technology',
        content: ['拥有情感特征提取、情感信息融合、情感表达等多模态情感技术，通过计算机识别人类语言中的情感成分，进而能够对话机器人的回应进行情感调节，提高对话的亲和力，实现情感化交互，提升用户体验']
    },
    {
        title: '全双工连续对话',
        squire:imgurl+'/pakksl1.svg',
        a:3,
        subTitle: 'FDCC',
        subTitle1: 'Full-duplex continuous conversation',
        content: ['基于语音识别、自然语言理解、对话管理、语音合成、语音增强、连续对话等技术；在语音和数字人场景中，实现听说状态的实时切换，并自适应不同领域的对话场景，使人机对话更加贴近真实的人际沟通']
    }
]
const Wrapper = styled.div`
    width: 100%;
    padding-top: 80px;
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    background: url(${imgurl}/qzzy_bg.png) no-repeat;
    background-size: 100% 100%;
&.appear{
  transform: translateY(0);
  opacity: 1;
}
`
const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: url(${imgurl}/maps.png) no-repeat;
    background-size: 923px 447px;
    background-position: center top;
    width: 1200px;
    margin: 0 auto 24px;
    padding-top: 114px;
`
const Item = styled.div`
    width: 298px;
    height: 72px;
    padding-left: 24px;
    position: relative;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:nth-child(4n) {
        width: 185px;
    }
    &:before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 72px;
      opacity: 1;
      background: rgba(0, 200, 189, 1);
    }
    div:first-child {
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 0px;
        line-height: 40px;
        color: rgba(51, 51, 51, 1);
        span:first-child {
            font-family: DINAlternate;
        }
    span:last-child {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 32px;
      color: rgba(51, 51, 51, 1);
    }
    }
    div:last-child {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
     }
`
const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: rgba(26,26,26,1);
  line-height: 40px;
  text-align: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 92px auto 0;
  position: relative;
  
  .left-menu {
    width: 688px;
    height: 378px;
    position: relative;
    // background: url(${imgurl}/qzzy_video.png) no-repeat;
    background-size: 216px 221px;
    background-position: center;

    
    .menu-item {
        cursor: pointer;
        &:hover {
            div:first-child {
                color: #2B58F9;
            }
        }
      
        div:first-child {
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 32px;
            color: #333333;
            text-align: left;
            vertical-align: top;
        }
        div:last-child {
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 24px;
            color: #5A5A5A;
            text-align: left;
            vertical-align: top;
        }
    }
    .menu-item:first-child {
        position: absolute;
        top: 12px;
        left: 303px;
    }
    .menu-item:nth-child(2) {
        position: absolute;
        top: 104px;
        left: 103px;
        div {
            text-align: right;
        }
    }
    .menu-item:nth-child(3) {
        position: absolute;
        right: 113px;
        top: 104px;
        div {
            text-align: left;
        }
    }
    .menu-item:nth-child(4) {
        position: absolute;
        top: 212px;
        left: 75px;
        div {
            text-align: right;
        }
    }
    .menu-item:nth-child(5) {
        position: absolute;
        right: 95px;
        bottom: 116px;
    }
    .menu-item:nth-child(6) {
        position: absolute;
        bottom: 17px;
        left: 280px;
        div {
            text-align: center;
        }
    }
    .activeTitle{
        color: #2B58F9 !important;
    }
   
  }
  @keyframes fangda {
    0% {
      transform: translate(-47%, -50%) scale(0.75);

    }
    100%{
        transform: translate(-47%, -50%) scale(1); 
      
    }
  }
  .pakksl{
    width:30%;
    position: absolute;
    left: 50%;
    height:211px;
    top: 50%;
    transform: translate(-50%, -50%);
    img{
        margin-bottom:0;
        // transition: all 0.5s;
    }
    .fangkuan{
        position: absolute;
    }
    .squire{
        position: absolute;
        transform: translate(-47%, -50%);
        animation: fangda 3s infinite alternate ease-in-out;
        left: 50%;
        top: 50%;
    }
}
  .right-menu {
    width: 528px;
height: 418px;
padding-left: 58px;
padding-right: 108px;

box-sizing: border-box;
background: url(${imgurl}/rotatebg.png) no-repeat;
background-size: 100% 100%;
.title {
    width: 100%;
    font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
line-height: 32px;
color: rgba(43, 88, 249, 1);
margin-top: 85px;
margin-bottom: 4px;

&::after {
    display: block;
    content: "";
    width: 24px;
height: 2px;
opacity: 1;
border-radius: 20px;
background: rgba(0, 200, 189, 1);
}
}
.sub {
    width: 100%;
    font-size: 14px;
font-weight: 400;
letter-spacing: 0px;
line-height: 28px;
color: rgba(90, 90, 90, 1);
}
.contentImg {
    width: 100%;
    margin-top: 24px;
     p {
        font-size: 14px;
font-weight: 400;
letter-spacing: 0px;
line-height: 32px;
color: rgba(51, 51, 51, 1);
text-align: justify;
     }
}
  }
`
const GLOBAL_ID_WRAP = 'global_number_wrap';
const GlobalNumber = ({ }) => {
    const [current,setCurrent] = useState(0);
    const [showNumber,setShowNumber] = useState(false);
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
        <Wrapper id={GLOBAL_ID_WRAP}>
            <Title>全栈自研，行业前沿技术水平</Title>
            <Menu>
            
                <div className='left-menu'>
                   
                   {menuList.map((item,index)=> {
                    return (<div onClick={()=>{setCurrent(index)}} className='menu-item'>
                        <div className={classNames({
                            activeTitle:index == current
                        })}>{item.title}</div>
                        <div>{item.subTitle}</div>
                    </div>)
                   })}
                    <div className='pakksl'>
                        <img  src={menuList[current].squire} style={{transform: `rotate(${(menuList[current].a)*60}deg)`}} className='fangkuan' />
                        <img src={imgurl+'/skxmxn.svg'}  className={classNames('squire',{
                        })} />
                     </div>
                </div>
                <div className='right-menu'>
                    <div className='title'>
                    {menuList[current].title}
                    </div>
                    <div className='sub'>
                    {menuList[current].subTitle1}
                    </div>
                    <div className='contentImg'>
                        {menuList[current].content.map((item,index)=> {
                            return <p>{item}</p>
                        })}
                    </div>
                </div>
            </Menu>
            <Content>
            {list.map(({ title, content, sub, unit }, index) => {
                return (
                    <Item key={index}>
                        <div>
                        {showNumber&&<Number number={title}/>}<span>{unit}</span><span>{sub}</span>
                        </div>
                        <div>{content}</div>
                    </Item>
                )
            })}
            </Content>
        </Wrapper>
    )
}

export default GlobalNumber;