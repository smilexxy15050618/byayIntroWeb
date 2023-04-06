import styled from 'styled-components';

export const BannerMobileWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescContent = styled.div`
  margin-top: 64px;
  .title {
    width: 242px;
    height: 96px;
    font-size: 40px;
    font-weight: 400;
    color: #2b2b2b;
    line-height: 48px;
    margin-bottom: 10px;
    margin-top: 32px;
  }
  .sub-title {
    font-size: 20px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.65);
    line-height: 28px;
    letter-spacing: 1px;
    margin-bottom: 60px;
  }
`;
export const ButtonWrapper = styled.div`
  width: 280px;
  height: 48px;
  background: #f66600;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  line-height: 48px;
`;

export const ImgWrapper = styled.div`
  width: 375px;
  height: 298px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
