import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div`
  .vision-wrap {
    padding: 80px 0 120px 0;
    ${media.phone`
            padding-bottom: 60px;
            padding-top: 0;
        `};
    .vision-title {
      text-align: center;
      font-size: 36px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      ${media.phone`
                font-weight:400;
            `};
    }
    .vision-second-title {
      font-size: 16px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin-top: 13px;
      text-align: center;
      margin-bottom: 40px;
    }
    .title-slogan {
      height: 226px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      background-image: url(https://cdn.byai.com/node_front/1574941511759/%E8%83%8C%E6%99%AF%402x.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      letter-spacing: 10px;
      ${media.phone`
                font-size:17px;
                font-weight:300;
                letter-spacing:6px;
                height: 113px;
            `};
      div {
        ${media.phone`
                margin-top: 5px;
            `};
      }
    }
    .value-title {
      margin-top: 100px;
      text-align: center;
      font-weight: 500;
      font-size: 36px;
      color: rgba(13, 25, 36, 1);
      ${media.phone`
                margin-top: 60px;
                font-weight:400;
            `};
    }
    .value-second-title {
      font-size: 16px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: center;
      margin-top: 13px;
    }
    .value-items-wrap {
      width: 972px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;
      ${media.phone`
                width: 250px;
                flex-direction: column;
                align-items: center;
                padding-top: 25px;
            `};
      .value-item {
        width: 376px;
        margin-right: 220px;
        &:nth-child(2n) {
          margin-right: 0;
        }
        ${media.phone`
                    width: 250px;
                    margin-right: 0;
                `};
        .value-item-title {
          font-weight: 500;
          color: rgba(13, 25, 36, 1);
          font-size: 22px;
          text-align: center;
          margin-top: 60px;
          ${media.phone`
                        font-size: 17px;
                        margin-top: 20px;
                    `};
        }
        .value-item-desc {
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          font-size: 16px;
          margin-top: 20px;
          text-align: center;
          ${media.phone`
                        font-size: 12px;
                        margin-top: 12px;
                        letter-spacing:1px;
                    `};
        }
      }
    }
  }
`;

const value = [
  {
    title: '客户第一',
    desc: 'CUSTOMERS FIRST',
  },
  {
    title: '突破边界，不断成长',
    desc: 'KEEP LEARNING AND BREAKING',
  },
  {
    title: '创新求变，追求极致',
    desc: 'BEST OR NOTHING',
  },
  {
    title: '诚实坦荡，善意驱动',
    desc: 'TREAT THE WORLD WITH KINDESS AND HONESTY',
  },
];

const Vision = () => (
  <Wrap>
    <div className="vision-wrap">
      <div className="vision-title">愿景</div>
      <div className="vision-second-title">VISION</div>
      <div className="title-slogan">
        <div>以AI赋能经济发展和社会生活</div>
      </div>
      <div className="value-title">价值观</div>
      <div className="value-second-title">CORPORATE VALUES</div>
      <div className="value-items-wrap">
        {value.map(item => (
          <div className="value-item">
            <div className="value-item-title">{item.title}</div>
            <div className="value-item-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </Wrap>
);

export default Vision;
