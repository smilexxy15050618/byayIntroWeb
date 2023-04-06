import React, { FC, ReactNode } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import ByScrollLine from '../../../components/common/ByScrollLine';
import { cssSwitch } from '../../../lib/utils';
import CommonHead from './CommonHead';
interface IProps {
  className?: string;
  children?: ReactNode;
}

const BASE_IMG_URL = `https://cdn.byai.com/static/intro/img/retail/e-commerce-customer-icon`;

const createImgUrlMatrix = (row: number, col: number, base: string): string[][] => {
  const matrix: string[][] = [];
  for (let i = 0; i < row; i++) {
    const eveRow: string[] = [];
    for (let j = 0; j < col; j++) {
      eveRow.push(`${base}/${i}-${j}.png`);
    }
    matrix.push(eveRow);
  }
  return matrix;
};

const matrix = createImgUrlMatrix(5, 8, BASE_IMG_URL);
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Model = styled.div`
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%, #ffffff 100%);
`;

const RawCustomerIconsBlock: FC<IProps> = ({ className }) => {
  return (
    <>
      <Visible md lg xl xxl xxxl>
        <CommonHead
          title={
            <>
              全类目品牌商家<span style={{ color: 'rgba(246, 102, 0, 1)' }}>「</span>私域运营提效优选
              <span style={{ color: 'rgba(246, 102, 0, 1)' }}>」</span>
            </>
          }
        />
      </Visible>
      <Visible sm xs>
        <CommonHead
          title={
            <>
              全类目品牌商家
              <span style={{ color: 'rgba(246, 102, 0, 1)' }}>
                <br />「
              </span>
              私域运营提效优选
              <span style={{ color: 'rgba(246, 102, 0, 1)' }}>」</span>
            </>
          }
        />
      </Visible>
      <Wrapper>
        <div className={className}>
          <Model />
          <div className="content-wrap">
            {matrix.map((row, i) => (
              <ByScrollLine
                width="100%"
                time={i % 2 === 1 ? '40s' : '20s'}
                delay={i % 2 === 1 ? '-2.1s' : '0s'}
                key={i}>
                <div className="customer-icon-row">
                  {row.map((imgUrl, j) => (
                    <div className={i % 2 === 1 ? 'customer-icon border-i' : 'customer-icon shadow-i'} key={j}>
                      <img src={imgUrl} alt="" />
                    </div>
                  ))}
                </div>
              </ByScrollLine>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export interface ICustomerIconsBlockProps extends IProps {
  padding?: string | string[];
}
const CustomerIconsBlock = styled(RawCustomerIconsBlock) <ICustomerIconsBlockProps>`
  img {
    margin: 0px;
  }
  width: 100%;
  // 由于每一个商标块是有margin 17px 的所以 和默认padding83px 构成了整个模块上下边距100px，这里边距可以自己定义，但要注意计算
  ${props => cssSwitch(props.padding, 'padding', ['83px 0', '0 0 50px 0'], false)}
  .customer-icon-row {
    display: flex;
    align-items: center;
  }
  .customer-icon {
    width: 183px;
    height: 86px;
    margin: 17px 21px;
    border-radius: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    > img {
      width: 80%;
    }
  }
  .shadow-i {
    position: relative;
    z-index: 1;
    box-shadow: 0 12px 13px rgb(234 236 246 / 55%);
  }
  .border-i {
    border: 1px solid rgb(243, 242, 243);
  }
  position: relative;
  .content-wrap {
    position: relative;
  }
  .center-title {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    font-weight: 500;
    color: #2b58f9;
    line-height: 56px;
    letter-spacing: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 860px;
    height: 134px;
    background: linear-gradient(
      88deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 20%,
      #ffffff 80%,
      rgba(255, 255, 255, 0) 100%
    );
    span {
      margin-left: 10px;
      color: #000;
    }
  }
  @media (max-width: 768px) {
    .customer-icon {
      width: 91px;
      height: 42px;
      margin: 9px 10px;
    }
    .shadow-i {
      box-shadow: 0 6px 7px rgb(234 236 246 / 55%);
    }
    .border-i {
      border: 1px solid rgb(243, 242, 243);
    }
    .center-title {
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 1px;
      width: 375px;
      height: 67px;
      background: linear-gradient(
        88deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 20%,
        #ffffff 80%,
        rgba(255, 255, 255, 0) 100%
      );
      span {
        margin-left: 10px;
        color: #000;
      }
    }
  }
`;
export default CustomerIconsBlock;
