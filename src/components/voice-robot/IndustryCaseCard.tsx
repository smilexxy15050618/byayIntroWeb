import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 442px;
  margin: 0px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex: none;
  }
`;
const TextBlock = styled.div`
  margin-left: 40px;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  flex: 1;
  /* height: 442px; */
  overflow-y: hidden;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 23px 40px;
    margin-left: 0;
    /* justify-content: space-between; */
  }
`;
const CaseTitle = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #000000;
  line-height: 28px;
  letter-spacing: 1px;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 16px;
  }
`;
// 灰色背景小标题
const SubTitle = styled.div`
  margin-bottom: 16px;
  text-align: center;
  line-height: 28px;
  width: 81px;
  height: 28px;
  background: #eeeeee;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 400;
  color: #262626;
  margin-top: 32px;

  @media (max-width: 768px) {
    margin: 16px 0 10px;
    width: 56px;
    height: 19px;
    background: #eeeeee;
    border-radius: 2px;
    font-size: 11px;
    color: #595959;
    line-height: 19px;
    text-align: center;
  }
`;

const Content = styled.div`
  height: 382px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    // 整个滚动条
    display: none;
  }
  > div:first-child {
    margin-top: 0;
  }
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Decs = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #262626;
  line-height: 28px;
  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 22px;
  }
`;
export interface ICaseInfo {
  title: string;
  img: string;
  imgXs: string;
  content: { subTitle: string; desc: string | ReactNode }[];
}
interface IProps {
  className?: string;
  children?: ReactNode;
  caseInfo: ICaseInfo;
  isMobile: boolean;
}

const RawIndustryCaseCard: FC<IProps> = ({ className, caseInfo, isMobile }) => {
  const { title, img, imgXs, content } = caseInfo;
  return (
    <div className={className}>
      <Img src={isMobile ? imgXs : img} />
      <TextBlock>
        <CaseTitle>{title}</CaseTitle>
        <Content>
          {content.map((item, i) => (
            <>
              <SubTitle>{item.subTitle}</SubTitle>
              <Decs>{item.desc}</Decs>
            </>
          ))}
        </Content>
      </TextBlock>
    </div>
  );
};

export type IIndustryCaseCardProps = IProps;
const IndustryCaseCard = styled(RawIndustryCaseCard)<IIndustryCaseCardProps>`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
  padding: 60px;
  background: #ffffff;
  box-shadow: 0px 8px 80px 0px #eef2ff;
  border-radius: 8px;
  min-width: 1200px;
  @media (max-width: 768px) {
    padding: 0px;
    min-width: unset;
    width: 100%;
    box-shadow: 0px 0px 25px 0px rgba(65, 100, 255, 0.1);
    border-radius: 8px;
    flex-direction: column;
  }
`;
export default IndustryCaseCard;
