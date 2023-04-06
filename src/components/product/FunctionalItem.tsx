import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../../src/constants/style';

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 22px;
  width: 268px;
  height: 265px;
  border: 1px solid rgba(102, 102, 102, 0.2);
  /* box-shadow: 0 2px 4px rgba(11, 9, 9, .5); */
  overflow: hidden;
  &:hover {
    border: 1px solid transparent;
    box-shadow: 0 0 11px rgba(49, 83, 212, 0.3);
    .drop {
      transform: translateY(0);
    }
  }
  .icon {
    display: block;
    margin: 69px auto 0;
    height: 60px;
  }

  .name {
    position: absolute;
    text-align: center;
    margin: 0;
    left: 0;
    right: 0;
    bottom: 70px;
    font-size: 22px;
    color: #666666;
    z-index: -1;
  }

  .drop {
    position: absolute;
    padding: 0 24px;
    width: 268px;
    height: 265px;
    background: #fff;
    transform: translateY(-100%);
    transition: all 0.3s ease-out;
    .title {
      margin-top: 23px;
      font-size: 22px;
      color: #4160d7;
    }

    .content {
    }

    .bar {
      margin: 18px 0;
      width: 18px;
      border: 2px solid #3153d4;
      border-radius: 2px;
    }
  }
  .transition_down {
    transition: all 0.3s ease-out;
    transform: translateY(0);
  }

  .transition_up {
    transition: all 0.3s ease-out;
    transform: translateY(-100%);
  }
`;

const FunctionalItem = ({
  desktopIconUrl,
  // mobileIconUrl,
  description,
  name,
}) => {
  // const dropRef = useRef<HTMLDivElement>(null);

  // const handleMouseEnter = () => {
  //   console.log(dropRef.current.classList)
  //   dropRef.current.classList.add('transition_down');
  //   dropRef.current.classList.remove('transition_up');
  // }

  // const handleMouseLeave = () => {
  //   console.log(dropRef.current.classList)
  //   dropRef.current.classList.add('transition_up');
  //   dropRef.current.classList.remove('transition-down');
  // }

  return (
    // <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <Wrapper>
      {/* <div ref={dropRef} className='drop'> */}
      <div className="drop">
        <div className="title">{name}</div>
        <div className="bar"></div>
        <div className="content">{description}</div>
      </div>
      <img src={desktopIconUrl} className="icon" />
      <p className="name">{name}</p>
    </Wrapper>
  );
};

export default FunctionalItem;
