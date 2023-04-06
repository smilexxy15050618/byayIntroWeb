import isMobile from 'ismobilejs';
import { FC, useState } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import Box from '../../src/components/Box';
import { CaseList } from '../../src/components/case-list';
import { getColorForLabelText } from '../../src/components/case-list/util';
import {
  BASE_URL,
  CustomerCaseSmallSubTitle,
  CustomerCaseTitle,
  Desc,
  TextArea,
} from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import ByDesc from '../../src/components/common/ByDesc';
import ByProgressSwiper from '../../src/components/common/ByProgressSwiper';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import { Layout } from '../../src/components/Layout';
import { FormType } from '../newPatternForm';
import { Carousel } from './Carousel';
import { CarouseLContent } from './CarouselContent';
import { arrowStyleList, carouselDataList, caseDataInfoList, defaultCaseDataInfoListSize } from './constant';
import { IAddMoreProps } from './index.d';
import { AddMoreWrapper, ArrowIconWrapper, BgImg, BoomWrapper, CasesWrapper } from './styled';

const BANNER = `${BASE_URL}custom-case-img.png`;
const BANNER_XS = `${BASE_URL}custom-case-xs.png`;
const BANNER_BG = `${BASE_URL}custom-case-bg.png`;

/**
 * 查看全部组件
 */
export const AddMore: FC<IAddMoreProps> = ({ text, handleClick = () => {} }) => {
  return (
    <AddMoreWrapper onClick={handleClick}>
      {/* 为了居中增加的div */}
      <div>
        {text}
        {arrowStyleList.map(it => (
          <ArrowIconWrapper style={it} />
        ))}
      </div>
    </AddMoreWrapper>
  );
};

export const CustomerCase: FC = () => {
  const [showSize, setShowSize] = useState(isMobile().phone ? defaultCaseDataInfoListSize : 15);
  return (
    <Layout headPlaceholder={[false, '#FFFFFF']} headFontStyle={['dark', 'dark']}>
      {(visible, setVisible) => (
        <>
          <Box bgcolor="#F5F7FA" display="relative">
            <BannerWhite
              minWidthPC="1075px"
              background={[`url(${BANNER_BG}) right center / calc((100vw - 1200px) / 2 + 284px) 100%`, '#FFFFFF']}
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
                  <CustomerCaseTitle>数智赋能 创启未来</CustomerCaseTitle>
                  <Desc width="548px">
                    百应科技将AI、大数据技术带入千行百业全方位助力企业数智化转型升级，打造数字营销增长新引擎
                  </Desc>
                </Hidden>
                <Visible xs sm>
                  <CustomerCaseSmallSubTitle>打造数字营销增长新引擎</CustomerCaseSmallSubTitle>
                  <CustomerCaseTitle>
                    数智赋能
                    <br />
                    创启未来
                  </CustomerCaseTitle>
                </Visible>
              </TextArea>
            </BannerWhite>

            <CasesWrapper>
              <ByDesc title="客户案例" desc="加速技术与行业深度融合" background="transparent" />
              <CaseList
                commonCaseInfo={(i, info) => ({
                  labelColor: getColorForLabelText(info.label),
                })}
                caseInfoList={caseDataInfoList.slice(0, showSize)}
              />
              {showSize < caseDataInfoList.length && (
                <AddMore
                  text="查看全部"
                  handleClick={() => {
                    setShowSize(caseDataInfoList.length);
                  }}
                />
              )}
            </CasesWrapper>
            <BoomWrapper>
              <Hidden sm xs>
                <Carousel style={{ marginTop: '100px' }} dataList={carouselDataList} />
              </Hidden>
              <Visible sm xs>
                <ByProgressSwiper contentPadding="10%" progressPadding="9%" width="100%" previewWidth="6%">
                  {carouselDataList.map((item, i) => (
                    <CarouseLContent onClick={() => {}} index={i} data={item} dataList={carouselDataList} />
                  ))}
                </ByProgressSwiper>
              </Visible>
            </BoomWrapper>

            <ByVoiceFooter
              background={`url(https://cdn.byai.com/static/intro/img/common/voice-footer-img.png)`}
              onClick={() => setVisible(true, FormType.CUSTOMER)}
              title="打造企业级数字化劳动力"
              desc="留下联系方式，将有AI行业专家为您提供专属服务"
              btnText="与我联系"></ByVoiceFooter>
            <Hidden xs sm>
              <BgImg
                style={{ left: '0', top: '502px', transform: 'translateX(-50%)' }}
                src="https://cdn.byai.com/static/intro/img/customer-case/bg/bg-left-top.png"
              />
              <BgImg
                style={{ right: '0', top: '1240px', transform: 'translateX(50%)' }}
                src="https://cdn.byai.com/static/intro/img/customer-case/bg/bg-right-bottom.png"
              />
            </Hidden>
          </Box>
        </>
      )}
    </Layout>
  );
};

export default CustomerCase;
