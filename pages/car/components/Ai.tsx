import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const titleList = [
    {
        title: '目前汽车行业面临的痛点',
        subTitle: '线下体验成本持续攀升，线上体验水平待提高数字化转型被重视，提升回报仍是难点有效线索占比低，公域投放成本持续攀升',
        url: '/qctd.png'
    },
    {
        title: '公域+私域',
        subTitle: '双驱”充分发挥数据效能，达成客户满意闭环，推动业绩增长',
        url: '/gysy.png'
    },
    {
        title: '围绕汽车售前售后服务',
        subTitle: '提升客户的购车、用车、养车、换车全流程体验',
        url: '/shfw.png'
    },
]
export interface IAiProps {};
const Pane = styled.div`
padding: 80px 0;
.title {
    font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
margin-bottom: 56px;
}

`
const ListWrapper = styled.div`
display: flex;
justify-content: space-between;
.lists {
    width: 296px;
}
.imgWrapper {
    width: 888px;
height: 448px;
opacity: 1;
border-radius: 8px;
background: rgba(246, 252, 255, 1);
padding: 16px;
box-sizing: border-box;
}
img {
    width: 100%;
    height: 100%;
}
`
const ListItem = styled.div`
 width: 296px;
height: 104px;
padding-top: 38px;
padding-left: 40px;
background: rgba(246, 252, 255, 1);
 margin-bottom: 8px;
 border-radius: 8px;
 box-sizing:border-box;
 div:first-child { 
    font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
line-height: 24px;
color: rgba(90, 90, 90, 1);
&:hover {
    font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
line-height: 24px;
color: rgba(43, 88, 249, 1);
}
 }
 &.active {
    width: 296px;
    height: 224px;
    background: rgba(43, 88, 249, 1);
    color: rgba(255, 255, 255, 1);
    padding: 40px 46px 48px 40px;
    box-sizing: border-box;
    div:first-child {
        font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
line-height: 24px;
color: rgba(255, 255, 255, 1);
margin-bottom: 16px;
    }
    div:last-child {
        font-size: 14px;
font-weight: 300;
letter-spacing: 0px;
line-height: 24px;
color: rgba(255, 255, 255, 1);
text-align: left;
    }
 }
`
const MainWrap = styled.div`
.aitxs{
    
}

`

export const Ai: FC<IAiProps> = ({ }) => {
    const [currIndex, setCurrIndex] = useState(0);
    return (
    <MainWrap>
        <Pane>
            <div className="title">以数智化提升车企营销、获客、客户服务能力及效果</div>
            <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
            <div className='aitxs'>
                <ListWrapper>
                    <div className="lists">
                    {titleList.map(({ title, subTitle }, index) => {
                        return (
                                <ListItem className={index==currIndex?'active':null} onClick={()=>setCurrIndex(index)}>
                                    <div>{title}</div>
                                    {index==currIndex&&<div>{subTitle}</div>}
                                </ListItem>
                        )
                    })}
                    </div>
                    <div className="imgWrapper">
                         <img src={`${imgurl}${titleList[currIndex].url}`} />
                    </div>
                </ListWrapper>
            </div>
            </div>
        </Pane>
    </MainWrap>

    );
};
