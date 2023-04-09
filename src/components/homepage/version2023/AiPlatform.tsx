import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
export type IPlatformProps = {};

const contentList = [
    {
        name: '品牌零售',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务'
    },
    {
        name: '银行',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务'
    },
    {
        name: '公安反诈',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务'
    },
    {
        name: '政务服务',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务'
    },
    {
        name: '互联网',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务'
    },
    {
        name: '保险',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务'
    },
    {
        name: '教育',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务'
    },
    {
        name: '汽车',
        content: '通过对话式AI助力品牌实现「极致体验+极致ROI」的全域营销服务'
    }
]
const Wrapper = styled.div`
  width: 1152px;
  min-height: 100vh;
  background: #fff;
  padding: 77px 0 51px;
  margin: 0 auto;
  .title {
    font-family: PingFangSC;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
    margin-bottom: 60px;
  }
  .more {
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(43, 88, 249, 1);
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
`
const ListWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   .content {
    width: 264px;
    height: 266px;
    display: flex;
    flex-direction: column;
    align-item: center;
    padding: 60px 24px 0;
    box-sizing: border-box;
    &:hover {
        border-radius: 8px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
        transform: translateY(-8px);
        transition: transform 1s;
        div:nth-child(2) {
            color: rgba(43, 88, 249, 1);
        }
    }
    div {
        text-align: center;
        img {
            width: 60px;
            height: 60px;
        }
        &:nth-child(2) {
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 24px;
            color: rgba(51, 51, 51, 1);
            margin-top: 32px;
        }
        &:last-child {
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 20px;
            color: rgba(90, 90, 90, 1);
            margin-top: 16px;
        }
    }
   }

`
const Platform: FC<IPlatformProps> = () => {
    return (
        <Wrapper>
            <div class="title">全行业AI用户运营平台与解决方案</div>
            <ListWrapper>
                {contentList.map(({ name, content }, index) => {
                    return (
                        <div class="content">
                            <img src=''></img>
                            <div>{name}</div>
                            <div>{content}</div>
                        </div>
                    )
                })}
            </ListWrapper>
            <div class="more">
                   查看更多
                   <img></img>
                </div>
        </Wrapper>
    )
}

export default Platform;