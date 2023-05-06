import { FC, ReactNode, useEffect, useState } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import imgurl from '../../../../img.url.js'
import Number from '../../../components/homepage/version2023/Number'
const list = [
    {
        title: 10,
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

const menuList = [
    {
        title: '知识图谱',
        subTitle: '机器人大脑（知识体系）'
    },
    {
        title: '百应星球',
        subTitle: 'CSM工作台（精细化运营）'
    },
    {
        title: '百应神舟',
        subTitle: '知识生产+模型生产'
    },
    {
        title: '机器人工厂',
        subTitle: 'No-Code AI'
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
  justify-content: space-between;
  width: 1200px;
  padding-left: 65px;
  box-sizing: border-box;
  margin: 62px auto 0;
  .left-menu {
    width: 545px;
    height: 353px;
    position: relative;
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
        top: 0;
        left: 0;
    }
    .menu-item:nth-child(2) {
        position: absolute;
        top: 0;
        right: 0;
    }
    .menu-item:nth-child(3) {
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .menu-item:nth-child(4) {
        position: absolute;
        right: 72px;
        bottom: 0;
    }
  }
  .right-menu {
    width: 528px;
height: 378px;
opacity: 1;
border-radius: 10px;
border: 1px solid #FFFFFF;
padding-top: 69px;
padding-left: 65px;
box-shadow: 0px 20px -17px 0px #072C59;
// backdrop-filter: blur(6px);
.title {
    font-size: 18px;
font-weight: 500;
line-height: 32px;
color: #333333;
span {
    font-size: 14px;
font-weight: 400;
line-height: 28px;
color: #5A5A5A;
margin-left: 8px;
}
}
  }
`
const GLOBAL_ID_WRAP = 'global_number_wrap';
const GlobalNumber = ({ }) => {
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
                   {menuList.map((item)=> {
                    return (<div className='menu-item'>
                        <div>{item.title}</div>
                        <div>{item.subTitle}</div>
                    </div>)
                   })}
                </div>
                <div className='right-menu'>
                    <div className='title'>
                    知识图谱<span>机器人大脑（知识体系）</span>
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