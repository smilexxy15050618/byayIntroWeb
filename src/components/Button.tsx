import * as React from 'react';
import styled from 'styled-components';

export const LinkButton = styled.a`
  width: 154px;
  height: 47px;
  background: #3154d4;
  color: white !important;
  line-height: 47px;
  text-align: center;
  font-size: 18px;
  display: inline-block;
  margin: 15px 14px 5px 0;
  @media (max-width: 48em) {
    & {
      width: 84px;
      height: 27px;
      background: #3154d4;
      color: white !important;
      line-height: 27px;
      text-align: center;
      font-size: 13px;
      display: inline-block;
      margin: 15px 14px 5px 0;
    }
  }
`;
