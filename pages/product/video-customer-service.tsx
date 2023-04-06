import * as React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled, { css } from 'styled-components';
import { LinkButton } from '../../src/components/Button';
import { DescCol } from '../../src/components/homepage/DescContent';
import { Layout } from '../../src/components/Layout';
import VoiceFooter from '../../src/components/order/footer';
import { BannerImg, Intro } from '../../src/components/service';
import FiveCol from '../../src/components/video-customer-services/five-col';
import HoverChange from '../../src/components/video-customer-services/hover-change';
import { BreakTitle, media } from '../../src/constants/style';

const leftItem = [
  '智慧远程政务&&“一次也不用跑”',
  '远程金融双录&&实时业务留痕',
  '远程医疗&&开创大健康新纪元',
  '在线教育&&学无边界，学无止境',
];

const ability = [
  {
    logo: 'https://cdn.byai.com/static/intro/img/video-customer-services/awesome-1.png',
    title: '超清画质',
    desc: '视频编码器与网络深度结合，人眼视觉高清优化，低卡顿，无花屏、绿屏、黑屏',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/video-customer-services/awesome-2.png',
    title: '低延时',
    desc: '毫秒级延时，保证多方通话的实时性。通话质量远高于业内平均水平',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/video-customer-services/awesome-3.png',
    title: '弱网支持',
    desc: '通过就近接入、动态路由、丢包重传，实现弱网高质量通信，50%丢包仍可正常通信',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/video-customer-services/awesome-4.png',
    title: '超分辨率',
    desc: '基于机器学习的超分辨率算法，实现低码率超清画质。可将360P图像放大至720P',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/video-customer-services/awesome-5.png',
    title: '码率自适应',
    desc: '机器学习带宽预测算法，实时根据网络状况优化码率，让体验同时兼顾画质和流畅度',
  },
];

const MobileTitle = styled.div`
  padding: 60px 0;
  h1 {
    font-size: 36px;
    font-weight: 400;
    margin: 0;
    line-height: 44px;
  }
`;
const TradeMoreCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: rgba(13, 25, 36, 1);
  height: 50px;
  line-height: 22px;
  margin-top: 20px;
  span {
    cursor: pointer;
  }
  .iconfont {
    display: inline-block;
    margin-left: 10px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: #3153d4;
    .iconfont {
      font-size: 20px;
      transform: translateX(5px);
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const PAGE_CONFIG = {
  h1Text: '视频客服',
  h2Text: '远程实时全媒体服务，创新互动方式，释放商业潜能',
  headerBtnText: '立即体验',
  bannerImg: 'https://cdn.byai.com/static/intro/img/video-customer-services/banner.png',
};

const BACKGOURND_XS = 'https://cdn.byai.com/static/intro/img/video-customer-services/banner-mobile.png';

const Wrapper = styled.div`
  background: #f8f9fb;
  h1 {
    border: 0;
  }
`;

export const DescImgCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70vw;
    position: relative;
  }
  img {
    ${media.phone`
      margin-top: 20px;
      width: 100vw;
      margin-bottom: 20px;
    `}
  }
  @media (min-width: 768px) {
    img.move-left {
      left: -0px;
    }
    img.move-left-2 {
      left: -80px;
    }
  }
`;
const DataVisualWrapper = styled.div<{ odd?: boolean }>`
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  h3 {
    line-height: 1.3;
    margin: 0;
    width: 100%;
  }
  .p-wrapper {
    margin-top: 25px;
    flex-direction: column;
  }
  .data-visual-wrapper.flex-direction-row {
    flex-direction: row;
  }
  .data-visual-wrapper.flex-direction-column-reverse {
    flex-direction: column-reverse;
  }
  .data-visual-wrapper {
    height: 100%;
    align-items: center !important;
    ${media.phone`
      > div {
        justify-content: center;
      }
      flex-direction: column-reverse;
      padding: 0 16px;
    `}
    > div {
      height: 100%;
      ${media.phone`
        height: auto;
      `}
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
    }
    .data-visual-wrapper {
      display: flex;
      flex-direction: column-reverse;
      padding-top: 60px;
      ${props =>
    props.odd &&
    css`
          flex-direction: column-reverse;
        `}
    }
  }
  background-color: #f8f9fb;
  background-size: cover;
  ${props =>
    props.odd &&
    css`
      background-color: #fff;
    `}
  height: 600px;
  ${media.phone`
    height: inherit
  `}
`;

const LgText = styled.div`
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 30px;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: justify;
`;

const SmText = styled.div`
  padding: 0px 8%;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
  font-size: 14p;
  letter-spacing: 1px;
  text-align: justify;
`;

const Show: React.FunctionComponent = props => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <>
          <Wrapper>
            <BannerImg
              title={PAGE_CONFIG.h1Text}
              desc={PAGE_CONFIG.h2Text}
              text={PAGE_CONFIG.headerBtnText}
              backgroundImage={PAGE_CONFIG.bannerImg}
              mobileBackgroundImage={BACKGOURND_XS}
              onBtnClick={() => setVisible(true)}
            />
            <Intro bottom={0.1}>
              <DataVisualWrapper odd>
                <Container>
                  <Row className="data-visual-wrapper flex-direction-row">
                    <DescCol lg={11} md={11} sm={24}>
                      <Visible md lg xl xxl xxxl>
                        <h3>未来已来，领先时代</h3>
                      </Visible>
                      <Visible sm xs>
                        <h3>实时视频服务，拓展服务边界，</h3>
                        <h3>创新服务方式</h3>
                      </Visible>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p> 5G 快速普及，随时随地的远程视频服务具备坚实的基础设施保障 </p>
                          <p> 实时视频服务，拓展服务边界，创新服务方式，提升差异化竞争力</p>
                        </div>
                      </Visible>
                    </DescCol>
                    <DescImgCol lg={13} md={13} sm={24}>
                      <img
                        className="move-left"
                        src="https://cdn.byai.com/static/intro/img/video-customer-services/show-1.png"
                        alt=""
                      />
                    </DescImgCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <DataVisualWrapper>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescImgCol lg={13} md={13} sm={24}>
                      <img
                        className="move-left"
                        src="https://cdn.byai.com/static/intro/img/video-customer-services/show-2.png"
                        alt=""
                      />
                    </DescImgCol>
                    <DescCol lg={11} md={11} sm={24}>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <LgText>
                            基于VCGUI的创新互动方式，整合音视频、IM、小程序、AI、5G等多种技术，让客户随时随地享受优质服务，企业充分释放商业潜能
                          </LgText>
                          <p>
                            <LinkButton>身份验证</LinkButton>
                            <LinkButton>双录质检</LinkButton>
                            <LinkButton>业务接口</LinkButton>
                          </p>
                        </div>
                      </Visible>
                      <Visible sm xs>
                        <SmText>
                          基于VCGUI的创新互动方式，整合音视频、IM、小程序、AI、5G等多种技术，让客户随时随地享受优质服务，企业充分释放商业潜能
                        </SmText>
                        <div>
                          <LinkButton>身份验证</LinkButton>
                          <LinkButton>双录质检</LinkButton>
                          <LinkButton>业务接口</LinkButton>
                        </div>
                      </Visible>
                    </DescCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <BreakTitle className="white">
                <Visible xs sm>
                  <h2>功能特性</h2>
                </Visible>
                <Visible md lg xl xxl xxxl>
                  <h2>功能特性</h2>
                </Visible>
              </BreakTitle>
              <DataVisualWrapper>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescImgCol lg={13} md={13} sm={24}>
                      <img
                        className="move-left"
                        src="https://cdn.byai.com/static/intro/img/video-customer-services/show-3.png"
                        alt=""
                      />
                    </DescImgCol>
                    <DescCol lg={11} md={11} sm={24}>
                      <Visible md lg xl xxl xxxl>
                        <h3>实时高清全媒体沟通解决方案</h3>
                      </Visible>
                      <Visible sm xs>
                        <h3>实时高清全媒体沟通解决方案</h3>
                      </Visible>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p> 实时视频通话，清晰画质，超低延时，自动适应弱网环境</p>
                          <p> 即时消息往来，支持图文、文件、地理位置等多种形式 </p>
                          <p> 实时音视频通话 + 即时图文消息往来，沟通更有效率，服务更有温度</p>
                        </div>
                      </Visible>
                    </DescCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <DataVisualWrapper odd>
                <Container>
                  <Row className="data-visual-wrapper flex-direction-row">
                    <DescCol lg={11} md={11} sm={24}>
                      <Visible md lg xl xxl xxxl>
                        <h3>高效率一体化工作台</h3>
                      </Visible>
                      <Visible sm xs>
                        <h3>高效率一体化工作台</h3>
                      </Visible>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p> 一体化工作台，支持同时处理图文会话、视频通话</p>
                          <p> 客户信息同步查看，助理机器人实时辅助，服务效率显著提升</p>
                          <p> 会话记录即时生成，视频通话双向录屏，历史记录轻松查看</p>
                        </div>
                      </Visible>
                    </DescCol>
                    <DescImgCol lg={13} md={13} sm={24}>
                      <img
                        className="move-left"
                        src="https://cdn.byai.com/static/intro/img/video-customer-services/show-4.png"
                        alt=""
                      />
                    </DescImgCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <DataVisualWrapper>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescImgCol lg={13} md={13} sm={24}>
                      <img
                        className="move-left"
                        src="https://cdn.byai.com/static/intro/img/video-customer-services/show-5.png"
                        alt=""
                      />
                    </DescImgCol>
                    <DescCol lg={11} md={11} sm={24}>
                      <Visible md lg xl xxl xxxl>
                        <h3>智能辅助，让人人都是业务专家</h3>
                      </Visible>
                      <Visible sm xs>
                        <h3>智能辅助</h3>
                        <h3>让人人都是业务专家</h3>
                      </Visible>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p> 智能分析对话内容，自动推荐相关话术，服务更专业</p>
                          <p> 实时监测服务过程，规范语言、语速、情绪等沟通方式，避免错漏重要信息，服务更有温度</p>
                        </div>
                      </Visible>
                    </DescCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <DataVisualWrapper odd>
                <Container>
                  <Row className="data-visual-wrapper flex-direction-row">
                    <DescCol lg={11} md={11} sm={24}>
                      <Visible md lg xl xxl xxxl>
                        <h3 style={{ width: '100%' }}>实时意向分析，让企业更懂客户</h3>
                      </Visible>
                      <Visible sm xs>
                        <h3>实时意向分析</h3>
                        <h3>让企业更懂客户</h3>
                      </Visible>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p> 自主产权的语音、语义识别技术，智能分析客户意图、判断客户意向，服务更精准</p>
                          <p> 自动分类打标，统计分析客户关注点，构建全方位、立体化客户画像，让企业更懂客户</p>
                        </div>
                      </Visible>
                    </DescCol>
                    <DescImgCol lg={13} md={13} sm={24}>
                      <img
                        className="move-left"
                        src="https://cdn.byai.com/static/intro/img/video-customer-services/show-6.png"
                        alt=""
                      />
                    </DescImgCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <BreakTitle>
                <Visible xs sm>
                  <h2>应用场景</h2>
                </Visible>
                <Visible md lg xl xxl xxxl>
                  <h2>应用场景</h2>
                </Visible>
              </BreakTitle>
              <HoverChange bg="#fff" leftItem={leftItem} />
              <Visible md lg xl xxl xxxl>
                <BreakTitle>
                  {/* <Visible xs sm>
                    <h2><div style={{ marginBottom: '15px' }}>商业洞察</div><div>提升客户转化率</div></h2>
                  </Visible> */}
                  <Visible md lg xl xxl xxxl>
                    <h2>产品优势</h2>
                  </Visible>
                </BreakTitle>
              </Visible>
              <FiveCol title="产品优势" ability={ability} />
              <VoiceFooter
                title="提升服务品质，打造高端形象，从视频客服开始"
                btn="免费体验"
                mTitle1="提升服务品质，打造高端形象，从视频客服开始"
                mTitle2=""
                img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
                onBtnClick={() => setVisible(true)}
              />
            </Intro>
          </Wrapper>
        </>
      )}
    </Layout>
  );
};

export default Show;
