import * as React from 'react';
import { Col, Align } from 'react-grid-system';
import styled from 'styled-components';
import { Audio } from '../Audio';
import { media } from '../../constants/style';

interface AdvantageCardProps {
  height?: number;
  image: string;
  title: string;
  desc: string;
  advantage?: string;
  audioList?: { src: string; title: string }[];
  align: 'flex-end' | 'center' | 'flex-start';
}

const AdvantageCol = styled(Col)`
  display: flex;
  justify-content: center;
  .card-wrapper {
    margin-top: 60px;
    margin-bottom: 120px;
    ${media.phone`
      min-height: 300px;
      margin: 8px auto;
    `}
    @media ( max-width: 991px ) {
      min-height: 300px;
      margin: 8px auto;
    }
    background: #fff;
    width: 90%;
    box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
    display: flex;
    flex-direction: column;
    /* min-height: 330px; */
    padding: 35px 40px;
    img {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 22px;
      color: rgba(13, 25, 36, 1);
      line-height: 29px;
      margin-bottom: 10px;
    }
    .desc {
      font-size: 16px;
      color: rgba(102, 102, 102, 1);
      line-height: 22px;
      flex: 1;
    }
    .advantage {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: rgba(102, 102, 102, 1);
      &:before {
        border-radius: 2px;
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 10px;
        border: 1px solid rgba(102, 102, 102, 1);
      }
    }
    .audio-list {
      margin-top: 34px;
      > div {
        margin-bottom: 18px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const AdvantageCard: React.SFC<AdvantageCardProps> = ({ image, title, desc, advantage, audioList, height }) => (
  <AdvantageCol style={{ height }} xl={8} lg={8} md={24} sm={24}>
    <div className="card-wrapper">
      <img src={image} alt="" />
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      {advantage && <div className="advantage">{advantage}</div>}
      {audioList && (
        <div className="audio-list">
          {audioList.map(item => (
            <Audio {...item} key={item.title} />
          ))}
        </div>
      )}
    </div>
  </AdvantageCol>
);
