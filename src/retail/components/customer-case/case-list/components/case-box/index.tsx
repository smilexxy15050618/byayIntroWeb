import { Fork } from '@indata/icon-byai';
import React, { CSSProperties, ReactNode } from 'react';
import { CaseBoxWrapper, Content, ImageWrapper, Label, PositionWrapper, Section, Title, TitleWrap } from './styled';

export interface LabelColor {
  bgColor: string;
  color: string;
}
export interface ICaseBoxProps {
  title: string[];
  label: ReactNode;
  labelColor?: LabelColor;
  content: ReactNode;
  imageSrc: string;
  /** 外层容器宽度 默认380px */
  width?: string;
  /** 外层容器高度 默认347px */
  height?: string;
  /** 外层容器样式 */
  wrapperStyle?: CSSProperties;
  /** 图片高度 默认203px */
  imageHeight?: string;
  // 跳转路径
  path?: string;
}

export const CaseBox: React.FC<ICaseBoxProps> = ({
  width = '380px',
  height = '347px',
  title,
  label,
  labelColor,
  content,
  imageSrc,
  wrapperStyle,
  imageHeight,
  ...rest
}) => {
  return (
    <CaseBoxWrapper
      style={{ height, width, ...wrapperStyle }}
      onClick={() => {
        if (rest.path) {
          window.open(rest.path);
        }
      }}>
      <PositionWrapper>
        <ImageWrapper src={imageSrc} height={imageHeight} />
        <Section>
          <TitleWrap>
            <Title>
              {title.map(item => (
                <div>{item}</div>
              ))}
            </Title>
            <Label {...labelColor}>
              百应&nbsp;
              <Fork style={{ position: 'relative', top: -1 }} />
              &nbsp;{label}
            </Label>
          </TitleWrap>
          <Content>{content}</Content>
        </Section>
      </PositionWrapper>
    </CaseBoxWrapper>
  );
};
