import { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, isPc } from '../../lib/utils';
import CommonHead from './common/CommonHead';

const LEFT_CIRCLE = 'https://cdn.byai.com/static/intro/img/retail/left_circle.png';

const RIGHT_CIRCLE = 'https://cdn.byai.com/static/intro/img/retail/right_circle.png';

const WrapperCustomVoice = styled.div<{ noBottomIcon: boolean }>`
  background: rgba(249, 251, 252, 1);
  padding-bottom: 80px;
  .content {
    margin: 0 ${calWidthAndHeight(120)};
    height: ${props => (props.noBottomIcon ? calWidthAndHeight(340) : calWidthAndHeight(540))};
    background: url('https://cdn.byai.com/static/intro/img/retail/voice_bg.png') no-repeat;
    background-size: contain;
    background-color: #ffffff;
    text-align: center;

    .carousel,
    .carousel-inner,
    .carousel-item {
      height: 100%;
    }

    .carousel-control-next-icon,
    .carousel-control-prev-icon {
      width: 56px;
      height: 56px;
    }
    .carousel-control-prev-icon {
      background-image: url(${LEFT_CIRCLE});
    }

    .carousel-control-next-icon {
      background-image: url(${RIGHT_CIRCLE});
    }

    .customer-title-icon {
      margin: ${calWidthAndHeight(61)} auto ${calWidthAndHeight(48)};
      width: ${calWidthAndHeight(160)};
      height: ${calWidthAndHeight(80)}
      background-size: cover;
      background-repeat: no-repeat;
    }

    .customer-voice {
      margin: 0 ${calWidthAndHeight(200)};
      font-size: ${calWidthAndHeight(16)};
      color: #2b2b2b;
      line-height: ${calWidthAndHeight(40)};
      margin-bottom: ${calWidthAndHeight(65)};
    }
    .customer-icon {
      width: ${calWidthAndHeight(64)};
      height: ${calWidthAndHeight(64)};
      margin: 0 auto;
    }
    .customer-name {
      margin-top: ${calWidthAndHeight(18)};
      font-weight: 500;
      line-height: ${calWidthAndHeight(28)};
      font-size: ${calWidthAndHeight(20)};
      text-align: 'center';
    }
    .customer-desc {
      font-size: ${calWidthAndHeight(14)};
      line-height: ${calWidthAndHeight(24)};
      color: #2b2b2b;
      margin-bottom: ${calWidthAndHeight(48)};
    }
  }

  @media (max-width: 768px) {
    .content {
      width: ${calWidthAndHeight(300)};
      margin: 0 auto;
      height: ${props => (props.noBottomIcon ? calWidthAndHeight(340) : calWidthAndHeight(420))};
      background: url('https://cdn.byai.com/static/intro/img/retail/voice_bg.png') no-repeat;
      background-size: cover;
      background-color: #ffffff;
      box-shadow: 0px ${calWidthAndHeight(6)} ${calWidthAndHeight(32)} 0px rgba(0, 0, 0, 0.04);
      border-radius: ${calWidthAndHeight(12)};

  

  
      .customer-title-icon {
        margin: ${calWidthAndHeight(61)} auto ${calWidthAndHeight(48)};
        width: ${calWidthAndHeight(160)};
        height: ${calWidthAndHeight(80)}
        background-size: cover;
        background-repeat: no-repeat;
      }
      .customer-voice {
        margin: 0 ${calWidthAndHeight(32)};
        font-size: ${calWidthAndHeight(14)};
        color: #2b2b2b;
        line-height: ${calWidthAndHeight(24)};
        margin-bottom: ${calWidthAndHeight(65)};
      }
      .customer-info {
        display: flex;
        margin: ${calWidthAndHeight(32)} 0 ${calWidthAndHeight(48)};
        padding-left: ${calWidthAndHeight(32)};
      }
      .customer-icon {
        width: ${calWidthAndHeight(48)};
        height: ${calWidthAndHeight(48)};
        margin-right: ${calWidthAndHeight(8)}
      }
      .customer-name {
        margin-top:  ${calWidthAndHeight(4)};
        font-weight: 500;
        line-height: ${calWidthAndHeight(20)};
        font-size: ${calWidthAndHeight(14)};
        text-align: left;
      }
      .customer-desc {
        font-size: ${calWidthAndHeight(12)};
        line-height: ${calWidthAndHeight(24)};
        color: #2b2b2b;
        margin-bottom: 0;
        text-align: left;
      }
    }

    .carousel-indicators {
      bottom: ${calWidthAndHeight(-56)};
    }

    .carousel-indicators li {
      width: ${calWidthAndHeight(48)};
      height: ${calWidthAndHeight(4)};
      background: rgba(43, 43, 43, 0.1);
      border: none;
    }

    .carousel-indicators .active {
      background: #F66600;
    }

    

  }
`;

interface IProps {
  config: any[];
  noBottomIcon?: boolean;
}

const CustomVoice: FC<IProps> = ({ config, noBottomIcon = true }) => {
  return (
    <WrapperCustomVoice noBottomIcon={noBottomIcon}>
      <CommonHead title="客户证言" bgColor={'F9FBFC'} />
      <div className="content">
        <Carousel controls={config.length > 1 && isPc()} indicators={!isPc() && config.length > 1}>
          {config.map(item => (
            <Carousel.Item>
              <Visible md lg xl xxl xxxl>
                {item.title_icon}
                <div className="customer-voice">{item.voice}</div>
                {!noBottomIcon && (
                  <>
                    {item.customer_icon}
                    <div className="customer-name">{item.customer_name}</div>
                    <div className="customer-desc">{item.customer_desc}</div>
                  </>
                )}
              </Visible>
              <Visible xs sm>
                <div className="customer-info">
                  {item.customer_icon}
                  <div style={{ flexGrow: 1 }}>
                    <div className="customer-name">{item.customer_name}</div>
                    <div className="customer-desc">{item.customer_desc}</div>
                  </div>
                </div>
                <div className="customer-voice">{item.voice}</div>
                {item.title_icon}
              </Visible>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </WrapperCustomVoice>
  );
};

export default CustomVoice;
