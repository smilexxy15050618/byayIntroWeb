import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 768,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (style: TemplateStringsArray) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(style)}
    }
  `;

  return acc;
}, {} as Record<keyof typeof sizes, (style: TemplateStringsArray) => FlattenSimpleInterpolation>);

export const BreakTitle = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fb;
  &.white {
    background: #fff;
  }
  ${media.phone`
      height: 216px;
      h2{
        font-weight: 400;
      }
    `}

  h2 {
    margin: 0;
    padding: 0;
    font-size: 36px;
    text-align: center;
    border: none;
    div {
      font-weight: 400;
    }
  }
`;

export enum Theme {
  Color = 'rgb(205,0,19)',
  Background = 'white',
  BorderColor = 'rgb(205,0,19)',
  DesignDraftWidth = '1440px',
  ContentWidth = '1200px',
}
