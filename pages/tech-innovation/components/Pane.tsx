import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Visible } from 'react-grid-system';
import { CSSProperties } from 'styled-components';
import { PaneWrapper, Title, Desc, TitleMobile, TitleMobileWrapper, PaneWrapperMobile } from './styled';

export type IPaneProps = {
  title: string | string[];
  paneBgColor?: 'grey' | 'white';
  titleMarginBottom?: number;
  titleStyle?: CSSProperties;
  desc?: string;
  style?: CSSProperties;
  mobileStyle?: CSSProperties;
  id?: string;
};

const Pane: FC<IPaneProps> = ({
  id,
  titleStyle = {},
  style = {},
  title,
  paneBgColor,
  titleMarginBottom,
  desc,
  children,
  mobileStyle = {},
}) => {
  title = Array.isArray(title) ? title : [title];
  return (
    <>
      <Visible md lg xl xxl xxxl>
        <PaneWrapper id={id} style={style} className="" bgColor={paneBgColor}>
          <Title style={{ marginBottom: titleMarginBottom || (desc ? 16 : 50), ...titleStyle }}>{title[0]}</Title>
          {desc && <Desc>{desc}</Desc>}
          {children}
          {/* <Content>

          </Content> */}
        </PaneWrapper>
      </Visible>
      <Visible xs sm>
        <PaneWrapperMobile id={id} style={{ ...style, ...mobileStyle }} className="" bgColor={paneBgColor}>
          <TitleMobileWrapper>
            {title.map(t => {
              return <TitleMobile style={{ ...titleStyle }}>{t}</TitleMobile>;
            })}
          </TitleMobileWrapper>
          {children}
        </PaneWrapperMobile>
      </Visible>
    </>
  );
};

export default Pane;
