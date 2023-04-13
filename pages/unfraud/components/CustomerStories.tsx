import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const list = [
    {
        img: '/public_security.png',
        banner: '',
        content: '打造全国反诈成效逆势上扬的“天津样板”。'
    },
    {
        img: '/public_security1.png',
        banner: '',
        content: '高发诈骗类型精准圈定，实效助力反诈指标“双降”。'
    },
    {
        img: '/public_security2.png',
        banner: '',
        content: '宣传劝阻全量铺开，首创百万级居民反诈“新路径”。'
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
width: 378px;
height: 364px;
border-radius: 8px;
background: rgba(255, 255, 255, 1);
box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
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
    }
}
.detail {
    padding: 22px 24px 0 24px;
    img {
        width: 260px;
        height: 26px;
    }
    div:nth-child(2) {
        font-size: 16px;
font-weight: 400;
letter-spacing: -0.17px;
line-height: 26px;
color: rgba(0, 0, 0, 1);
margin-top: 17px;
    }
    div:last-child {
        font-size: 16px;
font-weight: 500;
color: rgba(43, 88, 249, 1);
position: absolute;
bottom: 32px;
cursor: pointer;
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
                        <div className='banner'></div>
                        <div className="detail">
                            <img src={imgurl+img} alt="" />
                            <div>{content}</div>
                            <div>体验Demo →</div>
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