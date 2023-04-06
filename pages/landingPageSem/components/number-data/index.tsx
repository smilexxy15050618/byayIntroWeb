import React from 'react';
import CountUp from 'react-countup';
import {
  DataRecoveryPeriodImg,
  DataUtilizationImg,
  ImageContainer,
  IndustryAverageConversionRateImg,
  NumberContainer,
  NumberDataContainer,
  SinglePlusMicroCostImg,
} from './styled';

const CARD_LIST_DATA = [
  {
    url: DataRecoveryPeriodImg,
    title: '数据回收周期',
    start: 0,
    end: 24,
    content: countUpRef => (
      <span>
        小于
        <NumberContainer>
          <span ref={countUpRef} />
        </NumberContainer>
        小时
      </span>
    ),
  },
  {
    url: SinglePlusMicroCostImg,
    title: '单个加微成本',
    start: 2,
    end: 5,
    content: countUpRef => (
      <span>
        <NumberContainer>
          2-
          <span ref={countUpRef} />
        </NumberContainer>
        元
      </span>
    ),
  },
  {
    url: IndustryAverageConversionRateImg,
    title: '行业平均转粉率',
    start: 15,
    end: 38,
    content: countUpRef => (
      <span>
        <NumberContainer>
          15-
          <span ref={countUpRef} />
        </NumberContainer>
        %
      </span>
    ),
  },
  {
    url: DataUtilizationImg,
    title: '数据利用率',
    start: 70,
    end: 85,
    content: countUpRef => (
      <span>
        <NumberContainer>
          70-
          <span ref={countUpRef} />
        </NumberContainer>
        %
      </span>
    ),
  },
];
const NumberData = () => {
  return (
    <NumberDataContainer>
      <div className="title">全程精细化报表，助力品牌高效引流</div>
      <div className="sub-title">线路和成功团队双重保障，祝您提升利润率</div>
      <div className="card-list">
        {CARD_LIST_DATA.map((item, idx) => (
          <CountUp start={item.start} end={item.end} duration={0.5} redraw key={idx}>
            {({ countUpRef, start }) => (
              <div className="card-data" key={item.title} onMouseEnter={start}>
                <ImageContainer url={item.url} />
                <div className="small-title">{item.title}</div>
                <div className="number">{item.content(countUpRef)}</div>
              </div>
            )}
          </CountUp>
        ))}
      </div>
    </NumberDataContainer>
  );
};

export default NumberData;
