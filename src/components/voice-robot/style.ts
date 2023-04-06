import styled, { css } from 'styled-components';
// 由于动画效果较大delay是以提前0.3s为0s进行计算,
const AHEAD_DELAY = new Array(30)
  .fill(0)
  .reduce((cssArr: string[], zero, i) => {
    return [
      `
    .animate__ahead_${i + 1}00ms {
      animation-delay: -${i + 1}00ms;
    }
  `,
      ...cssArr,
      `
    .animate__delay_${i + 1}00ms {
      animation-delay: ${i + 1 - 3}00ms;
    }
  `,
    ];
  }, [])
  .join('');
// console.log(AHEAD_DELAY); // 看一下拼接后的样式

export const Wrapper = styled.div<{ scale?: number }>`
  transform: scale(${props => props.scale || 1});
  .relative-position {
    position: relative;
    /* overflow: hidden; */
  }

  ${AHEAD_DELAY}

  .animate__zoomInPluse {
    animation-name: zoomInPluse;
  }

  @keyframes zoomInPluse {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    40% {
      opacity: 1;
    }

    55% {
      transform: scale3d(1.15, 1.15, 1.15);
    }

    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export const BannerImg = styled.img`
  height: 400px;
  margin: 0;

  @media (max-width: 768px) {
    height: auto;
  }
`;
