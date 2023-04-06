import { NextFunctionComponent } from 'next';
import { useRef, useState } from 'react';
import { Carousel, FormControl, InputGroup } from 'react-bootstrap';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../src/constants/style';
import { calWidthAndHeight, isPc, retailUrl } from '../../src/lib/utils';
import ByVoiceFooter from '../../src/retail/components/common/ByVoiceFooter';
import CommonBottomButton from '../../src/retail/components/common/CommonBottomButton';
import CommonHead from '../../src/retail/components/common/CommonHead';
import { Layout } from '../../src/retail/components/Layout';

interface IMakeUpProps {}

const WrapperMall = styled.div`
  text-align: center;
  background: #fbfbfb;

  .carousel-control-next-icon {
    width: ${calWidthAndHeight(24)};
    height: ${calWidthAndHeight(48)};
    background-image: url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/icon_right.png);
  }

  .carousel-control-prev-icon {
    width: ${calWidthAndHeight(24)};
    height: ${calWidthAndHeight(48)};
    background-image: url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/icon_left.png);
  }

  .sub-title {
    font-size: ${calWidthAndHeight(24)};
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: ${calWidthAndHeight(32)};
  }

  .carousel-indicators li {
    width: ${calWidthAndHeight(24)};
    height: ${calWidthAndHeight(4)};
    border-top: none;
    border-bottom: none;
    background: rgba(100, 17, 239, 0.14);
  }

  .carousel-indicators li.active {
    background: #6411ef;
  }

  .carousel-indicators {
    bottom: ${calWidthAndHeight(-60)};
  }

  .bottom-btn {
    &:hover {
      filter: brightness(80%);
    }
  }
`;

const StyledBanner = styled.div<{ bgUrl: string }>`
  height: ${calWidthAndHeight(680)};
  background: #f9fbfc;
  background-image: url(${props => props.bgUrl});
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;

  .input-group {
    width: ${calWidthAndHeight(400)};
    height: ${calWidthAndHeight(48)};
    font-size: ${calWidthAndHeight(20)};
    margin: ${calWidthAndHeight(48)} 0 ${calWidthAndHeight(120)};
    top: ${calWidthAndHeight(400)};
    left: ${calWidthAndHeight(176)};
    position: absolute;

    input {
      height: ${calWidthAndHeight(48)};
      padding: 0 ${calWidthAndHeight(24)};
      font-size: ${calWidthAndHeight(18)};
    }

    .form-control::-webkit-input-placeholder {
      color: rgba(43, 43, 43, 0.25);
    }

    input.warn {
      border: 1px solid #f66600;
    }

    .input-group-text {
      background: #f66600 linear-gradient(171deg, #feafba 0%, #fb3ff9 28%, #7a41f7 59%, #03ffe7 100%);
      color: #ffffff;
      padding: 0 ${calWidthAndHeight(24)};
      border: none;
      cursor: pointer;
      font-size: ${calWidthAndHeight(18)};
      border-top-left-radius: 0;
      botder-bottom-left-radius: 0;
      &:hover {
        filter: brightness(80%);
      }
    }
    .warn_message {
      position: absolute;
      font-family: PingFangSC-Regular, PingFang SC;
      top: ${calWidthAndHeight(48)};
      font-size: ${calWidthAndHeight(16)};
      color: #ffffff;
      line-height: ${calWidthAndHeight(24)};
    }
  }

  @media (max-width: 768px) {
    height: ${calWidthAndHeight(638)};

    .banner-title {
      font-size: ${calWidthAndHeight(36)};
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: ${calWidthAndHeight(48)};
      padding-top: ${calWidthAndHeight(96)};
      margin-bottom: ${calWidthAndHeight(8)};
    }

    .banner-desc {
      font-size: ${calWidthAndHeight(14)};
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #ffffff;
      line-height: ${calWidthAndHeight(24)};
    }

    .banner-btn {
      width: ${calWidthAndHeight(280)};
      height: ${calWidthAndHeight(48)};
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f66600 linear-gradient(156deg, #feafba 0%, #fb3ff9 5%, #7e41f7 66%, #7a41f7 68%, #03ffe7 100%);
      border-radius: ${calWidthAndHeight(4)};
      font-size: ${calWidthAndHeight(20)};
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: ${calWidthAndHeight(28)};
      margin: ${calWidthAndHeight(32)} auto;
    }
  }
`;

const StyledVoice = styled.div`
  height: ${calWidthAndHeight(40)};
  width: ${calWidthAndHeight(1200)};
  margin: ${calWidthAndHeight(80)} auto 0;
  background-image: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/voice_bg.png');
  background-size: contain;
  &:hover {
    background-image: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/voice_bg_hover.png');
    background-size: cover;
    cursor: pointer;
  }
  position: relative;

  img {
    position: absolute;
    top: ${calWidthAndHeight(8)};
    right: ${calWidthAndHeight(24)};
  }

  @media (max-width: 768px) {
    width: ${calWidthAndHeight(328)};
    height: ${calWidthAndHeight(108)};
    border-radius: ${calWidthAndHeight(54)};
    background-image: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/phone_voice_bg.png');
    background-size: contain;
    margin: ${calWidthAndHeight(28)} auto ${calWidthAndHeight(40)};

    &:hover {
      background-image: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/phone_voice_bg.png');
      background-size: cover;
      cursor: pointer;
    }

    img {
      position: relative;
      top: ${calWidthAndHeight(26)};
      right: ${calWidthAndHeight(108)};
    }
  }
`;

const StyledHelp = styled.div`
  width: ${calWidthAndHeight(1156)};
  height: ${calWidthAndHeight(462)};
  margin: 0 auto;
  background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/brand_bg.png');
  background-size: 100%;
  position: relative;
  .recall-button {
    width: ${calWidthAndHeight(170)};
    height: ${calWidthAndHeight(170)};
    position: absolute;
    top: ${calWidthAndHeight(166)};
    left: ${calWidthAndHeight(231)};
    background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/recall_btn.png');
    background-size: 100%;
    border-radius: 50%;
    cursor: pointer;
    z-index: 9;
  }
  .private-button {
    width: ${calWidthAndHeight(170)};
    height: ${calWidthAndHeight(170)};
    position: absolute;
    top: ${calWidthAndHeight(166)};
    right: ${calWidthAndHeight(227)};
    background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/private_btn.png');
    background-size: 100%;
    border-radius: 50%;
    cursor: pointer;
    z-index: 9;
  }
  .animate-wave-recall {
    width: ${calWidthAndHeight(200)};
    height: ${calWidthAndHeight(200)};
    position: absolute;
    top: ${calWidthAndHeight(150)};
    left: ${calWidthAndHeight(214)};
  }

  .animate-wave-private {
    width: ${calWidthAndHeight(200)};
    height: ${calWidthAndHeight(200)};
    position: absolute;
    top: ${calWidthAndHeight(150)};
    right: ${calWidthAndHeight(214)};
  }

  .animate-wave-recall * {
    background: #7a41f7;
    position: absolute;
    border-radius: 50%;
    animation: opac 6s infinite;
  }
  .animate-wave-private * {
    background: #7a41f7;
    position: absolute;
    border-radius: 50%;
    animation: opac 6s infinite;
  }

  @keyframes opac {
    0% {
      opacity: 1;
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
    }

    99% {
      opacity: 0.1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    100% {
      opacity: 0;
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
    }
  }

  .animate-wave-recall .w2 {
    animation-delay: 1s;
  }

  .animate-wave-private .w2 {
    animation-delay: 1s;
  }

  .animate-wave-recall .w3 {
    animation-delay: 2s;
  }

  .animate-wave-private .w3 {
    animation-delay: 2s;
  }

  .animate-wave-recall .w4 {
    animation-delay: 3s;
  }

  .animate-wave-private .w4 {
    animation-delay: 3s;
  }

  .animate-wave-recall .w5 {
    animation-delay: 4s;
  }

  .animate-wave-private .w5 {
    animation-delay: 4s;
  }

  .animate-wave-recall .w6 {
    animation-delay: 5s;
  }

  .animate-wave-private .w6 {
    animation-delay: 5s;
  }
`;

const StyledLine = styled.div`
  width: ${calWidthAndHeight(1170)};
  height: ${calWidthAndHeight(25)};
  margin: 0 auto;
  background: url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/line.png) no-repeat;
  background-size: contain;
`;

const StyledWord = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 ${calWidthAndHeight(138)} ${calWidthAndHeight(8)};
  font-size: ${calWidthAndHeight(28)};
  font-weight: 600;
  color: #00a1ec;
  line-height: ${calWidthAndHeight(34)};
  text-align: left;

  .word-item-1 {
    color: #00a1ec;
    width: ${calWidthAndHeight(232)};
    margin-left: -${calWidthAndHeight(2)};
  }
  .word-item-2 {
    color: #2b58f9;
    width: ${calWidthAndHeight(232)};
    padding-left: ${calWidthAndHeight(2)};
  }
  .word-item-3 {
    color: #6023f8;
    width: ${calWidthAndHeight(232)};
    padding-left: ${calWidthAndHeight(8)};
  }
  .word-item-4 {
    color: #b123f8;
    width: ${calWidthAndHeight(232)};
    padding-left: ${calWidthAndHeight(12)};
  }
  .word-item-5 {
    color: #d323f8;
    width: ${calWidthAndHeight(232)};
    padding-left: ${calWidthAndHeight(16)};
  }
`;

const StyledCard = styled.div`
  margin: 0 ${calWidthAndHeight(122)} ${calWidthAndHeight(24)};
  display: flex;
  .card-item {
    width: ${calWidthAndHeight(244)};
    height: ${calWidthAndHeight(266)};
    background: url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/bg-4.png);
    background-size: cover;
    margin-right: ${calWidthAndHeight(42)};
    display: flex;
    flex-direction: column;
    padding-left: ${calWidthAndHeight(28)};
    padding-right: ${calWidthAndHeight(28)};

    .user-icon {
      width: ${calWidthAndHeight(40)};
      height: ${calWidthAndHeight(40)};
      margin: 0 auto;
      margin-top: ${calWidthAndHeight(48)};
      cursor: pointer;
      background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/user_icon.png');
      background-size: 100%;
      &:hover {
        background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/user_hover_icon.png');
        background-size: 100%;
      }
    }

    .invitate-icon {
      width: ${calWidthAndHeight(40)};
      height: ${calWidthAndHeight(40)};
      margin: 0 auto;
      margin-top: ${calWidthAndHeight(48)};
      cursor: pointer;
      background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/invitate_icon.png');
      background-size: 100%;
      &:hover {
        background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/invitate_hover_icon.png');
        background-size: 100%;
      }
    }

    .vip-icon {
      width: ${calWidthAndHeight(40)};
      height: ${calWidthAndHeight(40)};
      margin: 0 auto;
      margin-top: ${calWidthAndHeight(48)};
      cursor: pointer;
      background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/vip_icon.png');
      background-size: 100%;
      &:hover {
        background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/vip_hover_icon.png');
        background-size: 100%;
      }
    }

    .new-icon {
      width: ${calWidthAndHeight(40)};
      height: ${calWidthAndHeight(40)};
      margin: 0 auto;
      margin-top: ${calWidthAndHeight(48)};
      cursor: pointer;
      background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/new_icon.png');
      background-size: 100%;
      &:hover {
        background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/new_hover_icon.png');
        background-size: 100%;
      }
    }

    .private-icon {
      width: ${calWidthAndHeight(40)};
      height: ${calWidthAndHeight(40)};
      margin: 0 auto;
      margin-top: ${calWidthAndHeight(48)};
      cursor: pointer;
      background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/private_icon.png');
      background-size: 100%;
      &:hover {
        background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/private_hover_icon.png');
        background-size: 100%;
      }
    }

    .card-item-desc {
      font-size: ${calWidthAndHeight(12)};
      color: #000000;
      line-height: ${calWidthAndHeight(17)};
    }

    .card-item-title1 {
      height: ${calWidthAndHeight(30)};
      font-size: ${calWidthAndHeight(22)};
      font-weight: 500;
      color: #00a1ec;
      line-height: ${calWidthAndHeight(30)};
      margin: ${calWidthAndHeight(8)} auto;
      white-space: nowrap;
    }

    .card-item-title2 {
      height: ${calWidthAndHeight(30)};
      font-size: ${calWidthAndHeight(22)};
      font-weight: 500;
      color: #2b58f9;
      line-height: ${calWidthAndHeight(30)};
      margin: ${calWidthAndHeight(8)} auto;
      white-space: nowrap;
    }

    .card-item-title3 {
      height: ${calWidthAndHeight(30)};
      font-size: ${calWidthAndHeight(22)};
      font-weight: 500;
      color: #6023f8;
      line-height: ${calWidthAndHeight(30)};
      margin: ${calWidthAndHeight(8)} auto;
      white-space: nowrap;
    }

    .card-item-title4 {
      height: ${calWidthAndHeight(30)};
      font-size: ${calWidthAndHeight(22)};
      font-weight: 500;
      color: #b123f8;
      line-height: ${calWidthAndHeight(30)};
      margin: ${calWidthAndHeight(8)} auto;
      white-space: nowrap;
    }

    .card-item-title5 {
      height: ${calWidthAndHeight(30)};
      font-size: ${calWidthAndHeight(22)};
      font-weight: 500;
      color: #d323f8;
      line-height: ${calWidthAndHeight(30)};
      margin: ${calWidthAndHeight(8)} auto;
      white-space: nowrap;
    }

    .card-item-tips {
      height: ${calWidthAndHeight(14)};
      font-size: ${calWidthAndHeight(10)};
      font-weight: 500;
      color: #d323f8;
      line-height: ${calWidthAndHeight(14)};
      margin: ${calWidthAndHeight(8)} auto;
      text-align: left;
      .radio-icon {
        display: inline-block;
        width: ${calWidthAndHeight(6)};
        height: ${calWidthAndHeight(6)};
        background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/radio_icon.png');
        background-size: 100%;
      }
      .radio-text {
        white-space: nowrap;
        margin-left: ${calWidthAndHeight(6)};
      }
    }
  }
`;

const FOOTER_BG = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/bg-2.png';

const KNOW_CUSTOMER = [
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/know_customer_1.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/know_customer_2.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/know_customer_3.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/know_customer_4.png',
];

const SUPERIORITY = [
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/superiority_1.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/superiority_2.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/superiority_3.png',
];

const StyledChoice = styled.div`
  height: ${calWidthAndHeight(790)};
  background: #fbfbfb;

  @media (max-width: 768px) {
    height: ${calWidthAndHeight(682)};
  }
`;

const StyledScene = styled.div`
  height: ${calWidthAndHeight(948)};
  background: linear-gradient(136deg, #ffeeb2 0%, #febfff 46%, #82d7ff 100%);

  @media (max-width: 768px) {
    height: ${calWidthAndHeight(816)};
  }
`;

const StyledDrainageImg = styled.div`
  width: ${calWidthAndHeight(944)};
  height: ${calWidthAndHeight(400)};
  background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/bg-3.png');
  margin: 0 auto;
  background-size: cover;

  @media (max-width: 768px) {
    width: ${calWidthAndHeight(312)};
    height: ${calWidthAndHeight(366)};
    background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/phone_bg-3.png');
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

const FloatCard = styled.div`
  position: relative;
  top: -${calWidthAndHeight(136)};
  width: ${calWidthAndHeight(1200)};
  height: ${calWidthAndHeight(832)};
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 100%);
  box-shadow: 5px 7px 24px 8px rgba(69, 88, 128, 0.08);
  border-radius: ${calWidthAndHeight(26)};
`;

const PhoneSceneBg = styled.div`
  width: ${calWidthAndHeight(312)};
  height: ${calWidthAndHeight(588)};
  margin: 0 auto;
  background: url('https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/phone_scene_bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
`;

const BrandChoice = styled.div`
  background-color: #fff;
  padding: ${calWidthAndHeight(40)};

  .brand-title {
    font-size: ${calWidthAndHeight(20)};
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(24)};
    margin-bottom: ${calWidthAndHeight(16)};
  }

  .carousel-indicators {
    bottom: -${calWidthAndHeight(24)} !important;
  }
`;

// 双 11 活动
const Mall: NextFunctionComponent = ({}) => {
  const [phone, setPhone] = useState<string>('');
  const [valid, setValid] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef(null);

  const setFormByPhone = () => {
    if (isPc()) {
      if (!phone) {
        setValid('请输入您的手机号');
        return;
      }
      if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(phone)) {
        setValid('请输入正确的手机号');
        return;
      }
    }
    const url = retailUrl(!isPc() ? `/form` : `/form?phone=${phone}`);
    window.open(url);
  };

  const setForm = () => {
    const url = retailUrl(`/form`);
    window.open(url);
  };

  return (
    <Layout
      headPlaceholder={[false, false]}
      headFontStyle={media.phone ? ['light', 'light'] : ['dark', 'dark']}
      expBtnBgColor={[
        '#F66600 linear-gradient(171deg, #FEAFBA 0%, #FB3FF9 28%, #7A41F7 59%, #03FFE7 100%)',
        '#F66600 linear-gradient(171deg, #FEAFBA 0%, #FB3FF9 28%, #7A41F7 59%, #03FFE7 100%) rgba(0,0,0,0.2)',
      ]}>
      {(visible, setFormVisible) => (
        <>
          <Visible md lg xl xxl xxxl>
            <WrapperMall>
              <StyledBanner
                bgUrl={'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/banner.png'}>
                <InputGroup>
                  <FormControl
                    className={valid && 'warn'}
                    placeholder="请输入您的手机号"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={e => {
                      setPhone(e.target.value);
                    }}
                    onFocus={() => setValid('')}
                  />
                  <InputGroup.Text id="basic-addon2" onClick={() => setFormByPhone()}>
                    免费体验
                  </InputGroup.Text>
                  {valid && <div className="warn_message">{valid}</div>}
                </InputGroup>
              </StyledBanner>
              <StyledChoice>
                <CommonHead
                  title={
                    <>
                      <Visible md lg xl xxl xxxl>
                        线下双十一，反攻还是躺平？
                      </Visible>
                      <Visible xs sm>
                        线下双十一，反攻还是躺平？
                      </Visible>
                    </>
                  }
                  pt={118}
                  pb={44}
                  bgColor="unset"
                />
                <img
                  style={{ width: calWidthAndHeight(1234), height: calWidthAndHeight(400), objectFit: 'cover' }}
                  src={'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/bg-1.png'}
                />
                <StyledVoice>
                  <audio
                    ref={audioRef}
                    className="activity-mp3"
                    src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/activity.mp3"></audio>
                  <img
                    style={{ width: calWidthAndHeight(24), height: calWidthAndHeight(24) }}
                    src={
                      !isPlaying
                        ? 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/mp3_icon_play.svg'
                        : 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/mp3_icon_playing.svg'
                    }
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      if (!isPlaying) {
                        audioRef.current.play();
                      } else {
                        audioRef.current.pause();
                      }
                    }}
                  />
                </StyledVoice>
              </StyledChoice>
              <div style={{ backgroundColor: '#fff' }}>
                <CommonHead
                  title={
                    <>
                      <Visible md lg xl xxl xxxl>
                        为什么越来越多线下百购双11都开始用AI？
                      </Visible>
                      <Visible xs sm>
                        为什么越来越多线下百购双11都开始用AI？
                      </Visible>
                    </>
                  }
                  pb={56}
                />
                <StyledDrainageImg />
                <div style={{ paddingBottom: calWidthAndHeight(80), marginTop: calWidthAndHeight(60) }}>
                  <CommonBottomButton
                    name="免费领取线下大促玩法 "
                    pl={calWidthAndHeight(32)}
                    pr={calWidthAndHeight(32)}
                    btnBg={[
                      'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                      'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                    ]}
                    bg="unset"
                  />
                </div>
              </div>
              <StyledScene>
                <CommonHead
                  title={
                    <>
                      <Visible md lg xl xxl xxxl>
                        线下双十一「AI玩法」全场景图
                      </Visible>
                      <Visible xs sm>
                        线下双十一「AI玩法」全场景图
                      </Visible>
                    </>
                  }
                  bgColor="unset"
                />
                <StyledWord>
                  <div className="word-item-1">
                    会员
                    <br />
                    为什么不来了？
                  </div>
                  <div className="word-item-2">引流到店</div>
                  <div className="word-item-3">提升复购</div>
                  <div className="word-item-4">拉升会员数</div>
                  <div className="word-item-5">提升会员黏性</div>
                </StyledWord>
                <StyledLine></StyledLine>
                <StyledCard>
                  <div className="card-item">
                    <div className="user-icon" />
                    <div className="card-item-title1">用户画像采集</div>
                    <div className="card-item-desc">满意度问卷调研、用户意见收集、用户需求调研、用户召回问卷</div>
                  </div>
                  <div className="card-item">
                    <div className="invitate-icon"></div>
                    <div className="card-item-title2">活动邀约</div>
                    <div className="card-item-desc">品类优惠、限定折扣、免费停车、新店开业、主题活动</div>
                  </div>
                  <div className="card-item">
                    <div className="vip-icon"></div>
                    <div className="card-item-title3">会员服务</div>
                    <div className="card-item-desc">会员日、生日关怀、体验活动、到店福利、积分兑换、积分到期提醒</div>
                  </div>
                  <div className="card-item">
                    <div className="new-icon"></div>
                    <div className="card-item-title4">拉新连带</div>
                    <div className="card-item-desc">邀请有礼、同行优惠、收购礼、入会礼、消费有礼</div>
                  </div>
                  <div className="card-item">
                    <div className="private-icon"></div>
                    <div className="card-item-title5">私域引流</div>
                    <div className="card-item-desc">
                      AI高效加粉，
                      <br />
                      提升导购服务效率
                    </div>
                    <div className="card-item-tips">
                      <div>
                        <div className="radio-icon"></div>
                        <span className="radio-text">个性化欢迎语</span>
                      </div>
                      <div>
                        <div className="radio-icon"></div>
                        <span className="radio-text">活动信息触达SOP</span>
                      </div>
                    </div>
                  </div>
                </StyledCard>
                <div style={{ marginTop: calWidthAndHeight(60) }}>
                  <CommonBottomButton
                    name="立即开启全新体验 "
                    pl={calWidthAndHeight(32)}
                    pr={calWidthAndHeight(32)}
                    btnBg={[
                      'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                      'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                    ]}
                    bg="unset"
                  />
                </div>
              </StyledScene>
              <FloatCard style={{ margin: '0 auto 80px auto' }}>
                <CommonHead
                  title={
                    <>
                      <Visible md lg xl xxl xxxl>
                        更懂客户的百应AI&nbsp;正在被更多的TOP零售企业选择
                      </Visible>
                      <Visible xs sm>
                        更懂客户的百应AI <br /> 正在被更多的TOP零售企业选择
                      </Visible>
                    </>
                  }
                  pt={80}
                  pb={40}
                  bgColor="unset"
                />
                <Carousel interval={2000} controls={true} indicators={false}>
                  {KNOW_CUSTOMER.map(item => (
                    <Carousel.Item>
                      <img style={{ width: calWidthAndHeight(1000), height: calWidthAndHeight(464) }} src={item} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div style={{ paddingBottom: calWidthAndHeight(80), marginTop: calWidthAndHeight(60) }}>
                  <CommonBottomButton
                    name="获取AI增长方案 "
                    pl={calWidthAndHeight(32)}
                    pr={calWidthAndHeight(32)}
                    btnBg={[
                      'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                      'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                    ]}
                    bg="unset"
                  />
                </div>
              </FloatCard>
              <FloatCard style={{ margin: '0 auto' }}>
                <CommonHead
                  pb={32}
                  title={
                    <>
                      <Visible md lg xl xxl xxxl>
                        三大服务优势保障效果
                      </Visible>
                      <Visible xs sm>
                        三大服务优势保障效果
                      </Visible>
                    </>
                  }
                  bgColor="unset"
                />
                <Carousel
                  style={{ marginBottom: calWidthAndHeight(154) }}
                  interval={2000}
                  controls={false}
                  indicators={true}>
                  {SUPERIORITY.map(item => (
                    <Carousel.Item>
                      <img style={{ width: calWidthAndHeight(1200), height: calWidthAndHeight(451) }} src={item} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </FloatCard>
              <div>
                <CommonHead
                  title={
                    <>
                      <Visible md lg xl xxl xxxl>
                        通过精细化、自动化客户经营，助力品牌赢在存量
                      </Visible>
                      <Visible xs sm>
                        通过精细化、自动化客户经营，助力品牌赢在存量
                      </Visible>
                    </>
                  }
                  pt={80}
                  bgColor="unset"
                />
                <StyledHelp>
                  <div
                    className="recall-button"
                    onClick={() => {
                      window.location.href = retailUrl('/recall');
                    }}></div>
                  <div className="animate-wave-recall">
                    <div className="w1"></div>
                    <div className="w2"></div>
                    <div className="w3"></div>
                    <div className="w4"></div>
                    <div className="w5"></div>
                    <div className="w6"></div>
                  </div>
                  <div
                    className="private-button"
                    onClick={() => {
                      window.location.href = retailUrl('/traffic');
                    }}></div>
                  <div className="animate-wave-private">
                    <div className="w1"></div>
                    <div className="w2"></div>
                    <div className="w3"></div>
                    <div className="w4"></div>
                    <div className="w5"></div>
                    <div className="w6"></div>
                  </div>
                </StyledHelp>
              </div>
              <ByVoiceFooter
                title={
                  <>
                    <Visible md lg xl xxl xxxl>
                      <span>点击获取专属品牌增长解决方案</span>
                    </Visible>
                    <Visible xs sm>
                      <span>
                        点击获取
                        <br />
                        专属品牌增长解决方案
                      </span>
                    </Visible>
                  </>
                }
                desc="百应零售行业专家免费诊断"
                btnText="与我联系"
                background={`url(${FOOTER_BG})`}
                onClick={() => {
                  window.open(retailUrl('/form?formType=1'));
                }}
              />
            </WrapperMall>
          </Visible>
          <Visible xs sm>
            <WrapperMall>
              <StyledBanner
                bgUrl={'https://cdn.byai.com/by-fe-cdn/static/pmp/99ae6dd4-195e-4a2a-8504-6718faa9a364.png'}>
                <div className="banner-title">
                  <div>线下百购</div>
                  <div>数智化解决方案</div>
                </div>
                <div className="banner-desc">有效提升到店率、复购率、连带率、加粉率</div>
                <div
                  className="banner-btn"
                  onClick={() => {
                    window.open(retailUrl(`/form?formType=1`));
                  }}>
                  {'免费体验 >>'}
                </div>
              </StyledBanner>
              <StyledChoice>
                <CommonHead
                  title={
                    <Visible xs sm>
                      线下百购，急需数智化转型
                    </Visible>
                  }
                  pt={40}
                  pb={24}
                  bgColor="unset"
                />
                <img
                  style={{ width: calWidthAndHeight(328), height: calWidthAndHeight(412), objectFit: 'cover' }}
                  src={'https://cdn.byai.com/by-fe-cdn/static/pmp/fbc497ed-5c3e-4912-920b-3054f33280f7.png'}
                />
                <StyledVoice>
                  <audio
                    ref={audioRef}
                    className="activity-mp3"
                    src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/activity.mp3"></audio>
                  <img
                    style={{ width: calWidthAndHeight(56), height: calWidthAndHeight(56) }}
                    src={
                      !isPlaying
                        ? 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/mp3_icon_play.svg'
                        : 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/mp3_icon_playing.svg'
                    }
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      if (!isPlaying) {
                        audioRef.current.play();
                      } else {
                        audioRef.current.pause();
                      }
                    }}
                  />
                </StyledVoice>
              </StyledChoice>
              <div style={{ backgroundColor: '#fff' }}>
                <CommonHead
                  title={
                    <Visible xs sm>
                      越来越多线下百购都开始用AI引流
                    </Visible>
                  }
                  pb={34}
                />
                <StyledDrainageImg />
                <div style={{ paddingBottom: calWidthAndHeight(40), marginTop: calWidthAndHeight(40) }}>
                  <CommonBottomButton
                    name="免费领取线下增长方案"
                    pl={calWidthAndHeight(32)}
                    pr={calWidthAndHeight(32)}
                    btnBg={[
                      'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                      'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                    ]}
                    bg="unset"
                  />
                </div>
              </div>
              <StyledScene>
                <CommonHead
                  title={
                    <Visible xs sm>
                      线下百购「AI玩法」全场景图
                    </Visible>
                  }
                  pt={40}
                  pb={40}
                  bgColor="unset"
                />
                <PhoneSceneBg />
                <div style={{ marginTop: calWidthAndHeight(32), marginBottom: calWidthAndHeight(40) }}>
                  <CommonBottomButton
                    name="免费咨询AI增长顾问 "
                    pl={calWidthAndHeight(32)}
                    pr={calWidthAndHeight(32)}
                    btnBg={[
                      'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                      'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                    ]}
                    bg="unset"
                  />
                </div>
              </StyledScene>
              <Visible md lg xl xxl xxxl>
                <FloatCard style={{ margin: '0 auto 80px auto' }}>
                  <CommonHead
                    title={
                      <>
                        <Visible md lg xl xxl xxxl>
                          更懂客户的百应AI&nbsp;正在被更多的TOP零售企业选择
                        </Visible>
                        <Visible xs sm>
                          更懂客户的百应AI <br /> 正在被更多的TOP零售企业选择
                        </Visible>
                      </>
                    }
                    pt={80}
                    pb={40}
                    bgColor="unset"
                  />
                  <Carousel interval={2000} controls={true} indicators={false}>
                    {KNOW_CUSTOMER.map(item => (
                      <Carousel.Item>
                        <img style={{ width: calWidthAndHeight(1000), height: calWidthAndHeight(464) }} src={item} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div style={{ paddingBottom: calWidthAndHeight(80), marginTop: calWidthAndHeight(60) }}>
                    <CommonBottomButton
                      name="获取AI增长方案 "
                      pl={calWidthAndHeight(32)}
                      pr={calWidthAndHeight(32)}
                      btnBg={[
                        'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                        'linear-gradient(156deg, #FEAFBA 0%, #FB3FF9 5%, #7E41F7 66%, #7A41F7 68%, #03FFE7 100%)',
                      ]}
                      bg="unset"
                    />
                  </div>
                </FloatCard>
                <FloatCard style={{ margin: '0 auto' }}>
                  <CommonHead
                    pb={32}
                    title={
                      <>
                        <Visible md lg xl xxl xxxl>
                          三大服务优势保障效果
                        </Visible>
                        <Visible xs sm>
                          三大服务优势保障效果
                        </Visible>
                      </>
                    }
                    bgColor="unset"
                  />
                  <Carousel
                    style={{ marginBottom: calWidthAndHeight(154) }}
                    interval={2000}
                    controls={false}
                    indicators={true}>
                    {SUPERIORITY.map(item => (
                      <Carousel.Item>
                        <img style={{ width: calWidthAndHeight(1200), height: calWidthAndHeight(451) }} src={item} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </FloatCard>
                <div>
                  <CommonHead
                    title={
                      <>
                        <Visible md lg xl xxl xxxl>
                          通过精细化、自动化客户经营，助力品牌赢在存量
                        </Visible>
                        <Visible xs sm>
                          通过精细化、自动化客户经营，助力品牌赢在存量
                        </Visible>
                      </>
                    }
                    pt={80}
                    bgColor="unset"
                  />
                  <StyledHelp>
                    <div
                      className="recall-button"
                      onClick={() => {
                        window.location.href = retailUrl('/recall');
                      }}></div>
                    <div className="animate-wave-recall">
                      <div className="w1"></div>
                      <div className="w2"></div>
                      <div className="w3"></div>
                      <div className="w4"></div>
                      <div className="w5"></div>
                      <div className="w6"></div>
                    </div>
                    <div
                      className="private-button"
                      onClick={() => {
                        window.location.href = retailUrl('/traffic');
                      }}></div>
                    <div className="animate-wave-private">
                      <div className="w1"></div>
                      <div className="w2"></div>
                      <div className="w3"></div>
                      <div className="w4"></div>
                      <div className="w5"></div>
                      <div className="w6"></div>
                    </div>
                  </StyledHelp>
                </div>
              </Visible>
              <Visible xs sm>
                <BrandChoice>
                  <div className="brand-title">百应AI被更多TOP品牌选择</div>
                  <Carousel interval={2000} controls={false} indicators={true}>
                    {KNOW_CUSTOMER.map(item => (
                      <Carousel.Item>
                        <img style={{ width: calWidthAndHeight(320), height: 'auto' }} src={item} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </BrandChoice>
              </Visible>
              <ByVoiceFooter
                title={
                  <>
                    <Visible md lg xl xxl xxxl>
                      <span>点击获取专属品牌增长解决方案</span>
                    </Visible>
                    <Visible xs sm>
                      <span>
                        点击获取
                        <br />
                        专属品牌增长解决方案
                      </span>
                    </Visible>
                  </>
                }
                desc="百应零售行业专家免费诊断"
                btnText="与我联系"
                background={`url(${FOOTER_BG})`}
                onClick={() => {
                  window.open(retailUrl('/form?formType=1'));
                }}
              />
            </WrapperMall>
          </Visible>
        </>
      )}
    </Layout>
  );
};

export default Mall;
