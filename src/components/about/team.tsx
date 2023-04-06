import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

const COMPANY_LOGO_LIST = [
  '//cdn.byai.com/static/official-website/about/aliyun.png',
  '//cdn.byai.com/static/official-website/about/huawei.png',
  '//cdn.byai.com/static/official-website/about/tengxun.png',
  '//cdn.byai.com/static/official-website/about/damoyuan.png',
];

const Wrap = styled.div`
  text-align: center;
`;

const GridItemCol = styled.div`
  width: calc(33.33% - 20px);
  margin-right: 30px;
  background: #f8f9fb;
  margin-bottom: 40px;
  color: #666666;
  &:nth-child(3n + 3) {
    margin-right: 0;
  }
  &:hover {
    background: #3153d4;
    color: #fff;
    h3::after {
      background: #fff;
    }
    h6,
    h3 {
      color: #fff;
    }
    img {
      transform: scale(1.08);
    }
    transition: all 0.5s ease-in-out;
  }
`;

const GridItem = styled.div<{ backgroundImage?: string }>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  img {
    transition: all 0.3s ease-in-out;
    width: 100%;
    margin-bottom: 0;
  }
`;

const GridItemInner = styled.div<{ xs?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  text-align: left;
  margin-bottom: ${props => (props.xs ? `20px` : `0`)};
  h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 28px;
    font-weight: 300;
    color: #000000;
    &::after {
      content: '';
      margin-top: 10px;
      display: block;
      width: 60px;
      height: 2px;
      background: #666666;
      border-radius: 3px;
    }
  }
  h6 {
    color: #000000;
    margin: 8px 0 24px;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    text-align: justify;
  }
  p {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 300;
    line-height: 21px;
    word-break: break-all;
    text-align: justify;
  }
`;

const TeamIntroCol = styled(Col)`
  /* margin: 60px 0 40px;  */
  margin: 0 0 40px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(13, 25, 36, 1);
  line-height: 36px;
  text-align: center;
  p {
    ${media.phone`
            padding: 0 10px;
        `}
  }
`;

const SchoolIcon = styled.i`
  display: block;
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
`;

interface ITeamItem {
  name: string;
  position: string;
  desc: string;
  image: string;
}

interface ITeamProps {
  teamList: ITeamItem[];
  teamIntro: React.ReactDOM | string;
  teamSchools: string[];
}

const Team: React.SFC<ITeamProps> = ({ teamList, teamIntro, teamSchools }) => {
  return (
    <Wrap>
      {/* <Visible md lg xl xxl xxxl>
        <Container>
          <Row justify="center">
            {teamList.map((item) => (
              <GridItemCol>
                <GridItem
                  key={item.name}
                  backgroundImage={item.image}
                >
                  <img src={item.image} alt="" />
                  <GridItemInner>
                    <div>
                      <h3>{item.name}</h3>
                      <h6>{item.position}</h6>
                    </div>
                    <p>{item.desc}</p>
                  </GridItemInner>
                </GridItem>
              </GridItemCol>
            ))}
          </Row>
        </Container>
      </Visible>
      <Visible sm xs >
        <Container>
          <Row justify="center">
            {teamList.map((item, index) => (
              <Col md={22} sm={22} xs={22}>
                <GridItem
                  key={index}
                  backgroundImage={item.image}
                >
                  <img src={item.image} alt="" />
                  <GridItemInner xs>
                    <div>
                      <h3>{item.name}</h3>
                      <h6>{item.position}</h6>
                    </div>
                    <p>{item.desc}</p>
                  </GridItemInner>
                </GridItem>
              </Col>
            ))}
          </Row>
        </Container>
      </Visible> */}
      <Container>
        <Row>
          <TeamIntroCol lg={24}>
            <p>{teamIntro}</p>
          </TeamIntroCol>
        </Row>
        <Row justify="center" style={{ marginBottom: 24 }}>
          {COMPANY_LOGO_LIST.map((item, index) => (
            <Col key={index} lg={5} md={6} xs={12} align="center">
              <img src={item} alt="" />
            </Col>
          ))}
        </Row>
        <Row justify="center">
          {teamSchools.map((item, index) => (
            <Col key={index} lg={2.4} md={6} xs={8} align="center">
              <SchoolIcon key={index}>
                <img src={item} alt="" />
              </SchoolIcon>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrap>
  );
};
export default Team;
