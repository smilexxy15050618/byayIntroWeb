import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const list = [
    {
        banner: '/government-jn.svg',
        title: '济南社保',
        content: '实现业务办理从“多次跑”转变为“零次跑”。'
    },
    {
        banner: '/government-dq.svg',
        title: '德清公安',
        content: '聚焦高频办理业务，打造智能、便利公安服务。'
    },
    {
        banner: '/government-hz.svg',
        title: '杭州医保',
        content: '引入智能AI客服垂直深耕，助力医保服务智能化升级。'
    }
]

const Wrapper = styled.div`
    width: 100%;
    height: 650px;
    background: #F6FCFF;
`
const MainWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
`
const Title = styled.div`
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
    margin-bottom: 56px;
`
const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
`
const ListItem = styled.div`
width: 378px;
height: 364px;
border-radius: 8px;
background: rgba(255, 255, 255, 1);
box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
overflow: hidden;
position: relative;
&:hover{
    .banner{
        transform: scale(1.02);
        transition: transform 0.4s;
    }
}
.banner {
    width: 100%;
    height: 160px;
}
.detail {
    padding: 22px 24px 0 24px;
    .title{
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
        color: rgba(43, 88, 249, 1);
        &::before{
            display: inline-block;
            content: '';
            width: 17px;
            height: 20px;
            background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTlweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMTkgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+6ZK755+zPC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IueUu+advyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMC4wMDAwMDAsIC0zOTEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IuWuouaIt+ahiOS+i+agt+W8jy005qC85aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NS4wMDAwMDAsIDIwNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuODQwOTczLCAxODIuNTAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IumSu+efsyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi44NTM5NTcwMywwLjkgTDIuNywwLjkgTDAsNS44NSBMNC45NSw1Ljg1IEw2Ljg1Mzk1NzAzLDAuOSBaIE0xOCw1Ljg1IEwxNS4zLDAuOSBMMTEuMTQ2NSwwLjkgTDEzLjA1LDUuODUgTDE4LDUuODUgWiBNMTIuMTUsNS44NSBMMTAuMjQ2NSwwLjkgTDcuNzUzOTU3MDMsMC45IEw1Ljg1LDUuODUgTDEyLjE1LDUuODUgWiBNMTAuMzg0NjQ2NSwxNS44ODg2MDM1IEwxOCw2Ljc1IEwxMy4wNSw2Ljc1IEwxMC4zODQ2NDY1LDE1Ljg4ODYwMzUgWiBNMCw2Ljc1IEw3LjYxNTM1MzUyLDE1Ljg4ODYwMzUgTDQuOTUsNi43NSBMMCw2Ljc1IFogTTUuODUsNi43NSBMOSwxNy41NSBMMTIuMTUsNi43NSBMNS44NSw2Ljc1IFoiIGlkPSLlvaLnirYiIGZpbGw9IiMyQjU4RjkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            vertical-align: -4px;
            margin-right: 6px;
        }
    }
    .content {
        padding-right: 110px;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: -0.17px;
        line-height: 26px;
        color: rgba(0, 0, 0, 1);
        margin-top: 17px;
    }
    .more{
        font-size: 16px;
        font-weight: 500;
        color: rgba(43, 88, 249, 1);
        position: absolute;
        bottom: 32px;
        cursor: pointer;
        &::after {
              content: ' →';
            }
        &:hover {
            &::after {
              content: ' →';
            }
             text-decoration: underline;
          }
    }
}
`
const UNFRAUD = 'unfraud_case'
export const CustomerStories: FC = () => {
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(UNFRAUD);
        new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 10, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear')
                controller.destroy();
            });
    }, []);
    return (
        <Wrapper>
            <MainWrapper>
                <Title>客户案例</Title>
                <ListWrapper id={UNFRAUD}>
                    {
                        list.map(({ title, banner, content }, index) => {
                            return (
                                <ListItem>
                                    <img className="banner" src={imgurl + banner} />
                                    <div className="detail">
                                        <div className="title">{title}</div>
                                        <div className="content">{content}</div>
                                        <div className="more" onClick={() =>
                                            window.open('/form?formType=1')
                                        }>了解详情</div>
                                    </div>
                                </ListItem>
                            )
                        })
                    }
                </ListWrapper>
            </MainWrapper>
        </Wrapper>

    )
}