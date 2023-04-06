import { StringChain } from 'lodash';
import React, { CSSProperties, ReactNode } from 'react';
import { LabelText } from '../../util';
import { CaseBoxWrapper, Content, Label, ImageWrapper, PositionWrapper, Title, Section, TitleWrap } from './styled';

export interface LabelColor {
  bgColor: string;
  color: string;
}
export interface ICaseBoxProps {
  title: string;
  label: LabelText;
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
}) => {
  return (
    <CaseBoxWrapper style={{ height, width, ...wrapperStyle }}>
      <PositionWrapper>
        <ImageWrapper src={imageSrc} height={imageHeight} />
        <Section>
          <TitleWrap>
            <Title>{title}</Title>
            <Label {...labelColor}>{label}</Label>
          </TitleWrap>
          <Content>{content}</Content>
        </Section>
      </PositionWrapper>
    </CaseBoxWrapper>
  );
};
