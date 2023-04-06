import React, { FC, useState, useEffect, useRef, useCallback, useMemo, ReactNode } from 'react';
import styled from 'styled-components';
import { VIDEO_LIST_ID } from '.';
import ByDesc from '../common/ByDesc';
import ByProgressSwiper from '../common/ByProgressSwiper';
import Pane from '../homepage/version2023/Pane';
import { Tick } from './Tick';

export type IVideoListMobileProps = {
  contentList?: { color: string; tag: string; icon?: any; infoList: { title: ReactNode; desc: string[] }[] }[];
};
const Content = styled.div`
  width: 100vw;
  position: relative;
  box-sizing: content-box;
  min-height: calc(276px);
  padding-top: calc((100vw - 32px) / 4 * 3 + 24px);
`;
const VideoTitle = styled.div`
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 20px;
`;

const VideoDesc = styled.div`
  font-family: PingFangSC-Regular, PingFang SC;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 0.7);
  line-height: 28px;
  white-space: nowrap;
`;

const JumpStr = styled.div`
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2b58f9;
  line-height: 28px;
  position: absolute;
  cursor: pointer;
  bottom: 0px;
  .jump-str-arrow {
    display: inline-block;
    transition: all 0.3s ease-in;
  }

  &:hover {
    .jump-str-arrow {
      transform: translateX(8px);
    }
  }
`;
const prefix =
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6/';
const videoSrc = ['高用户接听.mp4', '高意向转化.mp4', '优营销模型.mp4'].map(str => `${prefix}${str}`);
const VideoWrapper = styled.div`
  margin: 24px 16px calc(-1 * ((100vw - 32px) / 4 * 3));
  /* width: calc() */
  background: #2b58f9;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 4 / 3;

  > video {
    height: auto;
    width: 100%;
    border-radius: 8px;
  }
`;
const MENU_HEIGHT = '20px';
const Menu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84px;
  border-radius: 8px;
  opacity: 0.45;
  transition: all 0.3s ease;
  padding: 8px 0;
  pointer-events: auto;
  &.active {
    background: rgba(235, 235, 235, 0.45);
    opacity: 1;
  }
  line-height: ${MENU_HEIGHT};
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;

  > img {
    height: 24px;
    margin-bottom: 6px;
  }
`;

const MENU_BOX_PADDING_LEFT = {
  xl: '67px',
  lg: '20px',
  md: '0px',
  xs: '0px',
};

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const ContentWrapper = styled.div`
  position: relative;
`;
const VideoListMobile: FC<IVideoListMobileProps> = ({ contentList }) => {
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <Pane id={VIDEO_LIST_ID} title={['加深用户关系', '提升外呼渠道ROI']}>
      <MenuBox>
        {contentList.map(({ tag, icon }, index) => {
          const isActive = index === currIndex;
          return (
            <Menu
              className={isActive ? 'active' : ''}
              onClick={() => {
                // if (isActive) {
                //   return;
                // }
                // const node = document.querySelector(`.${PANE_CLASS_NAME}[data-index="${index}"] ${ScrollNode}`);
                // if (node) {
                //   node.scrollIntoView({ behavior: 'smooth' });
                // }
                setCurrIndex(index);
              }}>
              <img src={icon} alt={tag} />
              {tag}
            </Menu>
          );
        })}
      </MenuBox>
      <ContentWrapper>
        <VideoWrapper style={{ backgroundColor: contentList[currIndex].color }}>
          <video
            id="by-video"
            preload="auto"
            loop={true}
            muted={true}
            autoPlay={true}
            playsInline={true}
            x5-video-player-type="h5"
            x-webkit-airplay="allow"
            x5-video-orientation="portrait"
            t7-video-player-type="inline"
            src={videoSrc[currIndex]}
          />
        </VideoWrapper>
        <ByProgressSwiper
          noProgress={true}
          style={{ flex: 1 }}
          initialSlide={1}
          contentPadding="25px"
          progressPadding="0px"
          setActiveIndex={index => {
            console.log(index);
          }}
          previewWidth="0px">
          {contentList[currIndex].infoList.map(({ title, desc, index }) => {
            const color = contentList[currIndex].color;
            return (
              <Content data-index={index}>
                <VideoTitle>{title}</VideoTitle>
                {desc.map(d => {
                  return (
                    <VideoDesc>
                      <Tick style={{ color, marginRight: 8 }} />
                      {d}
                    </VideoDesc>
                  );
                })}
                <JumpStr
                  onClick={() => {
                    window.open('/form?formType=1&origin=ecommerce');
                  }}
                  style={{ color }}>
                  免费获取AI提升方案 <span className="jump-str-arrow">→</span>
                </JumpStr>
              </Content>
            );
          })}
        </ByProgressSwiper>
      </ContentWrapper>
    </Pane>
  );
};

export default VideoListMobile;
