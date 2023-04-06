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
  margin-bottom: 30px;
  > div {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
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
    min-height: 200px;
    box-sizing: border-box;
    background-image: url(${SOLUTION_CARD_BG});
    background-color: #fff;
    background-size: cover;
    padding: 50px 30px 30px 30px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    h4 {
      margin-top: 0;
      font-size: 26px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      line-height: 37px;
      margin-bottom: 16px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 22px;
      margin: 0;
      text-align: left;
    }
  }
`;

export const SolutionCard: React.SFC<SolutionCardProps> = ({ title, desc, image }) => (
  <SolutionCardWrapper lg={6} md={8} sm={12} xs={24}>
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
