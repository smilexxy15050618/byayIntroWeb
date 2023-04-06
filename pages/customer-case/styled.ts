import styled from 'styled-components';
import { ArrowStyle } from './index.d';

export const AddMoreWrapper = styled.div`
  display: none;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #2b58f9;
  line-height: 55px;
  text-align: center;
  margin: 16px 0;
  cursor: pointer;
  /* 当屏幕小于等于768px的时候 */
  @media (max-width: 768px) {
    display: block;
    margin: 16px 5px 0;
    width: 327px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > div {
    position: relative;
    padding-right: 15px;
  }
`;

/**
 * 查看全部后面的下箭头组件
 */
export const ArrowIconWrapper = styled.div<{ style: ArrowStyle }>`
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${props => props.style.borderWidth};
  border-color: ${props => `${props.style.color} transparent transparent transparent `};
  top: ${props => `${props.style.top}px`};
  left: ${props => `${props.style.left}px`};
`;

export const CasesWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  padding-bottom: 69px;
`;

export const BoomWrapper = styled.div`
  width: 1200px;
  margin: 0 auto 100px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const CarouselWrapper = styled.div`
  background: #fff;
  border-radius: 16px;
`;

export const SwiperWrapper = styled.div`
  width: 1200px;
  margin: 0 auto 100px;
  background-color: #ffffff;
  @media (max-width: 768px) {
    width: 90%;
  }

  position: relative;
  border-radius: 16px;
  background: #ffffff no-repeat left 132px top 140px / 7%
    url(https://cdn.byai.com/static/intro/img/customer-case/bg/quotation.png);
  &:hover {
    .swiper-nav-btn {
      display: inline;
      opacity: 1;
    }
  }
  .swiper-nav-btn {
    display: none;
    opacity: 0;
    z-index: 2;
    font-size: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &.prev-btn {
      left: 48px;
    }
    &.next-btn {
      right: 48px;
    }
    > * {
      color: rgba(151, 151, 151, 0.28);
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 200px;
  margin-top: 75px;
  margin-bottom: 25px;
`;

export const PersonIcon = styled.img`
  opacity: 0.3;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.65);
  line-height: 48px;
  text-align: center;
`;

export const PeopleList = styled.div`
  > * {
    height: 65px;
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const PersonName = styled.div`
  font-size: 24px;
`;

export const PersonDesc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
  line-height: 24px;
`;

export const Content = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 0 151px;
  ${PersonName} {
    margin-bottom: 8px;
  }
`;

export const BannerWrapper = styled.div`
  height: 349px;
  background: #2b58f9;
  @media (max-width: 768px) {
    height: 616px;
  }
`;

export const BannerTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  line-height: 30px;
`;

export const BannerDesc = styled.div`
  width: 425px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;
`;

export const BannerContent = styled.div`
  position: relative;
  width: 1200px;
  padding-top: 130px;
  height: 100%;
  margin: 0 auto;
  ${BannerTitle} {
    margin-bottom: 32px;
  }
  @media (max-width: 768px) {
    width: 100%;
    background-position: bottom -45px center;
    background-size: 100%;
    ${BannerTitle} {
      font-size: 32px;
      margin-top: 34px;
      margin-bottom: 16px;
      text-align: center;
    }

    ${BannerDesc} {
      width: 304px;
      margin: 0 auto;
      text-align: center;
    }
  }

  @keyframes slip {
    0%,
    to {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const BgImg = styled.img`
  position: absolute;
  height: 170px;
`;

export const BannerInner = styled.div``;

export const BannerImage = styled.div`
  position: absolute;
  right: 120px;
  top: 87px;
  width: 360px;

  @media (max-width: 768px) {
    top: auto;
    right: auto;
    left: 53%;
    bottom: -56px;
    > * {
      transform: translateX(-50%);
    }
  }
`;
