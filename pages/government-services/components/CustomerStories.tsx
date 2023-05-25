import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Hidden, Visible } from 'react-grid-system';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';

const list = [
    {
        banner: '/government-jn.svg.png',
        wapBanner: '/overnment-wap-jn.png',
        title: '济南社保',
        content: '实现业务办理从“多次跑”转变为“零次跑”。'
    },
    {
        banner: '/government-dq.svg.png',
        wapBanner: '/overnment-wap-dq.png',
        title: '德清公安',
        content: '聚焦高频办理业务，打造智能、便利公安服务。'
    },
    {
        banner: '/government-hz.svg.png',
        wapBanner: '/overnment-wap-hz.png',
        title: '杭州医保',
        content: '引入智能AI客服垂直深耕，助力医保服务智能化升级。'
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
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAYAAACb3CikAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHMSURBVFiFzZfNkYMwDIWffMmmFughpAt3E+iGLuL0QGrJcon24Dhh+LNswe6+S2Y8RPp42JJMSFBpHxUAMOjyWaXK/7IDAALdAKBrD3VKbEpLHpJKxY5ANwnUIkhpH1Ve8sVEDbDs1ARka4AlqDEQheSAqRi4zPxvNw2BqLDf1z3fXgpEhe35LyGCjDYAAU3YiKo4Wkfu7YEAQBtH5cjQCa0rKkeCG0GaWNmOzDmgcSXbkbEbQbnxBCC+XwBPBwBde3SSwKFIvqNEimUEhN29/TpLEsfB+noNJrJHqCptX+8NIQDxlmpgJBAiEA2MFOIF4ierrWFSIAB2SXWEwac9ngUSC1qYR7cWgW6GwOrOOR88LW5iifdFbagwXGvUtYfa+Eop27Djquo3pLkWtufxRpZW4KCsplfavi5sz8NTwcBlChR/wdAo38Mzw1zjCOyk8y0BjeT4huZpgGCj5PPIh2wJxHBsMJ/FfU6PVG+Qrj26LYZgqcaXrMlw81vXi/FgNTk1hOcm88ea5pyfgOz9iebuva/1eaV1Tx3EKsjWMGsQUZCtYGIQIhAtDOF5lvQdEUgOkMSFbBAZEDsCN6ndNwtkCAT4sTAn+b/UD7wb8Mxde9SuAAAAAElFTkSuQmCC');
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
         width: 100%;
        display: block;
        .swiper-slide {
            width: 300px !important;
        }
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
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAmCAYAAACh1knUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHdSURBVFiFxZhRkoIwDIb/sDs6ngXusHiL3ga4Dbeg3kHO4uDMbvehZotIbUqB/V90nEg+0yRNJESoULcSAAw+KvepKe0raQAgmAsAXNtjHfNskjh3jtmp+PGaYC4SKC+IA4h17nXUAP5IvYCsDeCDmgLRXs59QMCPvrYnTbm6d3sDzAFRrgazxoMAwABVyNanz1QIwCVgru5fS6ObpUJwNOz77+ad7WYg0+y/tifNjW1XkDktjcoCENK2Y772AsBGxR5XXGQEVUOaf6UNfbz4jgKy0ldZwaqxd8UyABZ/v1BD6bMJHo0BqkINdQrIA6J+12dEOZIKE4IQg6TASCCiQBwMJ956EA+Q2AaUiUHkIr2gj/zoLWyjQWJKWWpLMJcs5aJiFWqoU0ucAEA+k5Du28PZOr+Vc51y2volg1ffHiljB0JwFOpW5ureGWTdXEUYoMrVYDhCvF74xGPEaGbNOinMmuII/k3x/zW79u2RgFHVrJG0sXqe7kbaNyou8YFJH9kzKlNfTyBuutoaAs202c3uvlsekW/E9C7h28A854UIZH0YPwQQuPT69nBeJ2feQwRBALtOpsAQ0IQgHnYy8d0hX7TtGiIfBSIVHv/iABaDOKDxGMB/5MUDsH4B1O/1vh4q4ZgAAAAASUVORK5CYII=');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                vertical-align: -2px;
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
                        slidesPerView="auto"
                        autoplayDelay={5000}
                        spaceBetween={16}
                        centeredSlides={true}>
                        {list.map((item, i) => (
                        // 算垂直百分比时应该用对应(margin或padding)/父元素width，得到其占比
                        <div className='solution-item'>
                            <img src={imgurl+item.wapBanner} />
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