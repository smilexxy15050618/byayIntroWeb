import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';
import { Label } from '../product/SolutionMobile';

const TopWrapper = styled.div`
  width: 1140px;
  margin: 0 auto 50px;
  /* TODO: 移动端设计稿出来后移除 */
  ${media.phone`
    width: 540px;
  `}
`;

const TabWrapper = styled.div`
  overflow: hidden;
  display: flex;
  padding: 0 280px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  /* TODO: 移动端设计稿出来后移除 */
  ${media.phone`
    padding: 30px;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 60px;
`;

const SubTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 30px;
`;

const Content = styled.div``;

const Scheme = styled.div`
  color: rgba(0, 0, 0, 0.5);
  p {
    line-height: 1.8;
    margin-bottom: 40px;
  }
`;

const Image = styled.img`
  margin-right: 56px;
  object-fit: contain;
  width: 300px;
  /* TODO: 移动端设计稿出来后移除 */
  ${media.phone`
    display: none;
  `}
`;

const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  > ${Label} {
    margin-right: 30px;
  }
`;
const hover = `
  color: #3153D4;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 10px;  
    left: 0;
    bottom: 0;
    transform: translateY(50%);
    background-color: #3153D4;
    border: 1px solid transparent;
    border-radius: 12px;
  }
`;

const Tab = styled.div<{ hover?: boolean }>`
  position: relative;
  padding-bottom: 20px;
  ${props => (props.hover ? hover : '')}
  &:hover {
    ${hover}
  }
`;

interface ISceneItem {
  title: string;
  imgUrl: string;
  label: string[];
  content: ReactNode;
}

interface SolutionsProps {
  data: ISceneItem[];
}

export const SolutionsForPC: FC<SolutionsProps> = ({ data }) => {
  const [currIndex, setCurrIndex] = useState(0);

  const handleHover = index => {
    setCurrIndex(index);
  };

  return (
    <TopWrapper>
      <TabWrapper>
        {data.map((item, i) => {
          const name = item.title;
          return (
            <Tab onMouseOver={() => handleHover(i)} hover={currIndex === i}>
              {name}
            </Tab>
          );
        })}
      </TabWrapper>
      {data.map((item, i) => {
        return (
          <ContentWrapper style={{ display: i === currIndex ? 'flex' : 'none' }}>
            <Image src={item.imgUrl} />

            <Content>
              <SubTitle>应用场景</SubTitle>
              <LabelWrapper>
                {item.label.map(name => (
                  <Label size="large">{name}</Label>
                ))}
              </LabelWrapper>
              <SubTitle>解决方案</SubTitle>
              <Scheme>{item.content}</Scheme>
            </Content>
          </ContentWrapper>
        );
      })}
    </TopWrapper>
  );
};

export default SolutionsForPC;
