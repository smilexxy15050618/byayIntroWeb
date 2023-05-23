import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import { Theme } from '../../constants/style';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgurl from '../../../img.url.js'

const left = imgurl+'/left.png'
const right = imgurl+'/right.png'

interface TabNavItem {
  name: string;
}

interface TabNavProps {
  bannerList: TabNavItem[];
  minWidthPC?: string;
}

const Wrapper = styled.div`
  
  .swiper-slide{
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
  .capacity-tab{
    position: relative;
    height: 45px;
    width: 100%;
  }
  .fixedTop{
    z-index: 111;
    position: fixed;
    top: 64px;
    width: 100vw;
    background:#fff;
  }
`

const NavItemContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 1200px;
    min-width: unset;
    width: 1200px;
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

const ArrowClickL = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 35px;
  height: 45px;
  background-image: ${`url(${left})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const ArrowClickR = styled.div`
  position: absolute;
  z-index: 2;
  width: 35px;
  height: 45px;
  right: 0;
  top: 0;
  background-image: ${`url(${right})`};
  background-repeat: no-repeat;
  background-size: cover;
`;


const TabNav: React.SFC<TabNavProps> = ({ minWidthPC, bannerList, onCancel }) => {
  const [index, setIndex] = useState(0);
  const [actIndex, setActIndex] = useState(0)
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [slideTranslate,setSlideTranslate]  = useState(0)
  const [is_fixed, set_is_fixed] = useState(false);
  const navRef = useRef(null);

  const onSlideChange = index => {
    setActIndex(index);
  };

  useEffect(() => {

    const fixedTop = document.getElementById('tabNav').offsetTop;

    window.onscroll = () => {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
        const scrollTop = document.documentElement.scrollTop;
        const qiyejieshao = document.getElementById('qiyejieshao');
        const MissionVision = document.getElementById('MissionVision');
        const DevelopHistory = document.getElementById('DevelopHistory');
        const SocietyDuty = document.getElementById('SocietyDuty');
        const CreditMedal = document.getElementById('CreditMedal');
        const JoinUs = document.getElementById('JoinUs');

        const isFixed = scrollTop >= fixedTop - 110;
        set_is_fixed(isFixed);

        if (scrollTop >= qiyejieshao.offsetTop - 109 && scrollTop < MissionVision.offsetTop - 109) {
          setActIndex(0)
        }
        if (scrollTop >= MissionVision.offsetTop - 109 && scrollTop < DevelopHistory.offsetTop - 109) {
          setActIndex(1)
        }
        if (scrollTop >= DevelopHistory.offsetTop - 109 && scrollTop < SocietyDuty.offsetTop - 109) {
          setActIndex(2)
        }
        if (scrollTop >= SocietyDuty.offsetTop - 109 && scrollTop < CreditMedal.offsetTop - 109) {
          setActIndex(3)
        }
        if (scrollTop >= CreditMedal.offsetTop - 109 && scrollTop < JoinUs.offsetTop - 109) {
          setActIndex(4)
        }
        if (scrollTop >= JoinUs.offsetTop - 109) {
          setActIndex(5)
        }
      }
    };
  }, []);

  return (
    <Wrapper>
    <Visible md lg xl xxl xxxl>
      <NavItemContainer maxWidthPc="1200px" minWidthPC={minWidthPC} id="tabNav">
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
      {/* 吸顶占位 onSlideChange={swiper => onSlideChange(swiper.activeIndex)} */}
      <div class="capacity-tab" style={{display: is_fixed ? 'block' : 'none'}}></div>
      <div className={`capacity-tab ${is_fixed ? 'fixedTop' : ''}`} id="tabNav">
        <ArrowClickL
          onClick={e => {
            const res = controlledSwiper.navigation.onPrevClick(e);
          }}
          style={{display: slideTranslate == 0 ? 'none' : 'block'}}
        ></ArrowClickL>
        <Swiper
          slidesPerView="auto"
          onSlideChange = {swiper => {
            console.log('BBB',swiper.activeIndex)
            setSlideTranslate(swiper.activeIndex)
          }}
          onSwiper={swiper => {
            setControlledSwiper(swiper)
          }}
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
                  onCancel(navIndex)
                }}
              >
              {name}
            </SwiperSlide>
            );
          })}
        </Swiper>
        <ArrowClickR
          onClick={e => {
            controlledSwiper.navigation.onNextClick(e);
          }}
          style={{display: actIndex == bannerList.length -1 || slideTranslate == 2 ? 'none' : 'block'}}
        ></ArrowClickR>
      </div>
    </Visible>
    {/*<div style={{width: '100%', height: '129px', paddingTop: '129px', display: is_fixed ? 'block' : 'none'}}></div>*/}
    </Wrapper>
  )
};

export default TabNav;
