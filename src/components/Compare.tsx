import * as React from 'react';
import { Container, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../constants/style';

const CompareWrapper = styled.div<{
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  mobileContentImage?: string;
}>`
  .des-title {
    margin: 50px 0 35px;
    font-weight: 500;
    ${media.phone`
      margin: 32px 0;
    `}
  }
  .img-wrapper {
    padding: 40px 10px 0;
  }
  li {
    list-style: none;
  }
  .img {
    width: 99%;
    background-image: ${props => `url(${props.backgroundImage})`};
    background-repeat: repeat no-repeat;
    background-size: contain;
    height: 100px;
    @media (max-width: 768px) {
      background-image: url(${props => props.mobileBackgroundImage}) !important;
      font-size: 30px;
      height: 50px;
    }
    ul {
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-around;
      margin: 0;
      @media (max-width: 768px) {
        height: 25px;
        line-height: 25px;
      }
    }
  }
  p {
    text-align: center;
    margin-top: 50px;
    font-size: 16px;
    color: rgba(102, 102, 102, 1);
  }
  .compare-content {
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    margin-top: 37px;
    ul {
      flex: 1;
      li {
        margin-bottom: 27px;
        line-height: 36px;
      }
    }
    .left-ul {
      color: #000;
      text-align: right;
    }
    .center-ul {
      color: #fff;
      li {
        display: flex;
        justify-content: center;
        div {
          display: flex;
          width: 180px;
          span {
            text-align: center;
            display: block;
            font-size: 16px;
          }
          .left-delta {
            width: 0;
            height: 0;
            border-width: 18px;
            border-style: solid;
            border-color: transparent transparent #427ae1;
            transform: rotate(-90deg);
          }
          .right-delta {
            width: 0;
            height: 0;
            border-width: 18px;
            border-style: solid;
            border-color: transparent transparent #427ae1;
            transform: rotate(90deg);
          }
          .span-text {
            width: 126px;
            background: #427ae1;
            border-radius: 1px;
          }
        }
      }
    }
    .right-ul {
      color: #999;
      text-align: left;
    }
  }
  .phone-compare-img {
    width: 100%;
    padding: 0 6px 50px;
    img {
      display: block;
      height: 340px;
      margin: 0 auto;
    }
  }
`;
interface IProps {
  des: string;
  backgroundImage: string;
  mobileBackgroundImage: string;
  mobileContentImage: string;
  leftTexts: string[];
  centerTexts: string[];
  rightTexts: string[];
}

const Compare: React.SFC<IProps> = ({
  des,
  leftTexts,
  centerTexts,
  rightTexts,
  backgroundImage,
  mobileBackgroundImage,
  mobileContentImage,
}) => (
  <Container>
    <CompareWrapper
      backgroundImage={backgroundImage}
      mobileBackgroundImage={mobileBackgroundImage}
      mobileContentImage={mobileContentImage}>
      <div className="wrapper-div">
        <div className="img-wrapper">
          <div className="img"></div>
        </div>
        <p className="des-title">{des}</p>
        <Visible md lg xl xxl xxxl>
          <div className="compare-content">
            <ul className="left-ul">
              {leftTexts.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ul>
            <ul className="center-ul">
              {centerTexts.map((item, key) => {
                return (
                  <li key={key}>
                    <div>
                      <span className="left-delta"></span>
                      <span className="span-text">{item}</span>
                      <span className="right-delta"></span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <ul className="right-ul">
              {rightTexts.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ul>
          </div>
        </Visible>
        <Visible xs sm>
          <div className="phone-compare-img">
            <img src={mobileContentImage} />
          </div>
        </Visible>
      </div>
    </CompareWrapper>
  </Container>
);

export default Compare;
