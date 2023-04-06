import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../../src/constants/style';

const Wrapper = styled.div<{ width?: string; mb: string }>`
  position: relative;
  width: ${props => (props.width ? props.width : '33.33%')};
  margin-bottom: ${props => props.mb};
  box-sizing: border-box;
  text-align: center;

  .icon {
    display: block;
    margin: 0 auto;
    height: 40px;
  }

  .name {
    margin-top: 20px;
    font-size: 12px;
  }
`;

const FunctionalItem = ({ mobileIconUrl, name, itemWidth = '33.33%', mb = '30px' }) => {
  return (
    <Wrapper width={itemWidth} mb={mb}>
      <img src={mobileIconUrl} className="icon" />
      <div className="name">{name}</div>
    </Wrapper>
  );
};

export default FunctionalItem;
