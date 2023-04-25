import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { BaiduDescWrapper } from '../src/components/BaiduDescWrapper';
import { BaiduSolutionCard } from '../src/components/BaiduSolutionCard';
import Compare from '../src/components/Compare';
import { DescWrapper } from '../src/components/DescWrapper';
import { BaiduAdvantageCard } from '../src/components/homepage/BaiduAdvantageCard';
import { BaiduCompanyContent } from '../src/components/homepage/BaiduCompanyContent';
import { CompanyContent } from '../src/components/homepage/CompanyContent';
import { PromotionBanner } from '../src/components/homepage/PromotionBanner';
import { Layout } from '../src/components/Layout';
import { BaiduApplication, Title } from '../src/components/service';
import { SolutionCard } from '../src/components/SolutionCard';
import { media } from '../src/constants/style';

const ADVANTAGE_BG = '//cdn.byai.com/static/official-website/home/xian2.png';
const ADVANTAGE_1 = '//cdn.byai.com/static/official-website/home/tubiao1.png';
const ADVANTAGE_2 = '//cdn.byai.com/static/official-website/home/tubiao2.png';
const ADVANTAGE_3 = '//cdn.byai.com/static/official-website/home/tubiao3.png';
const CONSULT_AUDIO = '//cdn.byai.com/static/official-website/audio/consult.mp3';
const SWITCH_AUDIO = '//cdn.byai.com/static/official-website/audio/switch.mp3';
const VISIT_AUDIO = '//cdn.byai.com/static/official-website/audio/visit.wav';
const SOLUTION_1 = '//cdn.byai.com/static/by-intro-2023/template/tu1.png';
const SOLUTION_2 = '//cdn.byai.com/static/official-website/solution/tu2.png';
const SOLUTION_3 = '//cdn.byai.com/static/official-website/solution/tu3.png';
const SOLUTION_4 = '//cdn.byai.com/static/official-website/solution/tu4.png';
const SOLUTION_5 = '//cdn.byai.com/static/official-website/solution/tu5.png';
const SOLUTION_6 = '//cdn.byai.com/static/official-website/solution/tu6.png';
const SOLUTION_7 = '//cdn.byai.com/static/official-website/solution/tu7.png';
const SOLUTION_8 = '//cdn.byai.com/static/official-website/solution/tu8.png';
const SOULUTIONS_LIST = [
  { image: SOLUTION_1, title: '金融', desc: '金融贷款、银行催收、投资理财、开户邀请' },
  {
    image: SOLUTION_2,
    title: '房地产',
    desc: '商铺租赁、楼盘推荐、房产中介、房屋装修',
  },
  {
    image: SOLUTION_3,
    title: '互联网',
    desc: '网络推广、媒体广告、客户线索、用户调研',
  },
  { image: SOLUTION_4, title: '保险', desc: '保险推荐、客服接待、客户回访、续保提醒' },
  { image: SOLUTION_5, title: '电商', desc: '灵活外呼、客户分级、意向转化、语音质检' },
  { image: SOLUTION_6, title: '教育', desc: '课程网销、客服接待、试听邀约、课后回访' },
  {
    image: SOLUTION_7,
    title: '汽车',
    desc: '试驾邀约、活动推荐、意向转化、车主服务',
  },
  {
    image: SOLUTION_8,
    title: '广告',
    desc: '品牌推广、渠道销售、案例展示、客户沉淀',
  },
];
const HALFSOULUTIONS_LIST1 = [
  { image: SOLUTION_1, title: '金融', desc: '金融贷款、银行催收、投资理财、开户邀请' },
  {
    image: SOLUTION_2,
    title: '房地产',
    desc: '商铺租赁、楼盘推荐、房产中介、房屋装修',
  },
  {
    image: SOLUTION_3,
    title: '互联网',
    desc: '网络推广、媒体广告、客户线索、用户调研',
  },
  { image: SOLUTION_4, title: '保险', desc: '保险推荐、客服接待、客户回访、续保提醒' },
];
const HALFSOULUTIONS_LIST2 = [
  { image: SOLUTION_5, title: '电商', desc: '灵活外呼、客户分级、线索转化、语音质检' },
  { image: SOLUTION_6, title: '教育', desc: '课程网销、客服接待、试听邀约、课后回访' },
  {
    image: SOLUTION_7,
    title: '汽车',
    desc: '试驾邀约、活动推荐、意向转化、车主服务',
  },
  {
    image: SOLUTION_8,
    title: '广告',
    desc: '品牌推广、渠道销售、案例展示、客户沉淀',
  },
];
const SolutionCol = styled(Col)`
  padding: 30px 0 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: rgba(13, 25, 36, 1);
  line-height: 30px;
  a {
    display: inline-block;
    margin-right: 5px;
    color: #3153d4;
    text-decoration: none;
    position: relative;
    &:hover {
      color: #1f31af;
      &::after {
        transform: scale(1);
      }
    }
    &::after {
      transition: all 0.3s ease-in-out;
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      position: absolute;
      bottom: -5px;
      left: 0;
      transform: scale(0);
      background: #3153d4;
    }
  }
`;
const Wrapper = styled.div`
  background: #fff;
  h1 {
    border: 0;
  }
  .sm-tip {
    margin-top: 32px;
    margin-bottom: 56px;
    text-align: center;
    color: #0d1924;
    font-weight: 500;
  }
  .demand-img {
    height: 440px;
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
  }
  .title-des {
    font-size: 14px;
    margin-top: 5px;
    color: #666;
  }
  .mobile-title {
    p {
      padding: 0 18px;
      font-size: 14px;
      color: #666;
      font-weight: normal;
      margin-top: 16px;
    }
  }
  h3.desc-title {
    padding: 0 30px;
    font-size: 36px;
    font-weight: 500;
    color: rgba(13, 25, 36, 1);
    line-height: 50px;
    text-align: center;
    ${media.phone`
      padding: 0 24px;
      font-size: 26px;
      line-height: 1.4;
    `}
  }
`;
const Desc = styled.div`
  color: #666;
  font-size: 18px;
  font-weight: 300;
`;
const H3 = styled.div`
  color: #0d1924;
  font-size: 22px;
`;
const SmTip = styled.div`
  text-align: center;
  color: #0d1924;
  font-size: 16px;
  margin: 60px 0 80px;
`;
const DescCol = styled(Col)`
  padding-bottom: 40px;
  ${media.phone`
  padding-bottom: 0px;
  `}
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 84px;
    width: 84px;
    margin-bottom: 0;
    ${media.phone`
      width: 50px;
      height: 50px;
    `}
  }
  .h3 {
    font-weight: 400;
    text-align: center;
    margin: 46px 0 10px;
    .h3-title {
      ${media.phone`
      font-size: 16px;
      font-weight:500;
    `}
    }
  }
  .tip {
    margin-left: 6px;
    margin-top: 30px;
    font-size: 18px;
    color: #3153d4;
    position: relative;
    &:before {
      position: absolute;
      content: '';
      width: 10px;
      height: 10px;
      background-color: #3153d4;
      left: -19px;
      top: 9px;
    }
    ${media.phone`
      margin-top: 15px;
      font-size: 14px;
      &:before {
        width: 8px;
        height: 8px;
        top: 8px;
      }
    `}
  }

  ${media.phone`
  .h3 {
      margin-top: 20px;
  }
    `}
`;

const MobileTitle = styled.div`
  padding: 40px 0 0;
  h1 {
    font-size: 36px;
    font-weight: 400;
    margin: 0;
    line-height: 44px;
  }
`;
const Promotion: React.FunctionComponent = props => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <Wrapper>
          {/* <PromotionBannerImg
            title="百应智慧联络"
            desc="赋能电话呼叫业务，实现高效率低成本转化。该产品将实现人机协同工作，提供无缝切换的优质体验，并提供优质稳定的通话质量，为企业高效获客提供安全保障"
            text="免费体验"
            backgroundImage="https://cdn.byai.com/static/official-website/product/aicc/banner.svg"
            mobileBackgroundImage="https://cdn.byai.com/static/official-website/promotion/banner.png"
            onBtnClick={() => setVisible(true)}
          /> */}
          <PromotionBanner onBtnClick={() => setVisible(true)}></PromotionBanner>
          <Visible md lg xl xxl xxxl>
            <Title
              title="人性化智能沟通，助力企业赢得每一位客户"
              desc="高效率转化，低成本管理，企业的智能营销专家（适用提醒、通知、回访、电销、催收等多种场景）"
            />
          </Visible>
          <Visible xs sm>
            <MobileTitle>
              <div className="mobile-title">
                <Row justify="center">
                  <h3 className="desc-title">
                    人性化智能沟通 <br />
                    助力企业赢得每一位客户
                  </h3>
                </Row>
                <p>高效率转化，低成本管理，企业的智能营销专家（适用提醒、通知、回访、电销、催收等多种场景）</p>
              </div>
            </MobileTitle>
          </Visible>
          <Container>
            <Row>
              <Col md={8} xs={8} sm={8}>
                <DescCol>
                  <img src="https://cdn.byai.com/static/official-website/product/aicc/1.svg" alt="" />
                  <div className="h3">
                    <H3 className="h3-title">语音识别</H3>
                    <Visible md lg xl xxl xxxl>
                      <H3>倾听客户的声音</H3>
                    </Visible>
                    <Visible xs sm>
                      <div className="title-des">倾听客户的声音</div>
                    </Visible>
                  </div>
                  <Visible md lg xl xxl xxxl>
                    <Desc>主动降噪、深度学习、模型优化</Desc>
                    <Desc>精准识别客户语音</Desc>
                  </Visible>
                  <div className="tip">更精准</div>
                </DescCol>
              </Col>
              <Col md={8} xs={8} sm={8}>
                <DescCol>
                  <img src="https://cdn.byai.com/static/official-website/product/aicc/2.svg" alt="" />
                  <div className="h3">
                    <H3 className="h3-title">语义理解</H3>
                    <Visible md lg xl xxl xxxl>
                      <H3>读懂客户的心声</H3>
                    </Visible>
                    <Visible xs sm>
                      <div className="title-des">读懂客户的心声</div>
                    </Visible>
                  </div>
                  <Visible md lg xl xxl xxxl>
                    <Desc>NLP、知识图谱、关键词强化</Desc>
                    <Desc>准确理解客户意图</Desc>
                  </Visible>
                  <div className="tip">更理解</div>
                </DescCol>
              </Col>
              <Col md={8} xs={8} sm={8}>
                <DescCol>
                  <img src="https://cdn.byai.com/static/official-website/product/aicc/3.svg" alt="" />
                  <div className="h3">
                    <H3 className="h3-title">语音合成</H3>
                    <Visible md lg xl xxl xxxl>
                      <H3>与客户语音互动</H3>
                    </Visible>
                    <Visible xs sm>
                      <div className="title-des">与客户语音互动</div>
                    </Visible>
                  </div>
                  <Visible md lg xl xxl xxxl>
                    <Desc>真人配音、TTS音色、个性变量植入</Desc>
                    <Desc>千人千面的沟通</Desc>
                  </Visible>
                  <div className="tip">更真实</div>
                </DescCol>
              </Col>
            </Row>
            <Visible md lg xl xxl xxxl>
              <SmTip>行业知识图谱：26个行业语义积累</SmTip>
            </Visible>
            <Visible xs sm>
              <p className="sm-tip">行业知识图谱：26个行业语义积累</p>
            </Visible>
          </Container>
          <div className="">
            <BaiduDescWrapper
              id="record-list"
              title="百应大数据+AI"
              subTitle="让销售从此简单、智能、高效"
              background={ADVANTAGE_BG}
              backgroundColor={'#F8F9FB'}>
              <BaiduAdvantageCard
                image={ADVANTAGE_1}
                title="全新技术"
                desc="高情商，高智商的人性化智能沟通，99%真人互动感，全自动运行，更高的效率"
                advantage="智能沟通"
              />
              <BaiduAdvantageCard
                image={ADVANTAGE_2}
                title="案例演示"
                desc="媲美真人沟通的人工智能语音通话，给客户营造真实的互动体验"
                audioList={[
                  {
                    title: '接待客户咨询',
                    src: CONSULT_AUDIO,
                  },

                  {
                    title: '无感人机切换',
                    src: SWITCH_AUDIO,
                  },
                  {
                    title: '外呼拜访客户',
                    src: VISIT_AUDIO,
                  },
                ]}
              />
              <BaiduAdvantageCard
                image={ADVANTAGE_3}
                title="专业服务"
                desc="专业客服全程指导，简单易用，资源加持无后顾之忧"
                advantage="全程指导"
              />
            </BaiduDescWrapper>
          </div>
          <Compare
            des={'工作量提升5-10倍，外呼成本大幅下降'}
            leftTexts={[
              '800-1000通/天/人',
              '365天（全年无休）',
              '1000*365=365000通',
              '按分计',
              '服务稳定，情绪饱满',
              '客观，及时，准确',
              '标准分类，跟进及时',
            ]}
            centerTexts={[
              '日电话拨打量',
              '年工作天数',
              '年电话拨打量',
              '每通电话成本',
              '工作态度',
              '数据统计',
              '客户跟进',
            ]}
            rightTexts={[
              '150-200通/天/人',
              '240天（去除节假日和周末）',
              '200*240=48000通',
              '最低0.5元',
              '易情绪化，服务质量波动大',
              '主观性大，易缺失',
              '记录混乱，接单，跟进难',
            ]}
            backgroundImage="https://cdn.byai.com/static/official-website/promotion/%E5%AF%B9%E6%AF%94topbg.png"
            mobileBackgroundImage="https://cdn.byai.com/static/official-website/promotion/%E5%AF%B9%E6%AF%94topbg-%E7%A7%BB%E5%8A%A8%E7%AB%AF.png"
            mobileContentImage="https://cdn.byai.com/static/official-website/promotion/duibi.png"></Compare>
          <Visible md lg xl xxl xxxl>
            <DescWrapper title="使用场景" backgroundColor={'#F8F9FB'}>
              {SOULUTIONS_LIST.map(item => (
                <SolutionCard key={item.title} {...item} />
              ))}
            </DescWrapper>
          </Visible>
          <Visible xs sm>
            <BaiduDescWrapper title="使用场景" backgroundColor={'#F8F9FB'}>
              <Carousel
                controls={false}
                interval={3000}
                pauseOnHover={false}
                style={{ width: '100%', padding: '0 16px 40px' }}>
                <CarouselItem>
                  <Row>
                    {HALFSOULUTIONS_LIST1.map(item => (
                      <BaiduSolutionCard key={item.title} {...item} />
                    ))}
                  </Row>
                </CarouselItem>
                <CarouselItem>
                  <Row>
                    {HALFSOULUTIONS_LIST2.map(item => (
                      <BaiduSolutionCard key={item.title} {...item} />
                    ))}
                  </Row>
                </CarouselItem>
              </Carousel>
            </BaiduDescWrapper>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <CompanyContent />
          </Visible>
          <Visible xs sm>
            <BaiduCompanyContent />
          </Visible>
          <BaiduApplication onBtnClick={() => setVisible(true)} title="立即领取免费体验机会" text="免费体验" />
        </Wrapper>
      )}
    </Layout>
  );
};

export default Promotion;
