import * as React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import { CircleIcon } from '../CircleIcon';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { DescWrapper } from '../DescWrapper';
import { media } from '../../constants/style';
import Box from '../Box';

interface IBannerItem {
  name: string;
  title: string;
  address: string;
  imageUrl: string;
  openUrl: string;
}
interface DescContentProps {
  title: React.ReactNode;
  bannerList: IBannerItem[];
}

export const DescRow = styled(Row)`
  width: 100%;
  max-width: 100vw;
  background-color: #f8f9fb;
  ${media.phone`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 26px;
  `}
`;

export const DescCol = styled(Col)`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  ${media.phone`
    padding-left: 0 !important;
  `}
  h4 {
    font-size: 24px;
    font-weight: 500;
    padding-left: 30px;
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    ::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 10px 10px 0;
      border-color: transparent #3153d4 transparent transparent;
    }
    line-height: 42px;
    ${media.phone`
      font-size: 17px;
      line-height: 18px;
      padding-left: 24px;
      ::after {
        border-width: 5px 0 5px 7.5px;
        border-color: transparent transparent transparent #3153D4;
      }
    `}
  }
  p {
    font-size: 18px;
    line-height: 2;
    margin-top: 32px;
    margin-bottom: 0;
    ${media.phone`
      font-size: 14px;
      line-height: 20px;
      margin-top: 10px;
      word-break: break-all;
    `}
  }
`;
export const DescImgCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30vw;
    margin-bottom: 0;
    ${media.phone`
      width: 60vw;
    `}
  }
`;

const DescContentWrapper = styled(DescWrapper)`
  padding-top: 0;
  padding-bottom: 100px;
  .iconyou-dajiantou,
  .iconzuo-dajiantou {
    color: #666;
    font-size: 60px;
  }
  .nav {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
    /* margin-top: 40px; */
    ${media.phone`
      margin-bottom: 0;
      margin-top: 24px;
      padding-left: 0 !important;
      align-items: center;
    `}
  }
`;

const NavItem = styled.div<{ active: boolean }>`
  display: inline-flex;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
  ${media.phone`
    width: 120px !important;
    height: 40px !important;

  `}
  width: 140px;
  height: 50px;
  background: ${props => (props.active ? '#3153D4' : 'rgba(255, 255, 255, 1)')};
  border-radius: 25px;
  font-size: 22px;
  color: ${props => (props.active ? '#fff' : 'rgba(102, 102, 102, 1)')};
  border: 1px solid ${props => (props.active ? '#3153D4' : 'rgba(168, 168, 168, .3)')};
  line-height: 20px;
  cursor: pointer;
  margin-left: 50px;
  &:first-child {
    margin-left: 0;
  }
`;

const MobileItemWrap = styled.div`
  height: 120px;
  padding: 0 7vw;
  & + & {
    margin-top: 15px;
  }
`;

export const DescContent: React.SFC<DescContentProps> = ({ title, bannerList }) => {
  const [index, setIndex] = React.useState(0);
  const renderItem = (item: IBannerItem) => (
    <DescRow key={item.name}>
      <Hidden xs sm>
        <DescImgCol lg={9} md={9} sm={24}>
          <a target="_blank" href={item.openUrl} rel="noreferrer">
            <img src={item.imageUrl} />
          </a>
        </DescImgCol>
      </Hidden>
      <DescCol lg={15} md={15} sm={24}>
        <Box pl={[0, 0, '94px', '94px']}>
          <h4>
            {item.name}
            {item.title}
          </h4>
          <Hidden xs sm>
            <p>{item.address}</p>
          </Hidden>
          <Visible xs sm>
            <p onClick={() => window.open(item.openUrl)}>{item.address}</p>
          </Visible>
        </Box>
      </DescCol>
    </DescRow>
  );
  return (
    <>
      <Hidden xs sm>
        <DescContentWrapper title={title}>
          <Col align="center" lg={24}>
            <div className="nav">
              {bannerList.map((item, navIndex) => (
                <NavItem key={item.name} active={navIndex === index} onClick={() => setIndex(navIndex)}>
                  {item.name}
                </NavItem>
              ))}
            </div>
          </Col>
          <Carousel
            activeIndex={index}
            indicators={false}
            controls={false}
            style={{ width: '100%' }}
            interval={3000}
            onSelect={index => setIndex(index)}>
            {bannerList.map(item => (
              <CarouselItem>
                <Container>{renderItem(item)}</Container>
              </CarouselItem>
            ))}
          </Carousel>
        </DescContentWrapper>
      </Hidden>
      <Visible xs sm>
        <Box mb={8}>
          {bannerList.map(item => (
            <MobileItemWrap>{renderItem(item)}</MobileItemWrap>
          ))}
        </Box>
      </Visible>
    </>
  );
};
