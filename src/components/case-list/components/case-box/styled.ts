import styled from 'styled-components';
import { media } from '../../../../constants/style';

export const ImageWrapper = styled.div<{ src: string; height?: string }>`
  height: ${props => (props.height ? props.height : '203px')};
  background: center / cover no-repeat;
  background-image: url(${props => props.src});
  transition: 0.3s ease-in-out all;
  ${media.phone`
    height: 174px;
  `}
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  line-height: 25px;
`;

export const Label = styled.div<{ bgColor?: string; color?: string }>`
  display: inline-block;
  padding: 0 8px;
  line-height: 22px;
  border-radius: 2px;
  font-size: 12px;
  color: ${props => (props.color ? props.color : '#1890FF')};
  background: ${props => (props.bgColor ? props.bgColor : '#E6F7FF')};
  width: auto;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.phone`
    flex-direction: column-reverse;
  `}
`;

export const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  line-height: 28px;
`;

export const PositionWrapper = styled.div`
  transform: translateY(0);
  transition: 0.3s ease-in-out all;
`;

export const Section = styled.div`
  padding: 24px 28px 0;
  ${media.phone`
    padding: 16px;
  `}
`;

export const CaseBoxWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  transition: 0.3s ease-in-out all;

  @media (min-width: 768px) {
    ${Title} {
      margin-bottom: 25px;
    }

    ${Content} {
      margin-top: 25px;
    }
  }

  @media (max-width: 768px) {
    box-shadow: 0px 3px 29px 0px #cfd8e596;
    overflow: auto;
    width: 327px !important;
    height: 396px !important;
    ${Label} {
      font-size: 11px;
      line-height: 19px;
    }
    ${Title} {
      margin: 12px 0 10px;
      font-size: 16px;
      line-height: 22px;
    }
    ${Content} {
      font-size: 14px;
      line-height: 21px;
    }
  }

  @media (min-width: 768px) {
    box-shadow: 0px -3px 28px 0px #cbd1da88;

    &:hover {
      /* background-color: #F9FAFF; */
      box-shadow: 0px 8px 80px 0px #cfd8e5;
      transform: translateY(-20px);
      ${PositionWrapper} {
        transform: translateY(-187px);
        ${ImageWrapper} {
          opacity: 0;
        }
      }
    }
  }
`;
