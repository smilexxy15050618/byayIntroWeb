import { Visible, Hidden } from 'react-grid-system';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { NextFunctionComponent } from 'next';
import { Banner } from './components/Banner';
import { Ai } from './components/Ai';
import { ApplicationIndustry } from './components/ApplicationIndustry'
import { Strategy } from './components/Strategy'
import { Algorithm } from './components/Algorithm' 
import { Wrapper } from '../../src/components/voice-robot/style';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import imgurl from '../../img.url.js'

const FOOTER_BG = `${imgurl}/kqaizl.png`;


interface IGameProps {

}

const Game: NextFunctionComponent<IGameProps> = () => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setVisible) => (
        <>
          <Wrapper>
            <Visible md lg xl xxl xxxl>
              <Banner></Banner>
              <Ai></Ai>
              <ApplicationIndustry></ApplicationIndustry>
              <Strategy></Strategy>
              <Algorithm></Algorithm>
              <ByVoiceFooter
                title="就现在，开启AI电话增长之旅"
                desc="留下联系方式，将有AI行业专家为您提供专属服务"
                btnText="与我联系"
                background={`url(${FOOTER_BG})`}
                onClick={() => {
                  window.open('/form?formType=1')
                }}
              />
            </Visible>


            <Visible xs sm>
                移动端
            </Visible>
          </Wrapper>
        </>
      )}
    </Layout>
  )
}

export default Game;