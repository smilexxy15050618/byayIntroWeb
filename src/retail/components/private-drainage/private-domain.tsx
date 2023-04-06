import { FC } from 'react';
import { Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight } from '../../../lib/utils';

const INFOS = [
  {
    title: '获客成本越来越高',
    desc: '获客方式受平台限制',
    background: 'linear-gradient(315deg, #E5E8FF 0%, #D2D7FF 100%)',
    icon: 'https://cdn.byai.com/by-fe-cdn/static/pmp/5e1af75a-e236-4ee6-ae18-e10982422e01.png',
  },
  {
    title: '用户流失后触达成本高',
    desc: '提升用户价值难',
    background: 'linear-gradient(314deg, #FFE0DC 0%, #FFC8C2 100%)',
    icon: 'https://cdn.byai.com/by-fe-cdn/static/pmp/56bf5cc1-6277-4d8a-aa7e-bfb85aaeefa3.png',
  },
  {
    title: '零售品牌忠诚度低',
    desc: '亟需提升用户粘性',
    background: 'linear-gradient(317deg, #FBE6C9 0%, #FFDDAD 100%)',
    icon: 'https://cdn.byai.com/by-fe-cdn/static/pmp/0b45aea2-efe6-4ed6-a724-6e1e91addd01.png',
  },
];

const PrivateDomainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: ${calWidthAndHeight(440)};
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
    width: ${calWidthAndHeight(224)};
    height: ${calWidthAndHeight(48)};
    background: #f66600;
    border-radius: ${calWidthAndHeight(4)};
    font-size: ${calWidthAndHeight(16)};
    font-weight: 400;
    color: #ffffff;
    padding: ${calWidthAndHeight(12)} 0;
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
    bottom: ${calWidthAndHeight(-36)};
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
    display: block;
    height: ${calWidthAndHeight(478)};
    background: #fef3eb;
    text-align: center;
    padding: ${calWidthAndHeight(40)} 0;

    .title {
      font-size: ${calWidthAndHeight(20)};
      line-height: ${calWidthAndHeight(28)};
    }

    .card-list {
      width: ${calWidthAndHeight(328)};
      display: block !important;
      margin: 0 auto !important;
    }
  }
`;

const PrivateDomainCardWrapper = styled.div`
  width: ${calWidthAndHeight(384)};
  box-shadow: 0px 4px 14px 0px rgba(246, 102, 0, 0.08);
  border-radius: ${calWidthAndHeight(15)};
  border-image: linear-gradient(356deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)) 1 1;
  padding: ${calWidthAndHeight(34)} 0;
  text-align: center;
  margin-top: ${calWidthAndHeight(48)};
  z-index: 2;
  position: relative;
  overflow: hidden;
  .card-title {
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
  .card-icon {
    width: ${calWidthAndHeight(160)};
    height: ${calWidthAndHeight(160)};
    position: absolute;
    top: -${calWidthAndHeight(25)};
    right: -${calWidthAndHeight(25)};
    background-repeat: round;
  }

  @media (max-width: 768px) {
    width: ${calWidthAndHeight(328)};
    padding: ${calWidthAndHeight(16)} ${calWidthAndHeight(24)};
    text-align: left;
    margin-top: ${calWidthAndHeight(16)};

    .card-title {
      font-size: ${calWidthAndHeight(16)};
      font-weight: 600;
      line-height: ${calWidthAndHeight(28)};
      margin-bottom: ${calWidthAndHeight(8)};
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

const PrivateDomainCard = ({ title, desc, background, icon }) => {
  return (
    <>
      <PrivateDomainCardWrapper style={{ background: background }}>
        <div className="card-title">{title}</div>
        <div className="card-driver"></div>
        <div className="card-desc">{desc}</div>
        <div className="card-icon" style={{ backgroundImage: `url(${icon})` }}></div>
      </PrivateDomainCardWrapper>
    </>
  );
};

const PrivateDomain: FC = () => {
  return (
    <PrivateDomainWrapper>
      <Visible md lg xl xxl xxxl>
        <div className="title">为什么我们说所有品牌都需要私域？</div>
        <div className="first-star"></div>
        <div className="second-star"></div>
        <div className="three-star"></div>
        <div className="last-star"></div>
        <Row className="card-list">
          {INFOS.map((item, i) => (
            <PrivateDomainCard {...item} key={i} />
          ))}
        </Row>
        <div className="first-icon"></div>
        <div className="second-icon"></div>
        <div className="last-icon"></div>
      </Visible>
      <Visible xs sm>
        <div className="title">为什么我们说所有品牌都需要私域？</div>
        <Row className="card-list">
          {INFOS.map((item, i) => (
            <PrivateDomainCard {...item} key={i} />
          ))}
        </Row>
        <div className="first-icon"></div>
        <div className="second-icon"></div>
        <div className="last-icon"></div>
      </Visible>
    </PrivateDomainWrapper>
  );
};

export default PrivateDomain;
