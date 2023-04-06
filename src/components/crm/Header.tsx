import React, { FC, useEffect, useCallback, useState, useRef, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';
import { throttle } from 'throttle-debounce';
import { media } from '../../constants/style';
import Box from '../Box';

const MobileBtn = css`
  font-size: 14px;
  width: auto;
  height: auto;
  color: #2b58f9;
  line-height: 20px;
  font-weight: 500;
`;
const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkBtn = styled.div`
  font-weight: 400;
  color: #2b58f9;
  line-height: 22px;
  cursor: pointer;
  width: 120px;
  height: 36px;
  ${FlexCenter}

  @media (max-width: 768px) {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid rgba(0, 0, 0, 0.08);
    ${MobileBtn};
  }

  @media (min-width: 768px) {
    &:hover {
      color: #1742de;
    }
  }
`;

const RegisterBtn = styled.div`
  width: 120px;
  height: 36px;
  cursor: pointer;
  @media (min-width: 768px) {
    background: #2b58f9;
    border-radius: 18px;
    color: #fff;
    margin-left: 4px;
    &:hover {
      background: #1742de;
    }
  }
  @media (max-width: 768px) {
    ${MobileBtn}
  }
  ${FlexCenter}
`;

const Logo = styled.img`
  height: 60px;
  margin: 0;
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
  background-color: ${props => (props.scroll ? '#fff' : '#F9FAFF')};
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
    img {
      height: 80%;
    }
  }
`;

type IProps = {
  onBtnClick: () => void;
};
export const CRM_LOGO = '//cdn.byai.com/static/official-website/crm/crm-logo.png';
const Header: FC<IProps> = ({ onBtnClick }) => {
  const getScrollState = () => window.document.body.getBoundingClientRect().top < -60;
  const [isScroll, setIsScroll] = useState(false);
  const isScrollRef = useRef(isScroll);
  const headRef = useRef<HTMLDivElement>(null);

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
        <Logo src={CRM_LOGO} className="animate__animated animate__slow animate__fadeInDown" />
        <Box
          display="flex"
          alignItems="center"
          height="100%"
          className="btn-wrap animate__animated animate__slow animate__fadeInDown">
          <a href="https://crm.byai.com/login" target="_blank" rel="noreferrer">
            <LinkBtn>登录</LinkBtn>
          </a>
          <RegisterBtn onClick={onBtnClick}>注册有礼</RegisterBtn>
        </Box>
      </Box>
    </Head>
  );
};

export { Header };
