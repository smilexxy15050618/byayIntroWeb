import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const list = [
    {
        img: '/qczj_i.png',
        banner: '/qczj.png',
        content: '陪跑中国领先的汽车消费者在线服务平台数字化进阶之路'
    },
    {
        img: '/lpqc_i.png',
        banner: '/lpqc.png',
        content: '助力科技型智能电动汽车品牌实现营销服务数智化升级'
    },
    {
        img: '/gz_i.png',
        banner: '/gz.png',
        content: '携手瓜子二手车，打造行业领军的汽车消费服务智能新体验'
    },
    {
        img: '/yc_i.png',
        banner: '/yc.png',
        content: '中国领先的汽车互联网企业的营销服务数字化升级之旅'
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
padding: 82px 0 100px;
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
`
const ListItem = styled.div`
width: 284px;
height: 364px;
opacity: 1;
border-radius: 8px;
background: #FFFFFF;
box-shadow: 0px 0px 24px 1px #245BDB;
overflow: hidden;
position: relative;
.banner {
    width: 100%;
    height: 160px;
    &::after {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 160px;
        border-radius: 8px 8px, 0px, 0px;
        background: #2B58F9;
        opacity: 0.2;
    }
}
.detail {
    padding: 17px 24px 0 24px;
    &:first-child {
        img {
            width: 68px;
        }
    }
    &:nth-child(2) {
        img {
            width: 95px;
        }
    }
    &:nth-child(3) {
        img {
            width: 96px;
        }
    }
    &:nth-child(4) {
        img {
            width: 74px;
        }
    }
    div:nth-child(2) {
        font-size: 16px;
font-weight: 400;
letter-spacing: -0.17px;
line-height: 26px;
color: rgba(0, 0, 0, 1);
margin-top: 18px;
    }
    div:last-child {
        font-size: 16px;
font-weight: 500;
color: rgba(43, 88, 249, 1);
position: absolute;
bottom: 32px;
cursor: pointer;
&:hover {
    span {
        margin-left: 10px;
    }
}
    }
}
`

export const CustomerStories: FC = () => {
    return (
        <Wrapper>
             <MainWrapper>
          <Title>客户案例</Title>
          <ListWrapper>
          {
            list.map(({img,banner,content},index)=> {
                return (
                    <ListItem>
                        <div style={{background: `url(${imgurl}${banner})`,backgroundSize: '100% 100%'}} className='banner'></div>
                        <div className="detail">
                            <img src={imgurl+img} alt="" />
                            <div>{content}</div>
                            <div>体验Demo <span>→</span></div>
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