import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '../src/components/Layout';

import { Banner } from '../src/components/about';

const BACKGOURND_XS = 'https://cdn.byai.com/static/official-website/home/guanyuwomen.png';

const Wrapper = styled.div`
  background: #ffffff;
  .blue-hight {
    color: rgb(43, 88, 249);
  }
`;

const About: React.SFC = props => (
  <Layout>
    {(visible, setVisible) => (
      <>
        <Wrapper>
          <Banner
            title={
              <div>
                <span className="blue-hight">B</span>uild <span className="blue-hight">Y</span>our dreams with us
              </div>
            }
            desc="极致工作 快乐生活"
            backgroundImage="//cdn.byai.com/static/official-website/about/about_banner.svg"
            mobileBackgroundImage={BACKGOURND_XS}
            text1="社会招聘"
            text2="校园招聘"
            onBtn1Click={() =>
              window.open('https://www.zhipin.com/gongsir/1f1899216bf70b801HV53tu1FA~~.html?ka=company-jobs')
            }
            onBtn2Click={() =>
              window.open('https://www.zhipin.com/gongsir/1f1899216bf70b801HV53tu1FA~~.html?ka=company-jobs')
            }
          />
        </Wrapper>
      </>
    )}
  </Layout>
);

export default About;
