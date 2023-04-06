import { FC } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../../lib/utils';

const ModelWrapper = styled.div`
  height: ${calWidthAndHeight(536)};
  font-family: PingFangSC-Medium, PingFang SC;
  padding: 0 ${calWidthAndHeight(120)};
  line-height: ${calWidthAndHeight(68)};
  .title {
    font-size: ${calWidthAndHeight(40)};
    font-weight: 500;
    color: #ffffff;
    line-height: ${calWidthAndHeight(68)};
    text-align: center;
    text-shadow: 0px 3px 0px #f66600;
    padding-top: ${calWidthAndHeight(16)};
  }
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${calWidthAndHeight(1192)};
    height: ${calWidthAndHeight(596)};
    background: #fffaf6;
    box-shadow: 0px 14px 55px 9px rgba(246, 102, 0, 0.08);
    border-image: linear-gradient(34deg, rgba(246, 102, 0, 1), rgba(255, 163, 97, 1)) 4 4;
    border-radius: ${calWidthAndHeight(32)};
    text-align: center;
    .main-content {
      width: ${calWidthAndHeight(1044)};
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-wrapper {
      position: relative;
      overflow: hidden;
      width: ${calWidthAndHeight(504)};
      height: ${calWidthAndHeight(408)};
      background: #ffffff;
      box-shadow: 0px 14px 57px 10px rgba(246, 102, 0, 0.08);
      border-radius: ${calWidthAndHeight(24)};
      transition: 0.3s ease-in-out all;
      .brand-img {
        height: ${calWidthAndHeight(240)};
        background-repeat: round;
      }
      .text-section {
        width: ${calWidthAndHeight(420)};
        margin: 0 ${calWidthAndHeight(42)};
        text-align: left;
        .section-title {
          font-size: ${calWidthAndHeight(20)};
          font-weight: 500;
          color: #2b2b2b;
          line-height: ${calWidthAndHeight(32)};
          margin: ${calWidthAndHeight(116)} 0 ${calWidthAndHeight(24)};
        }
        .section-desc {
          height: ${calWidthAndHeight(160)};
          font-size: ${calWidthAndHeight(18)};
          font-weight: 400;
          color: #2b2b2b;
          line-height: ${calWidthAndHeight(40)};
          margin-bottom: ${calWidthAndHeight(56)};
          white-space: break-spaces;
        }
      }
      .brand-btn {
        width: ${calWidthAndHeight(504)};
        height: ${calWidthAndHeight(68)};
        background: rgba(246, 102, 0, 0.15);
        border-radius: 0px 0px ${calWidthAndHeight(24)} ${calWidthAndHeight(24)};
        font-size: ${calWidthAndHeight(18)};
        text-align: center;
        font-weight: 400;
        line-height: ${calWidthAndHeight(24)};
        padding: ${calWidthAndHeight(22)} ${calWidthAndHeight(114)};
        a {
          color: #f66600;
        }
      }
      &: hover {
        .brand {
          transform: translateY(${calWidthAndHeight(-408)});
        }
      }
    }
    .brand-title {
      font-size: ${calWidthAndHeight(24)};
      font-weight: 500;
      color: #2b2b2b;
      line-height: ${calWidthAndHeight(40)};
      position: relative;
      margin-top: ${calWidthAndHeight(40)};
    }
    .brand-desc {
      font-size: ${calWidthAndHeight(22)};
      color: #2b2b2b;
      line-height: ${calWidthAndHeight(40)};
      position: relative;
    }
  }

  @media (max-width: 768px) {
    width: ${calWidthAndHeight(334)};
    height: ${calWidthAndHeight(480)};
    padding: 0;
    margin: 0 auto;
    background: #f66600;
    box-shadow: 0px 3px 5px 6px rgba(246, 102, 0, 0.05);
    border-radius: 21px;

    .title {
      font-size: ${calWidthAndHeight(20)};
      line-height: ${calWidthAndHeight(28)};
      text-shadow: 0px 1px 0px #f66600;
      padding-bottom: ${calWidthAndHeight(2)};
    }

    .content-wrapper {
      background: #fffaf6;
      box-shadow: 0px 3px 5px 6px rgba(246, 102, 0, 0.05);
      border-radius: 21px;
      margin: ${calWidthAndHeight(2)};

      .content {
        width: ${calWidthAndHeight(334)};
        height: ${calWidthAndHeight(402)};
        flex-direction: column;
        justify-content: space-evenly;

        .brand-wrapper {
          width: ${calWidthAndHeight(280)};
          height: ${calWidthAndHeight(160)};
          background: #ffffff;
          box-shadow: 0px -1px 25px 5px rgba(246, 102, 0, 0.08);
          border-radius: ${calWidthAndHeight(13)};
          overflow: auto;

          .brand-img {
            height: ${calWidthAndHeight(88)};
          }

          .brand-title {
            font-size: ${calWidthAndHeight(14)};
            line-height: ${calWidthAndHeight(20)};
            margin-top: ${calWidthAndHeight(16)};
          }

          .brand-desc {
            font-size: ${calWidthAndHeight(12)};
            line-height: ${calWidthAndHeight(20)};
          }

          &: hover {
            .brand {
              transform: none;
            }
          }

          .section-desc {
            width: ${calWidthAndHeight(250)};
            height: ${calWidthAndHeight(96)};
            font-size: ${calWidthAndHeight(12)};
            color: #2b2b2b;
            line-height: ${calWidthAndHeight(24)};
            margin: 0 auto;
            margin-top: ${calWidthAndHeight(24)};
            white-space: normal;
            text-align: left;
          }
        }
      }
    }
  }
`;

const FloatCard = styled.div`
  position: relative;
  top: -${calWidthAndHeight(150)};
  width: ${calWidthAndHeight(1200)};
  height: ${calWidthAndHeight(684)};
  background: linear-gradient(37deg, #f66600 0%, #ffa361 100%);
  box-shadow: 0px 26px 55px 9px rgba(246, 102, 0, 0.08);
  border-radius: ${calWidthAndHeight(32)};
`;

const brandList = [
  {
    img: 'https://cdn.byai.com/by-fe-cdn/static/pmp/265b8a1f-7953-4bcf-9285-1b26ad3ab631.png',
    title: '以线下门店为主的品牌',
    desc: '私域作为线下服务的延伸',
    sectionTitle: '线下门店为主的品牌',
    sectionDesc:
      '通过AI语音将线下门店会员引流到企微私域池中，增加与用户的高频互动和链接。同时借助微信小程序和线下门店的会员绑定，AI营销触达能够实现引流到店和私域加粉的双重效果。',
    buttonContent: '咨询AI增长顾问 >',
  },
  {
    img: 'https://cdn.byai.com/by-fe-cdn/static/pmp/883d4584-9caf-440b-a63e-6657749390da.png',
    title: '以线上电商为主的品牌',
    desc: '筛选出高价值客户私域服务',
    sectionTitle: '线上电商为主的品牌',
    sectionDesc:
      '这类品牌应该把私域和电商团队放在一起，利用线上的内容能力，通过提供不同的SKU，实现公私域的差异化服务。将私域作为服务场域，为高价值用户提供更加精细化的服务。',
    buttonContent: '咨询AI增长顾问 >',
  },
];

const BrandCard = item => {
  return (
    <>
      <Visible md lg xl xxl xxxl>
        <div className="brand-wrapper">
          <div className="brand">
            <div className="brand-img" style={{ backgroundImage: `url(${item.img})` }} />
            <div className="brand-title">{item.title}</div>
            <div className="brand-desc">{item.desc}</div>
            <div className="text-section">
              <div className="section-title">{item.sectionTitle}</div>
              <div className="section-desc">{item.sectionDesc}</div>
            </div>
            <div className="brand-btn" onClick={e => e.stopPropagation()}>
              <a href={retailUrl('/form?formType=1')}>{item.buttonContent}</a>
            </div>
          </div>
        </div>
      </Visible>
      <Visible xs sm>
        <div className="brand-wrapper">
          <div className="brand">
            <div className="brand-img" style={{ backgroundImage: `url(${item.img})` }} />
            <div className="brand-title">{item.title}</div>
            <div className="brand-desc">{item.desc}</div>
            <div className="section-desc">{item.sectionDesc}</div>
          </div>
        </div>
      </Visible>
    </>
  );
};
const Model: FC = () => {
  return (
    <ModelWrapper>
      <Visible md lg xl xxl xxxl>
        <FloatCard>
          <div className="title">那些被实践过的较为理想的私域组织模式</div>
          <div className="content-wrapper">
            <div className="content">
              <div className="main-content">
                {brandList.map((item, i) => {
                  return <BrandCard {...item} key={i} />;
                })}
              </div>
            </div>
          </div>
        </FloatCard>
      </Visible>
      <Visible xs sm>
        <div className="title">
          <div>那些被实践过的</div>
          <div>较为理想的私域组织模式</div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            {brandList.map((item, i) => {
              return <BrandCard {...item} key={i} />;
            })}
          </div>
        </div>
      </Visible>
    </ModelWrapper>
  );
};

export default Model;
