import { FC, useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../lib/utils';
import { MP3 } from '../constants/index';
import CommonHead from './common/CommonHead';

const PLAY = [
  'https://cdn.byai.com/static/intro/img/retail/audio_open.png',
  'https://cdn.byai.com/static/intro/img/retail/mobile/audio_open.png',
];

const PAUSE = [
  'https://cdn.byai.com/static/intro/img/retail/audio_pause.png',
  'https://cdn.byai.com/static/intro/img/retail/mobile/audio_pause.png',
];

const CUSTOMER_SERVICE_BG = 'https://cdn.byai.com/static/intro/img/retail/customer_service_bg.png';

const WrapperCustomService = styled.div`
  height: ${calWidthAndHeight(888)}
  background: url(${CUSTOMER_SERVICE_BG}) no-repeat;
  background-size: cover;

  .tabs {
    height: ${calWidthAndHeight(88)};
    display: flex;
    text-align: center;
    padding: 0 ${calWidthAndHeight(240)};
    font-size: ${calWidthAndHeight(20)};
    line-height: ${calWidthAndHeight(88)};
    margin-bottom: ${calWidthAndHeight(32)};

    .tab-item {
      flex-grow: 1;
      border-radius: ${calWidthAndHeight(4)};
    }

    .icon {
      height: ${calWidthAndHeight(40)};
      width: ${calWidthAndHeight(40)};
      margin-right: ${calWidthAndHeight(12)};
    }

    .active {
      background: rgba(246, 102, 0, 0.05);
    }
  }

  @media (max-width: 768px) {
    height: ${calWidthAndHeight(783)}
    background: #ffffff;

    .tabs {
      height: ${calWidthAndHeight(88)};
      display: flex;
      justify-content: center;
      text-align: center;
      padding: 0;
      font-size: ${calWidthAndHeight(12)};
      line-height: ${calWidthAndHeight(20)};

  
      .tab-item {
        flex-grow: 0;
        width: ${calWidthAndHeight(72)}
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;

      }
  
      .icon {
        height: ${calWidthAndHeight(40)};
        width: ${calWidthAndHeight(40)};
        margin-right: 0;
        margin-bottom: 0;
      }
  
      .active {
        background: rgba(246, 102, 0, 0.05);
      }
    }

  }


`;

const WrapperCarouselCard = styled.div<{ bg: string; color: string }>`
  height: ${calWidthAndHeight(440)};
  width: ${calWidthAndHeight(1240)};
  margin: 0 auto;
  background: url(${props => props.bg}) no-repeat;
  background-size: cover;
  padding: ${calWidthAndHeight(32)} ${calWidthAndHeight(48)} ${calWidthAndHeight(48)} ${calWidthAndHeight(60)};
  line-height: ${calWidthAndHeight(32)};
  color: #ffffff;
  font-size: ${calWidthAndHeight(18)};
  position: relative;
  &:hover {
  }
  .card-title {
    width: ${calWidthAndHeight(110)};
    text-align: center;
    background: #2b2b2b;
    border-radius: 2px;
    font-weight: 600;
    margin-bottom: ${calWidthAndHeight(8)};
  }
  .card-content {
    position: relative;
    margin-bottom: ${calWidthAndHeight(4)};
    padding-left: ${calWidthAndHeight(28)};
    .card-content-label {
      font-weight: 500;
      margin-right: ${calWidthAndHeight(12)};
    }
  }
  .card-result {
    width: ${calWidthAndHeight(564)};
    height: ${calWidthAndHeight(40)};
    line-height: ${calWidthAndHeight(40)};
    margin-top: ${calWidthAndHeight(16)};
    display: flex;
    .card-result-label {
      border-radius: ${calWidthAndHeight(4)};
      padding: 0 ${calWidthAndHeight(12)};
    }
    .card-result-value {
      flex-grow: 1;
      padding-left: ${calWidthAndHeight(12)};
      background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 26%, #ffffff 100%);
    }
    .card-result-weight {
      font-size: ${calWidthAndHeight(28)};
      font-weight: 600;
    }
  }

  .card-audio-play {
    height: ${calWidthAndHeight(104)};
    width: ${calWidthAndHeight(104)};
    position: absolute;
    background: url(${PLAY[0]}) no-repeat;
    background-size: cover;
    top: ${calWidthAndHeight(120)};
    right: ${calWidthAndHeight(120)};
  }

  .card-audio-pause {
    height: ${calWidthAndHeight(104)};
    width: ${calWidthAndHeight(104)};
    position: absolute;
    background: url(${PAUSE[0]}) no-repeat;
    background-size: cover;
    top: ${calWidthAndHeight(120)};
    right: ${calWidthAndHeight(120)};
  }

  .card-btn {
    position: absolute;
    width: ${calWidthAndHeight(244)};
    height: ${calWidthAndHeight(60)};
    line-height: ${calWidthAndHeight(60)};
    font-size: ${calWidthAndHeight(20)};
    text-align: center;
    color: #ffffff;
    background: #2b2b2b;
    border-radius: ${calWidthAndHeight(5)};
    cursor: pointer;
    bottom: ${calWidthAndHeight(48)};
    right: ${calWidthAndHeight(60)};
    &:hover {
      color: ${props => props.color};
      background: #ffffff;
    }
  }

  @media (max-width: 768px) {
    height: ${calWidthAndHeight(467)};
    width: ${calWidthAndHeight(300)};

    .card-btn {
      width: ${calWidthAndHeight(196)};
      height: ${calWidthAndHeight(48)};
      line-height: ${calWidthAndHeight(48)};
      font-size: ${calWidthAndHeight(16)};
      border-radius: ${calWidthAndHeight(4)};
      bottom: ${calWidthAndHeight(24)};
      right: ${calWidthAndHeight(52)};
    }
    .card-audio-play {
      height: ${calWidthAndHeight(48)};
      width: ${calWidthAndHeight(48)};
      background: url(${PLAY[1]}) no-repeat;
      background-size: cover;
      top: ${calWidthAndHeight(16)};
      right: ${calWidthAndHeight(16)};
    }

    .card-audio-pause {
      height: ${calWidthAndHeight(48)};
      width: ${calWidthAndHeight(48)};
      background: url(${PAUSE[1]}) no-repeat;
      background-size: cover;
      top: ${calWidthAndHeight(16)};
      right: ${calWidthAndHeight(16)};
    }
  }
`;

const CONFIG = [
  {
    name: '食品行业',
    icon: 'https://cdn.byai.com/static/intro/img/retail/food.png',
    icon_hover: 'https://cdn.byai.com/static/intro/img/retail/food_hover.png',
    bg: [
      'https://cdn.byai.com/static/intro/img/retail/card_bg_new_1.png',
      'https://cdn.byai.com/static/intro/img/retail/mobile/card_bg_new_1.png',
    ],
    color: ['rgba(246, 102, 0, 1)', 'rgba(246, 102, 0, 0.05)'],
    content: {
      icon: '',
      list: [
        {
          label: '客户分析:',
          value: '低客单价、客户分层明确',
        },
        {
          label: '目标需求:',
          value: '短时间实现私域规模化加粉，同时提升GMV转化',
        },
        {
          label: '核心方法:',
          value: '对不同用户进行分层运营，针对性的进行策略及利益点匹配',
        },
      ],
      result: (
        <div className="card-result">
          <span className="card-result-label" style={{ backgroundColor: 'rgba(255, 142, 62, 1)' }}>
            最终效果
          </span>
          <span
            className="card-result-value"
            style={{
              color: 'rgba(246, 102, 0, 1)',
            }}>
            接通率超<span className="card-result-weight">70%</span> ROI：
            <span className="card-result-weight">15-20</span>
          </span>
        </div>
      ),
    },
    mp3: MP3.FOOD_MP3,
    toCustomerCase: () => {
      window.location.href = retailUrl('/solutions/food');
    },
  },
  {
    name: '美妆行业',
    icon: 'https://cdn.byai.com/static/intro/img/retail/cosmetics.png',
    icon_hover: 'https://cdn.byai.com/static/intro/img/retail/cosmetics_hover.png',
    bg: [
      'https://cdn.byai.com/static/intro/img/retail/card_bg_new_2.png',
      'https://cdn.byai.com/static/intro/img/retail/mobile/card_bg_new_2.png',
    ],
    color: ['rgba(144, 48, 209, 1)', 'rgba(144, 48, 209, 0.05)'],
    content: {
      icon: '',
      list: [
        {
          label: '客户分析:',
          value: '中高客单、高复购、千万级用户量',
        },
        {
          label: '目标需求:',
          value: '关注及时ROI数据体现，筛选适合AI触达客户群体',
        },
        {
          label: '核心方法:',
          value: '打造「公众号+企业微信」双私域池加粉转化',
        },
      ],
      result: (
        <div className="card-result">
          <span className="card-result-label" style={{ backgroundColor: 'rgba(183, 0, 255, 1)' }}>
            最终效果
          </span>
          <span className="card-result-value" style={{ color: 'rgba(183, 0, 255, 1)' }}>
            触达用户<span className="card-result-weight">千万级</span>&nbsp;&nbsp; 企微加粉转化率：
            <span className="card-result-weight">16-25%</span>
          </span>
        </div>
      ),
    },
    mp3: MP3.BEAUTY_MP3,
    toCustomerCase: () => {
      window.location.href = retailUrl('/solutions/bp');
    },
  },
  {
    name: '鞋服行业',
    icon: 'https://cdn.byai.com/static/intro/img/retail/clothes.png',
    icon_hover: 'https://cdn.byai.com/static/intro/img/retail/clothes_hover.png',
    bg: [
      'https://cdn.byai.com/static/intro/img/retail/card_bg_new_3.png',
      'https://cdn.byai.com/static/intro/img/retail/mobile/card_bg_new_3.png',
    ],
    color: ['rgba(43, 88, 249, 1)', 'rgba(43, 88, 249, 0.05)'],
    content: {
      icon: '',
      list: [
        {
          label: '客户分析:',
          value: '连锁服饰品牌，线上线下联动',
        },
        {
          label: '目标需求:',
          value: '会员用户复购，活动引流到店及日常私域加粉',
        },
        {
          label: '核心方法:',
          value: '通过利益点、情感关怀、邀约入会等多场景触达',
        },
      ],
      result: (
        <div className="card-result">
          <span className="card-result-label" style={{ backgroundColor: 'rgba(43, 88, 249, 1)' }}>
            最终效果
          </span>
          <span className="card-result-value" style={{ color: 'rgba(43, 88, 249, 1)' }}>
            日到店增量<span className="card-result-weight">40%+</span>
          </span>
        </div>
      ),
    },
    mp3: MP3.CLOTHES_MP3,
    toCustomerCase: () => {
      window.location.href = retailUrl('/solutions/clothes');
    },
  },
  {
    name: '通用行业',
    icon: 'https://cdn.byai.com/static/intro/img/retail/common.png',
    icon_hover: 'https://cdn.byai.com/static/intro/img/retail/common_hover.png',
    bg: [
      'https://cdn.byai.com/static/intro/img/retail/card_bg_new_4.png',
      'https://cdn.byai.com/static/intro/img/retail/mobile/card_bg_new_4.png',
    ],
    color: ['rgba(0, 200, 189, 1)', 'rgba(0, 200, 189, 0.05)'],
    content: {
      icon: '',
      list: [
        {
          label: '客户分析:',
          value: '重视客户服务，推广新产品',
        },
        {
          label: '目标需求:',
          value: '提升私域用户增长，关注加粉转化率及单客成本',
        },
        {
          label: '核心方法:',
          value: '利益点+关怀结合的模式，提供增值服务',
        },
      ],
      result: (
        <div className="card-result">
          <span className="card-result-label" style={{ backgroundColor: 'rgba(0, 200, 189, 1)' }}>
            最终效果
          </span>
          <span className="card-result-value" style={{ color: 'rgba(0, 169, 159, 1)' }}>
            私域月均新增用户涨幅<span className="card-result-weight">300%</span> &nbsp;&nbsp;单客成本降低
            <span className="card-result-weight">80%</span>
          </span>
        </div>
      ),
    },
    mp3: MP3.GENERAL_MP3,
    toCustomerCase: () => {
      window.location.href = retailUrl('/solutions');
    },
  },
];

const CustomService: FC = () => {
  const [activeKey, setActiveKey] = useState<number>(0);
  const [stopAudio, setStopAudio] = useState<boolean>(false);
  const [audioIndex, setAudioIndex] = useState<number>(0);
  const audioRef = useRef(null);

  const playAudio = index => {
    if (audioRef.current) {
      if (!stopAudio || index !== audioIndex) {
        audioRef.current.src = CONFIG[index].mp3;
        audioRef.current.play();
        setAudioIndex(index);
        setStopAudio(true);
      } else {
        setStopAudio(false);
        audioRef.current.pause();
      }
    }
  };
  return (
    <WrapperCustomService>
      <CommonHead title="全周期解决方案专家定制服务" subTitle={'AI精细化运营 赋能零售行业'} bgColor="transparent" />
      <div className="tabs">
        {CONFIG.map((item, index) => (
          <div
            className={activeKey === index ? 'tab-item active' : 'tab-item'}
            onClick={() => {
              setActiveKey(index);
            }}
            style={{
              color: activeKey === index ? CONFIG[index].color[0] : '#2B2B2B',
              backgroundColor: activeKey === index ? CONFIG[index].color[1] : '#ffffff',
            }}>
            <img className="icon" src={activeKey === index ? item.icon_hover : item.icon} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <Carousel
        activeIndex={activeKey}
        interval={null}
        controls={false}
        indicators={false}
        onSelect={index => setActiveKey(index)}>
        {CONFIG.map((item, index) => (
          <Carousel.Item>
            <Visible md lg xl xxl xxxl>
              <WrapperCarouselCard bg={item.bg[0]} color={item.color[0]}>
                <div
                  className={!stopAudio || index !== audioIndex ? 'card-audio-play' : 'card-audio-pause'}
                  onClick={() => {
                    playAudio(index);
                  }}></div>
                <div className="card-btn" onClick={() => item.toCustomerCase()}>
                  {item.name}解决方案&nbsp;&gt;&gt;
                </div>
              </WrapperCarouselCard>
            </Visible>
            <Visible xs sm>
              <WrapperCarouselCard bg={item.bg[1]} color={item.color[0]}>
                <div
                  className={!stopAudio || index !== audioIndex ? 'card-audio-play' : 'card-audio-pause'}
                  onClick={() => {
                    playAudio(index);
                  }}></div>
                <div className="card-btn" onClick={() => item.toCustomerCase()}>
                  {item.name}解决方案&nbsp;&gt;&gt;
                </div>
              </WrapperCarouselCard>
            </Visible>
          </Carousel.Item>
        ))}
      </Carousel>
      <audio ref={audioRef} />
    </WrapperCustomService>
  );
};

export default CustomService;
