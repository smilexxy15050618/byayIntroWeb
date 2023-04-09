import * as React from 'react';
import { ScreenClassRender, Visible, Hidden } from 'react-grid-system';
import styled from 'styled-components';
import {
  BigTitle,
  SmallSubTitle,
  TechnologyThinTitle,
  TextArea,
} from '../../src/components/common/BannerTextElements';
import { Layout } from '../../src/components/Layout';
import BannerWhite from '../../src/components/common/BannerWhite';
import { HOST_ENUM } from '../../src/lib/utils';

const BANNER2 = `https://s1.ax1x.com/2023/04/09/ppbPdDs.png`;
const BANNER = `https://s1.ax1x.com/2023/04/09/ppbPgv4.png`;
const BANNER_XS = 'https://s1.ax1x.com/2023/04/09/ppbPgv4.png'

const About: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => (
  <Layout hostType={hostType}>
    {(visible, setVisible) => (
      <>
        <BannerWhite
          minWidthPC="1183px"
          pcImgs={[
            { src: BANNER2, style: { right: 0, top: 0 }, className: [] },
            {
              src: BANNER,
              style: { width: 600, right: 0, top: 0 },
              className: ['animate__fadeInRight', 'animate__ahead_300ms'],
            },
          ]}
          mobileImg={BANNER_XS}>
          <TextArea margin="-50px 0 0" spaces={['10px', '8']}>
            <Hidden xs sm>
              <TechnologyThinTitle>
                改变世界的
                <br />
                不是技术
              </TechnologyThinTitle>
              <BigTitle>而是技术背后的梦想</BigTitle>
            </Hidden>
            <Visible xs sm>
              <SmallSubTitle>改变世界的不是技术</SmallSubTitle>
              <BigTitle>
                而是技术
                <br />
                背后的梦想
              </BigTitle>
            </Visible>
          </TextArea>
        </BannerWhite>
      </>
    )}
  </Layout>
);

export default About;
