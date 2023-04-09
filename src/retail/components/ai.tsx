import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const titleList = [
    {
        title: '用户管理',
        subTitle: '智能化打标，打造多维度标签体系智能分析意向，构建用户画像360用户精细化分层，精准营销触达赋能运营人员，有效管理用户资产',
        url: '/yhgl.png'
    },
    {
        title: '精准营销',
        subTitle: '智能化打标，打造多维度标签体系智能分析意向，构建用户画像360用户精细化分层，精准营销触达赋能运营人员，有效管理用户资产',
        url: '/yhgl.png'
    },
    {
        title: '智能触达',
        subTitle: '智能化打标，打造多维度标签体系智能分析意向，构建用户画像360用户精细化分层，精准营销触达赋能运营人员，有效管理用户资产',
        url: '/yhgl.png'
    },
    {
        title: '数据化运营',
        subTitle: '智能化打标，打造多维度标签体系智能分析意向，构建用户画像360用户精细化分层，精准营销触达赋能运营人员，有效管理用户资产',
        url: '/yhgl.png'
    },
]
export type IStrategyProps = {};
const Pane = styled.div`
padding: 80px 0;
.title {
    font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
}
.desc {
    font-size: 22px;
font-weight: 400;
letter-spacing: 0px;
line-height: 32px;
color: rgba(51, 51, 51, 1);
text-align: center;
margin: 16px auto 40px;
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
height: 560px;
opacity: 1;
border-radius: 8px;
background: rgba(246, 252, 255, 1);
padding: 16px;
box-sizing: border-box;
}
img {
    width: 100%;
    height: 528px;
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

const Strategy: FC<IStrategyProps> = ({ }) => {
    const [currIndex, setCurrIndex] = useState(0);
    return (
        <Pane>
            <div class="title">AI赋能零售品牌全域增长，打造核心用户价值</div>
            <div class="desc">助力品牌高效引流获客、营销增长、精细化运营，提升会员体验和业绩增量</div>
            <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
                <ListWrapper>
                    <div class="lists">
                    {titleList.map(({ title, subTitle }, index) => {
                        return (
                                <ListItem className={index==currIndex?'active':null} onClick={()=>setCurrIndex(index)}>
                                    <div>{title}</div>
                                    {index==currIndex&&<div>{subTitle}</div>}
                                </ListItem>
                        )
                    })}
                    </div>
                    <div class="imgWrapper">
                         <img src={`${imgurl}${titleList[currIndex].url}`} />
                    </div>
                </ListWrapper>
            </div>
        </Pane>
    );
};

export default Strategy;
