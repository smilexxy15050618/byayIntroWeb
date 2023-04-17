import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { NextFunctionComponent } from 'next';
import { IndustryCarousel } from './components/IndustryCarousel-2023';
import {Ai} from './components/Ai';
// import {ApplicationIndustry} from './components/ApplicationIndustry'
// import {CoreValues} from './components/CoreValues'
import {WhySelect} from './components/WhySelect'
import {CustomerCase} from './components/CustomerCase'
import { HOST_ENUM } from '../../src/lib/utils';
import { Wrapper } from '../../src/components/voice-robot/style';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import imgurl from '../../img.url.js'

const FOOTER_BG = `${imgurl}/kqaizl.png`;
interface IGameProps {
    
}
// const FOOTER_BG = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/bg/bottom.png';
const Game:NextFunctionComponent<IGameProps>=()=>{
    return (
        <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
         {(visible,setVisible) => (
            <>
            <Wrapper>
              
            <Visible md lg xl xxl xxxl>
                <IndustryCarousel></IndustryCarousel>
                <Ai></Ai>
                {/* <ApplicationIndustry></ApplicationIndustry> */}
                {/* <CoreValues></CoreValues> */}
                <WhySelect></WhySelect>
                <CustomerCase></CustomerCase>
                <ByVoiceFooter
            title="就现在，开启AI电话增长之旅"
            desc="留下联系方式，将有AI行业专家为您提供专属服务"
            btnText="与我联系"
            background={`url(${FOOTER_BG})`}
            onClick={() => {
              setFormVisible(true, FormType.CUSTOMER);
            }}
          />
            </Visible>
              
            </Wrapper>
            </>
         )}
        </Layout>
    )
}

export default Game;