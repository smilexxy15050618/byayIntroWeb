import { NextFunctionComponent } from 'next';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { Wrapper } from '../../src/components/voice-robot/style';
import { calWidthAndHeight, retailUrl } from '../../src/lib/utils';
import ByVoiceFooter from '../../src/retail/components/common/ByVoiceFooter';
import { Layout } from '../../src/retail/components/Layout';
import BrandChoice from '../../src/retail/components/private-drainage/brand-choice';
import Help from '../../src/retail/components/private-drainage/help';
import Model from '../../src/retail/components/private-drainage/model';
import PrivateDomain from '../../src/retail/components/private-drainage/private-domain';
import Service from '../../src/retail/components/private-drainage/service';
import { Solution } from '../../src/retail/components/private-drainage/solution';
import WholeLink from '../../src/retail/components/private-drainage/whole-link';
import { FOOTER_BG } from '../../src/retail/constants';

const RecallBody = styled.div`
  background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/d533d238-c6dc-4d09-8dde-07e7813a8af1.png');
  background-repeat: repeat;
  background-color: rgba(246, 102, 0, 0.08);
  background-size: 100%;
  white-space: nowrap;

  @media (max-width: 768px) {
    background: #ffecde;

    .brand-btn {
      width: ${calWidthAndHeight(280)};
      height: ${calWidthAndHeight(48)};
      background: #F66600;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${calWidthAndHeight(16)};
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: ${calWidthAndHeight(24)};
      margin: ${calWidthAndHeight(40)}; auto;
    }
  }
`;

const HomePage: NextFunctionComponent = () => {
  return (
    <>
      <Layout headPlaceholder={[false, false]} headFontStyle={['light', 'light']}>
        {(visible, setFormVisible) => (
          <Wrapper>
            <Solution />
            <RecallBody>
              <PrivateDomain />
              <WholeLink />
              <Model />
              <Visible xs sm>
                <div
                  className="brand-btn"
                  onClick={() => {
                    window.open(retailUrl(`/form?formType=1`));
                  }}>{`咨询AI增长顾问 >>`}</div>
              </Visible>
              <BrandChoice />
              <Visible md lg xl xxl xxxl>
                <Service />
                <Help />
              </Visible>
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
                  let url = retailUrl(`/form?formType=1`);
                  window.open(url);
                }}
              />
            </RecallBody>
          </Wrapper>
        )}
      </Layout>
    </>
  );
};

export default HomePage;
