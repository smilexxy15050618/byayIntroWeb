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
height: 482px;
background: url(${imgurl}/bybx.png) no-repeat;
background-size: 100% 100%;
position: relative;
margin-top: 58px;
img {
    width: 323px;
    height: 338px;
    position: absolute;
    right: 0;
    top: 0;
}
}
`
export const ApplicationIndustry: FC = () => {
    return (
        <MainWrap>
            <div class="title">百应保险行业业务范围</div>
            <div class="content">
                {/* <img src={imgurl+'/gafz_yycj.png'} alt="" /> */}
            </div>
        </MainWrap>
    )
}