import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { AngleRight } from './AngleRight';
import { HOST_ENUM, jumpUrl, mapper, renderNextLineText } from '../../lib/utils';
export type IAccordionProps = {
  contentList: {
    bgSrc: string;
    specialColor: string;
    color: string;
    title: string;
    maxDesc: string[];
    minDesc: string[];
    tagList: string[];
    hostType: HOST_ENUM;
  }[];
  maxWidth: number;
  minWidth: number;
  gap?: number;
};

const MaxContent = styled.div<{ jumpStrColor: string }>`
  position: absolute;
  transform: translateX(-110px);
  opacity: 0;
  top: 0;
  transition: all 0.3s ease;
  z-index: 2;
  .content-title {
    height: 44px;
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 44px;
    margin-top: 72px;
    margin-bottom: 16px;
  }
  .content-desc {
    width: 309px;
    height: 56px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 28px;
    margin-bottom: 32px;
  }
  .content-tag-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    .content-tag {
      margin-right: 24px;
      margin-bottom: 16px;
    }
  }

  .content-tag {
    width: 120px;
    height: 32px;
    border-radius: 18px;
    border: 1px solid #ffb6fe;
    text-align: center;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 32px;
  }

  .content-go-next {
    margin-top: 32px;
    padding-left: 16px;
    width: 196px;
    height: 32px;
    line-height: 32px;
    background: #000000;
    border-radius: 4px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    > svg {
      font-size: 14px;
      height: 14px;
      margin: 0 0 0 8px;
    }
    &:hover {
      background-color: white;
      color: ${props => props.jumpStrColor};
      .arrow {
      }
    }
  }
`;

const MinContent = styled.div`
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.3s ease;
  user-select: none;
  .content-title {
    margin-top: 212px;
    margin-bottom: 21px;
    height: 24px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #f7b500;
    line-height: 24px;
  }
  .content-desc {
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 40px;
  }
`;

const Content = styled.div<{ bgSrc: string; currWidth: number; gap: number; color: string }>`
  position: relative;
  overflow: hidden;
  background: no-repeat top 18px right -36px / 50% url(${props => props.bgSrc});
  > * {
    position: absolute;
    top: 0;
    left: 32px;
  }
  width: ${props => props.currWidth}px;
  height: 420px;
  transition: all 0.25s ease-in-out;
  & + & {
    margin-left: ${props => (props.gap ? props.gap : 0)}px;
  }
  background-color: ${props => props.color};
  border-radius: 16px;
  padding: 0 32px;

  &.active {
    background-position: bottom 0 right -36px;

    /* -110px; */
    ${MaxContent} {
      transform: translateX(0);
      opacity: 1;
    }
    ${MinContent} {
      transform: translateX(-110px);
      opacity: 0;
    }
  }
`;

const Wrapper = styled.div<{ wrapperWidth?: number }>`
  display: flex;
  width: ${props => (props.wrapperWidth ? props.wrapperWidth : 800)}px;
  margin: 0 auto;
`;

const Accordion: FC<IAccordionProps> = ({ contentList, maxWidth, gap = 24, minWidth }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const length = contentList.length;
  const currAnimateNumber = useRef(0);
  const taskList = useRef<Array<() => void>>([]);
  const taskFn = (index: number) => {
    if (currAnimateNumber.current >= 1) {
      taskList.current.push(() => taskFn(index));
      return;
    }
    setCurrIndex(index);
    currAnimateNumber.current++;
    setTimeout(() => {
      currAnimateNumber.current--;
      if (taskList.current.length) {
        const t = taskList.current.shift();
        t();
      }
    }, 250);
  };
  return (
    <Wrapper className="" wrapperWidth={maxWidth + (gap + minWidth) * (length - 1)}>
      {contentList.map(({ bgSrc, color, title, tagList, minDesc, maxDesc, specialColor, hostType }, index) => {
        const isActive = index === currIndex;

        return (
          <Content
            bgSrc={bgSrc}
            color={color}
            gap={gap}
            onMouseEnter={() => {
              if (currIndex !== index) {
                taskFn(index);
              }
            }}
            className={isActive ? 'active' : ''}
            currWidth={isActive ? maxWidth : minWidth}>
            <MaxContent jumpStrColor={color}>
              <div className="content-title">{title}AI</div>
              <div className="content-desc" dangerouslySetInnerHTML={{ __html: maxDesc.join('<br/>') }}></div>
              <div className="content-tag-wrapper">
                {tagList.map(str => {
                  return (
                    <div className="content-tag" style={{ borderColor: specialColor }}>
                      {str}
                    </div>
                  );
                })}
              </div>
              <div
                className="content-go-next"
                onClick={() => {
                  if (hostType === null) {
                    window.open('/form?formType=1');
                    return;
                  }
                  window.open(mapper[hostType].localSrc);
                }}>
                获取{title}行业解决方案 <AngleRight />
              </div>
            </MaxContent>
            <MinContent>
              <div className="content-title" style={{ color: specialColor }}>
                {title}AI
              </div>
              <div className="content-desc" dangerouslySetInnerHTML={{ __html: minDesc.join('<br/>') }}></div>
            </MinContent>
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default Accordion;
