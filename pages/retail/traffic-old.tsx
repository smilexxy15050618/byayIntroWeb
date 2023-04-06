import { NextFunctionComponent } from 'next';
import { Visible } from 'react-grid-system';
import { retailUrl } from '../../src/lib/utils';
import ByVoiceFooter from '../../src/retail/components/common/ByVoiceFooter';
import { Layout } from '../../src/retail/components/Layout';
import { Features } from '../../src/retail/components/solutions/Features';
import { FlowChart } from '../../src/retail/components/solutions/FlowChart';
import { Introduction } from '../../src/retail/components/solutions/Introduction';
import { PainPoints } from '../../src/retail/components/solutions/PainPoints';
import { Photos } from '../../src/retail/components/solutions/Photos';
import { FOOTER_BG } from '../../src/retail/constants';

interface IPrivateDrainageProps {}
// 私域引流
const PrivateDrainage: NextFunctionComponent = ({}) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <>
          <Introduction
            title="私域引流"
            imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/header/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81-.png"
            description="AI赋能精细化自动引流，构建品牌私域流量"
          />
          <PainPoints
            title="私域引流因何趋向数智化"
            cardList={[
              {
                description: '公海流量越来越贵越来越难私域流量的建立成为品牌刚需',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81%EF%BC%88PC%EF%BC%891.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81%EF%BC%88PC%EF%BC%891-1.png',
              },
              {
                description: '传统引流方式效率低、效果差、成本高、无反馈',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81%EF%BC%88PC%EF%BC%892.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81%EF%BC%88PC%EF%BC%892-2.png',
              },
              {
                description: '大数据下想要规模化精准引流无从下手',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81%EF%BC%88PC%EF%BC%893.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81%EF%BC%88PC%EF%BC%893-3.png',
              },
            ]}
          />
          <FlowChart
            title="AI私域引流全链路赋能"
            content={
              <>
                <Visible md lg xl xxl xxxl>
                  <img
                    src="https://cdn.byai.com/static/intro/img/retail/solutions/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81%EF%BC%88PC%EF%BC%89%E6%B5%81%E7%A8%8B%E5%9B%BE.png"
                    alt="AI私域引流全链路赋能图片"
                  />
                </Visible>
                <Visible xs sm>
                  <img
                    src="https://cdn.byai.com/static/intro/img/retail/solutions/AI%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81%E5%85%A8%E9%93%BE%E8%B7%AF%E8%B5%8B%E8%83%BD2.png"
                    alt="AI私域引流全链路赋能图片"
                  />
                </Visible>
              </>
            }
          />
          <Features
            title="低成本、高转化加粉"
            featureList={[
              {
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%811.png',
                featureName: '盘活品牌用户资产',
                featureDescription: '超 85% AI外呼有效触达率',
                highlightString: '85%',
              },
              {
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%812.png',
                featureName: '实现高效私域增长备份',
                featureDescription: '15-38% 私域加粉综合转化率',
                highlightString: '15-38%',
              },
              {
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%813.png',
                featureName: '提升营销获客ROI',
                featureDescription: ' 全渠道引流获客数 300% 提升',
                highlightString: '300%',
              },
            ]}
          />
          <Photos
            title="行业领先的技术实力"
            photos={[
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81-1-noradius.png',
                descriptions: ['优质线路基础设置，', '保证接通触达率'],
              },
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81-2-noradius.png',
                descriptions: ['独有产品设计，全程ABtest流转，', '保证高触达高转化'],
              },
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81-3-noradius.png',
                descriptions: ['人机协作多路监听，', '及时跟进重要商机'],
              },
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81-4-noradius.png',
                descriptions: ['自动加微私域引流，', '高效构建私域流量池'],
              },
            ]}
          />
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
        </>
      )}
    </Layout>
  );
};

export default PrivateDrainage;
