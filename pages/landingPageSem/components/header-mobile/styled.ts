import styled from 'styled-components';

export const logoPic = 'https://cdn.byai.com/static/oss-script/65537356cec47432b2ce267918c85391.png';
export const HeaderContainer = styled.div`
  height: 4.4rem;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  position: fixed;
  z-index: 999;
  background: #ffffff;
  .logo {
    margin: 1rem 0 0 2.4rem;
    height: 2.4rem;
    width: 8rem;
    background-image: url(${logoPic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .desc {
    width: 15rem;
    height: 2rem;
    font-size: 1.2rem;
    padding: 0 0.8rem;
    margin: 1.4rem 0 0 0.8rem;
    font-weight: 400;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #2b58f9;
    line-height: 1.8rem;
    border-radius: 1.1rem;
    border: 0.1rem solid rgba(43, 88, 249, 0.25);
  }
`;
