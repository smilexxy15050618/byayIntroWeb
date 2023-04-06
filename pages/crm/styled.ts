import Box from '../../src/components/Box';
import styled from 'styled-components';
import { ProductCard } from '../../src/components/crm/ProductAdvancedCard';
import { Wrap } from '../../src/components/crm/TechAdvancedCard';
import { media } from '../../src/constants/style';

export const circleSrc = '//cdn.byai.com/static/official-website/crm/%E6%A4%AD%E5%9C%86%E5%BD%A2.png';
const sceneBgSrc =
  '//cdn.byai.com/static/official-website/crm/4%E5%A4%A7%E6%95%B0%E6%99%BA%E5%8C%96%E5%9C%BA%E6%99%AF%E8%83%8C%E6%99%AF.png';
const technologyBg = '//cdn.byai.com/static/official-website/crm/%E7%BC%96%E7%BB%84%2025.png';

export const Block = styled(Box)`
  padding-bottom: 100px;
  ${media.phone`
    padding-bottom: 40px;
  `}
`;
export const Wrapper = styled.div`
  img {
    margin-bottom: 0;
  }
  .technology-advanced {
    flex-wrap: wrap;
    ${Wrap} {
      margin-right: 20px;
      ${media.phone`
        margin-right: 16px;
      `}
    }

    ${media.phone`
      > div:first-child {
        margin-bottom: 16px;
      }
    `}
  }

  .serve-advanced {
    flex-wrap: wrap;

    ${media.phone`
      > div:first-child {
        margin-bottom: 16px;
      }  
    `}
    ${ProductCard} {
      width: 285px;
      height: 220px;
      margin-right: 20px;
      margin-bottom: 0 !important;
      padding-top: 32px;
      border-radius: 8px;
      box-shadow: none;
      border: 1px solid rgba(0, 0, 0, 0.12);

      ${media.phone`
        width: 163px;
        height: 222px;
        border-radius: 14px;

        img {
          width: 50px !important;
          height: 50px !important;
        }
      `}

      @media (min-width: 768px) {
        &:hover {
          box-shadow: 0px 12px 32px 0px rgba(3, 43, 183, 0.08);
          border-color: transparent;
          transform: none;
        }
      }

      img {
        width: 60px;
        height: 60px;
      }

      .title {
        font-size: 16px;
        margin: 20px 0 8px 0;
      }

      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
        line-height: 22px;
        margin: 0;
      }
    }
  }

  .serve-advanced,
  .technology-advanced {
    padding-left: 20px;
    @media (min-width: 768px) {
      min-width: 1250px !important;
    }
  }

  .ai-scene-wrap,
  .serve-wrap {
    position: relative;
  }

  .ai-scene-wrap::before {
    content: '';
    position: absolute;
    width: 168px;
    height: 168px;
    left: -48px;
    top: 142px;
    transform: rotate(180deg);
    background: url(${circleSrc}) no-repeat center center/ contain;
    z-index: 1;
  }

  .ai-scene-wrap::after {
    content: '';
    position: absolute;
    width: 340px;
    height: 340px;
    right: -50px;
    bottom: 34px;
    z-index: -1;
    background: url(${circleSrc}) no-repeat center center/ contain;
  }

  .serve-wrap::before {
    content: '';
    position: absolute;
    width: 178px;
    height: 178px;
    left: -45px;
    top: 93px;
    transform: rotate(180deg);
    background: url(${circleSrc}) no-repeat center center/ contain;
    z-index: -1;
  }
  .ai-scene-wrap::before,
  .ai-scene-wrap::after,
  .serve-wrap::before {
    ${media.phone`
        display: none;
      `}
  }

  .carouse-wrap {
    background: url(${sceneBgSrc}) no-repeat top center/ 1200px;
  }
`;

export const ProductAdvancedCardWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-left: 24px;

  @media (min-width: 768px) {
    min-width: 1250px !important;
  }

  ${ProductCard}:last-child {
    margin-bottom: 0;
  }
`;

export const TechAdvancedWrap = styled(Block)`
  @media (min-width: 768px) {
    background: url(${technologyBg}) no-repeat, #f9faff;
    background-size: 132px;
    background-position: 95% calc(100% + 48px);
    background-origin: content-box;
  }
`;
