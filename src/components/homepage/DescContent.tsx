import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';
import Box from '../Box';
import { DescWrapper } from '../DescWrapper';

export const DescRow = styled(Row)`
  width: 100%;
  max-width: 100vw;
  ${media.phone`
    flex-direction: column-reverse;
  `}
`;

export const DescCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px !important;
  ${media.phone`
    padding-left: 0 !important;
    align-items: center;
  `}
  h3,
  h4 {
    margin-top: 20px;
    font-size: 36px;
    font-weight: 500;
    color: rgba(13, 25, 36, 1);
    line-height: 42px;
    ${media.phone`
      margin-top: 12px;
      padding-left: 0 !important;
      align-items: center;
      text-align: center;
    `}
  }
  h4 {
    font-size: 28px;
    font-weight: 500;
  }
  p {
    /* color: rgba(102, 102, 102, 1); */
    /* margin-bottom: 60px; */
    /* margin-right: 136px; */
    ${media.phone`
      display: none;
    `}
    line-height: 24px;
    /* font-size: 14px; */
    color: #666;
    font-size: 16px;
  }
  > div {
    display: flex;
    ${media.phone`
      justify-content: center;
      margin: 16px 0 0 0;
    `}
    > div {
      margin-right: 50px;
      ${media.phone`
        margin-right: 16px;
      `}
      &:last-child {
        margin-right: 32px;
        margin-right: 0px;
      }
    }
  }
`;
export const DescImgCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30vw;
    ${media.phone`
      width: 60vw;
      margin-bottom: 0;
    `}
  }
`;

const DescContentWrapper = styled(DescWrapper)`
  padding-top: 60px;
  padding-bottom: 60px;
  .iconyou-dajiantou,
  .iconzuo-dajiantou {
    color: #666;
    font-size: 60px;
  }
  .nav {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 40px;
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
  font-size: 14px;
  color: ${props => (props.active ? '#fff' : 'rgba(102, 102, 102, 1)')};
  line-height: 20px;
  cursor: pointer;
`;

// TODO: 修改
// 新版官网做了修改2020-07-27
interface DescContentProps {
  title: React.ReactNode;
  bannerList: {
    name: string;
    firstLineText: string;
    secondLineText?: string;
    firstDescText: string;
    secondDescText?: string;
    contentImage: string;
    iconList: { url: string; desc: string; miniIcon?: string }[];
  }[];
}

// @ts-ignore
export const IconWrpaaer = styled(Box)`
  display: flex;
  color: #666;
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    box-shadow: 0 10px 15px rgba(49, 83, 212, 0.15);
  }
  /* > div > div 太脏了 无奈之间 */
  > div {
    margin-right: 50px;
    ${media.phone`
      margin-right: 7vw !important;
    `}
    &:last-child {
      margin-right: 0px !important;
    }
  }
`;

export const DescContent: React.SFC<DescContentProps> = ({ title, bannerList }) => {
  const [index, setIndex] = React.useState(1);
  return (
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
        {bannerList.map((item, index) => (
          <CarouselItem>
            <Container>
              <DescRow key={item.name}>
                <DescCol lg={12} md={12} sm={24}>
                  <h4>{item.firstLineText}</h4>
                  <Box as="p" maxWidth={400} mt={2}>
                    {item.firstDescText}
                  </Box>
                  <IconWrpaaer mt={0.5} fontSize={[14, 14, 16, 16]}>
                    {item.iconList.map(iconItem => (
                      <Box display="flex" flexDirection="column" alignItems="center">
                        <img src={iconItem.url} />
                        <Box as="span" textAlign="center">
                          {iconItem.desc}
                        </Box>
                      </Box>
                    ))}
                  </IconWrpaaer>
                </DescCol>
                <DescImgCol lg={12} md={12} sm={24}>
                  <img src={item.contentImage} alt="" />
                </DescImgCol>
              </DescRow>
            </Container>
          </CarouselItem>
        ))}
      </Carousel>
    </DescContentWrapper>
  );
};
