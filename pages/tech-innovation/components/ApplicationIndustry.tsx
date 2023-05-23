import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import imgurl from '../../../img.url.js'

const MainWrap = styled.div`
    width: 1200px;
    padding: 80px 0 33px;
    box-sizing:border-box;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 100%;
        padding: 40px 0 0px;
    }
    .title {
        font-size: 40px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 48px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
        margin-bottom: 16px;
        @media(max-width: 768px) {
            font-size: 24px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 32px;
            color: rgba(0, 0, 0, 1);
        }
    }
    .sec-title{
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 56px;
        text-align:center;
        @media(max-width: 768px) {
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 24px;
            margin-bottom: 32px;
            color: rgba(0, 0, 0, 1);
        }
    }
    .content{
        width: 1200px;
        height: 512px;
        @media(max-width: 768px) {
            width: 100%;
            height: auto;
        }
        img{
            width: 1200px;
            height: 512px;
            @media(max-width: 768px) {
                width: 100%;
                height: auto;
                margin: 0;
            }
        }
    }
}
`
export const ApplicationIndustry: FC = () => {
    return (
        <MainWrap>
            <div className="title">数据智能</div>
            <Visible md lg xl xxl xxxl>
                <div className="sec-title">利用大数据、人工智能和机器学习技术，挖掘数据价值、优化决策</div>
                <div class="content">
                    <img src={imgurl+'/data-intell.png'} alt="" />
                </div>
            </Visible>
            <Visible xs sm>
            <div className="sec-title">利用大数据、人工智能和机器学习技术<br />挖掘数据价值、优化决策</div>
            <div class="content">
                <img src={'static/img2023/data-intell-wap.png'} alt="" />
            </div>
            </Visible>
            
        </MainWrap>
    )
}