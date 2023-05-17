import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Hidden, Visible } from 'react-grid-system';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';

const list = [
    {
        banner: '/bank-ny.png',
        title: '中国农业银行',
        content: '高效激活存量客户，精细化运营手段助力转化。'
    },
    {
        banner: '/bank-hz.png',
        title: '杭州联合银行',
        content: '助力银行贷款营销及客户回访场景业务突破。'
    },
    {
        banner: '/bank-lc.png',
        title: '隆昌农商行',
        content: 'AI规模化快速筛选优质客户，提升人效。'
    }
]

const Wrapper = styled.div`
    width: 100%;
    background: #F6FCFF;
    .Bigtitle{
        padding: 40px 0;
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;
        color: rgba(0, 0, 0, 1);
        text-align: center;
    }
`
const MainWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0 80px;
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
            padding-right: 91px;
            font-size: 16px;
            font-weight: 400;
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

const SolutionWap = styled.div`
    width: 100%;
    padding-bottom: 40px;
    @media (max-width: 768px) {
        .custom-bar-wrapper{
            width: 300px;
        }
      }
    .solution-item{
        position: relative;
        width: 300px;
        height: 356px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
        box-sizing: border-box;
        img{
            width: 300px;
            height: 160px;
            margin: 0;
        }
        .title{
            font-size: 18px;
            font-weight: 500;
            line-height: 26px;
            color: rgba(43, 88, 249, 1);
            padding: 24px 24px 0;
            &::before{
                display: inline-block;
                content: '';
                width: 18px;
                height: 18px;
                background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTlweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMTkgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+6ZK755+zPC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IueUu+advyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMC4wMDAwMDAsIC0zOTEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IuWuouaIt+ahiOS+i+agt+W8jy005qC85aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NS4wMDAwMDAsIDIwNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuODQwOTczLCAxODIuNTAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IumSu+efsyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi44NTM5NTcwMywwLjkgTDIuNywwLjkgTDAsNS44NSBMNC45NSw1Ljg1IEw2Ljg1Mzk1NzAzLDAuOSBaIE0xOCw1Ljg1IEwxNS4zLDAuOSBMMTEuMTQ2NSwwLjkgTDEzLjA1LDUuODUgTDE4LDUuODUgWiBNMTIuMTUsNS44NSBMMTAuMjQ2NSwwLjkgTDcuNzUzOTU3MDMsMC45IEw1Ljg1LDUuODUgTDEyLjE1LDUuODUgWiBNMTAuMzg0NjQ2NSwxNS44ODg2MDM1IEwxOCw2Ljc1IEwxMy4wNSw2Ljc1IEwxMC4zODQ2NDY1LDE1Ljg4ODYwMzUgWiBNMCw2Ljc1IEw3LjYxNTM1MzUyLDE1Ljg4ODYwMzUgTDQuOTUsNi43NSBMMCw2Ljc1IFogTTUuODUsNi43NSBMOSwxNy41NSBMMTIuMTUsNi43NSBMNS44NSw2Ljc1IFoiIGlkPSLlvaLnirYiIGZpbGw9IiMyQjU4RjkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                vertical-align: -4px;
                margin-right: 4px;
            }
        }
        .content {
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            color: rgba(0, 0, 0, 1);
            padding: 16px 24px 25px;
        }
        .demo-go{
            padding-top: 10px;
            padding-left: 24px;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: rgba(43, 88, 249, 1);
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
            <Visible md lg xl xxl xxxl>
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
            </Visible>
            <Visible xs sm>
                <div className="Bigtitle">客户案例</div>
                <SolutionWap id={UNFRAUD}>
                    <ByProgressSwiper
                        newProgress={true}
                        initialSlide={0}
                        contentPadding="32px"
                        progressPadding="0px"
                        previewWidth="70px">
                        {list.map((item, i) => (
                        // 算垂直百分比时应该用对应(margin或padding)/父元素width，得到其占比
                        <div className='solution-item'>
                            <img src={imgurl+item.banner} />
                            <div className='title'>{item.title}</div>
                            <div className="content">{item.content}</div>
                            <a 
                            onClick={() =>
                                window.open('/form?formType=1')
                            }
                            className="demo-go">了解详情 →</a>
                        </div>
                        ))}
                    </ByProgressSwiper>
                </SolutionWap>
            </Visible>
            
        </Wrapper>

    )
}