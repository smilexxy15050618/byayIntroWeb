import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import ByNormalBtn from './ByNormalBtn';

// import Dropdown from 'react-dropdown';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

interface IProps {
  className?: string;
  children?: ReactNode;
  title: string;
  desc?: string;
  btnText: string;
  onClick: () => void;
}

const Phone = styled.div`
  display: flex;
  align-items: center;
  width: 594px;
height: 48px;
border-radius: 6px;
background: rgba(255, 255, 255, 1);

border: 1px solid rgba(255, 255, 255, 1);
button:last-child {
  width: 132px;
height: 46px;
opacity: 1;
border-radius: 6px;
background: rgba(43, 88, 249, 1);
border:none;
float: right;
font-size: 16px;
font-weight: 500;
letter-spacing: 0px;
line-height: 23.17px;
color: rgba(255, 255, 255, 1);
}
.btn-info:not(:disabled):not(.disabled):active, .show>.btn-info.dropdown-toggle {
  background: none !important;
}
.dropdown {
  button {
    min-width: 89px;
    height: 24px;
    background: none;
    border-radius: 0;
    font-size: 14px;
font-weight: 400;
letter-spacing: 0px;
line-height: 24px;
color: rgba(90, 90, 90, 1);
border: none;
display: flex;
align-items: center;
justify-content: center;
&.dropdown-toggle {
  background: none;
  color: rgba(90, 90, 90, 1);
  border: none;
  border-right: 0.5px solid rgba(90, 90, 90, 0.3);
  &:focus {
    box-shadow: none !important;
  }
}
  }
}
input {
  flex: 1;
  outline: none;
  border: none;
  font-size: 14px;
font-weight: 400;
letter-spacing: 0px;
line-height: 24px;
color: rgba(90, 90, 90, 0.75);
padding-left: 16px;
}
`
const list = [
  '+86',
  "中国香港 +852",
  '中国澳门 +853',
  '中国台湾 +886',
  '韩国 +82',
  '日本 +81',
  '美国 +1',
  '加拿大 +1',
  '英国 +44',
  '新加坡 +65',
  '马来西亚 +60',
  '泰国 +66',
  '越南 +84',
  '菲律宾 +63',
  '印度尼西亚 +62',
  '意大利 +39',
  '俄罗斯 +7',
  '新西兰 +64',
  '荷兰 +31',
  '瑞典 +46',
  '澳大利亚 +61',
  '乌克兰 +380',
  '法国 +33',
  '德国 +49',
];
const defaultOption = 1;
const RawByVoiceFooter: FC<IProps> = ({ className, title, desc, onClick, btnText }) => {
  const [sleindex, setSleindex] = useState(list[0]);
  return (
    <div className={className}>
      <div style={{ letterSpacing: '3px' }} className="title">
        立即体验AI时代的用户运营平台
      </div>
      <div style={{ letterSpacing: '3px' }} className="desc">
        用AI构建你和用户的“亲密关系”，共建存量时代的增长引擎
      </div>
      {/* <Dropdown options={list} onChange={(e)=> {defaultOption=e}} value={defaultOption} placeholder="Select an option" />; */}
      <Phone>
        <Dropdown >
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {sleindex}
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ height: '300px', overflow: 'auto' }}>
            {list.map((item, index) => {
              return (
                <Dropdown.Item onClick={() => {
                  setSleindex(item)
                }} key={1} value={list[0]}>{item}</Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
        <input type="text" placeholder='请输入您的手机号' />
        <button onClick={() => onClick()}>马上体验</button>
      </Phone>
      {/* <ByNormalBtn
        onClick={() => onClick()}
        width="200px"
        height="50px"
        color="rgba(43, 43, 43, 1)"
        bigStyle={`
          font-size: 20px;
          font-weight: 500;
        `}
        smallStyle={`
          width: 104px;
          height: 38px;
          font-size: 16px;
          font-weight: 500;
        `}
        borderRadius={4}
        background="#FFFFFF">
        {btnText}
      </ByNormalBtn> */}
    </div>
  );
};

export interface IByVoiceFooterProps extends IProps {
  background?: string;
  descMargin?: string;
  padding?: string;
}
/**
 * @param title: 大标题
 * @param desc?: 小标题
 * @param btnText?: 按钮文字
 * @param background?: 背景颜色 string
 * @param onClick?: 点击回调
 * @param descMargin?: 小标题的margin 16px 0px 24px
 * @param padding?: 内边距 48px 20px 40px;
 */
const ByVoiceFooter = styled(RawByVoiceFooter) <IByVoiceFooterProps>`
  padding: 79px 20px 78px;
  background: ${props => props.background}, #2b58f9;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 40px;
    font-weight: 500;
    color: #ffffff;
    line-height: 48px;
    letter-spacing: 2.5px;
    text-align: center;
  }
  .desc {
    margin: 8px 0px 40px;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 6.6px;
    line-height: 26px;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding: 46px 0;
    .title {
      font-size: 20px;
      color: #ffffff;
      line-height: 32px;
      letter-spacing: 0 !important;
    }
    .desc {
      font-size: 14px;
      line-height: 22px;
      margin: 12px 0px 16px;
      color: #ffffff;
      letter-spacing: 0 !important;
    }
  }
`;
export default ByVoiceFooter;
