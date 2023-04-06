import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Col, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { useScaleRate } from '../../../lib/hooks-utils';
import ByProgressSwiper from '../../common/ByProgressSwiper';
import AIEmployeeCard from './AIEmployeeCard-p';
const BASE_URL = `https://cdn.byai.com/static/intro/img/index/version2021/ai-employee`;
const BG = `${BASE_URL}/bg.png`;
const BG_XS = `${BASE_URL}/bg-xs.png`;
const INFOS = [
  {
    title: '最新资讯速递',
    desc: '百应获评“2021最值得推荐私域工具”',
    src: '//cdn.byai.com/by-fe-cdn/static/pmp/980dc2eb-fff6-42b3-8c23-beffc8c7b23a.png',
    background: '#CFF2FF',
    url: 'https://mp.weixin.qq.com/s/NM2T_TEytHeMaeDOWKEH7A',
  },
  {
    title: '零售行业增长解决方案',
    desc: '上千家TOP品牌都在用',
    src: '//cdn.byai.com/by-fe-cdn/static/pmp/f545f679-9c77-403b-a4d2-6b459291d8d8.png',
    background: '#C7F6E4',
    url: 'https://ds.byai.com',
    showNewIcon: true,
    iconText: '查看',
  },
  {
    title: '荣誉资质',
    desc: '连续两年荣登杭州准独角兽榜单',
    src: '//cdn.byai.com/by-fe-cdn/static/pmp/dc01f65c-c0e9-46a8-9d50-ec8f3fb4cddc.png',
    background: '#E7E6FB',
    url: 'https://mp.weixin.qq.com/s/o8ZUSoftKHjagcfWP7f2Bw',
  },
];
interface IProps {
  className?: string;
  children?: ReactNode;
}

const Title = styled.div`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 500;
  color: #000000;
  line-height: 68px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 40px;
    color: #000000;
    margin-bottom: 0px;
  }
`;

const Desc = styled.div`
  width: 860px;
  height: 96px;
  font-size: 16px;
  color: #000000;
  line-height: 32px;
  text-align: center;
`;
const FloatCards = styled.div<{ scale: number }>`
  position: absolute;
  top: -5.3%;
  left: 50%;
  transform-origin: center top;
  transform: translateX(-50%) scale(${props => props.scale});
  width: 1200px;
  padding: 24px 12px 12px;
  background: #ffffff;
  border-radius: 10px;
  .cards {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 15px 15px 5px;
    width: 320px;
    background: #ffffff;
    border-radius: 8px;
  }
`;
const FindHotSpot = styled.div`
  position: relative;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #2f82f8;
  line-height: 2.4rem;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    color: #2f82f8;
  }
  .icon {
    position: absolute;
    top: 0;
    left: calc(50% + 5rem);
    transition: all 0.2s;
    margin-left: 0.4rem;
  }
  .font {
    display: inline-block;
  }
  .font:hover {
    .icon {
      transition: all 0.2s;
      margin-left: 1rem;
    }
    color: #2b58f9;
  }
`;
const RawAIEmployee: FC<IProps> = ({ className }) => {
  // 1264px时任然为设计稿宽度，1264以下则按 视口宽度/1264 的比例进行缩放
  const scale = useScaleRate(1264, [769, 1264]);
  return (
    <div className={className}>
      <FloatCards scale={scale}>
        <Hidden xs sm>
          <Row className="cards">
            {INFOS.map((item, i) => (
              <Col sm={8} key={i}>
                <AIEmployeeCard {...item} />
              </Col>
            ))}
          </Row>
        </Hidden>
        {/* 移动端 */}
        <Visible xs sm>
          <ByProgressSwiper
            className="cards"
            noProgress={true}
            previewWidth="0px"
            contentPadding="0px"
            progressPadding="0px">
            {INFOS.map((item, i) => {
              return <AIEmployeeCard {...item} key={item.title} />;
            })}
          </ByProgressSwiper>
        </Visible>
        <Link href="/news">
          <FindHotSpot>
            <div className="font">
              发现更多热点
              <div className="icon">&gt;</div>
            </div>
          </FindHotSpot>
        </Link>
      </FloatCards>
      <Hidden xs sm>
        <Title>AI数字员工，面向未来的智慧型生产要素</Title>
        <Desc>
          依托在AI（人工智能）、CC（通信联络与互动）、BI（数据与业务智能）领域的核心技术能力，百应提供面向未来的全栈式AI数字员工解决方案，赋能金融、政务、电商、教育等行业客户与用户进行三维、实时多模态地智能互动，打造未来式更智能的沟通体验，让每一次沟通具备增长价值。
        </Desc>
      </Hidden>
      <Visible xs sm>
        <Title>
          AI数字员工
          <br />
          面向未来的智慧型生产要素
        </Title>
      </Visible>
    </div>
  );
};

export type IAIEmployeeProps = IProps;
const AIEmployee = styled(RawAIEmployee)<IAIEmployeeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: url(${BG}) bottom center/cover no-repeat;
  padding: 196px 20px 100px;
  position: relative;
  @media (max-width: 768px) {
    padding: 197px 0px 57px;
    background: url(${BG_XS}) bottom center/cover no-repeat;
  }
`;
export default AIEmployee;
