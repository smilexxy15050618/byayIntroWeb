import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Box from '../Box';

interface ISceneItem {
  title: string;
  imgUrl: ReactNode;
  label: string[];
  content: ReactNode;
}

const Wrapper = styled.div`
  width: 320px;
  margin: 48px auto 0;
`;

const TabWrapper = styled.div`
  display: flex;
  height: 38px;
`;

const Tab = styled.div<{ active: boolean }>`
  display: flex;
  position: relative;
  justify-content: center;
  padding-top: 10px;
  cursor: pointer;
  flex: 1;
  border-top: 4px solid fff;
  border-radius: 8px 8px 0 0;
  box-shadow: ${props => (props.active ? '0 -4px 20px -3px rgba(47, 130, 248, .2)' : 'none')};
  background: ${props => (props.active ? 'white' : '#f8f9fb')};
  z-index: ${props => (props.active ? '1' : '2')};
`;

const Image = styled.img`
  height: 22px;
`;

const TabContentWrapper = styled.div`
  position: relative;
  padding: 25px 36px;
  box-shadow: 0 2px 13px rgba(47, 130, 248, 0.2);

  &::before {
    content: '';
    top: 0;
    left: 0;
    display: block;
    position: absolute;
    background: #fff;
    height: 10px;
    width: 100%;
    z-index: 100;
  }
`;

const SubTitle = styled.h4`
  margin-top: 12px;
  text-align: center;
  font-weight: normal;
`;

const LabelWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

type LabelSize = 'default' | 'large';

export const Label = styled.div<{ size?: LabelSize }>`
  margin-bottom: 18px;
  width: ${props => (props.size === 'large' ? '140px' : '110px')};
  line-height: ${props => (props.size === 'large' ? '40px' : '25px')};
  border: 1px solid #3153d4;
  border-radius: ${props => (props.size === 'large' ? '20px' : '13px')};
  text-align: center;
  color: #3153d4;
`;

const Content = styled.div`
  color: #666666;
  > p {
    margin-bottom: 12px;
  }
`;

const More = styled.a`
  display: block;
  margin: 23px 0 30px;
  text-align: center;
  color: #3153d4 !important;
`;

const SolutionMobile: React.FC<{ data: ISceneItem[] }> = ({ data }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Wrapper>
      <TabWrapper>
        {data.map((item, index) => {
          const isActive = tabIndex === index;
          return (
            <Tab active={isActive} onClick={() => setTabIndex(index)}>
              <Box color={isActive ? '#364AD8' : '#6D7278'}>
                {item.imgUrl}
                <span>{item.title}</span>
              </Box>
            </Tab>
          );
        })}
      </TabWrapper>
      <TabContentWrapper>
        <SubTitle>应用场景</SubTitle>
        <LabelWrap>
          {data[tabIndex].label.map(labelName => (
            <Label>{labelName}</Label>
          ))}
        </LabelWrap>
        <SubTitle>解决方案</SubTitle>
        {data[tabIndex].content}
      </TabContentWrapper>
      <More href="https://www.byai.com/solutions">更多行业案例&emsp;→</More>
    </Wrapper>
  );
};

export default SolutionMobile;
