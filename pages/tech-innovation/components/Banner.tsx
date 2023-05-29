import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Visible } from 'react-grid-system';

export interface IAiProps {};

const bannerBg = imgurl+'/tech-banner-bg.png'

const BannerWrap = styled.div`
    width: 100%;
    background: linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);
`

const TechInnovWrap = styled.div`
    width: 1200px;
    height: 636px;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 100%;
        height: 667px;
        background-image: url(${bannerBg});
        background-size: cover;
        background-repeat: no-repeat;
    }
`

const TextArea = styled.div`
    padding-top: 175px;
    @media (max-width: 768px) {
        padding-top: 96px;
    }
    .title{
        font-size: 48px;
        font-weight: 600;
        line-height: 60px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
        @media (max-width: 768px) {
            font-size: 32px;
            font-weight: 500;
            line-height: 47px;
            color: rgba(0, 0, 0, 1);
        }
    }
    .subtitle{
        padding-top: 16px;
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        @media (max-width: 768px) {
            padding: 12px 20px 0;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: rgba(51, 51, 51, 1);
            text-align: justify;
        }
    }
`
const BlueBtn = styled.div`
  margin: 16px auto 80px;
  width: 132px;
  height: 48px;
  border-radius: 5.33px;
  background: rgba(43, 88, 249, 1);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 48px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 112px;
    height: 40px;
    opacity: 1;
    border-radius: 5.33px;
    background: rgba(43, 88, 249, 1);
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    margin-top: 20px;
    margin-bottom: 0;
  }
`;

const AcademyTram = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    padding: 52px 0 37px;
    height: 417px;
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
    box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
    margin: 80px auto 0;
    box-sizing: border-box;

    @media (max-width: 768px) {
        display: block;
        width: 343px;
        height: 666px;
        margin: 32px auto 0;
        padding: 40px 19px;
        border-radius: 16px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
        box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
    }

    .team{
        padding-left: 57px;
        width: 460px;
        @media (max-width: 768px) {
            padding: 0;
            width: 100%;
        }
        .title{
            font-size: 26px;
            font-weight: 600;
            letter-spacing: 0px;
            line-height: 40px;
            color: rgba(26, 26, 26, 1);
            @media (max-width: 768px) {
                font-size: 24px;
                font-weight: 600;
                letter-spacing: 0px;
                line-height: 32px;
                color: rgba(26, 26, 26, 1);
                text-align: center;
            }
        }
        .img{
            margin-top: 32px;
            width: 268px;
            @media (max-width: 768px) {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
            }
            img{
                width: 117px;
                height: 34px;
                margin: 0 10px 6px 0;
                @media (max-width: 768px) {
                    display: block;
                    width: 147px;
                    height: 35px;
                    margin: 0 10px 10px 0;
                }
                &:nth-child(2n){
                    margin-right: 0;
                }
            }
        }
    }
    .team-info{
        padding-top: 42px;
        width: 683px;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 32px;
        color: rgba(51, 51, 51, 1);
        @media (max-width: 768px) {
            width: 100%;
            font-size: 14px;
            font-weight: 400;
            line-height: 26px;
            color: rgba(51, 51, 51, 1);
            padding-top: 23px;
            box-sizing: border-box;
            text-align: justify;
        }
        div{
            margin-bottom: 16px;
        }
    }
    .tram-logo{
        width: 1200px;
        padding-top: 30px;
        padding-left: 57px;
        @media (max-width: 768px) {
            width: 100%;
            padding-top: 5px;
            padding-left: 0;
        }
        img{
            width: 60px;
            height: 60px;
            margin: 0 54px 0 0;
            @media (max-width: 768px) {
                width: 36px;
                height: 36px;
                margin: 0 30px 15px 0;
                &:nth-child(5n){
                    margin-right: 0;
                }
            }
        }
    }
`

const teamImg = [
    {img: imgurl+'/teamImg-1.png'},
    {img: imgurl+'/teamImg-2.png'},
    {img: imgurl+'/teamImg-3.png'},
    {img: imgurl+'/teamImg-4.png'},
]

const teamImgWap = [
    {img: imgurl+'/teamImg-wap-1.png'},
    {img: imgurl+'/teamImg-wap-2.png'},
    {img: imgurl+'/teamImg-wap-3.png'},
    {img: imgurl+'/teamImg-wap-4.png'},
]

const teamLogo = [
    {img: imgurl+'/teamLogo-1.png'},
    {img: imgurl+'/teamLogo-2.png'},
    {img: imgurl+'/teamLogo-3.png'},
    {img: imgurl+'/teamLogo-4.png'},
    {img: imgurl+'/teamLogo-5.png'},
    {img: imgurl+'/teamLogo-6.png'},
    {img: imgurl+'/teamLogo-7.png'},
    {img: imgurl+'/teamLogo-8.png'},
    {img: imgurl+'/teamLogo-9.png'},
    {img: imgurl+'/teamLogo-10.png'},
    
]

export const Banner: FC<IAiProps> = ({ }) => {
    useEffect(() => {
        
    }, []);

    return (
    <BannerWrap>
        <TechInnovWrap>
            <Visible md lg xl xxl xxxl>
                <TextArea className="animate__animated animate__fadeInDown">
                    <div className="title">全栈自研的AI核心技术</div>
                    <Visible md lg xl xxl xxxl>
                        <div className="subtitle">百应拥有近百项 AI 及大数据领域相关专利和软件著作，研发水平位列行业前沿，保<br />证了超高语音识别率、超强语义理解，实现人机无障碍交流沟通</div>
                    </Visible>
                    <Visible xs sm>
                        <div className="subtitle">拥有百余项 AI 及大数据领域相关专利和软件著作，研发水平位列行业前沿，保证了超高语音识别率、超强语义理解，实现人机无障碍交流沟通</div>
                    </Visible>
                    <BlueBtn
                        onClick={() =>
                        window.open('/form?formType=1')
                        }>
                        立即体验
                    </BlueBtn>
                </TextArea>
                <AcademyTram className="animate__animated animate__fadeInUp">
                    <div className="team">
                        <div className="title">百应智能研究院<br />中美两地联合算法团队</div>
                        <div className="img">
                            <Visible md lg xl xxl xxxl>
                                {teamImg.map((item, index) => (
                                    <img src={item.img} />
                                ))}
                            </Visible>
                            <Visible xs sm>
                                {teamImgWap.map((item, index) => (
                                    <img src={item.img} />
                                ))}
                            </Visible>

                            
                        </div>
                    </div>
                    <div className="team-info">
                        <div>百应科技在AI领域拥有资深技术团队，其核心团队拥有两名阿里云MVP及多名来自阿里、腾讯、华为的高管、人工智能科学家和多位技术骨干，也有来自于海内外顶尖院校的精英伙伴。</div>
                        <div>包括麻省理工学院、卡内基梅隆大学、加州大学伯克利分校、哥伦比亚大学、加州大学洛杉矶分校、密歇根大学、瑞典皇家理工大学， 国内的香港科技大学、香港理工大学、清华大学、北京大学、复旦大学、浙江大学、中国科学技术大学、哈尔滨工业大学、华中科技大学等。</div>
                    </div>
                    <div className='tram-logo'>
                    {teamLogo.map((item, index) => (
                        <img src={item.img} />
                    ))}
                    </div>
                </AcademyTram>
            </Visible>
            
            <Visible xs sm>
                <TextArea>
                    <div className="title">全栈自研的AI核心技术</div>
                    <Visible md lg xl xxl xxxl>
                        <div className="subtitle">百应拥有近百项 AI 及大数据领域相关专利和软件著作，研发水平位列行业前沿，保<br />证了超高语音识别率、超强语义理解，实现人机无障碍交流沟通</div>
                    </Visible>
                    <Visible xs sm>
                        <div className="subtitle">拥有百余项 AI 及大数据领域相关专利和软件著作，研发水平位列行业前沿，保证了超高语音识别率、超强语义理解，实现人机无障碍交流沟通</div>
                    </Visible>
                    <BlueBtn
                        onClick={() =>
                        window.open('/form?formType=1')
                        }>
                        立即体验
                    </BlueBtn>
                </TextArea>
                <AcademyTram>
                    <div className="team">
                        <div className="title">百应智能研究院<br />中美两地联合算法团队</div>
                        <div className="img">
                            <Visible md lg xl xxl xxxl>
                                {teamImg.map((item, index) => (
                                    <img src={item.img} />
                                ))}
                            </Visible>
                            <Visible xs sm>
                                {teamImgWap.map((item, index) => (
                                    <img src={item.img} />
                                ))}
                            </Visible>

                            
                        </div>
                    </div>
                    <div className="team-info">
                        <div>百应科技在AI领域拥有资深技术团队，其核心团队拥有两名阿里云MVP及多名来自阿里、腾讯、华为的高管、人工智能科学家和多位技术骨干，也有来自于海内外顶尖院校的精英伙伴。</div>
                        <div>包括麻省理工学院、卡内基梅隆大学、加州大学伯克利分校、哥伦比亚大学、加州大学洛杉矶分校、密歇根大学、瑞典皇家理工大学， 国内的香港科技大学、香港理工大学、清华大学、北京大学、复旦大学、浙江大学、中国科学技术大学、哈尔滨工业大学、华中科技大学等。</div>
                    </div>
                    <div className='tram-logo'>
                    {teamLogo.map((item, index) => (
                        <img src={item.img} />
                    ))}
                    </div>
                </AcademyTram>
            </Visible>
        </TechInnovWrap>
    </BannerWrap>

    );
};
