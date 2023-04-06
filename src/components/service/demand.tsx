import * as React from 'react';
import styled from 'styled-components';

const SOLUTION_CARD_BG = '//cdn.byai.com/static/official-website/solution/baidi.png';
const SOLUTION_CARD_BLUE_BG = '//cdn.byai.com/static/official-website/solution/landi.png';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  > div {
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    border-color: #3153d4;
    .cover {
      img {
        transform: scale(1.08);
      }
    }
    .desc {
      background-image: url(${SOLUTION_CARD_BLUE_BG});
      p,
      h3,
      h6 {
        position: relative;
        z-index: 5;
        color: #ffffff;
      }
    }
  }
  .cover {
    overflow: hidden;
    img {
      transition: all 0.3s ease-in-out;
      width: 100%;
      margin-bottom: 0;
    }
  }
  .desc {
    padding-top: 30px;
    height: 260px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    align-items: center;
    background-color: #ffffff;
    background-image: url(${SOLUTION_CARD_BG});
    background-repeat: repeat;
    transition: all 0.3s ease-in-out;
    position: relative;
    p {
      font-size: 22px;
      color: #999999;
    }
    h3 {
      margin-top: 20px;
      font-size: 22px;
      color: #0d1924;
    }
    h6 {
      padding: 0 20px;
      margin-top: 10px;
      font-size: 14px;
      color: #999999;
      font-weight: 400;
    }
  }
`;

interface IDemandCardProps {
  index: number;
  coverImage: string;
  title: string;
  desc: string;
}

const DemandCard: React.SFC<IDemandCardProps> = ({ index, coverImage, title, desc }) => (
  <Wrap>
    <div>
      <div className="cover">
        <img src={coverImage} alt="" />
      </div>
      <div className="desc">
        <p>- 0{index + 1} -</p>
        <h3>{title}</h3>
        <h6>{desc}</h6>
      </div>
    </div>
  </Wrap>
);

export default DemandCard;
