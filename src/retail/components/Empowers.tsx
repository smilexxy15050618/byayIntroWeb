import { FC, useState } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../lib/utils';
import CommonBottomButton from './common/CommonBottomButton';
import CommonHead from './common/CommonHead';

interface IEmpowers {}

const WrapperEmpowers = styled.div`
  background: #ffffff;
  text-align: center;
  color: #2b2b2b;
  .tabs {
    height: ${calWidthAndHeight(120)};
    display: flex;
    padding: 0 ${calWidthAndHeight(120)};
    font-size: ${calWidthAndHeight(18)};
    // box-shadow: 0px 4px 16px 0px rgba(128, 131, 141, 0.1);

    .tab-item {
      flex-grow: 1;
      cursor: pointer;
      &:hover {
        color: #f66600;
      }
    }

    .tab-item-icon {
      width: ${calWidthAndHeight(64)};
      height: ${calWidthAndHeight(64)};
      margin: 0 auto;
      margin-bottom: ${calWidthAndHeight(8)};
      border: none;
    }
  }

  .tab-content {
    background: #f9fbfc;
    padding-bottom: ${calWidthAndHeight(80)};
    .title {
      margin: 0 0 ${calWidthAndHeight(48)};
      font-size: ${calWidthAndHeight(28)};
      font-weight: 400;
      color: #2b2b2b;
      line-height: ${calWidthAndHeight(40)};
    }

    .show-more {
      height: ${calWidthAndHeight(48)};
      background: rgba(246, 102, 0, 1);
      border-radius: ${calWidthAndHeight(4)};
      border: 1px solid #ffffff;
      font-size: ${calWidthAndHeight(16)};
      font-weight: 400;
      color: #ffffff;
      line-height: ${calWidthAndHeight(48)};
      margin: 0 auto;
    }
  }

  .active {
    color: #f66600;
    border-bottom: solid ${calWidthAndHeight(4)} #f66600;
  }

  @media (max-width: 768px) {
    .tabs {
      height: auto;
      display: flex;
      padding: 0;
      font-size: ${calWidthAndHeight(12)};

      .tab-item {
        flex-grow: 1;
        cursor: pointer;
        padding-bottom: ${calWidthAndHeight(6)};
        &:hover {
          color: #f66600;
        }
      }
    }

    .active {
      border-bottom: solid ${calWidthAndHeight(2)} #f66600;
    }

    .content {
      height: ${calWidthAndHeight(420)};
    }

    .show-more {
      border-radius: ${calWidthAndHeight(4)};
      border: 1px solid #ffffff;
      font-size: ${calWidthAndHeight(16)};
      font-weight: 400;
      color: #ffffff;
      margin: 0 auto;
    }
  }
`;
const CONFIG = [
  {
    name: '私域引流',
    icon_url: 'https://cdn.byai.com/static/intro/img/retail/private_drainage_icon.png',
    content_url: [
      'https://cdn.byai.com/static/intro/img/retail/private_drainage%402x.png',
      'https://cdn.byai.com/static/intro/img/retail/mobile/private_drainage.png',
    ],
    url: retailUrl('/traffic'),
  },
  {
    name: '活动营销',
    icon_url: 'https://cdn.byai.com/static/intro/img/retail/activity_market_icon.png',
    content_url: [
      'https://cdn.byai.com/static/intro/img/retail/activity_market%402x.png',
      'https://cdn.byai.com/static/intro/img/retail/mobile/activity_market.png',
    ],
    url: retailUrl('/promote'),
  },
  {
    name: '私域运营',
    icon_url: 'https://cdn.byai.com/static/intro/img/retail/private_operate_icon.png',
    content_url: [
      'https://cdn.byai.com/static/intro/img/retail/private_operate%402x.png',
      'https://cdn.byai.com/static/intro/img/retail/mobile/private_operate.png',
    ],
    url: retailUrl('/operate'),
  },
  {
    name: '客户服务',
    icon_url: 'https://cdn.byai.com/static/intro/img/retail/customer_service_icon.png',
    content_url: [
      'https://cdn.byai.com/static/intro/img/retail/customer_service%402x.png',
      'https://cdn.byai.com/static/intro/img/retail/mobile/customer_service.png',
    ],
    url: retailUrl('/service'),
  },
];

const Empowers: FC<IEmpowers> = props => {
  const [activeKey, setActiveKey] = useState<number>(0);
  return (
    <WrapperEmpowers>
      <CommonHead title={'以数智化助力企业全域增长'} subTitle={'AI外呼高效触达  SCRM全链路运营赋能'} />
      <div className="tabs">
        {CONFIG.map((item, index) => (
          <div className={activeKey === index ? 'tab-item active' : 'tab-item'} onClick={() => setActiveKey(index)}>
            <Visible md lg xl xxl xxxl>
              <img className="tab-item-icon" src={item.icon_url} />
            </Visible>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      <div className="tab-content">
        <Visible md lg xl xxl xxxl>
          <img className="content" src={CONFIG[activeKey].content_url[0]} />
        </Visible>
        <Visible xs sm>
          <img className="content" src={CONFIG[activeKey].content_url[1]} />
        </Visible>
        <CommonBottomButton
          name="查看更多"
          pl="60px"
          pr="60px"
          bg="#F9FBFC"
          style={{ padding: '0 0 80px' }}
          onClick={() => {
            window.location.href = CONFIG[activeKey].url;
          }}
        />
      </div>
    </WrapperEmpowers>
  );
};

export default Empowers;
