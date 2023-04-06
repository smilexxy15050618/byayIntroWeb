import * as React from 'react';
import { Layout } from '../src/components/Layout';
import { DescWrapper } from '../src/components/DescWrapper';
import { SolutionCard } from '../src/components/SolutionCard';
import { Col, Hidden } from 'react-grid-system';
import styled from 'styled-components';
import VoiceFooter from '../src/components/order/footer';
import { FormType } from '../src/components/TryForm';
import BannerWhite from '../src/components/common/BannerWhite';
import { BigTitle, BlueBtn, Desc, TextArea, BASE_URL } from '../src/components/common/BannerTextElements';
import { FOOTER_BG } from '../src/constants/img-urls';
import ByVoiceFooter from '../src/components/common/ByVoiceFooter';
const BANNER_IMG = `${BASE_URL}solve-img.png`;
const BANNER_XS = `${BASE_URL}solve-xs.png`;
const BANNER_BG = `${BASE_URL}solve-bg.png`;

const BACKGOURND_XS = 'https://cdn.byai.com/static/official-website/home/jiejuefangan.png';
const SOLUTION_BG = 'https://cdn.byai.com/node_front/1572872453833/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.png';
const SOLUTION_1 = '//cdn.byai.com/static/official-website/solution/tu1.png';
const SOLUTION_2 = '//cdn.byai.com/static/official-website/solution/tu2.png';
const SOLUTION_3 = '//cdn.byai.com/static/official-website/solution/tu3.png';
const SOLUTION_4 = '//cdn.byai.com/static/official-website/solution/tu4.png';
const SOLUTION_5 = '//cdn.byai.com/static/official-website/solution/tu5.png';
const SOLUTION_6 = '//cdn.byai.com/static/official-website/solution/tu6.png';
const SOLUTION_7 = '//cdn.byai.com/static/official-website/solution/tu7.png';
const SOLUTION_8 = '//cdn.byai.com/static/official-website/solution/tu8.png';

const SOULUTIONS_LIST = [
  { image: SOLUTION_1, title: '金融', desc: '金融贷款、银行催收、投资理财、开户邀请' },
  {
    image: SOLUTION_2,
    title: '房地产',
    desc: '商铺租赁、楼盘推荐、房产中介、房屋装修',
  },
  {
    image: SOLUTION_3,
    title: '互联网',
    desc: '网络推广、媒体广告、客户线索、用户调研',
  },
  { image: SOLUTION_4, title: '保险', desc: '保险推荐、客服接待、客户回访、续保提醒' },
  { image: SOLUTION_5, title: '电商', desc: '灵活外呼、客户分级、意向线索转化、语音质检' },
  { image: SOLUTION_6, title: '教育', desc: '课程网销、客服接待、试听邀约、课后回访' },
  {
    image: SOLUTION_7,
    title: '汽车',
    desc: '试驾邀约、活动推荐、意向线索转化、车主服务',
  },
  {
    image: SOLUTION_8,
    title: '广告',
    desc: '品牌推广、渠道销售、案例展示、客户沉淀',
  },
];

const SolutionCol = styled(Col)`
  padding: 30px 0 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: rgba(13, 25, 36, 1);
  line-height: 30px;
  a {
    display: inline-block;
    margin-right: 5px;
    color: #3153d4;
    text-decoration: none;
    position: relative;
    &:hover {
      color: #1f31af;
      &::after {
        transform: scale(1);
      }
    }
    &::after {
      transition: all 0.3s ease-in-out;
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      position: absolute;
      bottom: -5px;
      left: 0;
      transform: scale(0);
      background: #3153d4;
    }
  }
`;

const Solutions = () => {
  return (
    <Layout headPlaceholder={[false, '#ffffff']}>
      {(formVisible, setFormVisible) => (
        <>
          <BannerWhite
            pcImgs={[
              {
                src: BANNER_IMG,
                style: { width: 600, right: 0, top: 0 },
                className: ['animate__fadeInRight', 'animate__ahead_300ms'],
              },
            ]}
            minWidthPC="1075px"
            mobileImg={BANNER_XS}
            background={[
              `url(${BANNER_BG}) no-repeat right center / calc((100vw - 1200px) / 2 + 285px) 100%, #F5F7FA`,
              `#FFFFFF`,
            ]}>
            <TextArea spaces={['20px 48px', '32px']}>
              <BigTitle className="big-title">
                百应为您定制专属
                <br />
                解决方案
              </BigTitle>
              <Hidden xs sm>
                <Desc className="desc">
                  百应针对各行业务特性，打造以AI+大数据驱动的专业行业解决方案，为企业营销、销售、服务提供增长引擎
                </Desc>
              </Hidden>
              <BlueBtn className="blue-btn" onClick={() => setFormVisible(true, FormType.CUSTOMER)}>
                咨询行业专家
              </BlueBtn>
            </TextArea>
          </BannerWhite>

          <DescWrapper
            title="百应已为以下行业定制企业增长方案"
            desc={
              <>
                百应以AI+大数据赋能驱动企业增长，服务42000+企业/机构，覆盖25+行业细分领域
                <br />
                建立行业大数据分析与用户画像，提供营销、销售、服务一体化的企业智能营销解决方案
              </>
            }>
            {SOULUTIONS_LIST.map(item => (
              <SolutionCard key={item.title} {...item} />
            ))}
            <SolutionCol lg={24}>
              没有找到你的行业？
              <a href="javascript:void(0)" onClick={() => setFormVisible(true)}>
                预约专家
              </a>
              定制方案
            </SolutionCol>
          </DescWrapper>
          <ByVoiceFooter
            title="打造企业级数字化劳动力"
            desc="留下联系方式，将有AI行业专家为您提供专属服务"
            btnText="与我联系"
            background={`url(${FOOTER_BG})`}
            onClick={() => {
              setFormVisible(true);
            }}
          />
          {/* <VoiceFooter
            title="立即开始定制您的专属解决方案"
            mTitle1="立即开始定制"
            mTitle2="您的专属解决方案"
            btn="免费体验"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setFormVisible(true)}
        /> */}
        </>
      )}
    </Layout>
  );
};

export default Solutions;
