import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import * as SC from './styled';

const CAROUSEL_URL = [
  SC.getOrdersAutomaticallyImg,
  SC.AIOutboundImg,
  SC.SMSImg,
  SC.AutomaticallyAddMicroImg,
  SC.WeChatInteractionImg,
];

const STEP_LIST = [
  {
    url: SC.getOrdersAutomatically,
    title: '自动获取订单',
  },
  {
    url: SC.AIOutbound,
    title: 'AI外呼触达',
  },
  {
    url: SC.SMS,
    title: '配合短信',
  },
  {
    url: SC.AutomaticallyAddMicro,
    title: '自动加微',
  },
  {
    url: SC.WeChatInteraction,
    title: '微信首轮互动',
  },
];

let timeout = 0;

const AutomaticallyAddPowder = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (type: 'pre' | 'next' | 'click', num?: number) => {
    if (type === 'pre') {
      if (index === 0) {
        setIndex(STEP_LIST.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
    if (type === 'next') {
      console.log(index, index === STEP_LIST.length - 1);
      if (index === STEP_LIST.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
    if (type === 'click') {
      timeout && clearTimeout(timeout);
      setIndex(num);
    }
  };

  useEffect(() => {
    autoNext(index);
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  const autoNext = inNumber => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(
      (i: number) => {
        // 如此写法是解决闭包导致的 index 不变化问题
        const indexN = i === STEP_LIST.length - 1 ? 0 : i + 1;
        setIndex(indexN);
        autoNext(indexN);
      },
      4000,
      inNumber,
    );
  };

  const handleMouseOut = () => {
    timeout && clearTimeout(timeout);
    autoNext(index);
  };

  return (
    <SC.AutomaticallyAddPowderContainer>
      <div className="content">
        <div className="title">AI 加粉的实力沉淀，创造行业加粉新纪录</div>
        <div className="sub-title">通过不断创新为私域经济参与者提升竞争力</div>
        <SC.StepList>
          {STEP_LIST.map((item, i) => (
            <div key={item.title} className="step-item-div">
              {i !== 0 && (
                <SC.arrowItem>
                  <div className="round" />
                  <div className="round" />
                  <div className="arrow" />
                </SC.arrowItem>
              )}
              <SC.StepItem
                isChecked={index === i}
                onMouseOver={() => handleSelect('click', i)}
                onMouseOut={handleMouseOut}>
                <img src={item.url} alt="" />
                <div className="font">{item.title}</div>
                <div className={`is-line ${index === i ? 'is-line-hover' : ''}`} />
              </SC.StepItem>
            </div>
          ))}
        </SC.StepList>
        <Carousel activeIndex={index} controls={false} fade indicators={false}>
          {CAROUSEL_URL.map((item, i) => (
            <Carousel.Item key={`${i}`}>
              <img src={item} />
              <a className="button" href="/form?formType=1&origin=ecommerce">
                立即免费体验
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </SC.AutomaticallyAddPowderContainer>
  );
};

export default AutomaticallyAddPowder;
