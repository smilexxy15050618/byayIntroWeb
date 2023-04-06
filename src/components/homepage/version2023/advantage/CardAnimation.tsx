import classNames from 'classnames';
import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

export type ICardAnimationProps = {
  active: boolean;
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  .advantage {
    display: none;
    &.active {
      display: block;
    }
  }

  .alert-enter {
    opacity: 0;
    display: block;
    transform: scale(0.9) translateY(100%);
  }
  .alert-enter-active {
    opacity: 1;
    transform: translateX(0) translateY(0);
    transition: opacity 400ms, transform 400ms;
  }
  .alert-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9) translateY(-100%);
    transition: opacity 400ms, transform 400ms;
  }
`;

const CardAnimation: FC<ICardAnimationProps> = ({ children, active }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <CSSTransition
        onEntered={() => {
          console.log('enter');
        }}
        timeout={400}
        in={active}
        classNames="alert"
        nodeRef={ref}>
        <div
          className={classNames('advantage', {
            active,
          })}
          ref={ref}>
          {children}
        </div>
      </CSSTransition>
    </Wrapper>
  );
};

export default CardAnimation;
