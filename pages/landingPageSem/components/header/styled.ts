import styled from 'styled-components';

export const logoPic = 'https://cdn.byai.com/static/oss-script/65537356cec47432b2ce267918c85391.png';
export const HeaderContainer = styled.div<{ isDelBg: boolean }>`
  height: 64px;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  position: fixed;
  z-index: 999;
  background: ${props => (props.isDelBg ? '#ffffff' : '#f4f7ff')};
  .logo {
    margin: 16px 0 0 120px;
    height: 32px;
    width: 112px;
    background-image: url(${logoPic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
  }
  .desc {
    height: 22px;
    font-size: 12px;
    margin-top: 24px;
    padding: 0 8px;
    margin-left: 16px;
    font-weight: 400;
    color: #2b58f9;
    line-height: 22px;
    border-radius: 11px;
    border: 1px solid rgba(43, 88, 249, 0.25);
  }
`;
