import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const MainWrap = styled.div`
width: 1200px;
margin: 0 auto;
.title {
    font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
}
.content {
width: 100%;
height: 337px;
background: url(${imgurl}/yyhy.png) no-repeat;
background-size: 100% 100%;
position: relative;
margin-top: 58px;
img {
    width: 327px;
    height: 337px;
    position: absolute;
    right: 0;
    top: 0;
}
}
`
export const ApplicationIndustry: FC = () => {
    return (
        <MainWrap>
            <div className="title">应用行业及场景</div>
            <div className="content">
                <img src={imgurl+'/game_solution.png'} alt="" />
            </div>
        </MainWrap>
    )
}