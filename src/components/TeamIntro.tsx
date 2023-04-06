import * as React from 'react';
import { Intro, Title } from './service';
import { Team } from './about';

const TEAM_MEMBER = [
  {
    name: '泽远',
    position: '创始人/CEO',
    desc: '毕业于华中科技大学，知名人工智能和大数据领域专家。曾先后就职于华为、腾讯、阿里巴巴。于2010年加入阿里巴巴，先后主导淘宝网，阿里云、达摩院的大数据和人工智能相关领域工作。带领团队建立了阿里集团大数据体系和算法平台。阿里云全球首批MVP(最具价值专家)， 大数据领域知名开源软件DataX发起者。',
    image: '//cdn.byai.com/static/official-website/technology/zeyuan3.png',
  },
  {
    name: '式开',
    position: 'CTO/联合创始人',
    desc: '毕业后在阿里工作5年，参与和主导大数据平台的变革，并做为负责人建立了一套基于元数据的数据治理体系；而后在有赞工作3年，作为大数据部门和基础服务中心负责人，主导整体架构从服务化到平台化，以及大数据平台V2.0全面升级。',
    image: '//cdn.byai.com/static/official-website/technology/chenhuajiang.png',
  },
  {
    name: '盘古',
    position: '销售VP',
    desc: 'ORACLE、COMPAQ等世界 500 强 企业从事销售管理工作，期间曾获得12 次全球以及亚太销售及销售管理奖项。上海中信、百胜软件等国内上市软件企业担任CMO ，连续创业者， 畅销书、创新创业理论书 «迭代力» 作者。',
    image: '//cdn.byai.com/static/official-website/technology/panyonghuan.png',
  },
  {
    name: '会东',
    position: '首席科学家',
    desc: '纽约州立大学石溪分校计算机系博士。以第一作者在Pattern Recognition, IEEE TCSVT, Image and Vision Computing等国际权威机器学习和人工智能期刊发表论文多篇。参与哈佛大学、巴黎中央理工学院、里昂中央理工学院、美国强生公司、人工智能初创公司 Phiar 等高校和公司的研究项目。',
    image: '//cdn.byai.com/static/official-website/technology/liuhuidong.png',
  },
  {
    name: '天烬',
    position: '首席架构师/联合创始人',
    desc: '曾担任阿里云大数据集成 平台负责人。阿里云MVP(最具价值专家)。先后参与和主导多个大数据平台核心系统研发。阿里云数据同步团队负责人，并发起开源了著名开源项目DataX3.0。',
    image: '//cdn.byai.com/static/official-website/technology/liupeng1.png',
  },
  {
    name: '晨翔',
    position: '客户成功负责人/联合创始人',
    desc: '曾任腾讯SNG手机QQ团队产品技术负责人。阿里巴巴大数据平台资深技术专家、腾讯技术管理委员会成员，长期负责产品及技术，连续创业者。',
    image: '//cdn.byai.com/static/official-website/technology/chenmingwu1.png',
  },
  {
    name: '准提',
    position: '产品总监',
    desc: '曾任阿里巴巴资深产品专家，上上签产品总监、东家产品总监，2011年加入阿里巴巴，拥有丰富的产品团队管理经验，多次主导手机淘宝，淘宝网，天猫，阿里妈妈，无线商家等商业化产品，商家生态赋能等工作。13年toB和toC产品经验，带领团队服务亿万级别用户和千万级别商家，曾获多次获得淘宝创新奖，阿里妈妈创新奖，多次完成从0到亿万GMV的商业化产品。',
    image: '//cdn.byai.com/static/official-website/technology/shenrunquan.png',
  },
  {
    name: '路西',
    position: 'HRVP',
    desc: '东华大学工商管理硕士，18年跨国公司工作经验，15年人力资源管理经验，10年金融行业经验。先后在渣打银行（中国）有限公司、法国雅高集团（上海子公司）、恒生银行（中国）、点融网负责人力资源管理工作，帮助公司在业务快速发展期快速扩充高品质团队、构建完善的人力资源体系。',
    image: '//cdn.byai.com/static/official-website/technology/lina.png',
  },
  {
    name: '老抖',
    position: '产品总监',
    desc: '哈尔滨工业大学工学硕士（NLP方向）；曾任阿里巴巴资深技术专家，51信用卡、艾耕科技的大数据，人工智能平台负责人。在阿里参与年营收超10亿的大数据商业化产品-生意参谋的产品建设，在51信用卡负责从0到1搭建大数据平台及其相关数据工具建设，在艾耕科技负责内容领域AI产品链路建设；具有丰富的大数据中台、AI中台及AI相关商业化落地的产品实践经验。',
    image: '//cdn.byai.com/static/official-website/technology/wangyiding.png',
  },
];

const TEAM_SCHOOLS = [
  '//cdn.byai.com/static/official-website/school-logo/school1.png',
  '//cdn.byai.com/static/official-website/school-logo/school2.png',
  '//cdn.byai.com/static/official-website/school-logo/school3.png',
  '//cdn.byai.com/static/official-website/school-logo/school4.png',
  '//cdn.byai.com/static/official-website/school-logo/school5.png',
  '//cdn.byai.com/static/official-website/school-logo/school6.png',
  '//cdn.byai.com/static/official-website/school-logo/school7.png',
  '//cdn.byai.com/static/official-website/school-logo/school8.png',
  '//cdn.byai.com/static/official-website/school-logo/school9.png',
  '//cdn.byai.com/static/official-website/school-logo/school10.png',
];

const TEAM_INTRO = (
  <>
    百应科技在AI领域拥有资深技术团队，其核心团队拥有两名阿里云MVP及多名来自阿里、腾讯的核心总监、人工智能科学家和多位技术骨干，也有来自于海内外顶尖院校的精英伙伴。
    <br />
    包括麻省理工学院、卡内基梅隆大学、加州大学伯克利分校、哥伦比亚大学、加州大学洛杉矶分校、密歇根大学、瑞典皇家理工大学，
    国内的香港科技大学、香港理工大学、清华大学、北京大学、复旦大学、浙江大学、中国科学技术大学、哈尔滨工业大学、华中科技大学等。
  </>
);

interface DescWrapperProps {
  title: string;
  desc?: string;
}

const TeamIntro: React.SFC<DescWrapperProps> = ({ title, desc }) => (
  <Intro bottom={80}>
    <Title title={title} desc={desc} />
    <Team teamList={TEAM_MEMBER} teamIntro={TEAM_INTRO} teamSchools={TEAM_SCHOOLS} />
  </Intro>
);

export default TeamIntro;
