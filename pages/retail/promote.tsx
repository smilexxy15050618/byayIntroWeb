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

interface ICustomerServiceProps {}
// 活动营销
const CustomerService: NextFunctionComponent = ({}) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <>
          <Introduction
            title="活动营销"
            imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/header/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80-.png"
            description="精准高效、低成本的数智化营销助手"
          />
          <PainPoints
            title="为什么TOP品牌都在用AI外呼营销触达"
            cardList={[
              {
                description: '传统人工电话触达通知成本高、效率低、数据分析难',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80%EF%BC%88PC%EF%BC%891.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80%EF%BC%88PC%EF%BC%891-1.png',
              },
              {
                description: '客户画像不精准，大海捞针式营销效果差、转化低',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80%EF%BC%88PC%EF%BC%892.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80%EF%BC%88PC%EF%BC%892-2.png',
              },
              {
                description: '历史客户数据资产数量大，触达低、复购低',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80%EF%BC%88PC%EF%BC%893.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80%EF%BC%88PC%EF%BC%893-3.png',
              },
            ]}
          />
          <FlowChart
            title="多场景、定制化智能营销"
            content={
              <>
                <Visible md lg xl xxl xxxl>
                  <img
                    src="https://cdn.byai.com/static/intro/img/retail/solutions/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80%EF%BC%88PC%EF%BC%89%E6%B5%81%E7%A8%8B%E5%9B%BE.png"
                    alt="多场景、定制化智能营销图片"
                  />
                </Visible>
                <Visible xs sm>
                  <img
                    src="https://cdn.byai.com/static/intro/img/retail/solutions/AI%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81%E5%85%A8%E9%93%BE%E8%B7%AF%E8%B5%8B%E8%83%BD2.png"
                    alt="多场景、定制化智能营销图片"
                  />
                </Visible>
              </>
            }
            buttonText="立即免费定制 ››"
          />
          <Features
            title="AI助力企业完成数智化营销转型"
            buttonText="立即开启增长 ››"
            featureList={[
              {
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%801.png',
                featureName: '智能外呼高触达',
                featureDescription: ' 接通率提升至 87%',
                highlightString: '87%',
              },
              {
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%802.png',
                featureName: '人机协同高效处理',
                featureDescription: ' 处理效率提升 300% 以上',
                highlightString: '300%',
              },
              {
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%803.png',
                featureName: '全渠道引流获客转化',
                featureDescription: ' ROI提升至 5：1',
                highlightString: '5：1',
              },
            ]}
          />
          <Photos
            title="行业领先的技术实力"
            photos={[
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80-1-noradius.png',
                descriptions: ['行业领先的AI技术', '保证高触达率'],
              },
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80-2-noradius.png',
                descriptions: ['号码检测智能拦截', '极大降低客诉风险'],
              },
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80-3-noradius.png',
                descriptions: ['人机协作多路监听，', '及时跟进重要商机'],
              },
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80-4-noradius.png',
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
export default CustomerService;
