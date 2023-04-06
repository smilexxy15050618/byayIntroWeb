import React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const TitleLayoutWrapper = styled.div`
  .title-layout-header {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 36px;
    line-height: 50px;
    padding-top: 108px;
    padding-bottom: 80px;
    color: #0d1924;
    ${media.phone`
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
    `}
  }
`;

interface TitleLayoutProps {
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const TitleLayout = (props: TitleLayoutProps) => {
  const { title, children, style } = props;

  return (
    <TitleLayoutWrapper style={style}>
      {title && <div className="title-layout-header">{title}</div>}
      <div>{children}</div>
    </TitleLayoutWrapper>
  );
};
