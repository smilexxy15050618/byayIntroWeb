import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

export const backgroundImg = 'https://cdn.byai.com/by-fe-cdn/static/pmp/9481ec00-bc66-4457-a2c2-e8b7fe99b53d.png';
export const phoneImg = 'https://cdn.byai.com/static/oss-script/38718b730c72ec6c008ec647df2f4df2.svg';
export const addFriendImg = 'https://cdn.byai.com/static/oss-script/b60b31bb67ba9fee645bfd8d1a3d43aa.svg';
export const microphone = 'https://cdn.byai.com/static/oss-script/b6eb6b1779d290d1473a85c0624ba5c4.svg';

export const SolutionContainer = styled.div`
  width: 100%;
  height: 48rem;
  background: #f4f7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  .d-block {
    border-radius: 0.4rem !important;
  }
  .desc {
    width: 32.3rem;
    height: 3.8rem;
    font-size: 2.6rem;
    font-weight: 500;
    margin-top: 4rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
    color: #2b2a35;
    line-height: 3.8rem;
    letter-spacing: 0.1rem;
    text-align: center;
  }
  button {
    width: 14.8rem;
    height: 4.2rem;
    margin-top: 3rem;
    font-size: 1.8rem;
    font-weight: 400;
    color: #ffffff;
    line-height: 2.6rem;
    background: #2b58f9;
    box-shadow: 0 0.4rem 1.6rem 0 rgba(43, 88, 249, 0.15), 0 0rem 0.2rem 0 rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 0.4rem;
  }
  .img {
    width: 37.5rem;
    height: 32rem;
    z-index: 10;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${backgroundImg});
    @keyframes left-float {
      from {
        top: 8rem;
      }
      to {
        top: 7rem;
      }
    }
    @keyframes middle-float {
      from {
        top: 12rem;
      }
      to {
        top: 11rem;
      }
    }
    @keyframes right-float {
      from {
        top: 7.7rem;
      }
      to {
        top: 6.7rem;
      }
    }
  }
`;
export const CarouselContainer = styled(Carousel)`
  width: 34.3rem;
  height: 12.8rem;
  background: #ffffff;
  box-shadow: 0 0.4rem 1.6rem 0 rgba(69, 88, 128, 0.08);
  border-radius: 0.4rem;
  position: absolute;
  top: 40rem;
  .carousel-caption {
    display: flex;
    padding: 0;
    flex-direction: column;
    align-items: center;
    top: 2.4rem;
  }
  .title {
    width: 100%;
    text-align: center;
    height: 2.8rem;
    font-size: 2rem;
    font-weight: 500;
    color: #2b2a35;
    line-height: 2.8rem;
    margin-bottom: 0.8rem;
  }
  .card-desc {
    height: 2.2rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: rgba(43, 42, 53, 0.65);
    line-height: 2.2rem;
  }
  .carousel-indicators li {
    background-color: rgba(43, 42, 53, 0.15);
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
  }
  .carousel-indicators .active {
    background-color: #2b58f9;
  }
  img {
    border-radius: 0.4rem;
  }
`;
