import { FC } from 'react';
import { Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../../lib/utils';

const INFOS = [
  {
    title: '用户对品牌忠诚度低',
    desc: '你的用户正在被别的品牌抢占',
    background: 'linear-gradient(315deg, #E5E8FF 0%, #D2D7FF 100%)',
  },
  {
    title: '传统手段触达效果差',
    desc: '大批通知发下，一点用户转化',
    background: 'linear-gradient(314deg, #FFE0DC 0%, #FFC8C2 100%)',
  },
  {
    title: '公域拉新成本越来越高',
    desc: '传统平台，流量红利殆尽',
    background: 'linear-gradient(317deg, #FBE6C9 0%, #FFDDAD 100%)',
  },
  {
    title: '营销通知造成用户骚扰',
    desc: '重复触达，损伤品牌心智',
    background: 'linear-gradient(315deg, #E0EFFE 0%, #C4E2FF 100%)',
  },
];

const OldCustomerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: ${calWidthAndHeight(516)};
  font-family: PingFangSC-Medium, PingFang SC;
  .title {
    font-size: ${calWidthAndHeight(40)};
    font-weight: 500;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(68)};
  }
  .card-list {
    width: ${calWidthAndHeight(1200)};
    justify-content: space-between !important;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${calWidthAndHeight(224)};
    height: ${calWidthAndHeight(48)};
    background: #f66600;
    border-radius: ${calWidthAndHeight(4)};
    font-size: ${calWidthAndHeight(16)};
    font-weight: 400;
    color: #ffffff;
    cursor: pointer;
  }
  .first-star {
    width: ${calWidthAndHeight(46)};
    height: ${calWidthAndHeight(46)};
    background: url('https://cdn.byai.com/by-fe-cdn/static/pmp/d10c79be-476b-426d-ae2f-5e93374fab6e.png');
    background-repeat: round;
    position: absolute;
    top: ${calWidthAndHeight(96)};
    left: ${calWidthAndHeight(92)};
  }
  .second-star {
    width: ${calWidthAndHeight(68)};
    height: ${calWidthAndHeight(68)};
    background: url('https://cdn.byai.com/by-fe-cdn/static/pmp/9771f209-a84e-45bd-82f3-4152bc9c3ce9.png');
    background-repeat: round;
    position: absolute;
    top: ${calWidthAndHeight(46)};
    left: ${calWidthAndHeight(162)};
  }
  .three-star {
    width: ${calWidthAndHeight(72)};
    height: ${calWidthAndHeight(72)};
    background: url('https://cdn.byai.com/by-fe-cdn/static/pmp/a19620ba-5af5-4e0e-b2a3-e4680a4f8532.png');
    background-repeat: round;
    position: absolute;
    bottom: ${calWidthAndHeight(40)};
    left: ${calWidthAndHeight(80)};
  }
  .last-star {
    width: ${calWidthAndHeight(200)};
    height: ${calWidthAndHeight(200)};
    background: url('https://cdn.byai.com/by-fe-cdn/static/pmp/315e3376-c5da-45b0-aaf5-cbafdb78d2ee.png');
    background-repeat: round;
    position: absolute;
    top: ${calWidthAndHeight(20)};
    right: ${calWidthAndHeight(56)};
  }

  @media (max-width: 768px) {
    height: ${calWidthAndHeight(624)};
    background: #fef3eb;
    display: block;
    padding: ${calWidthAndHeight(40)} 0;
    text-align: center;

    .title {
      height: ${calWidthAndHeight(56)};
      font-size: ${calWidthAndHeight(20)};
      line-height: ${calWidthAndHeight(28)};
      margin-bottom: ${calWidthAndHeight(32)};
    }

    .card-list {
      width: ${calWidthAndHeight(328)};
      display: block !important;
      margin: 0 auto !important;
    }
  }
`;

const OldCustomerCardWrapper = styled.div`
  width: ${calWidthAndHeight(288)};
  height: ${calWidthAndHeight(116)};
  box-shadow: 0px 4px 14px 0px rgba(246, 102, 0, 0.08);
  border-radius: ${calWidthAndHeight(15)};
  border-image: linear-gradient(356deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)) 1 1;
  padding: ${calWidthAndHeight(28)} 0;
  text-align: center;
  margin-top: ${calWidthAndHeight(48)};
  margin-bottom: ${calWidthAndHeight(56)};
  z-index: 2;

  .card-title {
    height: ${calWidthAndHeight(27)};
    font-size: ${calWidthAndHeight(20)};
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(27)};
  }
  .card-desc {
    height: ${calWidthAndHeight(24)};
    font-size: ${calWidthAndHeight(16)};
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2b2a35;
    line-height: ${calWidthAndHeight(24)};
    margin-top: ${calWidthAndHeight(8)};
  }

  @media (max-width: 768px) {
    width: ${calWidthAndHeight(328)};
    height: ${calWidthAndHeight(102)};
    padding: ${calWidthAndHeight(16)} ${calWidthAndHeight(24)};
    text-align: left;
    margin-top: ${calWidthAndHeight(16)};
    margin-bottom: ${calWidthAndHeight(16)};

    .card-title {
      font-size: ${calWidthAndHeight(16)};
      font-weight: 600;
      line-height: ${calWidthAndHeight(28)};
      margin-bottom: ${calWidthAndHeight(8)};
      font-family: PingFangSC-Semibold, PingFang SC;
    }

    .card-driver {
      width: ${calWidthAndHeight(26)};
      height: ${calWidthAndHeight(2)};
      background: #f66600;
    }

    .card-desc {
      font-size: ${calWidthAndHeight(14)};
      font-weight: 300;
      color: #2b2b2b;
      line-height: ${calWidthAndHeight(24)};
      margin-top: ${calWidthAndHeight(8)};
    }

    .card-icon {
      width: ${calWidthAndHeight(128)};
      height: ${calWidthAndHeight(128)};
      top: -${calWidthAndHeight(20)};
      right: -${calWidthAndHeight(20)};
    }
  }
`;

const OldCustomerCard = ({ title, desc, background }) => {
  return (
    <>
      <OldCustomerCardWrapper style={{ background: background }}>
        <div className="card-title">{title}</div>
        <div className="card-driver"></div>
        <div className="card-desc">{desc}</div>
      </OldCustomerCardWrapper>
    </>
  );
};

const OldCustomer: FC = () => {
  return (
    <OldCustomerWrapper>
      <Visible md lg xl xxl xxxl>
        <div className="title">那些一年前下单的消费者，还是你的用户吗？</div>
        <div className="first-star"></div>
        <div className="second-star"></div>
        <div className="three-star"></div>
        <div className="last-star"></div>
        <Row className="card-list">
          {INFOS.map((item, i) => (
            <OldCustomerCard {...item} key={i} />
          ))}
        </Row>
        <div
          className="btn"
          onClick={() => {
            window.open(retailUrl('/form?formType=1'));
          }}>
          立即开启GMV增长 ››
        </div>
      </Visible>
      <Visible xs sm>
        <div className="title">
          <div>那些一年前下单的消费者，</div>
          <div>还是你的用户吗？</div>
        </div>
        <Row className="card-list">
          {INFOS.map((item, i) => (
            <OldCustomerCard {...item} key={i} />
          ))}
        </Row>
      </Visible>
    </OldCustomerWrapper>
  );
};

export default OldCustomer;
