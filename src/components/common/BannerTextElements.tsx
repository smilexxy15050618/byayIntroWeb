import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { cssSwitch } from '../../lib/utils';
import ByNormalBtn from './ByNormalBtn';
export const BASE_URL = 'https://cdn.byai.com/static/intro/img/Banner/2021-3-';
// 通用蓝色背景按钮
export const BlueBtn: FC<{ onClick: () => void; children?: ReactNode; className?: string }> = ({
  onClick,
  children,
}) => (
  <ByNormalBtn
    onClick={() => onClick()}
    color="#FFFFFF"
    background="#2B58F9"
    bigStyle={`
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    padding: 14px 32px;
  `}
    smallStyle={`
    line-height: 22px;
    padding: 11px 32px;
  `}>
    {children}
  </ByNormalBtn>
);
// 通用透明底蓝色边框按钮
export const WhiteBtn: FC<{ onClick: () => void; children?: ReactNode; className?: string }> = ({
  onClick,
  children,
}) => (
  <ByNormalBtn
    onClick={() => onClick()}
    color="#2B58F9"
    background="transparent"
    bigStyle={`
    border: 1px solid #2B58F9;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    padding: 14px 32px;
  `}
    smallStyle={`
    line-height: 22px;
    padding: 11px 32px;
  `}>
    {children}
  </ByNormalBtn>
);
// 通用大title
export const BigTitle = styled.div<{ color?: string }>`
  font-size: 40px;
  font-weight: 500;
  color: ${props => props.color || '#000000'};
  line-height: 56px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 32px;
    line-height: 48px;
  }
`;

// 通用段落文字
export const Desc = styled.div<{ width?: string }>`
  width: ${props => props.width || '548px'};
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.color || 'rgba(0, 0, 0, 0.65)'};
  line-height: 30px;
  text-align: justify;
  @media (max-width: 768px) {
  }
`;
// 通用文字区布局
export const TextArea = styled.div<{ spaces: string[]; margin?: string | string[] }>`
  ${props => {
    const spaces = props.spaces[0].split(' ');
    const result = spaces
      .map((item, i) => {
        return `
        &>:nth-child(${i + 1}) {
          margin-bottom: ${item};
        }
        & {
          margin-bottom: 0;
        }
      `;
      })
      .join();
    return result;
  }}

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    & > :nth-child(n) {
      margin: 0px;
    }
    ${props => {
      const spaces = props.spaces[1].split(' ');
      const result = spaces
        .map((item, i) => {
          return `
          &>:nth-child(${i + 1}) {
            margin-bottom: ${item};
          }
          & {
            margin-bottom: 0;
          }
        `;
        })
        .join();
      return result;
    }}
  }

  ${props => cssSwitch(props.margin, 'margin', ['0', '0'], false)}
`;
// 生态合作页面 xs title
export const SmallSubTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #0d1924;
  line-height: 40px;
  text-align: center;
`;
// 客户案例大title
export const CustomerCaseTitle = styled.div<{ color?: string }>`
  height: 56px;
  font-size: 40px;
  font-weight: 500;
  color: #262626;
  line-height: 56px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: #000000;
    line-height: 48px;
  }
`;

// 客户案例 xs 小title
export const CustomerCaseSmallSubTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #0d1924;
  line-height: 40px;
  text-align: center;
`;
// 关于我们按钮布局
export const AboutUsBtnWrap = styled.div`
  display: flex;
  align-items: center;
  > div:nth-child(1) {
    margin-right: 24px;
  }
  @media (max-width: 768px) {
    margin-right: 16px;
  }
`;
export const TechnologyThinTitle = styled.div`
  font-size: 40px;
  font-weight: 400;
  color: #000000;
  line-height: 56px;
`;
