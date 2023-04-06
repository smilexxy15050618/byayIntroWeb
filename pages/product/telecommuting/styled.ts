import styled from 'styled-components';
import { media } from '../../../src/constants/style';
import { DataVisualWrapper } from '../../../src/components/product';

export const HighLiteSpan = styled.span`
  color: #ff2d00;
`;

export const GreenTag = styled.span`
  background: #54c4c5;
  padding: 8px 18px;
  color: #fff;
  font-size: 18px;
  line-height: 25px;
  margin-top: 10px;
  ${media.phone`
      margin-top: 0;
      font-size: 14px;
      line-height: 20px;
    `}
`;

export const HelpItemTitle = styled.div`
  font-size: 32px;
  line-height: 45px;
  color: #0d1924;
  ${media.phone`
      text-align: center;
      font-size: 18px;
      line-height: 27px;
    `}
`;

export const HelpItem = styled.p`
  color: #666666;
  font-size: 14px;
  line-height: 28px;
`;

export const H5HelpItem = styled.div<{ width?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  margin-right: 0 !important;
  img {
    width: 24px;
    margin-bottom: 0;
    box-shadow: 0px 5px 15px 0px rgba(49, 83, 212, 0.1);
    border-radius: 20px;
  }
  p {
    margin-left: 24px;
    margin-bottom: 0;
    color: #0d1924;
    font-size: 14px;
    line-height: 24px;
    width: ${props => props.width || 220}px;
    display: block !important;
  }
`;

export const TwoLineH5HelpItem = styled(H5HelpItem)`
  p {
    width: 245px;
    line-height: 20px;
  }
`;

export const HelpItemBottom = styled.div`
  position: relative !important;
  text-align: center;
  width: 100%;
  margin-top: -60px;
  padding-bottom: 80px;
  background: #f8f9fb;
  ${media.phone`
      margin-top: 0;
      padding-top: 36px;
      padding-bottom: 40px;
      p {
        font-size: 14px !important;
        line-height: 20px !important;
        &:nth-child(2) {
          font-size: 26px !important;
          line-height: 42px !important;
        }
      }
    `}
  p {
    font-size: 32px;
    line-height: 45px;
    font-weight: 300;
    color: #0d1924;
    &:nth-child(2) {
      font-weight: 500;
    }
  }
`;

export const DataVisualWrapper760 = styled(DataVisualWrapper)`
  height: 760px;
`;

export const Title = styled.div`
  text-align: center;
  padding-top: 100px;
  div {
    font-size: 40px;
    line-height: 56px;
    color: #0d1924;
  }
  p {
    font-size: 24px;
    line-height: 33px;
    color: #666666;
    margin: 0;
    padding-top: 20px;
  }
`;

export const H5Title = styled.div`
  font-size: 30px;
  line-height: 42px;
  color: #0d1924;
  text-align: center;
  padding: 40px 0;
  div:last-child {
    padding-top: 25px;
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.85);
  }
  p {
    margin: 0;
  }
`;

export const SubTitle = styled.div`
  font-size: 32px;
  line-height: 45px;
  padding: 80px 0;
  text-align: center;
  color: #0d1924;
  ${media.phone`
      display: none;
    `}
`;

export const SassItem = styled.div`
  background: #f8f9fb;
  img {
    margin: 0;
  }
  > div {
    padding: 50px 40px;
    div {
      color: #000;
      font-size: 24px;
      line-height: 33px;
      font-weight: 500;
    }
    p {
      color: #666;
      font-size: 14px;
      line-height: 21px;
      margin-top: 16px;
      margin-bottom: 0;
    }
  }
  .sass-item-img-absolute {
    position: absolute;
    width: 48px;
    right: 40px;
    top: 275px;
  }
`;

export const SalesItem = styled.div`
  background: #fff;
  div {
    display: flex;
    padding: 24px;
    img {
      width: 32px;
    }
    p {
      font-size: 14px;
      line-height: 32px;
      color: #000;
      padding-left: 20px;
    }
  }
`;

export const TryWrapper = styled.div`
  padding: 72px 0;
  text-align: center;
  background-image: url(//cdn.byai.com/static/intro/img/Products/telecommuting/bg1.png);
  background-repeat: no-repeat;
  background-size: cover;
  div:first-child {
    font-size: 40px;
    line-height: 56px;
    color: #fff;
    padding-bottom: 40px;
  }
  input {
    height: 50px;
    border-radius: 25px;
    border: 1px solid rgba(49, 83, 212, 1);
    width: 265px;
    padding-left: 30px;
  }
  button {
    height: 50px;
    border-radius: 25px;
    width: 150px;
    background: #54c4c5;
    border: none;
    margin-left: 16px;
    color: #fff;
    font-size: 16px;
  }
`;

export const H5TryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  margin-top: -20px;
  input {
    width: 295px;
    height: 36px;
    background: rgba(255, 255, 255, 1);
    border-radius: 18px;
    border: 1px solid rgba(53, 85, 218, 1);
    text-align: center;
  }
  button {
    width: 295px;
    height: 36px;
    background: rgba(49, 83, 212, 1);
    border-radius: 18px;
    color: #fff;
    margin: 8px 0 30px;
    border: none;
  }
`;

export const Banner = styled.div`
  text-align: center;
  background-image: url(//cdn.byai.com/static/intro/img/Products/telecommuting/banner.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  margin-top: 86px;
  padding: 200px 0 250px;
  div {
    font-size: 32px;
    line-height: 45px;
    padding: 10px 40px;
    background-image: url(//cdn.byai.com/static/intro/img/Products/telecommuting/light.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
  }
  h1 {
    font-size: 72px;
    line-height: 100px;
    padding: 32px 0 20px;
    margin: 0;
  }
  h2 {
    font-size: 32px;
    line-height: 45px;
    font-weight: 400;
    margin: 0;
  }
  ${media.phone`
      background-image: url(//cdn.byai.com/static/intro/img/Products/telecommuting/banner2-0213.png);
      padding: 70px 0;
      margin-top: 50px;
      div {
        font-size: 12px;
        line-height: 17px;
        padding: 4px 16px;
      }
      h1 {
        font-size: 24px;
        line-height: 33px;
        padding: 20px 0 9px;
      }
      h2 {
        font-size: 12px;
        line-height: 17px;
      }
    `}
`;

export const MyFooter = styled.div`
  margin-bottom: 60px;
`;

export const OnePxLine = styled.div`
  border-bottom: 1px solid #e8e8e8;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  ${media.phone`
      display: none;
    `}
`;

export const SetBackgroundWrapper = styled.div<{ url: string }>`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;
  background-position-x: right;
`;

export const CardWrapper = styled.div`
  margin: 0 25px 30px;
  box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
  img {
    margin: 0;
  }
`;
