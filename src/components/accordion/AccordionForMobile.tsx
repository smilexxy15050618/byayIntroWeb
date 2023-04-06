import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { AngleRight } from './AngleRight';
import { HOST_ENUM, jumpUrl, mapper, renderNextLineText } from '../../lib/utils';
import ByProgressSwiper from '../common/ByProgressSwiper';
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
    margin-top: 64px;
    margin-bottom: 24px;
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 28px;
  }
  .content-desc {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
    margin-bottom: 16px;
  }
  .content-tag-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    .content-tag {
      margin-right: 4px;
      margin-bottom: 6px;
    }
  }

  .content-tag {
    width: 68px;
    height: 20px;
    border-radius: 11px;
    border: 1px solid #ffb6fe;
    text-align: center;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
  }

  .content-go-next {
    margin-top: 36px;
    padding-left: 8px;
    width: 142px;
    line-height: 24px;
    background: #000000;
    border-radius: 4px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    > svg {
      font-size: 10px;
      height: 8px;
      margin: 0 0 0 5px;
    }
  }
`;

const Content = styled.div<{ bgSrc: string; currWidth: number; gap: number; color: string }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  background: no-repeat top 0px right -19px / 50% auto url(${props => props.bgSrc});
  > * {
    position: absolute;
    top: 0;
    left: 16px;
  }
  height: 320px;
  transition: all 0.25s ease-in-out;
  & + & {
    margin-left: ${props => (props.gap ? props.gap : 0)}px;
  }
  background-color: ${props => props.color};
  border-radius: 16px;
  padding: 0 16px;
  background-position: top 16px right -19px;

  /* -110px; */
  ${MaxContent} {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wrapper = styled.div<{ wrapperWidth?: number }>`
  display: flex;
  width: 100vw;
  margin: 0 auto;
`;
const ProgressWrapper = styled.div`
  width: 300px;
  max-width: calc(100vw - 37px);
  margin: 24px auto 8px;
  height: 3px;
  background: #f2f2f2;
`;
const ProgressContent = styled.div`
  height: 100%;
  transition: width 0.3s ease-in-out;
  background: #2b58f9;
`;

const AccordionForMobile: FC<IAccordionProps> = ({ contentList, maxWidth, gap = 24, minWidth }) => {
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
      <ByProgressSwiper
        noProgress={true}
        style={{ flex: 1 }}
        initialSlide={1}
        contentPadding="42px"
        progressPadding="0px"
        renderCustomerProgress={({ totalIndex, currIndex, progressNode }) => {
          return (
            <div>
              <ProgressWrapper>
                <ProgressContent style={{ width: `${((currIndex + 1) * 100) / totalIndex}%` }}></ProgressContent>
              </ProgressWrapper>
              {progressNode}
            </div>
          );
        }}
        setActiveIndex={index => {
          console.log(index);
        }}
        previewWidth="67px">
        {contentList.map(({ bgSrc, color, title, tagList, maxDesc, specialColor, hostType }, index) => {
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
              currWidth={maxWidth}>
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
            </Content>
          );
        })}
      </ByProgressSwiper>
    </Wrapper>
  );
};

export default AccordionForMobile;
