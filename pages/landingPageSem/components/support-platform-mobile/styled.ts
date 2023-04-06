import styled from 'styled-components';

export const taobao = 'https://cdn.byai.com/static/oss-script/66611a271a199bdadc695212124b7d15.png';
export const TMall = 'https://cdn.byai.com/static/oss-script/db428c9a2932fc0c0f17c09a6a3cee04.png';
export const xiaohongshu = 'https://cdn.byai.com/static/oss-script/630bfed0da5178b91adc98a3f80b75d4.png';
export const douyin = 'https://cdn.byai.com/static/oss-script/5f53d21f5c795cbc1f323613455d1b65.png';
export const kuaishou = 'https://cdn.byai.com/static/oss-script/41145052e6d732ba82586c7d1d5fcb95.png';
export const jd = 'https://cdn.byai.com/static/oss-script/36d11420ed62dc1e780fcd0aa1e66854.png';
export const pinduoduo = 'https://cdn.byai.com/static/oss-script/499b4c821cd3a931e06da32ddde9993d.png';
export const SupportPlatformContainer = styled.div`
  height: 35.4rem;
  width: 100%;
  background-image: url('https://cdn.byai.com/static/oss-script/d3374412edc972d5516d127ae0ba481d.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 2rem;
    font-weight: 500;
    color: #ffffff;
    line-height: 2.8rem;
    letter-spacing: 0.1rem;
    margin-top: 8rem;
  }
`;
export const LogoListContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  .taobao {
    @keyframes taobao-animation {
      0% {
        left: 14.7rem;
        top: 12.6rem;
        height: 8rem;
        width: 8rem;
      }
      14% {
        left: 25.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      28% {
        left: 29.1rem;
        top: 7.5rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      42% {
        left: 21.9rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      56% {
        left: 12.7rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      70% {
        left: 4.9rem;
        top: 7.1rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      84% {
        left: 7.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      100% {
        left: 14.7rem;
        top: 12.6rem;
        height: 8rem;
        width: 8rem;
      }
    }
    border-radius: 50%;
    position: absolute;
    background-image: url(${taobao});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: 25s linear 1s infinite running taobao-animation;
  }
  .TMall {
    @keyframes TMall-animation {
      0% {
        left: 25.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      14% {
        left: 29.1rem;
        top: 7.5rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      28% {
        left: 21.9rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      42% {
        left: 12.7rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      56% {
        left: 4.9rem;
        top: 7.1rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      70% {
        left: 7.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      84% {
        left: 14.7rem;
        top: 12.6rem;
        height: 8rem;
        width: 8rem;
      }
      100% {
        left: 25.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
    }
    border-radius: 50%;
    position: absolute;
    background-image: url(${TMall});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: 25s linear 1s infinite running TMall-animation;
  }
  .jd {
    @keyframes jd-animation {
      0% {
        left: 29.1rem;
        top: 7.5rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      14% {
        left: 21.9rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      28% {
        left: 12.7rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      42% {
        left: 4.9rem;
        top: 7.1rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      56% {
        left: 7.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      70% {
        left: 14.7rem;
        top: 12.6rem;
        height: 8rem;
        width: 8rem;
      }
      84% {
        left: 25.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      100% {
        left: 29.1rem;
        top: 7.5rem;
        height: 3.4rem;
        width: 3.4rem;
      }
    }
    border-radius: 50%;
    position: absolute;
    background-image: url(${jd});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: 25s linear 1s infinite running jd-animation;
  }
  .kuaishou {
    @keyframes kuaishou-animation {
      0% {
        left: 21.9rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      14% {
        left: 12.7rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      28% {
        left: 4.9rem;
        top: 7.1rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      42% {
        left: 7.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      56% {
        left: 14.7rem;
        top: 12.6rem;
        height: 8rem;
        width: 8rem;
      }
      70% {
        left: 25.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      84% {
        left: 29.1rem;
        top: 7.5rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      100% {
        left: 21.9rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
    }
    border-radius: 50%;
    position: absolute;
    background-image: url(${kuaishou});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: 25s linear 1s infinite running kuaishou-animation;
  }
  .pinduoduo {
    @keyframes pinduoduo-animation {
      0% {
        left: 12.7rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      14% {
        left: 4.9rem;
        top: 7.1rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      28% {
        left: 7.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      42% {
        left: 14.7rem;
        top: 12.6rem;
        height: 8rem;
        width: 8rem;
      }
      56% {
        left: 25.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      70% {
        left: 29.1rem;
        top: 7.5rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      84% {
        left: 21.9rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      100% {
        left: 12.7rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
    }
    border-radius: 50%;
    position: absolute;
    background-image: url(${pinduoduo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: 25s linear 1s infinite running pinduoduo-animation;
  }
  .xiaohongshu {
    @keyframes xiaohongshu-animation {
      0% {
        left: 4.9rem;
        top: 7.1rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      14% {
        left: 7.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      28% {
        left: 14.7rem;
        top: 12.6rem;
        height: 8rem;
        width: 8rem;
      }
      42% {
        left: 25.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      56% {
        left: 29.1rem;
        top: 7.5rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      70% {
        left: 21.9rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      84% {
        left: 12.7rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      100% {
        left: 4.9rem;
        top: 7.1rem;
        height: 3.4rem;
        width: 3.4rem;
      }
    }
    border-radius: 50%;
    position: absolute;
    background-image: url(${xiaohongshu});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: 25s linear 1s infinite running xiaohongshu-animation;
  }
  .douyin {
    @keyframes douyin-animation {
      0% {
        left: 7.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      14% {
        left: 14.7rem;
        top: 12.6rem;
        height: 8rem;
        width: 8rem;
      }
      28% {
        left: 25.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
      42% {
        left: 29.1rem;
        top: 7.5rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      56% {
        left: 21.9rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      70% {
        left: 12.7rem;
        top: 5.7rem;
        height: 2.8rem;
        width: 2.8rem;
      }
      84% {
        left: 4.9rem;
        top: 7.1rem;
        height: 3.4rem;
        width: 3.4rem;
      }
      100% {
        left: 7.2rem;
        top: 13.1rem;
        height: 5rem;
        width: 5rem;
      }
    }
    border-radius: 50%;
    position: absolute;
    background-image: url(${douyin});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: 25s linear 1s infinite running douyin-animation;
  }
`;
