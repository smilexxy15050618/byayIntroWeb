import * as React from 'react';
import { Col, Align } from 'react-grid-system';
import styled from 'styled-components';

interface SolutionCardProps {
  title: string;
  desc: string;
  image: string;
}

const SOLUTION_CARD_BG = '//cdn.byai.com/static/official-website/solution/baidi.png';
const SOLUTION_CARD_BLUE_BG = '//cdn.byai.com/static/official-website/solution/landi.png';

const SolutionCardWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10px !important;
  margin-bottom: 20px;
  > div {
    border: none;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    > div {
      border-color: rgba(49, 83, 212, 1);
    }
    .cover {
      img {
        transform: scale(1.08);
      }
    }
    > div {
      box-shadow: none;
    }
    .content {
      background-image: url(${SOLUTION_CARD_BLUE_BG});
      h4,
      p {
        color: #fff;
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

  .content {
    box-sizing: border-box;
    background-color: #fff;
    background-size: cover;
    padding: 15px 10px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    h4 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      line-height: 37px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin: 0;
      text-align: left;
      font-weight: 400;
      line-height: 17px;
    }
  }
`;

export const BaiduSolutionCard: React.SFC<SolutionCardProps> = ({ title, desc, image }) => (
  <SolutionCardWrapper lg={6} md={8} sm={12} xs={12}>
    <div>
      <div className="cover">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  </SolutionCardWrapper>
);
