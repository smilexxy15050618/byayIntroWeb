import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../img.url.js'


export interface IAiProps {};
const Pane = styled.div`
width: 1200px;
margin: 0 auto;
overflow: hidden;
.title{
    margin-top: 80px;
    margin-bottom: 56px;
    width: 100%;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
}
.left{
    width: 577px;
    img{
        width: 100%;
        margin-top: 73px;
    }
    .text{
        padding-left: 20px;
        font-size: 16px;
font-weight: 400;
letter-spacing: 0px;
line-height: 28px;
color: rgba(51, 51, 51, 1);
    }
}
.hengtiao{
    width: 40px;
height: 2px;
opacity: 1;
background: rgba(0, 200, 189, 1);
margin-left: 20px;
margin-top: 16px;
}
.content{
    margin-bottom:99px;
    display: flex;
}
.right{
    flex: 1;
    text-align: right;
    .right_box{
        display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 100%;
    flex-wrap: wrap;
        .list{
            display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
            margin-bottom: 24px;
    width: 33%;
            cursor: pointer;
            img{
                margin-bottom: 8px;
                width: 56px;
                height: 56px;
                box-shadow: 0px 0px 12px 1px rgba(36, 91, 219, 0.06);
            }
            &:hover img{
                box-shadow: 0px 0px 12px 1px rgba(36, 91, 219, 1);
            }
            p{
                font-size: 12px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 16px;
                color: rgba(90, 90, 90, 1);
            }
        }
    }
    img{
        height: 288px;
    }
}
/* text-align: center; */
img {
    margin-bottom: 0;
}

`



const MainWrap = styled.div`
width: 100%;
background: rgba(246, 252, 255, 1);

`
const database= [{
    img:'/img_localiocn1.png',
    title:'123123'
},{
    img:'/img_localiocn2.png',
    title:'123123'
},{
    img:'/img_localiocn3.png',
    title:'123123'
},{
    img:'/img_localiocn4.png',
    title:'123123'
},{
    img:'/img_localiocn5.png',
    title:'123123'
},{
    img:'/img_localiocn6.png',
    title:'123123'
},{
    img:'/img_localiocn7.png',
    title:'123123'
},{
    img:'/img_localiocn8.png',
    title:'123123'
},{
    img:'/img_localiocn9.png',
    title:'123123'
},]
export const LastPng: FC<IAiProps> = ({ }) => {
    return (
    <MainWrap>
        <Pane>
            <div className='title'>安全合规 精益服务</div>
            <div className='content'>
                    <div className='left'>
                        <div className='text'>
                        以完成客户目标为价值导向<br />制定以助力客户成功为目标的服务体系
                        </div>
                        <div className='hengtiao' ></div>
                        <img src={imgurl+'/botlas82.png'}  />
                    </div>
                    <div className='right'>
                        <div className='right_box'>
                            {
                                database.map(ele=>{
                                    return (
                                        <div className="list">
                                                <img src={imgurl+ele.img}  />
                                            <p>{ele.title}</p>
                                            </div>
                                    )
                                })
                            }
                           
                        </div>
                        {/* <img src={imgurl+'/botlsjka2.png'} alt="" /> */}
                    </div>
            </div>
        </Pane>
    </MainWrap>

    );
};
