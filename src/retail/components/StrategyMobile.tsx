import { FC } from 'react';
import styled from 'styled-components';

export interface IStrategyMobileProps {
  title: string | string[];
  desc?: string;
  colorBg?: string;
  imgSrc: string;
}

const Wrapper = styled.div<{ colorBg?: string }>`
  padding: 40px 8px;
  background: ${props => props.colorBg || '#ffffff'};
  text-align: center;

  .title {
    font-size: 24px;
    font-weight: 500;
    color: #000000;
    line-height: 40px;
  }

  .desc {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    line-height: 24px;
    margin-bottom: 40px;
  }

  img {
    margin-bottom: 0;
  }
`;

const StrategyMobile: FC<IStrategyMobileProps> = ({ title, desc, colorBg, imgSrc }) => {
  title = Array.isArray(title) ? title : [title];
  return (
    <Wrapper colorBg={colorBg}>
      {title.map(t => {
        return <div className="title">{t}</div>;
      })}
      <div className="desc">{desc}</div>
      <img src={imgSrc} />
    </Wrapper>
  );
};

export default StrategyMobile;
