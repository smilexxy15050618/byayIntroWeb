import * as React from 'react';
import { Col, Hidden, ScreenClassRender, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { Certificate } from '../../src/components/about';
import {
  BASE_URL,
  BigTitle,
  SmallSubTitle,
  TechnologyThinTitle,
  TextArea,
} from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import { DescWrapper } from '../../src/components/DescWrapper';
import { Layout } from '../../src/components/Layout';
import TeamIntro from '../../src/components/TeamIntro';
import { FOOTER_BG } from '../../src/constants/img-urls';
import { media } from '../../src/constants/style';
import { HOST_ENUM } from '../../src/lib/utils';

const BANNER2 = `${BASE_URL}technology-bg.png`;
const BANNER_BG2 = `${BASE_URL}technology-bg2.png`;
const BANNER = `${BASE_URL}technology-img.png`;
const BANNER_XS = `${BASE_URL}technology-xs.png`;

const BACKGOURND_XS = 'https://cdn.byai.com/static/official-website/home/jishu.png';

const IMG_1 = 'https://cdn.byai.com/static/official-website/technology/technology_banner.svg';
const IMG_2 = 'https://cdn.byai.com/static/official-website/technology/tu.png';
const IMG_3 = 'https://cdn.byai.com/static/official-website/technology/zheng1.png';
const IMG_4 = 'https://cdn.byai.com/static/official-website/technology/zheng2.png';
const IMG_5 = 'https://cdn.byai.com/static/official-website/technology/zheng3.png';
const IMG_6 = 'https://cdn.byai.com/static/official-website/technology/zheng4.png';
const IMG_7 = 'https://cdn.byai.com/static/official-website/technology/zheng5.png';
const IMG_8 = 'https://cdn.byai.com/static/official-website/technology/tubiao1.png';
const IMG_9 = 'https://cdn.byai.com/static/official-website/technology/tubiao2.png';
const IMG_10 = 'https://cdn.byai.com/static/official-website/technology/tubiao3.png';
const IMG_11 = 'https://cdn.byai.com/static/official-website/technology/tubiao4.png';
const IMG_12 = 'https://cdn.byai.com/static/official-website/technology/tubiao5.png';
const IMG_13 = 'https://cdn.byai.com/static/official-website/technology/tubiao6.png';
const IMG_14 = 'https://cdn.byai.com/static/official-website/technology/yinbo.png';
const IMG_15 = 'https://cdn.byai.com/static/official-website/technology/yinbo2.png';
const IMG_16 = 'https://cdn.byai.com/static/official-website/technology/yinbo3.png';
const IMG_17 = 'https://cdn.byai.com/static/official-website/technology/sandazhengshu.png';

const PAPERQUOTE = [
  '[1] ZhiFen He, Ming Yang, Hui-Dong Liu, Lei Wang. Calibrated multi-label classification with label correlations. Neural Processing Letters, 2018 (in press). ',
  '[2] Zhi-Fen He, Ming Yang, Yang Gao, Hui-Dong Liu, Yilong Yin. Joint multi-label classification and label correlations with missing labels and feature selection. Knowledge-Based Systems, 163: 145-158, 2018. ',
  '[3] Huidong Liu, Xianfeng Gu, Dimitris Samaras. A Two-Step Computation of the Exact GAN Wasserstein Distance. In: Proceedings of the 35th International Conference on Machine Learning (ICML), 2018, pp. 3159-3168. ',
  '[4] Zhifen He, Ming Yang, Huidong Liu. Multi-task Joint Feature Selection for Multi-label Classification. Chinese Journal of Electronics, 24(2): 281-287, 2015. ',
  '[5] Hui-Dong Liu, Ming Yang, Yang Gao, Yilong Yin, Liang Chen. Bilinear Discriminative Dictionary Learning for Face Recognition. Pattern Recognition, 47(5): 1835-1845, 2014. ',
  '[6] Hui-Dong Liu, Ming Yang, Yang Gao, Longbing Cao. Fast Local Histogram Specification. IEEE Trans. on Circuits and Systems for Video Technology, 24(11): 1833-1843, 2014. ',
];

const PAPERPREPRINTS = [
  'PREPRINTS',
  '[1]Chen-Ping Yu, Huidong Liu, Dimitris Samaras, Gregory Zelinsky. Modeling Attention Control Using A Convolutional Neural Network Designed After The Ventral Visual Pathway. doi: https://doi.org/10.1101/473124.',
  '[2]Huidong Liu, Yang Guo, Na Lei, Zhixin Shu, Shing-Tung Yau, Dimitris Samaras, Xianfeng Gu. Latent Space Optimal Transport for Generative Models. ArXiv preprint arXiv:1809.05964, 2018.',
];

const TECHNOLOGY_STACK = [
  {
    title: ['通讯网络'],
    img: IMG_8,
    desc: ['运营商直连', '线路市场', '高可用短信'],
  },
  {
    title: ['音频处理'],
    img: IMG_9,
    desc: ['全频段音质FullBand', '忙音分离、啸叫控制', '智能降噪、回声消除'],
  },
  {
    title: ['语音识别'],
    img: IMG_10,
    desc: ['声音前置处理', 'ASR算法', '模型优化'],
  },
  {
    title: ['语义理解'],
    img: IMG_11,
    desc: ['NLU自然语言理解', '26行业知识图谱', '关键词加强处理'],
  },
  {
    title: ['语音合成'],
    img: IMG_12,
    desc: ['真人配音', '丰富的TTS音色', '高自然润率模型'],
  },
  {
    title: ['高可用、可扩展'],
    img: IMG_13,
    desc: ['99.99%服务可用性', '流量高峰主动扩展', '支持百万人超级流量'],
  },
];

const SECURITY_SYSTEM = [
  {
    title: '应用安全',
    list: ['SSL', 'DNS', '解耦', 'token', '重点数据', '漏洞防护', '垂直防御'],
  },
  {
    title: '部署安全',
    list: ['无状态服务器', 'IP白名单', 'VPN', '文件上传服务器', '分权限', 'public key', '配置加密'],
  },
  {
    title: '数据安全',
    list: ['DDoS', '防爆力破解', '木马查杀', '宕机迁移', '快照备份', '数据恢复', '异地容灾'],
  },
];

const SECURITY_LEVEL = ['云盾', '监控报警', '众测', '代码审计'];

const DescCol = styled(Col)`
  margin: 60px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 21px;
    ${media.phone`
        padding: 0 30px;
    `}
  }
`;

const DescImgCol = styled(Col)`
  margin: 60px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    ${media.phone`
        width: 85%;
  `}
    box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
  }
`;

const TechnologyCol = styled(Col)`
  display: flex;
`;

const TechnologyCard = styled(Col)`
  display: flex;
  justify-content: center;
  .wrap {
    width: 90%;
    height: 420px;
    padding: 60px 0;
    text-align: center;
    box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
    background: url(${IMG_14}) bottom no-repeat rgba(255, 255, 255, 1);
    background-size: 100% 300px;
    color: rgba(13, 25, 36, 1);
    font-weight: 400;
    margin-bottom: 40px;
    .cover {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      img {
        max-height: 100%;
        margin-bottom: 0;
      }
    }
    .title {
      margin-top: 40px;
      font-size: 26px;
      line-height: 28px;
      font-weight: 300;
    }
    .desc {
      margin-top: 16px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
      p {
        margin-bottom: 5px;
      }
    }
  }
`;

const SecurityCard = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .wrap {
    width: 90%;
    text-align: center;
    box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
    .head {
      height: 70px;
      background-image: url(${IMG_15});
      background-color: #3153d4;
      font-size: 18px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      background-size: cover;
      line-height: 70px;
    }
    & p:nth-child(2n + 1) {
      height: 60px;
      line-height: 60px;
      background: rgba(245, 246, 251, 1);
      margin-bottom: unset;
    }
    & p:nth-child(n) {
      height: 60px;
      line-height: 60px;
      margin-bottom: unset;
    }
  }
`;

const YinboCol = styled(Col)`
  display: flex;
  justify-content: center;
  > p {
    width: 90%;
    text-align: center;
    background-image: url(${IMG_16});
    background-size: cover;
    height: 70px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 70px;
  }
`;

export default ({ hostType = HOST_ENUM.HOST }) => (
  <Layout hostType={hostType} headPlaceholder={[false, '#F9FAFF']} headFontStyle={['dark', 'dark']}>
    {(visible, setVisible) => (
      <>
        {/* <Banner
                    title={
                        <>
                            <Hidden xs sm>
                                <span style={{ fontSize: 40 }}>改变世界的不是技术</span>
                                <br />
                                而是技术背后的梦想
                          </Hidden>
                            <Hidden md lg xl xxl xxxl>
                                <span style={{ fontSize: 40 }}>改变世界的不是技术</span>
                                <br />
                                而是技术背后的
                            <br />
                                梦想
                          </Hidden>
                        </>
                    }
                    mobileBackgroundImage={BACKGOURND_XS}
                    backgroundImage={IMG_1}
                /> */}
        <BannerWhite
          minWidthPC="1075px"
          background={[`url(${BANNER_BG2}) left 219px top 90px / 260px,#F9FAFF`, '#F9FAFF']}
          pcImgs={[
            { src: BANNER2, style: { width: 900, right: -151, top: 83 }, className: [] },
            {
              src: BANNER,
              style: { width: 600, right: 0, top: 0 },
              className: ['animate__fadeInRight', 'animate__ahead_300ms'],
            },
          ]}
          mobileImg={BANNER_XS}>
          <TextArea margin="-50px 0 0" spaces={['10px', '8']}>
            <Hidden xs sm>
              <TechnologyThinTitle>
                改变世界的
                <br />
                不是技术
              </TechnologyThinTitle>
              <BigTitle>而是技术背后的梦想</BigTitle>
            </Hidden>
            <Visible xs sm>
              <SmallSubTitle>改变世界的不是技术</SmallSubTitle>
              <BigTitle>
                而是技术
                <br />
                背后的梦想
              </BigTitle>
            </Visible>
          </TextArea>
        </BannerWhite>
        <TeamIntro title="百应智能研究院·中美两地联合算法团队" />
        <DescWrapper
          title={
            <>
              Pattern Recognition, IEEE TCSVT, Image and Vision Computing
              <br />
              等国际权威机器学习和人工智能期刊发表论文多篇
            </>
          }
          backgroundColor="#F8F9FB">
          <DescImgCol lg={8}>
            <img src={IMG_2} alt="" />
          </DescImgCol>
          <DescCol lg={15} offset={{ lg: 1 }}>
            {PAPERQUOTE.map((item: string) => (
              <p key={item}>{item}</p>
            ))}
            {PAPERPREPRINTS.map((item: string) => (
              <p key={item}>{item}</p>
            ))}
          </DescCol>
        </DescWrapper>
        <DescWrapper title="百余项发明专利和软件著作权" desc="INVENTION PATENT AND SOFTWARE COPYRIGHT">
          <ScreenClassRender
            render={screenClass => {
              let limit;
              switch (screenClass) {
                case 'lg':
                  limit = 4;
                  break;
                case 'md':
                  limit = 3;
                  break;
                case 'sm':
                  limit = 2;
                  break;
                case 'xs':
                  limit = 1;
                  break;
                default:
                  limit = 5;
              }
              return <Certificate limit={limit} />;
            }}
          />
        </DescWrapper>
        <DescWrapper
          id="ai-engine"
          title="自主研发AI语音通话技术栈"
          desc="INDEPENDENT RESEARCH AND DEVELOPMENT OF AI VOICE CALL TECHNOLOGY STACK"
          backgroundColor="#F8F9FB">
          {TECHNOLOGY_STACK.map((item, index) => (
            <TechnologyCol lg={8} md={12}>
              <TechnologyCard>
                <div className="wrap">
                  <div className="cover">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="title">
                    {item.title.map((it: string) => (
                      <p>{it}</p>
                    ))}
                  </div>
                  <div className="desc">
                    {item.desc.map((desc: string, index: number) => (
                      <p key={index}>{desc}</p>
                    ))}
                  </div>
                </div>
              </TechnologyCard>
            </TechnologyCol>
          ))}
        </DescWrapper>
        <DescWrapper
          title="银行级数据安全体系，保障企业信息安全"
          desc="BANK-LEVEL DATA SECURITY SYSTEM, DEFEND CORPORATE INFORMATION SECURITY">
          {SECURITY_SYSTEM.map((item, index) => (
            <TechnologyCol lg={8} key={index} style={{ marginBottom: 60 }}>
              <SecurityCard>
                <div className="wrap">
                  <div className="head">{item.title}</div>
                  {item.list.map((it: string) => (
                    <p>{it}</p>
                  ))}
                </div>
              </SecurityCard>
            </TechnologyCol>
          ))}
          {SECURITY_LEVEL.map((item, index) => (
            <TechnologyCol lg={6} md={12} key={index}>
              <YinboCol>
                <p>{item}</p>
              </YinboCol>
            </TechnologyCol>
          ))}
        </DescWrapper>
        <DescWrapper
          title="七大国际权威安全认证"
          desc="THREE INTERNATIONAL AUTHORITATIVE SECURITY CERTIFICATIONS"
          style={{ paddingTop: 10 }}>
          <Col lg={24}>
            <img src={IMG_17} />
          </Col>
        </DescWrapper>
        <ByVoiceFooter
          title="打造企业级数字化劳动力"
          desc="留下联系方式，将有AI行业专家为您提供专属服务"
          btnText="与我联系"
          background={`url(${FOOTER_BG})`}
          onClick={() => {
            setVisible(true);
          }}
        />
        {/* <VoiceFooter
                    title="技术改变世界"
                    mTitle1="技术改变世界"
                    btn="免费体验"
                    img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
                    onBtnClick={() => setVisible(true)}
                /> */}
      </>
    )}
  </Layout>
);
