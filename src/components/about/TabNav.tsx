import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
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
    color: rgba(90,90,90,1);
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
  .capacity-placeholder{
    width: 100vw;
    height: 45px;
  }
`

const NavItemContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const NavItemContainerCom = styled.div`
  width: 1200px;
  margin:0 auto;
`;

const NavItemPlaceholder = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 16px;
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


const TabNav: React.SFC<TabNavProps> = ({ bannerList, onCancel }) => {
  const [actIndex, setActIndex] = useState(0)
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [slideTranslate,setSlideTranslate]  = useState(0)
  const [is_fixed, set_is_fixed] = useState(false);
  const navRef = useRef(null);
  const oneSwipers = useRef(null);

  const onSlideChange = index => {
    setActIndex(index);
  };

  useEffect(() => {
    
    const fixedTop = document.getElementById('tabNav').offsetTop;

    window.onscroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const qiyejieshao = document.getElementById('qiyejieshao');
        const MissionVision = document.getElementById('MissionVision');
        const DevelopHistory = document.getElementById('DevelopHistory');
        const SocietyDuty = document.getElementById('SocietyDuty');
        const CreditMedal = document.getElementById('CreditMedal');
        const JoinUs = document.getElementById('JoinUs');

        if (scrollTop >= qiyejieshao.offsetTop - 145 && scrollTop < MissionVision.offsetTop - 145) {
          setActIndex(0)
          if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
            oneSwipers.current.swiper.slideTo(0)
          }
        }

        if (scrollTop >= MissionVision.offsetTop - 145 && scrollTop < DevelopHistory.offsetTop - 145) {
          setActIndex(1)
          if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
            oneSwipers.current.swiper.slideTo(0)
          }
        }

        if (scrollTop >= DevelopHistory.offsetTop - 145 && scrollTop < SocietyDuty.offsetTop - 145) {
          setActIndex(2)
        }

        if (scrollTop >= SocietyDuty.offsetTop - 145 && scrollTop < CreditMedal.offsetTop - 145) {
          setActIndex(3)
        }

        if (scrollTop >= CreditMedal.offsetTop - 145 && scrollTop < JoinUs.offsetTop - 145) {
          setActIndex(4)
          if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
            oneSwipers.current.swiper.slideTo(2)
          }
        }

        if (scrollTop >= JoinUs.offsetTop - 145) {
          setActIndex(5)
          if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
            oneSwipers.current.swiper.slideTo(2)
          }
        }
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
          if(scrollTop < fixedTop-64) {
            set_is_fixed(false);
          } else if(scrollTop<JoinUs.offsetHeight+JoinUs.offsetTop) {
            set_is_fixed(true);
          } else if(scrollTop>=JoinUs.offsetHeight+JoinUs.offsetTop+50) {
            set_is_fixed(false);
          }
        } else {
          if(scrollTop < fixedTop-80) {
            set_is_fixed(false);
          } else if(scrollTop<JoinUs.offsetHeight+JoinUs.offsetTop) {
            set_is_fixed(true);
          } else if(scrollTop>=JoinUs.offsetHeight+JoinUs.offsetTop+50) {
            set_is_fixed(false);
          }
        }
      }
  }, []);

  return (
    <Wrapper>
    <Visible md lg xl xxl xxxl>
      <NavItemContainer className={`${is_fixed ? 'fixedTop' : ''}`} id="tabNav">
        <NavItemContainerCom>
          {bannerList.map(({ name, jumpTarget }, navIndex) => {
            return (
              <NavItem
                key={navIndex}
                active={navIndex === actIndex}
                onClick={() => {
                  onCancel();
                  setActIndex(navIndex);
                  const node = document.getElementById(`${jumpTarget}`).offsetTop - '145'
                  window.scrollTo({
                    top:node,
                    behavior:'smooth'
                  });

                }}
              >
              {name}
            </NavItem>
            );
          })}
        </NavItemContainerCom>
      </NavItemContainer>
      <NavItemPlaceholder style={{display: is_fixed ? 'block' : 'none'}}></NavItemPlaceholder>
    </Visible>
    <Visible xs sm>
      <div className={`capacity-tab ${is_fixed ? 'fixedTop' : ''}`} id="tabNav">
        <ArrowClickL
          onClick={e => {
            const res = controlledSwiper.navigation.onPrevClick(e);
          }}
          style={{display: slideTranslate == 0 ? 'none' : 'block'}}
        ></ArrowClickL>
        <Swiper
        ref={oneSwipers}
          slidesPerView="auto"
          onSlideChange = {swiper => {
            setSlideTranslate(swiper.activeIndex)
          }}
          onSwiper={swiper => {
            setControlledSwiper(swiper)
          }}
        >
          {bannerList.map(({ name, jumpTarget }, navIndex) => {
            return (
              <SwiperSlide
                style={{color: actIndex == navIndex ? 'rgba(43, 88, 249, 1)' : 'rgba(90, 90, 90, 1)'}}
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
      <div class="capacity-placeholder" style={{display: is_fixed ? 'block' : 'none'}}></div>
    </Visible>
    </Wrapper>
  )
};

export default TabNav;
