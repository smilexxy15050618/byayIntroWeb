import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import imgurl from '../../../img.url.js'

const MainWrap = styled.div`
    width: 1200px;
    padding: 80px 0 100px;
    box-sizing:border-box;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 100%;
        padding: 40px 0;
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
            color: rgba(26, 26, 26, 1);
        }
    }
    .content{
        width: 1200px;
        padding-top: 50px;
        img{
            display: block;
            margin: 0 auto;
            width: 1181px;
            height: 488px;
        }
    }
    .content-wap{
        width: 100%;
        padding: 32px 16px;
        .honor1{
            width: 100%;
            height: 73px;
            margin-bottom: 32px;
        }
        .honor2{
            width: 100%;
            height: 212px;
            margin-bottom: 0;
        }
    }
}
`
export const CoreAi: FC = () => {
    return (
        <MainWrap>
            <Visible md lg xl xxl xxxl>
                <div className="title">百余项核心AI技术专利，赢得行业广泛认可</div>
                <div class="content">
                    <img src={imgurl+'/honor-pc.png'} alt="" />
                </div>
            </Visible>
            <Visible xs sm>
                <div className="title">百余项核心AI技术专利<br />赢得行业广泛认可</div>
                <div class="content-wap">
                    <img className="honor1" src={'static/img2023/honor-wap-tech-1.png'} alt="" />
                    <img className="honor2" src={'static/img2023/honor-wap-tech-2.png'} alt="" />
                </div>
            </Visible>  
        </MainWrap>
    )
}