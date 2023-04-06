import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import JumpBtn from '../../components/JumpBtn';
import { useTime } from '../../lib/hooks-utils';
import { retailUrl } from '../../lib/utils';

export interface ICarousel {
  onChange?: (index) => void;
  dataList: any[];
}

const SubTitle = styled.div`
  font-size: 28px;
  color: #ffffff;
  line-height: 40px;
  white-space: nowrap;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  line-height: 24px;
  margin-bottom: 16px;
`;

const BgWrapper = styled.div<{ bg: string }>`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  padding: 0 20px;
  pointer-events: none;
  display: flex;
  align-items: center;

  &::after {
    z-index: -1;
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat center / cover url(${props => props.bg});
    filter: brightness(70%);
  }
  &.active {
    pointer-events: all;
    opacity: 1;
  }
`;

const BottomContent = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
  font-size: 16px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  cursor: default;
  &.active {
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
  }
`;
const BottomWrapper = styled.div<{ length: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  height: calc(100vh - 52px);
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  font-family: PingFangSC-Regular, PingFang SC;
`;

export const IndustryCarouselMobile: FC<ICarousel> = ({ dataList = [] }) => {
  const setForm = () => {
    const url = retailUrl(`/form`);
    window.open(url);
  };

  const [currIndex, setCurrIndex] = useState(0);
  const currIndexRef = useRef(currIndex);
  useEffect(() => {
    currIndexRef.current = currIndex;
  }, [currIndex]);
  const { startTimer, endTimer } = useTime(() => {
    setCurrIndex((currIndexRef.current + 1) % dataList.length);
  }, 3000);
  useEffect(() => {
    startTimer();
    return () => {
      endTimer();
    };
  }, []);
  return (
    <Wrapper onMouseEnter={endTimer} onMouseLeave={startTimer}>
      {dataList.map(({ mobileBg, title, subTitle, subTitleMobile }, i) => {
        subTitle = subTitleMobile ? subTitleMobile : subTitle;
        return (
          <BgWrapper className={classNames({ active: i === currIndex })} bg={mobileBg}>
            <div className="content">
              <Title>{title}</Title>
              {subTitle.map(str => {
                return <SubTitle>{str}</SubTitle>;
              })}
              <JumpBtn scale={0.8} onClick={() => setForm()} style={{ marginTop: 80 }}>
                立即了解增长案例
              </JumpBtn>
            </div>
          </BgWrapper>
        );
      })}
      <BottomWrapper length={dataList.length}>
        <Container fluid style={{ height: '100%' }}>
          <Row>
            {dataList.map(({ tabName }, i) => {
              return (
                <Col>
                  <BottomContent
                    onMouseEnter={() => {
                      setCurrIndex(i);
                    }}
                    className={classNames({ active: i === currIndex })}>
                    {tabName}
                  </BottomContent>
                </Col>
              );
            })}
          </Row>
        </Container>
      </BottomWrapper>
    </Wrapper>
  );
};
