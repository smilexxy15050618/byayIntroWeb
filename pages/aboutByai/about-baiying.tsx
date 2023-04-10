import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { Hidden, Visible } from 'react-grid-system';
import { TextArea } from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import { EnterpriseIntroduction } from '../../src/components/about';

import imgurl from '../../img.url.js'
import { HOST_ENUM } from '../../src/lib/utils';
const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const JOIN_US_IMG = `${imgurl}/about_banner_img.png`;
const INTRODUCE_BG = `${imgurl}/about_introduce_bg.png`;

const videoInfoList = [
  {
    tag: '高用户接听',
    icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6/tab1.png',
    color: 'rgba(43, 88, 249, 1)',
    infoList: [
      {
        title: (
          <div>
            稳健的<span style={{ color: 'rgba(43, 88, 249, 1)' }}>线路资源</span>，合理规划拨打策略，用户更愿意接听
          </div>
        ),
        desc: ['合适的时间呼叫可触达的人群', '本地外显 企业名片认证', '覆盖全国的优质线路 得天独厚的优势'],
      },
      {
        title: (
          <div>
            <span style={{ color: 'rgba(43, 88, 249, 1)' }}>天盾</span> 保护，号码过滤拦截，用户投诉率极低
          </div>
        ),
        desc: ['企业外呼营销的防火墙 解决投诉难题'],
      },
    ],
  },
  {
    tag: '高意向转化',
    icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6/tab2.png',
    color: 'rgba(0, 200, 189, 1)',
    infoList: [
      {
        title: (
          <div>
            制定精准<span style={{ color: 'rgba(0, 200, 189, 1)' }}>营销策略</span>，设计最优通话内容，影响用户决策
          </div>
        ),
        desc: ['用户意图精准识别， "销冠"式AI应答，促进成交', '行业专家1V1， 定制品牌专属AI'],
      },
      {
        title: (
          <div>
            AI<span style={{ color: 'rgba(0, 200, 189, 1)' }}>高度拟人</span>，即时响应专业回复，提升用户通话体验
          </div>
        ),
        desc: ['行业亿级知识库 行业领跑的AI能力', '丰富的AI音色市场 匹配全行业全场景'],
      },
    ],
  },
  {
    tag: '优营销模型',
    icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6/tab3.png',
    color: 'rgba(246, 102, 0, 1)',
    infoList: [
      {
        title: (
          <div>
            通话数据<span style={{ color: 'rgba(246, 102, 0, 1)' }}>沉淀和分析</span>，快速迭代企业营销模型
          </div>
        ),
        desc: ['通话内容沉淀 回流企业数据库', '通话节点分析 构建策略优化闭环'],
      },
    ],
  },
];


const Wrapper = styled.div`
  background: #ffffff;
  .blue-hight {
    color: rgb(43, 88, 249);
  }
  @media (min-with: 769px) {
    #big-title {
      margin-top: -50px !important;
    }
  }
`;
const BigTitle = styled.div`
  margin-top: 20px;
  font-size:48px;
  line-height:80px;
  color:rgb(51,51,51);
`;
const SubTitle = styled.div`
  margin-top: 20px;
  width: 685px;
  font-size:58px;
  line-height:54px;
  color:rgb(51,51,51);
`;
const Desc = styled.div`
  margin-top: 40px;
  font-size:22px;
  line-height:34px;
  color:rgb(51,51,51);
`;



const About: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => (
  <Layout hostType={hostType} headPlaceholder={[false, '#F9FAFF']} headFontStyle={['dark', 'dark']}>
    {(visible, setVisible) => (
      <>
        <Wrapper>
          <BannerWhite
            minWidthPC="1183px"
            background={[`url(${BANNER_BG}) right top ,#F6FCFF`, '#F6FCFF']}
            pcImgs={[
              {
                src: JOIN_US_IMG,
                style: { width: 639, height:608, top: -50, right: 0 },
                className: ['animate__fadeInRight', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={JOIN_US_IMG}>
            <TextArea spaces={['', '']}>
              <Hidden xs sm>
                <BigTitle>
                  关于百应
                </BigTitle>
                <SubTitle>智能用户运营领域创领者</SubTitle>
                <Desc>致力于通过前沿对话式AI能力<br />助力政府和企业高效连接C端用户</Desc>
              </Hidden>
            </TextArea>
          </BannerWhite>
          <EnterpriseIntroduction
            backgroundImage={INTRODUCE_BG}
            cover="//cdn.byai.com/static/official-website/about/baiying-1222.png"
          />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />

        </Wrapper>
      </>
    )}
  </Layout>
);

export default About;