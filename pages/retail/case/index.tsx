import { NextFunctionComponent } from 'next';
import React from 'react';
import { Visible } from 'react-grid-system';
import { retailUrl } from '../../../src/lib/utils';
import BannerMobile from '../../../src/retail/components/banner-mobile';
import BannerWrapper from '../../../src/retail/components/banner-pc';
import Cases from '../../../src/retail/components/cases';
import CasesMobile from '../../../src/retail/components/cases-mobile';
import ByVoiceFooter from '../../../src/retail/components/common/ByVoiceFooter';
import CustomerIconsBlock from '../../../src/retail/components/common/CustomerIconsBlock';
import { Layout } from '../../../src/retail/components/Layout';
import { FOOTER_BG } from '../../../src/retail/constants';
import * as SC from './styled';
const data = {
  title: 'TOP零售品牌 都在用',
  subTitle: '数智化增长提效从这里开始',
  buttonFont: '和我们的顾问聊聊 >>',
  buttonUrl: retailUrl('/form?formType=1'),
  imgUrl: 'https://cdn.byai.com/static/oss-script/d22ad631fd2c4e19eed3d626d3227917.png',
};

const CustomerCase: NextFunctionComponent = ({ }) => {
  return (
    <>
      <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
        {() => (
          <SC.CustomerCaseWrapper>
            <Visible md lg xl xxl xxxl>
              <BannerWrapper />
              <Cases />
            </Visible>
            <Visible sm xs>
              <BannerMobile {...data} />
              <CasesMobile />
            </Visible>
            <CustomerIconsBlock padding="0 0 83px" />
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
          </SC.CustomerCaseWrapper>
        )}
      </Layout>
    </>
  );
};

export default CustomerCase;
