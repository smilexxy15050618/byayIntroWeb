import React, { VFC } from 'react';
import * as SC from './styled';
interface CaseListMobileProps {
  topImg: string;
  title: string[];
  subTitle: string;
  desc: string;
  clickUrl: string;
}
const CaseListMobile: VFC<CaseListMobileProps> = ({ topImg, title = [], subTitle, desc, clickUrl }) => {
  return (
    <SC.CasesMobileList onClick={() => window.open(clickUrl)}>
      <SC.TopImg>
        <img src={topImg} alt="" />
      </SC.TopImg>
      <SC.DescContent>
        <div className="title">
          {title.map((item, index) => (
            <span key={`desc-span-${index}`}>{item}</span>
          ))}
        </div>
        <div className="sub-title">{subTitle}</div>
        <div className="desc-font">{desc}</div>
        <SC.ViewDetailsWrapper>{`查看详情 >`}</SC.ViewDetailsWrapper>
      </SC.DescContent>
    </SC.CasesMobileList>
  );
};

export default CaseListMobile;
