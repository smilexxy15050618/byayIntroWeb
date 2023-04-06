import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div<{ backgroundImage?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ffffff;
  h2 {
    padding: 0 20px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 50px;
    font-size: 36px;
    font-weight: 500;
    color: #0d1924;
    border-bottom: none;
    ${media.phone`
      font-size: 26px;
      margin-bottom: 24px;
      font-weight: 500;
    `}
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: center;
    ${media.phone`
      display: block;
      padding: 0 5vw;
    `}
  }
  a.apply {
    display: block;
    margin-top: 0;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: rgba(49, 83, 212, 1);
    box-shadow: 0px 10px 30px 0px rgba(64, 80, 221, 0.1);
    border-radius: 30px;
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #ffffff;
      background: #1f31af;
    }
    ${media.phone`
      width: 100%;
      font-size: 16px;
    `}
  }
  .tel {
    display: block;
    width: 264px;
    height: 50px;
    padding: 0 30px;
    background: rgba(255, 255, 255, 1);
    border-radius: 25px;
    border: 1px solid rgba(49, 83, 212, 1);
    margin-right: 16px;
    color: #999;
    line-height: 48px;
    ${media.phone`
      width: 100%;
      margin-bottom: 16px;
      margin-top: 24px;
      text-align: center;
    `}
  }
`;

interface IApplicationProps {
  title: string;
  text: string;
  backgroundImage?: string;
  onBtnClick: () => void;
}

const BaiduApplication: React.SFC<IApplicationProps> = ({
  title,
  text,
  backgroundImage = '//cdn.byai.com/static/official-website/solution/bg2.png',
  onBtnClick,
}) => (
  <Wrap backgroundImage={backgroundImage}>
    <h2>{title}</h2>
    <div className="btns">
      <div className="tel" onClick={onBtnClick}>
        请输入你的手机号
      </div>
      <a className="apply" onClick={onBtnClick}>
        {text}
      </a>
    </div>
  </Wrap>
);

export default BaiduApplication;
