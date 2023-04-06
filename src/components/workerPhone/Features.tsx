import { FC, ReactNode } from 'react';
import FeatureIntroduce, { IFeatureIntroduceProps } from '../voice-robot/FeatureIntroduce';

const circle = '//cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B92-%E5%BA%95.png';
const circleRect = '//cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B91%E5%BA%95.png';
const circleWithRect = '//cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B94-%E5%BA%95.png';

const FEATURE_INFO: IFeatureIntroduceProps[] = [
  {
    title: (
      <>
        数据支持云端存储
        <br />
        业务过程可精准追溯
      </>
    ),
    textOne:
      '支持客户信息、聊天内容存储云端，管理后台支持随时调取记录，避免业务人员在手机端删除聊天记录，可有效防止客户资源流失，大幅降低企业运营风险。',
    pcImgs: [
      {
        src: '//cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B91-1.png',
        style: { width: '550px', top: '20px' },
        className: ['animate__fadeInDown'],
      },
      {
        src: 'https://cdn.byai.com/static/oss-script/2a4242a83f817b4879389b5343756660.png',
        style: { width: '218px', top: '275px', left: '24px' },
        className: ['animate__fadeInBottomLeft', 'animate__ahead_500ms'],
      },
      {
        src: '//cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B91-3.png',
        style: { width: '270px', top: '169px', left: '234px' },
        className: ['animate__fadeInBottomRight', 'animate__ahead_500ms'],
      },
    ],
    mobileImg: 'https://cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B91.png',
    background: [
      `url(${circleRect}) rgba(43, 88, 249, 0.03) no-repeat bottom left / 120px`,
      `url(${circleRect}) rgba(249, 250, 255) no-repeat -6px 0px / 47px`,
    ],
  },
  {
    title: (
      <>
        双重加密
        <br />
        客户数据安全强保障
      </>
    ),
    textOne:
      '构建银行级数据安全体系，全方位保护客户资源防丢失窃取，利用AI技术规范员工行为，针对数十种敏感操作实现后台实时预警，保障互动、沟通过程专业化。',
    pcImgs: [
      {
        src: 'https://cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B92-2.png',
        style: { width: '550px', top: '20px', right: 0 },
        className: ['animate__fadeInDown'],
      },
      {
        src: 'https://cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B92-3.png',
        style: { width: '250px', top: '178px', right: '60px' },
        className: ['animate__fadeInBottomRight'],
      },
      {
        src: 'https://cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B92-1.png',
        style: { width: '127px', top: '285px', right: '392px' },
        className: ['animate__fadeInBottomLeft'],
      },
    ],
    mobileImg: '//cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B92.png',
    background: [
      `url(${circle}) no-repeat 100% calc(100% - 53px) / 132px`,
      `url(${circle}) no-repeat right center / 74px`,
    ],
  },
  {
    title: (
      <>
        运用数智化手段
        <br />
        提升客户体验
      </>
    ),
    textOne:
      '通过大数据技术进行智能分析客户对话，帮助企业完成客户画像和行为洞察，精准定位销售过程中出现的问题，赋能销售工作复盘，提高管理效率。',
    pcImgs: [
      {
        src: 'https://cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B93-1.png',
        style: { width: '550px', top: '20px' },
        className: ['animate__fadeInDown'],
      },
      {
        src: 'https://cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B93-2.png',
        style: { width: '290px', top: '230px', left: '260px' },
        className: ['animate__rotateIn', 'animate__delay_600ms'],
      },
    ],
    mobileImg: '//cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B93.png',
    background: ['rgba(43, 88, 249, 0.03)', 'rgba(249, 250, 255, 1)'],
  },
  {
    title: (
      <>
        工作轨迹监管
        <br />
        外勤动态实时知晓
      </>
    ),
    textOne:
      '实时记录员工外勤行动轨迹，包括停留位置、停留时长等，有效监管员工拜访日程，工作时间轴一目了然，赋能管理者随时掌握每一位业务人员的工作动态。',
    pcImgs: [
      {
        src: 'https://cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B94-1.png',
        style: { width: '550px', top: '20px', right: 0 },
        className: ['animate__fadeInDown'],
      },
      {
        src: 'https://cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B94-2.png',
        style: { width: '550px', top: '316px', right: 0 },
        className: ['animate__fadeInUp'],
      },
      {
        src: 'https://cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B94-3%E5%AE%9A%E4%BD%8D.png',
        style: { width: '35px', top: '348px', right: '152px' },
        className: ['animate__bounceIn', 'animate__delay_500ms'],
      },
    ],
    mobileImg: '//cdn.byai.com/static/intro/img/workphone/%E4%BA%AE%E7%82%B94.png',
    background: [
      `url(${circleWithRect}) no-repeat calc(50% - 490px) 46px /283px 226px`,
      `url(${circleWithRect}) no-repeat calc(100% + 35px) 90px /95px`,
    ],
  },
];

interface IProps {
  className?: string;
  children?: ReactNode;
}

const RawFeatures: FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      {FEATURE_INFO.map((item, i) => (
        <FeatureIntroduce
          {...item}
          key={i}
          imgFirst={i % 2 !== 0}
          className="relative-position"
          padding={['142px 0px', '']}
        />
      ))}
    </div>
  );
};

export { RawFeatures };
