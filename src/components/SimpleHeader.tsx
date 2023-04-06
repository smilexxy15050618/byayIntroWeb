import React, { FC, useEffect, useCallback, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { throttle } from 'throttle-debounce';
import Box from './Box';
import { LOGO } from './Header-2021';

const MobileBtn = css`
  font-size: 14px;
  width: auto;
  height: auto;
  line-height: 20px;
  font-weight: 500;
`;
const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkBtn = styled.div<{ scroll?: boolean }>`
  ${FlexCenter};
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
  width: 120px;
  height: 36px;
  color: ${props => (props.scroll ? '#2B58F9' : '#fff')};

  @media (max-width: 768px) {
    padding-right: 16px;
    margin-right: 16px;
    ${MobileBtn}
    border-right: 1px solid;
    border-color: ${props => (props.scroll ? 'rgba(43, 88, 249, 0.1)' : 'rgba(255, 255, 255, 0.28)')};
  }

  @media (min-width: 768px) {
    &:hover {
      color: ${props => (props.scroll ? '#1742DE' : '#fff')};
    }
  }
`;

const RegisterBtn = styled.div<{ scroll?: boolean }>`
  width: 120px;
  height: 36px;
  cursor: pointer;
  @media (min-width: 768px) {
    background: #2b58f9;
    border-radius: 18px;
    color: #fff;
    margin-left: 4px;
    border: 1px solid;
    border-color: ${props => (props.scroll ? 'transparent' : '#fff')};
    &:hover {
      background: #1742de;
    }
  }
  @media (max-width: 768px) {
    ${MobileBtn};
    color: ${props => (props.scroll ? '#2B58F9' : '#fff')};
  }
  ${FlexCenter}
`;

const Logo = styled.img`
  height: 24px;
  margin: 0;
  @media (min-width: 768px) {
    height: 30px;
  }
  @media (max-width: 768px) {
    animation: none;
  }
`;

const Head = styled.div<{ scroll: boolean }>`
  transition: all 0.3s ease-in-out;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background-color: ${props => (props.scroll ? '#fff' : '#2B58F9')};
  border-bottom: ${props => (props.scroll ? '1px solid #ebebeb' : '1px solid transparent')};

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    > div {
      width: 1200px;
    }
    ${RegisterBtn}, ${LinkBtn} {
      font-size: 16px;
    }
  }

  /* viewport宽度<=768时候才会运用 */
  @media (max-width: 768px) {
    > div {
      width: 100%;
    }
    padding: 0 16px;
    .btn-wrap {
      animation: none;
    }
  }
`;

type IProps = {
  onBtnClick: () => void;
};
export const DEFAULT_LOGO = '//cdn.byai.com/static/intro/img/%E7%99%BD%E8%89%B2logo.png';
const SimpleHeader: FC<IProps> = ({ onBtnClick }) => {
  const getScrollState = () => window.document.body.getBoundingClientRect().top < -60;
  const [isScroll, setIsScroll] = useState(false);
  const isScrollRef = useRef(isScroll);
  const headRef = useRef<HTMLDivElement>(null);
  const logo = isScroll ? LOGO : DEFAULT_LOGO;

  const handleChangeBgcolor = useCallback(
    throttle(200, () => {
      const scroll = getScrollState();
      setIsScroll(scroll);
      isScrollRef.current = scroll;
    }),
    [],
  );

  const handleMobileChangeBgcolor = useCallback(
    throttle(200, () => {
      const scroll = getScrollState();
      setIsScroll(scroll);
      isScrollRef.current = scroll;
    }),
    [],
  );

  useEffect(() => {
    document.addEventListener('wheel', handleChangeBgcolor);
    document.addEventListener('touchmove', handleMobileChangeBgcolor);
    return () => {
      document.removeEventListener('wheel', handleChangeBgcolor);
      document.removeEventListener('touchmove', handleMobileChangeBgcolor);
    };
  }, []);

  return (
    <Head scroll={isScroll} ref={headRef}>
      <Box margin="0 auto" height="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Logo src={logo} className="animate__animated  animate__fadeInDown" />
        <Box
          display="flex"
          alignItems="center"
          height="100%"
          className="btn-wrap animate__animated animate__fadeInDown">
          <a href="https://crm.byai.com/login" target="_blank" rel="noreferrer">
            <LinkBtn scroll={isScroll}>登录</LinkBtn>
          </a>
          <RegisterBtn onClick={onBtnClick} scroll={isScroll}>
            注册有礼
          </RegisterBtn>
        </Box>
      </Box>
    </Head>
  );
};

export { SimpleHeader };
