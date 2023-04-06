import Link from 'next/link';
import { Row } from 'react-grid-system';
import styled from 'styled-components';
import ByDesc from '../src/components/common/ByDesc';
import ByVoiceFooter from '../src/components/common/ByVoiceFooter';
import CustomerIconsBlock from '../src/components/common/CustomerIconsBlock';
import AppliedProduct from '../src/components/homepage/AppliedProduct';
import BaseAIProduct from '../src/components/homepage/BaseAIProduct';
import { Layout } from '../src/components/Layout';
import { HeadContainer, HeadImgWrap, More, NextGo, NextGoBox } from '../src/components/styles';
import { FormType } from '../src/components/TryForm';
import { media } from '../src/constants/style';
const TRADE1_IMG = 'https://cdn.byai.com/static/intro/img/index/index-banner-img.gif';

const partner = [
  'https://cdn.byai.com/static/intro/img/index/huawei-cooperation.png',
  'https://cdn.byai.com/static/intro/img/index/tencent-accelerator.png',
  'https://cdn.byai.com/static/intro/img/index/honor.png',
];
const FOOTER_BG = 'https://cdn.byai.com/static/intro/img/common/voice-footer-img.png';
const AI_EMPLOYEE = 'https://cdn.byai.com/static/intro/img/index/AI-employee.png';
const Intro = styled.div<{ odd?: boolean; bottom?: number; backgroundImage?: string }>`
  padding-bottom: ${props => `${props.bottom || 60}px`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #030353;
  flex-direction: row;
  position: relative;
  position: relative;
  margin-top: -100px;
  ${media.phone`
    margin-top: -10px;
    top: -2px;
  `}
  @-webkit-keyframes shakeY {
    0%,
    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }

    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 5px, 0);
    }
  }

  @keyframes shakeY {
    0%,
    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -5px, 0);
    }

    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 5px, 0);
    }
  }
  ${props =>
    props.odd &&
    css`
      background-color: #f8f9fb;
    `};
  padding-bottom: 120px;
  ${media.phone`
    padding-bottom: 80px;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ShowCard = styled.div<{ cover: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  flex: 1;
  margin: 5px;
  img {
    border-radius: 8px;
  }
  ${media.phone`
    margin-left: 0px;
    margin-bottom: 20px;
    width: 90%;
    flex: none;
    &:nth-child(2n) {
      .wrapper {
          margin-right: 0;
        }
      }
    `}
  &:nth-child(4n) {
    .wrapper {
      margin-right: 0;
    }
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    width: 282px;
    height: 400px;
    margin-right: 20px;
    ${media.phone`
      width: 155px;
      height: 220px;
      margin-right: 15px;
    `}
  }
  .mask {
    position: absolute;
    background: linear-gradient(to bottom, rgba(49, 83, 212, 0.2), rgba(49, 83, 212, 0.9));
    width: 100%;
    height: 100%;
  }
  .cover {
    background-image: url(${props => props.cover});
    position: absolute;
    background-position: center;
    background-size: cover;
    transition: all 0.3s ease-in-out 0s;
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .wrapper:hover .cover {
    transform: scale(1.06);
  }
`;

const ImgBox = styled(Row)`
  border-radius: 8px;
  background-color: white;
  width: 80%;

  ${media.phone`
    width: 90%;
    padding: 5px 0px 15px 0px;
  `}
  img {
    margin-bottom: 15px;
    ${media.phone`
      margin-bottom: 0px;
    `}
  }
  padding: 5px 5px 15px 5px;
  position: relative;
`;

const ScrollBox = styled.div`
  display: flex;
  overflow: scroll;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none;
  ${media.phone`
    padding: 0 5px 0 0px;  
    margin-right: 10px;
    margin-left: 10px;
  `}
`;

export default props => {
  return (
    <Layout headPlaceholder={[false, '#06056f']} headFontStyle={['light', 'light']}>
      {(Visible, setFormVisible) => (
        <>
          <HeadImgWrap>
            <img src={TRADE1_IMG} width="100%"></img>
            <HeadContainer className="animate__animated animate__slow animate__fadeInUpBig">
              <h1>AI数字员工</h1>
              <p>打造企业级数字化劳动力，为全行业数字化转型赋能</p>
            </HeadContainer>
          </HeadImgWrap>
          <Intro bottom={-5}>
            <ImgBox justify="center">
              <ScrollBox>
                {partner.map((item, index) => (
                  <ShowCard cover={partner[index]} key={index}>
                    <img src={partner[index]} />
                  </ShowCard>
                ))}
              </ScrollBox>
              <Link href="/news">
                <More>了解更多</More>
              </Link>
            </ImgBox>
            <NextGoBox>
              <NextGo className="iconfont iconfanhuidingceng animate__infinite animate__slower animate__animated animate__shakeY"></NextGo>
            </NextGoBox>
          </Intro>
          <ByDesc
            title="AI数字员工，面向未来的智慧型生产要素"
            padding={['60px 20px', '32px 20px']}
            needDecoration={false}
          />
          <BaseAIProduct />
          <AppliedProduct />
          <CustomerIconsBlock />
          <ByVoiceFooter
            title="点击开启「AI数字员工」崭新之旅"
            desc="留下联系方式，将有AI行业专家为您提供专属服务"
            btnText="与我联系"
            background={`url(${FOOTER_BG})`}
            onClick={() => {
              setFormVisible(true, FormType.CUSTOMER);
            }}
          />
        </>
      )}
    </Layout>
  );
};
