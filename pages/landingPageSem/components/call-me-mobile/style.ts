import styled from 'styled-components';

export const CallMeContainer = styled.div`
  position: relative;
  &::after {
    content: '';
    width: 33.8rem;
    height: 35rem;
    top: -1.5rem;
    right: 0;
    position: absolute;
    z-index: 1;
    background-image: url('https://cdn.byai.com/static/oss-script/f80e98eab001f7098364962132ba8b1f.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  width: 100%;
  height: 33.6rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    position: relative;
    z-index: 2;
    height: 2.8rem;
    font-size: 2rem;
    font-weight: 500;
    color: #2b2a35;
    line-height: 2.8rem;
  }
  .desc {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 4.4rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: rgba(43, 42, 53, 0.85);
    line-height: 2.2rem;
  }
`;
export const QRCodeContainer = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 4rem;
  margin-bottom: 1rem;
  width: 15.4rem;
  height: 15.4rem;
  background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/d18e766e-5e7c-4190-a3bf-9611ea8d26dc.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
