import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { cssSwitch } from '../../lib/utils';
import ByScrollLine from './ByScrollLine';
interface IProps {
  className?: string;
  children?: ReactNode;
}

const BASE_IMG_URL = ``;

const createImgUrlMatrix = (row: number, col: number, base: string, offset: number): string[][] => {
  const matrix: string[][] = [];
  let number = 0;
  for (let i = 0; i < row; i++) {
    const eveRow: string[] = [];
    for (let j = 0; j < col; j++) {
      number++;
      if (number > row * col + offset) {
        continue;
      }
      eveRow.push(`${base}${Math.floor(number / 10)}${number % 10}.png`);
    }
    matrix.push(eveRow);
  }
  // 第五行新增两个特殊的
  matrix[4].push('51.png');
  matrix[4].push('52.png');
  console.log(matrix);

  return matrix;
};

const matrix = createImgUrlMatrix(5, 10, '', 0);
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fff;
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
    <Wrapper>
      <div className={className}>
        <Model />
        <div className="content-wrap">
          {/* <div className="center-title">
            <span>更受客户信任的战略伙伴</span>
          </div> */}
          {matrix.map((row, i) => (
            <ByScrollLine
              width="100%"
              time={i % 2 === 1 ? 5 * row.length + 's' : 4 * row.length + 's'}
              delay={i % 2 === 1 ? '-2.1s' : '0s'}
              key={i}>
              <div className="customer-icon-row">
                {row.map((imgUrl, j) => (
                  <div className={i % 2 === 1 ? 'customer-icon border-i' : 'customer-icon shadow-i'} key={j} data-v={imgUrl} style={{display:imgUrl =='23.png'? 'none':''}}>
                    <img
                      src={
                        'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/logo/logo%E5%A2%99-' +
                        imgUrl
                      }
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </ByScrollLine>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export interface ICustomerIconsBlockProps extends IProps {
  padding?: string | string[];
}
const CustomerIconsBlock = styled(RawCustomerIconsBlock)<ICustomerIconsBlockProps>`
  img {
    margin: 0px;
  }
  width: 100%;
  // 由于每一个商标块是有margin 17px 的所以 和默认padding83px 构成了整个模块上下边距100px，这里边距可以自己定义，但要注意计算
  ${props => cssSwitch(props.padding, 'padding', ['83px 0', '88px 0'], false)}
  .customer-icon-row {
    display: flex;
    align-items: center;
  }
  .customer-icon {
    width: 136px;
    height: 64px;
    margin: 0 8px 24px;
    border-radius: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: white;
    > img {
      width: 65%;
    }
  }
  .shadow-i {
    position: relative;
    z-index: 1;
    box-shadow: 0px 10px 18px 0px rgba(63, 79, 164, 0.15);
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
    top: 154px;
    transform: translate(-50%, 0);
    font-size: 32px;
    font-weight: 500;
    color: #5a5a5a;
    letter-spacing: 2.4px;
    width: 902px;
    height: 86px;
    line-height: 100px;
    text-align: center;
    background: linear-gradient(270deg, #ffffff 0%, #ffffff 22.17%, #ffffff 76.04%, #ffffff 100%);
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
