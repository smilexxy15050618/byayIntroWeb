import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const titleList = [
    {
        title: '增量ROI达成',
        subTitle: '洞察玩家需求，归纳意向类型定位玩家行为，确定精准人群挖掘玩家转化要素，迭代策略个性化对话，快速高效转化',
        url: '/zl.png'
    },
    {
        title: '高体验转化',
        subTitle: '更智能，多轮交互挽回沉睡玩家创意策略，延伸用户生命周期“稀缺感”专属福利，提升亲密度智能对话引导，提升付费意愿',
        url: '/gty.png'
    },
    {
        title: '稳定模型验证',
        subTitle: 'ROI导向，精细运营手段多变量测试，验证高转化模型把控变量节点，为结果负责数据对比，迭代运营策略',
        url: '/mxyz.png'
    }
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
margin-bottom: 40px;
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
padding: 14px 16px 0;
box-sizing: border-box;
}
img {
    width: 100%;
    height: 416px;
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
            <div className="title">AI外呼助力游戏平台实现用户激活及体验转化</div>
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
