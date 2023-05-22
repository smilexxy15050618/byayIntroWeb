import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const MainWrap = styled.div`
    width: 1200px;
    padding: 80px 0 33px;
    box-sizing:border-box;
    margin: 0 auto;
    @media(max-width: 768px) {
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
    }
    .sec-title{
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 56px;
        text-align:center;
    }
    .content{
        width: 1200px;
        height: 512px;
        img{
            width: 1200px;
            height: 512px;
        }
    }
}
`
export const CoreAi: FC = () => {
    return (
        <MainWrap>
            <div className="title">百余项核心AI技术专利，赢得行业广泛认可</div>
            <div class="content">
                <img src={imgurl+'/data-intell.png'} alt="" />
            </div>
        </MainWrap>
    )
}