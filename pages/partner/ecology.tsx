import { Hidden, Visible } from 'react-grid-system';
import {
  BASE_URL,
  BigTitle,
  BlueBtn,
  Desc,
  SmallSubTitle,
  TextArea,
} from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import { Layout } from '../../src/components/Layout';
import CoopProcedure from '../../src/components/partner/CoopProcedure';
import OpenCooperateWinDiv from '../../src/components/partner/OpenCooperateWinDiv';
import PartnerSystem from '../../src/components/partner/PartnerSystem';
import ReasonToBePartner from '../../src/components/partner/ReasonToBePartner';
import ServiceSystem from '../../src/components/partner/ServiceSystem';
import { FormType } from '../../src/components/TryForm';
import { HOST_ENUM } from '../../src/lib/utils';
const BANNER = `${BASE_URL}ecology.png`;
const BANNER_XS = `${BASE_URL}ecology-xs.png`;
const FOOTER_BG = `https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/kqaizl.png`;
export default ({ hostType = HOST_ENUM.HOST }) => (
  <Layout hostType={hostType} headPlaceholder={[false, '#F9FAFF']}>
    {(visible, setVisible) => (
      <>
        {/* 横幅 */}
        <BannerWhite
          minWidthPC="1075px"
          background={['#F9FAFF', '#F9FAFF']}
          pcImgs={[
            {
              src: BANNER,
              style: { width: 600, top: 0, right: 0 },
              className: ['animate__fadeInRight', 'animate__ahead_300ms'],
            },
          ]}
          mobileImg={BANNER_XS}>
          <TextArea spaces={['20px 48px', '8px 32px']}>
            <Hidden xs sm>
              <BigTitle>百应生态合作计划</BigTitle>
              <Desc width="548px">
                基于AI、智能识别、智能交互、数据挖掘等核心技术，百应致力于建设人工智能生态合作联盟，为政企行业客户提供先进的数智化转型解决方案。我们正在寻找大数据、RPA等技术领域的合作伙伴，协作共赢、共赴星辰大海。
              </Desc>
            </Hidden>
            <Visible xs sm>
              <SmallSubTitle>共建人工智能生态合作联盟</SmallSubTitle>
              <BigTitle>百应生态合作计划</BigTitle>
            </Visible>
            <BlueBtn onClick={() => setVisible(true, FormType.ECOLOGY)}>立即加入</BlueBtn>
          </TextArea>
        </BannerWhite>
        {/* 开放合作共赢 */}
        <OpenCooperateWinDiv />
        {/* 百应生态合作体系 */}
        <PartnerSystem setVisible={() => setVisible(true, FormType.ECOLOGY)} />
        {/* 为什么要成为百应合作伙伴 */}
        <ReasonToBePartner />
        {/* 完善的服务体系保驾护航 */}
        <ServiceSystem />
        {/* 合作流程 */}
        <CoopProcedure />
        {/* 口号 */}
        <ByVoiceFooter
          title="立即体验AI时代的新一代用户运营平台"
          desc="用“AI”构建你和用户的“亲密关系”；共建存量时代的增长引擎。"
          btnText="与我联系"
          background={`url(${FOOTER_BG})`}
          onClick={() => window.open('/form?formType=1')}
        />
      </>
    )}
  </Layout>
);
