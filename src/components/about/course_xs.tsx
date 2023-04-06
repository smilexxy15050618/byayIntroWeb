import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import styled from 'styled-components';

const Wrap = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 403px;
    transition: transform 0.3s ease-in-out;
    background-color: #ffffff;
    background-image: url('//cdn.byai.com/static/official-website/about/bg2.png');
    background-size: cover;
    box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
  }
  h3 {
    font-size: 36px;
    font-weight: 200;
    color: #728ca7;
    line-height: 50px;
  }
  h6 {
    padding: 0 30px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #3153d4;
    line-height: 24px;
    text-align: center;
  }
`;

const Icon = styled.i<{ icon?: string }>`
  color: #728ca7;
  font-size: 30px;
`;

interface ICourseItem {
  icon?: string;
  time: string;
  desc: string;
}

interface ICourseProps {
  courseList: ICourseItem[];
}

const CourseXS: React.SFC<ICourseProps> = ({ courseList = [] }) => (
  <Carousel
    nextIcon={
      <>
        <Icon className="iconfont iconyou-dajiantou"></Icon>
      </>
    }
    prevIcon={
      <>
        <Icon className="iconfont iconzuo-dajiantou"></Icon>
      </>
    }
    indicators={false}>
    {courseList.map(item => (
      <CarouselItem key={item.time}>
        <Wrap>
          <div>
            <h3>{item.time}</h3>
            <h6>{item.desc}</h6>
          </div>
        </Wrap>
      </CarouselItem>
    ))}
  </Carousel>
);

export default CourseXS;
