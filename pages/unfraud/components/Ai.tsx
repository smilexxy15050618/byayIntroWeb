import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const titleList = [
    {
        title: '宣防劝阻工作分类管理',
        subTitle: '分段式的预防策略，通过协助公安劝阻、宣防的预防工作，逐步消减受害人、潜在受害人和易感人群的占比',
        url: '/gafz1.png'
    },
    {
        title: '反诈预防平台业务流程',
        subTitle: '数据清洗与分发<br>策略制定与执行<br>反诈效果追踪反馈<br>专业知识库创建及丰富',
        url: '/gafz2.png'
    },
    {
        title: '触达双通道',
        subTitle: '群体全覆盖：覆盖潜在受害人群；<br>​业务强闭环：宣传劝阻持续转化；<br>保护全方位：根据不同线索等级，<br>递进式全方位持续保护',
        url: '/gafz3.png'
    },
    {
        title: '数据驾驶舱',
        subTitle: '全流程可视化：数据报表和大屏；<br>全面追踪宣传劝阻转化数据；<br>持续反馈居民画像，支撑后续反诈策略决策',
        url: '/gafz4.png'
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
margin-bottom: 16px;

}
.sec-title{
    font-size: 22px;
font-weight: 400;
line-height: 32px;
color: rgba(51, 51, 51, 1);
margin-bottom: 40px;
text-align:center;
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
const MainWrap = styled.div`
.aitxs{
    
}

`

export const Ai: FC<IAiProps> = ({ }) => {
    const [currIndex, setCurrIndex] = useState(0);
    return (
    <MainWrap>
        <Pane>
            <div className="title">构建数智化反诈新模式，打造最全面的数智反诈预防平台</div>
            <div className="sec-title">强力提升公安反诈预防全业务效能，助力电诈“双降”，持续保障居民生命财产安全</div>

            <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
            <div className='aitxs'>
                <ListWrapper>
                    <div className="lists">
                    {titleList.map(({ title, subTitle }, index) => {
                        return (
                                <ListItem className={index==currIndex?'active':null} onClick={()=>setCurrIndex(index)}>
                                    <div>{title}</div>
                                    {index==currIndex&&<div dangerouslySetInnerHTML={{ __html: subTitle }}></div>}
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
