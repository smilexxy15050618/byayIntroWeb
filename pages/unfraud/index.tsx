import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { NextFunctionComponent } from 'next';
import { IndustryCarousel } from './components/IndustryCarousel-2023';
import {Ai} from './components/Ai';
import {ApplicationIndustry} from './components/ApplicationIndustry'
import {CoreValues} from './components/CoreValues'
import {CustomerStories} from './components/CustomerStories'
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
                <ApplicationIndustry></ApplicationIndustry>
                <CoreValues></CoreValues>
                <CustomerStories></CustomerStories>
                <ByVoiceFooter
            title="立即体验AI时代的新一代用户运营平台"
            desc="用“AI”构建你和用户的“亲密关系”；共建存量时代的增长引擎。"
            btnText="与我联系"
            background={`url(${FOOTER_BG})`}
            onClick={() => {
              window.open('/form?formType=1')
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