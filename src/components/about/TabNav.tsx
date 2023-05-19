import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';

interface TabNavItem {
  name: string;
}

interface TabNavProps {
  bannerList: TabNavItem[];
  minWidthPC?: string;
}

const Wrapper = styled.div`
  .one-slide{
    position: relative;
    width: 90px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(90, 90, 90, 1);
  }
  .one-slide-active{
    color: rgba(43, 88, 249, 1);
    &::after{
      position: absolute;
      left: 30px;
      bottom: 0;
      content: '';
      width: 30px;
      height: 2px;
      opacity: 1;
      border-radius: 2px;
      background: rgba(43, 88, 249, 1);
    }
  }
`

const NavItemContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  height: 100%;
  padding-top: 16px;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const NavItem = styled.div<{ active: boolean }>`
  position: relative;
  display: inline-flex;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 80px;
  font-size: 20px;
  color: ${props => (props.active ? 'rgba(43, 88, 249, 1)' : 'rgba(0, 0, 0, 1)')};
  line-height: 80px;
  cursor: pointer;
  margin-right: 40px;
  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    content: '';
    width: 160px;
    height: 4px;
    border-radius: 2px;
    background: ${props => (props.active ? 'rgba(43, 88, 249, 1)' : 'transparent')};
  }
  &:last-child {
    margin-right: 0;
  }
`;

const TabNav: React.SFC<TabNavProps> = ({ minWidthPC, bannerList, onCancel }) => {
  const [index, setIndex] = React.useState(0);
  const [actIndex, setActIndex] = React.useState(0)

  const onSlideChange = index => {
    setActIndex(index);
  };

  useEffect(() => {
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) && false) {
        
        const qiyejieshao = document.getElementById('qiyejieshao');
        const MissionVision = document.getElementById('MissionVision');
        const DevelopHistory = document.getElementById('DevelopHistory');
        const SocietyDuty = document.getElementById('SocietyDuty');
        const CreditMedal = document.getElementById('CreditMedal');
        const JoinUs = document.getElementById('JoinUs');

        if (scrollTop >= qiyejieshao.offsetTop - 140 && scrollTop < MissionVision.offsetTop - 140) {
          setActIndex(0)
        }
        if (scrollTop >= MissionVision.offsetTop - 140 && scrollTop < DevelopHistory.offsetTop - 140) {
          setActIndex(1)
        }
        if (scrollTop >= DevelopHistory.offsetTop - 140 && scrollTop < SocietyDuty.offsetTop - 140) {
          setActIndex(2)
        }
        if (scrollTop >= SocietyDuty.offsetTop - 140 && scrollTop < CreditMedal.offsetTop - 140) {
          setActIndex(3)
        }
        if (scrollTop >= CreditMedal.offsetTop - 140 && scrollTop < JoinUs.offsetTop - 140) {
          setActIndex(4)
        }
        if (scrollTop >= JoinUs.offsetTop - 140) {
          setActIndex(5)
        }
      }
    };
  }, []);

  return (
    <Wrapper>
    <Visible md lg xl xxl xxxl>
      <NavItemContainer maxWidthPc="1200px" minWidthPC={minWidthPC}>
        {bannerList.map(({ name, jumpTarget }, navIndex) => {
          return (
            <NavItem
              key={navIndex}
              active={navIndex === index}
              onClick={() => {
                const node = document.querySelector(jumpTarget);
                if (node) {
                  node.scrollIntoView({ behavior: 'smooth' });
                }
                onCancel()
              }}
            >
            {name}
          </NavItem>
          );
        })}
      </NavItemContainer>
    </Visible>
    <Visible xs sm>
      <Swiper
        slidesPerView="auto"
        onSlideChange={swiper => onSlideChange(swiper.activeIndex)}
      >
        {bannerList.map(({ name, jumpTarget }, navIndex) => {
          return (
            <SwiperSlide 
              className={actIndex == navIndex ? 'one-slide-active one-slide' : 'one-slide'} 
              key={navIndex} 
              onClick={() => {
                onSlideChange(navIndex)
                const node = document.querySelector(jumpTarget);
                if (node) {
                  node.scrollIntoView({ behavior: 'smooth' });
                }
                onCancel()
              }}
            >
            {name}
          </SwiperSlide>
          );
        })}
      </Swiper>
    </Visible>
    </Wrapper>
  )
};

export default TabNav;
