import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import PartnerSystemCard from './PartnerSystemCard';

const PREFIX = 'https://cdn.byai.com/static/official-website/cooperation/partner-system';
const LEFT_BOTTOM_BG = `${PREFIX}/left-bottom-bg.png`;
const CARDS_INFO = [
  {
    title: 'AI数智赋能合作',
    desc: '面向大数据、云通讯、传统呼叫中心、CRM、电商平台等服务商，百应AI产品及服务将赋能合作伙伴快速打造智能联络中心，实现业务全链路效率升级，提升企业市场竞争力。',
  },
  {
    title: 'AI技术生态合作',
    desc: '面向各行业具有开发实施能力的软件开发商，百应提供标准且丰富的API与SDK，以强大的AI底层技术平台和产品能力，完善伙伴产品及解决方案，助力伙伴商业变现。',
  },
  {
    title: 'AI解决方案合作',
    desc: '面向具备区域市场拓展及产品销售能力的伙伴，基于百应产品矩阵及行业解决方案，共同拓展国内外政企市场，提供更智能、更高效、更精准和更有温度的服务。',
  },
];
// 内容部分
const Desc = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 588px;
  box-sizing: content-box;
  padding-bottom: 132px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-bottom: 24px;
    height: auto;
  }
`;
const Title = styled.div`
  flex: 1;
  height: 100%;
  width: 320px;
  padding-top: 40px;
  margin-right: 40px;
  /* box-sizing: content-box; */
  /* .title-content {
    width: 320px;
    height: 100%;
  } */
  .big-title {
    font-size: 40px;
    font-weight: 600;
    color: #000000;
    line-height: 56px;
  }
  .linear-line {
    margin: 32px 0px 35px;
    width: 160px;
    height: 6px;
    background: linear-gradient(90deg, #8aa2ff 0%, rgba(156, 187, 255, 0) 100%);
  }
  .small-title {
    width: 320px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 24px;
  }
  @media (max-width: 768px) {
    flex: 1;
    height: auto;
    width: auto;
    margin: 0 0 24px 0;
    padding: 0;
    .big-title {
      font-size: 24px;
      line-height: 33px;
    }
    .linear-line,
    .small-title {
      display: none;
    }
  }
`;
const CardList = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    > div {
      margin-bottom: 16px;
    }
  }
`;
interface IProps {
  className?: string;
  children?: ReactNode;
  setVisible: () => void;
}
const RawPartnerSystem: FC<IProps> = ({ className, setVisible }) => {
  const [actIndex, setActIndex] = useState(0);
  return (
    <div className={className}>
      <Desc>
        <Title>
          <div className="big-title">百应生态合作体系</div>
          <div className="linear-line"></div>
          <div className="small-title">
            构建生态圈，打造同心圆，
            <br />
            创建“共生型”合作伙伴生态体系
          </div>
        </Title>
        <CardList>
          {CARDS_INFO.map((item, i) => (
            <PartnerSystemCard
              onMouseEnter={() => setActIndex(i)}
              onClick={setVisible}
              title={item.title}
              desc={item.desc}
              key={i}
              isActive={actIndex === i}
            />
          ))}
        </CardList>
      </Desc>
    </div>
  );
};

export type IPartnerSystemProps = IProps;
const PartnerSystem = styled(RawPartnerSystem)<IPartnerSystemProps>`
  padding: 132px 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${LEFT_BOTTOM_BG}) no-repeat left 0px bottom 64px / 280px 390px;
  background-color: #f5f7fa;
  @media (max-width: 768px) {
    padding: 0;
    background: #f5f7fa;
  }
`;
export default PartnerSystem;
