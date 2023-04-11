import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { Theme } from '../../src/constants/style';
import { splitCssValue } from '../../src/lib/utils';
import { Col, ColProps, Container, Hidden, Row, Visible } from 'react-grid-system';
import { TextArea } from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import { TabNav, EnterpriseIntroduction, MissionVision } from '../../src/components/about';



import imgurl from '../../img.url.js'
import { HOST_ENUM } from '../../src/lib/utils';
const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const JOIN_US_IMG = `${imgurl}/about_banner_img.png`;
const INTRODUCE_BG = `${imgurl}/about_introduce_bg.png`;
const MissionVision_BG = `${imgurl}/mission-vision-bg.png`;
const NORMAL_BG = `${imgurl}/course-normal.png`;
const ACTIVE_BG = `${imgurl}/course-active.png`;

const SERVICE_DEMAND = [
  {
    title: '2017',
    cover: `${imgurl}/year-2017.png`,
    list:[
      {
        time: '2022.03',
        title: '入选浙江省2021年度人工智能典型应用场景'
      },
      {
        time: '2022.03',
        title: '通过全球软件领域最高级别CMMI5认证'
      },
      {
        time: '2022.06',
        title: '获评腾讯智慧零售“千域计划年度认证合作伙伴”'
      },
      {
        time: '2022.10',
        title: '入选《国家人工智能创新应用先导区“智赋百景”》'
      },
      {
        time: '2022.12',
        title: '入选2022中国企业数智化创新TOP50'
      }
    ]
  },
  {
    title: '2018',
    cover: `${imgurl}/year-2018.png`
  },
  {
    title: '2019',
    cover: `${imgurl}/year-2019.png`
  },
  {
    title: '2020',
    cover: `${imgurl}/year-2020.png`
  },
  {
    title: '2021',
    cover: `${imgurl}/year-2021.png`
  },
  {
    title: '2022',
    cover: `${imgurl}/year-2022.png`
  },
  {
    title: '2023',
    cover: `${imgurl}/year-2023.png`
  }
];


const Wrapper = styled.div`
  background: #ffffff;
  .blue-hight {
    color: rgb(43, 88, 249);
  }
  @media (min-with: 769px) {
    #big-title {
      margin-top: -50px !important;
    }
  }
`;

const BigTitle = styled.div`
  margin-top: 20px;
  font-size:48px;
  line-height:80px;
  color:rgb(51,51,51);
`;

const SubTitle = styled.div`
  margin-top: 20px;
  width: 685px;
  font-size:58px;
  line-height:54px;
  color:rgb(51,51,51);
`;

const Desc = styled.div`
  margin-top: 40px;
  font-size:22px;
  line-height:34px;
  color:rgb(51,51,51);
`;

const EnIntroductionWrap = styled.div`
  padding-bottom: 35px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 20px -20px 110px 0px rgba(24, 63, 171, 0.12);
  border-radius: 20px 20px 0 0;
`

const DemandWrap = styled.div`
  display: flex;
  position: relative;
  &::before {
    position: absolute;
    display: block;
    content: '';
    left: 188px;
    top: 0;
    width: 4px;
    height: 566px;
    opacity: 1;
    background: linear-gradient(180deg, rgba(43, 88, 249, 1) 0%, rgba(44, 89, 249, 1) 30.34%, rgba(255, 255, 255, 0) 94.05%, rgba(255, 255, 255, 0) 100%);
  }
`;

const DemandLeft = styled.div`
  width:212px;
  flex: 1;
  margin-left: -12px;
`;

const Intro = styled.div`
  background: rgba(246, 252, 255, 1);
`;

const IntroContent = styled.div`
  @media (min-width: 768px) {
    max-width: ${props => Theme.ContentWidth};
    min-width: ${props => 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const Title = styled.div`
  padding-top: 80px;
  padding-bottom:44px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(43, 43, 43, 1);
  text-align: center;
  p{font-size:18px;line-height:44px;color:rgba(43, 88, 249, 1)}
`;

const DemandItem = styled.div<{ normalBg: string; activeBg: string; active: boolean }>`
  margin-bottom: 50px;
  position: relative;
  width: 212px;
  height: 80px;
  padding-left: 70px;
  font-size: 24px;
  color: ${props => (props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(51, 51, 51, 1)')};
  line-height: 80px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    left: ${props => (props.active ? '0' : '186px')};
    top: ${props => (props.active ? '0' : '22px')};
    width: 223px;
    height: 80px;
    background-image: ${props => (props.active ? `url(${props.activeBg})` : `url(${props.normalBg})`)};
    background-repeat: no-repeat;
  }
  p{
    position: absolute;
    z-index: 2;
  }
`;


const About: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => {
  const [demandIndex, setDemandIndex] = React.useState(0);

  function handleDemandHover(index) {
    setDemandIndex(index);
  }
  return (
  <Layout hostType={hostType} headPlaceholder={[false, '#F9FAFF']} headFontStyle={['dark', 'dark']}>
    {(visible, setVisible) => (
      <>
        <Wrapper>
          <BannerWhite
            background={[`url(${BANNER_BG}) right top ,#F6FCFF`, '#F6FCFF']}
            pcImgs={[
              {
                src: JOIN_US_IMG,
                style: { width: 639, height:608, top: -50, right: 0 },
                className: ['animate__fadeInRight', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={JOIN_US_IMG}>
            <TextArea spaces={['', '']}>
              <Hidden xs sm>
                <BigTitle>
                  关于百应
                </BigTitle>
                <SubTitle>智能用户运营领域创领者</SubTitle>
                <Desc>致力于通过前沿对话式AI能力<br />助力政府和企业高效连接C端用户</Desc>
              </Hidden>
            </TextArea>
          </BannerWhite>
          <EnIntroductionWrap>
            <TabNav 
              bannerList={[
                {
                  name: '企业介绍',
                },
                {
                  name: '使命愿景',
                },
                {
                  name: '发展历程',
                },
                {
                  name: '社会责任',
                },
                {
                  name: '荣誉证书',
                },
                {
                  name: '加入我们',
                },
              ]} 
            />
            <EnterpriseIntroduction
              backgroundImage={INTRODUCE_BG}
              cover="//cdn.byai.com/static/official-website/about/baiying-1222.png"
            />
          </EnIntroductionWrap>
          <MissionVision
            backgroundImage={MissionVision_BG}
          />
          <Intro>
            <IntroContent>
              <Title>发展历程<p>2016.09 百应科技成立</p></Title>
              <DemandWrap>
                <DemandLeft>
                  {SERVICE_DEMAND.map((item, index) => (
                    <DemandItem
                      key={index}
                      active={demandIndex === index}
                      normalBg={NORMAL_BG}
                      activeBg={ACTIVE_BG}
                      onMouseEnter={() => {
                        handleDemandHover(index);
                      }}>
                      <p>{item.title}</p>
                    </DemandItem>
                  ))}
                </DemandLeft>
                <div align="end" style={{ marginTop: 40 }}>
                  <img src={SERVICE_DEMAND[demandIndex].cover} alt="" />
                </div>
                </DemandWrap>
            </IntroContent>
          </Intro>
          develophistory<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />

        </Wrapper>
      </>
    )}
  </Layout>
  );
};

export default About;