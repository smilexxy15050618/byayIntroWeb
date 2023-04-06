import React from 'react';
import styled, { css } from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { Visible, Hidden, Row, Col } from 'react-grid-system';
import VoiceFooter from '../../src/components/order/footer';
import Box from '../../src/components/Box';
import { ArrowInfo } from '../../src/components/smart-sale/ArrowInfo';
import { SceneTitle } from '../../src/components/smart-sale/SceneTitle';
import { ImageInnerTitle } from '../../src/components/smart-sale/ImageInnerTitle';
import FourCol from '../../src/components/smart-sale/FourCol';
import { media } from '../../src/constants/style';
import { DataInfoGroup } from '../../src/components/smart-sale/DataInfoGroup';
import Partner from '../../src/components/smart-sale/partner';

const arrowInfoLeftLIst = [
  {
    title: '自动化营销获客',
    content: (
      <p>
        智能名片助力拓客
        <br />
        客户雷达精准锁客
      </p>
    ),
    imgUrl:
      'https://cdn.byai.com/static/intro/img/smart-sale/%E8%87%AA%E5%8A%A8%E5%8C%96%E8%90%A5%E9%94%80%E8%8E%B7%E5%AE%A2.png',
  },
  {
    title: '智能化销售触达',
    content: (
      <p>
        智能外呼精准筛查
        <br />
        工作手机提速跟进
      </p>
    ),
    imgUrl:
      'https://cdn.byai.com/static/intro/img/smart-sale/%E6%99%BA%E8%83%BD%E5%8C%96%E9%94%80%E5%94%AE%E8%A7%A6%E8%BE%BE.png',
  },
  {
    title: '数智化销售管理',
    content: (
      <p>
        客户全生命周期管理
        <br />
        助力企业全链路增长
      </p>
    ),
    imgUrl:
      'https://cdn.byai.com/static/intro/img/smart-sale/%E6%95%B0%E6%99%BA%E5%8C%96%E9%94%80%E5%94%AE%E7%AE%A1%E7%90%86.png',
  },
  {
    title: '数据化智能决策',
    content: (
      <p>
        客户全生命周期管理
        <br />
        助力企业全链路增长
      </p>
    ),
    imgUrl:
      'https://cdn.byai.com/static/intro/img/smart-sale/%E6%95%B0%E6%8D%AE%E5%8C%96%E6%99%BA%E8%83%BD%E5%86%B3%E7%AD%96.png',
  },
];

const arrowInfoRightLIst = [
  {
    title: '企业AI中台',
    content: (
      <p>
        30+行业知识图谱
        <br />
        多维度数据可视化
        <br />
        实时追踪销售动态
        <br />
        指导品牌商业决策
      </p>
    ),
    isRight: true,
  },
];

const visitorList = [
  {
    id: 'business-card',
    title: '智能名片',
    desc: '把企业官网装进名片，拓客更轻松',
    imgUrl: 'https://cdn.byai.com/static/intro/img/smart-sale/%E6%99%BA%E8%83%BD%E5%90%8D%E7%89%87.png',
    sublist: [
      {
        subTitle: '名片小程序',
        subContent: '轻量化呈现，打造专业人设与品牌背书',
      },
      {
        subTitle: '销售公文包',
        subContent: '海量精品海报、获客文章，随时拓客',
      },
      {
        subTitle: '客户行为跟踪',
        subContent: '实时跟踪，实时提醒跟进，收获商机',
      },
    ],
  },
  {
    title: '客户雷达',
    desc: '洞察客户行为，趁热打铁跟进转化',
    imgUrl: 'https://cdn.byai.com/static/intro/img/smart-sale/%E5%AE%A2%E6%88%B7%E9%9B%B7%E8%BE%BE.png',
    sublist: [
      {
        subTitle: '客户行为数据',
        subContent: '访客互动轨迹跟踪，实时提醒',
      },
      {
        subTitle: 'AI热力图',
        subContent: '洞察用户感兴趣的内容，随时洞察商机',
      },
      {
        subTitle: '访客分析',
        subContent: '时刻捕捉高意向客户',
      },
    ],
  },
];

const reachList = [
  {
    id: 'aicc',
    title: '智能外呼',
    desc: '精准筛选线索，自动录入客户',
    imgUrl: 'https://cdn.byai.com/static/intro/img/smart-sale/%E6%99%BA%E8%83%BD%E5%A4%96%E5%91%BC.png',
    sublist: [
      {
        subTitle: '电话任务',
        subContent: '为员工分配任务，让系统推动销售执行任务',
      },
      {
        subTitle: '百应天盾',
        subContent: '大数据提前探知客户接听意向度 ，提升电话接通率',
      },
      {
        subTitle: '智能外呼',
        subContent: '打造真实互动语音体验，意向客户自动筛选标记，实现高效率低成本转化',
      },
    ],
  },

  {
    title: '智能短信',
    desc: '挂机短信推送，多一次客户触达',
    imgUrl: 'https://cdn.byai.com/static/intro/img/smart-sale/%E6%99%BA%E8%83%BD%E7%9F%AD%E4%BF%A1.png',
    sublist: [
      {
        subTitle: '短信自动推送',
        subContent: '通话结束自动推送短信，销售流程不断档',
      },
      {
        subTitle: '丰富价值传递',
        subContent: 'H5裂变传播，支持图文、视频等丰富素材',
      },
      {
        subTitle: '精准营销触达',
        subContent: '客户行为挖掘分析，精准触达每一位客户',
      },
    ],
  },
  {
    title: '人工坐席',
    desc: '无缝人机切换，提升服务效率和质量',
    imgUrl: 'https://cdn.byai.com/static/intro/img/smart-sale/%E4%BA%BA%E5%B7%A5%E5%9D%90%E5%B8%AD.png',
    sublist: [
      {
        subTitle: 'APP外呼',
        subContent: '支持一键外呼，随时随地沟通客户',
      },
      {
        subTitle: '人机切换',
        subContent: 'AI转人工接待无缝衔接，大大提升沟通效率',
      },
      {
        subTitle: '客户沉淀',
        subContent: '通话记录自动同步到CRM，轻松跟进意向客户',
      },
    ],
  },
  {
    title: '工作手机',
    desc: '销售过程全记录，私域流量全保护',
    imgUrl: 'https://cdn.byai.com/static/intro/img/smart-sale/%E5%B7%A5%E4%BD%9C%E6%89%8B%E6%9C%BA-1222.png',
    sublist: [
      {
        subTitle: '沟通意向全同步',
        subContent: '销售过程数据全同步，打造数字化管理模式',
      },
      {
        subTitle: '销售管理全融合',
        subContent: '客户来电/挂机自动弹屏，自动录入CRM系统',
      },
      {
        subTitle: '质量把控全周期',
        subContent: '沟通过程全质检，保障互动、沟通过程专业化',
      },
      {
        subTitle: '私域流量全保护',
        subContent: '公司客户资源不流失，打造专属客户私域流量',
      },
      {
        subTitle: '安全合规更稳定',
        subContent: '联合厂商深度定制，应用白名单，使用不封号',
      },
    ],
  },
];

const manageList = [
  {
    title: '客户全周期管理',
    desc: '从客户触达到回款，助力业绩全面提升',
    imgUrl:
      'https://cdn.byai.com/static/intro/img/smart-sale/%E5%AE%A2%E6%88%B7%E5%85%A8%E5%91%A8%E6%9C%9F%E7%AE%A1%E7%90%86.png',
    sublist: [
      {
        subTitle: '来源管理',
        subContent: '自动整合多渠道客户资产，形成企业统一客户库',
      },
      {
        subTitle: '线索管理',
        subContent: '无缝对接AI外呼高效触达客户，大幅提升线索转化率',
      },
      {
        subTitle: '智能销售',
        subContent: '精细化管理意向客户，加速销售进程，缩短成单周期',
      },
      {
        subTitle: '合同管理',
        subContent: '完整的在线销售台账，销售、财务逐级快速流转审批',
      },
    ],
  },
  {
    title: '销售流程自动化',
    desc: '解放销售生产力 200%人效提升',
    imgUrl:
      'https://cdn.byai.com/static/intro/img/smart-sale/%E9%94%80%E5%94%AE%E6%B5%81%E7%A8%8B%E8%87%AA%E5%8A%A8%E5%8C%96.png',
    sublist: [
      {
        subTitle: '线索获取',
        subContent: '从各种来源获得销售线索、潜在客户进入线索池',
      },
      {
        subTitle: '线索筛选',
        subContent: '智能呼叫中心通过AI外呼、人工外呼等方式批量触达客户，通话录音AI质检评分，高效筛查意向客户',
      },
      {
        subTitle: '客户跟进',
        subContent: '自定义客户跟进流程，客户资料全维度建档，洞察销售关键阶段，主动推送提醒销售跟进客户、执行任务',
      },
      {
        subTitle: '商机转化',
        subContent: '精细化管理意向客户，加速销售进程，缩短成单周期；客户公海高效流转，共享客户资源，建立自动回收机制',
      },
    ],
  },
];

// pc:content desc:mobile
const policyList = [
  {
    title: '销售漏斗分析',
    content: (
      <Box textAlign="center">
        从营销获客到获客成交，全渠道线索转化分析
        <br />
        辅助制定精准营销策略
      </Box>
    ),
    desc: '从营销获客到获客成交，全渠道线索转化分析',
    imgUrl:
      'https://cdn.byai.com/static/intro/img/smart-sale/%E9%94%80%E5%94%AE%E6%BC%8F%E6%96%97%E5%88%86%E6%9E%90.png',
  },
  {
    title: '销售业绩分析',
    content: (
      <Box textAlign="center">
        实时洞察团队业绩，及时调整销售策略
        <br />
        销售业绩自动排名
      </Box>
    ),
    desc: '实时洞察团队业绩，销售业绩自动排名',
    imgUrl:
      'https://cdn.byai.com/static/intro/img/smart-sale/%E9%94%80%E5%94%AE%E4%B8%9A%E7%BB%A9%E5%88%86%E6%9E%90.png',
  },
  {
    title: '销售行为分析',
    content: (
      <Box textAlign="center">
        销售行为全方位跟踪，随时了解销售进展，
        <br />
        激发全员营销潜力
      </Box>
    ),
    desc: '销售行为全方位跟踪，随时了解销售进展',
    imgUrl:
      'https://cdn.byai.com/static/intro/img/smart-sale/%E9%94%80%E5%94%AE%E8%A1%8C%E4%B8%BA%E5%88%86%E6%9E%90.png',
  },
  {
    title: '微信风控管理',
    content: (
      <Box textAlign="center">
        建立企业私域流量，客户资料长久保存
        <br />
        微信智能质检，规范员工行为
      </Box>
    ),
    desc: '建立企业私域流量，客户资料长久保存',
    imgUrl:
      'https://cdn.byai.com/static/intro/img/smart-sale/%E5%BE%AE%E4%BF%A1%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86.png',
  },
];

const technologyList = [
  {
    content: (
      <div>
        顶尖产研团队
        <br />
        中美两地联合算法团队
      </div>
    ),
    imgUrl: 'https://cdn.byai.com/static/intro/img/smart-sale/%E5%9B%A2%E9%98%9F.png',
  },
  {
    content: (
      <div>
        数十项发明专利和
        <br />
        软著
      </div>
    ),
    imgUrl: 'https://cdn.byai.com/static/intro/img/smart-sale/%E4%B8%93%E5%88%A9.png',
  },
  {
    content: (
      <div>
        自主研发AI语音
        <br />
        通话技术栈
      </div>
    ),
    imgUrl: 'https://cdn.byai.com/static/intro/img/smart-sale/AI%E8%AF%AD%E9%9F%B3.png',
  },
  {
    content: (
      <div>
        银行级数据安全体系
        <br />
        保障企业信息安全
      </div>
    ),
    imgUrl: 'https://cdn.byai.com/static/intro/img/smart-sale/%E6%95%B0%E6%8D%AE%E5%AE%89%E5%85%A8.png',
  },
];

const abilityList = [
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-sale/%E4%B8%93%E6%B3%A8%E9%94%80%E5%94%AE%E5%A2%9E%E9%95%BF.png',
    title: '专注销售增长',
    desc: (
      <Box textAlign="center">
        直击业务痛点，提供帮助
        <br />
        业绩提升的产品
      </Box>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-sale/%E4%B8%93%E4%B8%9A%E5%AE%A2%E6%9C%8D%E5%9B%A2%E9%98%9F.png',
    title: '专业客服团队',
    desc: (
      <Box textAlign="center">
        7x24小时服务保障，
        <br />
        管家式全程贴心服务
      </Box>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-sale/%E4%B8%93%E5%B1%9E%E6%88%90%E5%8A%9F%E7%AD%96%E7%95%A5.png',
    title: '专属成功策略',
    desc: (
      <Box textAlign="center">
        为大客户提供定制化的专
        <br />
        业整体解决方案
      </Box>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-sale/%E4%B8%93%E5%B1%9E%E6%88%90%E9%95%BF%E8%AE%A1%E5%88%92.png',
    title: '专属成长计划',
    desc: (
      <Box textAlign="center">
        提供增值的营销知识分
        <br />
        享，助力销售成长
      </Box>
    ),
  },
];

const partner = [
  'https://cdn.byai.com/node_front/1572610685731/%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8.png',
  'https://cdn.byai.com/node_front/1572610710237/%E4%B8%AD%E5%9B%BD%E8%81%94%E9%80%9A.png',
  'https://cdn.byai.com/node_front/1572610728974/%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1.png',
  'https://cdn.byai.com/node_front/1571811865505/360.png',
  'https://cdn.byai.com/node_front/1572610779650/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4.png',
  'https://cdn.byai.com/node_front/1572610794829/%E8%85%BE%E8%AE%AF.png',
  'https://cdn.byai.com/node_front/1575273096165/%E5%8C%97%E4%BA%AC%E7%A4%BE%E4%BF%9D%E5%B1%80.png',
  'https://cdn.byai.com/node_front/1572610833802/%E5%9B%BD%E5%AE%B6%E7%94%B5%E7%BD%91.png',
  ,
  'https://cdn.byai.com/node_front/1572610848839/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E6%B3%95%E9%99%A2.png',
  'https://cdn.byai.com/node_front/1572610872751/%E4%B8%AD%E5%9B%BD%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%99%A9.png',
  'https://cdn.byai.com/static/intro/img/part/58tongcheng.png',
  'https://cdn.byai.com/node_front/1572611056312/%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C.png',
  'https://cdn.byai.com/node_front/1572611090842/%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C.png',
  'https://cdn.byai.com/node_front/1572611108617/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AF%BF.png',
  'https://cdn.byai.com/node_front/1572611126075/%E6%99%BA%E8%81%94%E6%8B%9B%E8%81%98.png',
  'https://cdn.byai.com/node_front/1572611142485/%E5%AD%A6%E8%80%8C%E6%80%9D.png',
  'https://cdn.byai.com/node_front/1572611158756/%E6%96%B0%E4%B8%9C%E6%96%B9.png',
  'https://cdn.byai.com/node_front/1572611174619/%E5%A4%A7%E6%90%9C%E8%BD%A6.png',
  'https://cdn.byai.com/node_front/1572611196495/%E6%B1%BD%E8%BD%A6%E4%B9%8B%E5%AE%B6.png',
  'https://cdn.byai.com/node_front/1572611213607/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1.png',
];

const mobileExtraPartner = ['https://cdn.byai.com/static/intro/img/smart-sale/%E8%B4%9D%E5%A3%B3logo.png'];

const choiceList = [
  '中美两地联合算法团队',
  '数十项发明专利和软件著作权',
  '自主研发AI语音通话技术栈',
  '金融级数据安全防护',
  '7*24小时运营在线',
  '上门或远程培训服务',
  '行业专属成长计划',
  '全国300+本地化服务商',
];

const SmartSaleWrapper = styled.div`
  font-size: 18px;
  ${media.phone`
    font-size: 14px;
  `}
  h1 {
    font-size: 56px;
    ${media.phone`
      font-size: 38px;
    `}
  }
  h2 {
    font-size: 42px;
    ${media.phone`
      font-size: 28px;
    `}
  }
  h3 {
    font-size: 36px;
    ${media.phone`
      font-size: 23px;
    `}
  }
  h4 {
    font-size: 30px;
    ${media.phone`
      font-size: 20px;
    `}
  }
  h5 {
    font-size: 17px;
  }
  h1,
  h2 {
    border: none;
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.4;
  }
  img {
    margin: 0;
  }
  .carousel-indicators {
    bottom: -80px;
  }
  .carousel-indicators li {
    background-color: #3154d4;
  }
`;

const InnerWrap = styled(Box)`
  max-width: 1140px;
  margin: 0 auto;
`;

const SectionWrap = styled(Box)<{
  backgroundImage?: string;
  mobileBackgroundImage?: string;
}>`
  background-image: url('${props => props.backgroundImage}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  @media (max-width: 768px) {
    background-image: url('${props => props.mobileBackgroundImage}');
    background-position: center;
  }
`;

const ButtonWrap = styled(Box)<{ hoverBgcolor?: string }>`
  cursor: pointer;
  ${media.phone`
    width: 140px;
    height: 35px;
    font-size: 17px;
  `}
  ${props => {
    return (
      props.hoverBgcolor &&
      css`
        transition: all 0.3s ease-in-out;
        :hover {
          background-color: ${props.hoverBgcolor};
        }
      `
    );
  }}
`;
ButtonWrap.defaultProps = {
  width: 200,
  height: 50,
  borderRadius: 25,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  mx: 'auto',
  hoverBgcolor: '#3D5AFE',
};

const MobileArrowInfo = styled(Box)`
  width: 140px;
  height: 40px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

const SmartSale = () => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <SmartSaleWrapper>
          <SectionWrap
            color="#fff"
            backgroundImage="https://cdn.byai.com/static/intro/img/smart-sale/AICRM%E9%A6%96%E9%A1%B5%20PC%E5%A4%B4%E9%83%A8.png"
            mobileBackgroundImage="https://cdn.byai.com/static/intro/img/smart-sale/AICRM%E9%A6%96%E9%A1%B5%20APP%E5%A4%B4%E9%83%A8.png"
            height={['88vw', 620, 620]}
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt={['50px', '50px', '86px']}>
            <Box as="h3" mt={['47px', '94px', '110px']} mb={0}>
              百应AICRM
            </Box>
            <Box as="h1" my={0} textAlign="center">
              一站式营销型
              <Visible xs sm>
                <br />
              </Visible>
              智能化CRM
            </Box>
            <Hidden xs sm>
              <Box as="h4" mt={1.5}>
                自动化营销获客，数智化销售管理
              </Box>
            </Hidden>
            <Visible xs sm>
              <Box mt={1}>自动化营销获客，数智化销售管理</Box>
            </Visible>
            <ButtonWrap
              bgcolor="#fff"
              color="#2750D6"
              mt={[3, 3, 6]}
              mb={[6, 6, 10]}
              hoverBgcolor=""
              onClick={() => setVisible(true)}>
              立即体验
            </ButtonWrap>
            <Hidden xs sm>
              <Box fontWeight={600} fontSize={20} my={0}>
                用AI重新定义CRM，已服务42000+企业，驱动业绩持续增长
              </Box>
            </Hidden>
          </SectionWrap>
          <Visible xs sm>
            <Box pt={1}>
              <Row>
                {arrowInfoLeftLIst.map(item => (
                  <Col xs={12} sm={12}>
                    <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                      <MobileArrowInfo display="flex" alignItems="center" mt={1.5} fontSize={12} fontWeight={600}>
                        <Box width={18} ml="14px" mr={1}>
                          <img src={item.imgUrl} />
                        </Box>
                        {item.title}
                      </MobileArrowInfo>
                    </Box>
                  </Col>
                ))}
              </Row>
            </Box>
          </Visible>
          <Hidden xs sm>
            <Box textAlign="center" pt={9}>
              <Box as="h2">营销能力强、销售效率高、管理精细化</Box>
              <Box color="#666" mt="10px" fontSize={20}>
                击碎获客难、人效低、成本高、管理效率低等行业痛点
              </Box>
            </Box>
            <InnerWrap display="flex" alignItems="center" justifyContent="center">
              <Box>
                {arrowInfoLeftLIst.map((item, index) => (
                  <ArrowInfo key={index} {...item} mt={index === 0 ? 0 : 6} />
                ))}
              </Box>
              <Box width={700}>
                <img src="https://cdn.byai.com/static/intro/img/smart-sale/%E6%BC%8F%E6%96%97.png" />
              </Box>
              {arrowInfoRightLIst.map((item, index) => (
                <ArrowInfo key={index} {...item} />
              ))}
            </InnerWrap>
          </Hidden>
          <Visible xs sm>
            <Box as="h3" textAlign="center" mb={0}>
              赋能销售管理
              <br />
              智能获客转化
            </Box>
            <Box display="felx">
              <img src="https://cdn.byai.com/static/intro/img/smart-sale/%E6%BC%8F%E6%96%97-v2.png" />
            </Box>
          </Visible>
          <Hidden xs sm>
            <Box textAlign="center">
              <Box as="h2">4大数智场景，助力销售业绩持续增长</Box>
              <Box color="#666" mt="10px" fontSize={20}>
                拓新、成交、续约、增值，企业全链路增长引擎
              </Box>
            </Box>
          </Hidden>
          <Visible xs sm>
            <Box as="h3" textAlign="center">
              我们能为你做什么？
            </Box>
          </Visible>
          <SectionWrap mt={[0, 0, 8.5]} pb={[6, 6, 3]}>
            <InnerWrap>
              <SceneTitle
                title="自动化营销获客"
                content="社交化营销工具包，全渠道拓展客户"
                numberImg="https://cdn.byai.com/static/intro/img/smart-sale/01.png"
                tipImg="https://cdn.byai.com/static/intro/img/smart-sale/56%25%E7%BA%BF%E7%B4%A2%E5%A2%9E%E9%95%BF.png"
              />
              <DataInfoGroup dataSource={visitorList} />
              <Hidden xs sm>
                <ButtonWrap bgcolor="#2750D6" color="#fff" mt="-38px" onClick={() => setVisible(true)}>
                  免费体验
                </ButtonWrap>
              </Hidden>
            </InnerWrap>
          </SectionWrap>
          <SectionWrap
            pt={[0, 0, '244px']}
            pb={['110px', '110px', '200px']}
            backgroundImage="https://cdn.byai.com/static/intro/img/smart-sale/PC-%E6%99%BA%E8%83%BD%E5%8C%96%E9%94%80%E5%94%AE%E8%A7%A6%E8%BE%BE%E7%81%B0%E5%BA%95.png"
            mobileBackgroundImage="https://cdn.byai.com/static/intro/img/smart-sale/APP-%E6%99%BA%E8%83%BD%E5%8C%96%E9%94%80%E5%94%AE%E8%A7%A6%E8%BE%BE%E7%81%B0%E5%BA%95.png">
            <InnerWrap>
              <SceneTitle
                title="智能化销售触达"
                content="销售过程自动化，客户高效精准触达"
                numberImg="https://cdn.byai.com/static/intro/img/smart-sale/02.png"
                tipImg="https://cdn.byai.com/static/intro/img/smart-sale/60%25%E5%95%86%E6%9C%BA%E8%BD%AC%E5%8C%96%E6%8F%90%E5%8D%87.png"
              />
              <DataInfoGroup dataSource={reachList} isMobileCarousel />
              <Hidden xs sm>
                <ButtonWrap bgcolor="#2750D6" color="#fff" mt={5} onClick={() => setVisible(true)}>
                  免费体验
                </ButtonWrap>
              </Hidden>
            </InnerWrap>
          </SectionWrap>
          <SectionWrap pb={[6, 6, 4]} pt={[0, 0, 4]}>
            <InnerWrap>
              <SceneTitle
                title="数智化销售管理"
                content="客户全周期管理，销售流程自动化"
                numberImg="https://cdn.byai.com/static/intro/img/smart-sale/03.png"
                tipImg="https://cdn.byai.com/static/intro/img/smart-sale/200%25%E5%9B%A2%E9%98%9F%E6%95%88%E7%8E%87%E6%8F%90%E5%8D%87.png"
              />
              <DataInfoGroup dataSource={manageList} />
              <Hidden xs sm>
                <ButtonWrap bgcolor="#2750D6" color="#fff" mt={5} onClick={() => setVisible(true)}>
                  免费体验
                </ButtonWrap>
              </Hidden>
            </InnerWrap>
          </SectionWrap>
          <SectionWrap
            pt={[0, 0, 24]}
            pb={18}
            backgroundImage="https://cdn.byai.com/static/intro/img/smart-sale/PC-%E6%95%B0%E6%8D%AE%E5%8C%96%E6%99%BA%E8%83%BD%E5%86%B3%E7%AD%96%E7%81%B0%E5%BA%95.png"
            mobileBackgroundImage="https://cdn.byai.com/static/intro/img/smart-sale/APP-%E6%95%B0%E6%8D%AE%E5%8C%96%E6%99%BA%E8%83%BD%E5%86%B3%E7%AD%96%E7%81%B0%E5%BA%95.png">
            <InnerWrap>
              <SceneTitle
                title="数据化智能决策"
                content="多维度数据可视化报表，提升管理效能"
                numberImg="https://cdn.byai.com/static/intro/img/smart-sale/04.png"
                tipImg="https://cdn.byai.com/static/intro/img/smart-sale/65%25%E9%94%80%E5%94%AE%E4%B8%9A%E7%BB%A9%E6%8F%90%E5%8D%87.png"
              />
              <Visible xs sm>
                <Box width="88vw" mx="auto">
                  <DataInfoGroup dataSource={policyList} isMobileCarousel />
                </Box>
              </Visible>
              <Hidden xs sm>
                <Row>
                  {policyList.map(({ title, content, imgUrl }) => (
                    <Col key={title} xl={12} lg={12} md={12}>
                      <Box display="flex" flexDirection="column" alignItems="center" width={480} mx="auto">
                        <Box width={320}>
                          <img src={imgUrl} />
                        </Box>
                        <Box fontWeight={600} fontSize={26}>
                          {title}
                        </Box>
                        <Box textAlign="center" color="#666" mt={2} fontSize={20} lineHeight={2}>
                          {content}
                        </Box>
                      </Box>
                    </Col>
                  ))}
                </Row>
                <ButtonWrap bgcolor="#2750D6" color="#fff" mt={5} onClick={() => setVisible(true)}>
                  免费体验
                </ButtonWrap>
              </Hidden>
            </InnerWrap>
          </SectionWrap>
          <Visible xs sm>
            <Box fontWeight={600} fontSize={26} textAlign="center">
              为什么选择百应AICRM？
            </Box>
            <Box px="12vw" pt={1.5}>
              <Row>
                {choiceList.map(val => (
                  <Col xs={12} sm={12}>
                    <Box display="flex" alignItems="center" color="#666" mt="30px">
                      <Box width={17} mr={2}>
                        <img src="https://cdn.byai.com/static/intro/img/smart-sale/%E5%8B%BE.png" />
                      </Box>
                      <Box width={100}>{val}</Box>
                    </Box>
                  </Col>
                ))}
              </Row>
            </Box>
          </Visible>
          <Hidden xs sm>
            <Box textAlign="center" mt={19}>
              <Box as="h3">技术优势</Box>
              <Box color="#666" fontSize={20}>
                自主研发AI语音技术栈，提供银行级数据安全体系
              </Box>
            </Box>
            <InnerWrap>
              <Box display="flex" justifyContent="space-around" mt={10}>
                {technologyList.map((item, index) => (
                  <ImageInnerTitle key={index} {...item} />
                ))}
              </Box>
            </InnerWrap>
            <Box textAlign="center" mt={19}>
              <Box as="h3">服务优势</Box>
              <Box color="#666" fontSize={20}>
                以客户成功为目标，贯穿客户生命周期的服务体系
              </Box>
            </Box>
            <FourCol ability={abilityList} bgc="#fff" titleBreak />
          </Hidden>
          <Partner title="42000+家企业的共同选择" partner={partner} mobileExtraPartner={mobileExtraPartner} />
          <VoiceFooter
            title="现在，就来探索数智化营销，驱动业务增长"
            btn="免费体验"
            mTitle1={<Box mx="auto">免费领取体验机会</Box>}
            mTitle2={<Box mx="auto">打造顶尖销售团队</Box>}
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </SmartSaleWrapper>
      )}
    </Layout>
  );
};

export default SmartSale;
