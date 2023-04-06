import styled, { css } from 'styled-components';

const Intro = styled.div<{ odd?: boolean; bottom?: number; backgroundImage?: string }>`
  background: rgba(255, 255, 255, 1);
  padding-bottom: ${props => `${props.bottom || 0}px`};
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${props =>
    props.odd &&
    css`
      background-color: #f8f9fb;
    `};
`;

export default Intro;
