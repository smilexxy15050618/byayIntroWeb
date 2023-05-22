import React, { FC, ReactNode, useState,useEffect } from 'react';
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
@media (max-width: 768px) {
  width: 97%;
  margin:0 auto;
  // margin: 0 16px;
.dropdown botton{
  min-width:20%;

}
}

border: 1px solid rgba(255, 255, 255, 1);
button:last-child {
  width: 132px;
height: 46px;
@media (max-width: 768px) {
  width:70px;
  font-size:12px;
}
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
  {
    area:'中国大陆 ',
    number:'+86'
  },
  {
    area:'中国香港 ',
    number:'+852'
  },
  {
    area:'中国澳门 ',
    number:'+853'
  },
  {
    area:'中国台湾 ',
    number:'+886'
  },
  {
    area:'韩国 ',
    number:'+82'
  },
  {
    area:'日本',
    number:'+81'
  },
  {
    area:'美国',
    number:'+1'
  },{
    area:'加拿大',
    number:'+1'
  },
  {
    area:'英国',
    number:'+44'
  },
  {
    area:'新加坡',
    number:'+65'
  },
  {
    area:'马来西亚',
    number:'+60'
  },
  {
    area:'泰国',
    number:'+66'
  },
  {
    area:'越南',
    number:'+84'
  },
  {
    area:'菲律宾',
    number:'+63'
  },
  {
    area:'印度尼西亚',
    number:'+62'
  },
  {
    area:'意大利',
    number:'+39'
  },
  {
    area:'俄罗斯',
    number:'+7'
  },
  {
    area:'新西兰',
    number:'+64'
  },
  {
    area:'荷兰',
    number:'+31'
  },
  {
    area:'瑞典',
    number:'+46'
  },
  {
    area:'澳大利亚',
    number:'+61'
  },
  {
    area:'乌克兰',
    number:'+380'
  },
  {
    area:'法国',
    number:'+33'
  },
  {
    area:'德国',
    number:'+49'
  },
];
const defaultOption = 1;
const RawByVoiceFooter: FC<IProps> = ({ className, title, desc, onClick, btnText }) => {
  useEffect(()=>{
    document.body.addEventListener('click',function(e){
      // console.log(e);
    })
  },[])
  const [sleindex,  setSleindex] = useState(list[0]);
  
  
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
            {sleindex.area+sleindex.number}
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ height: '300px', overflow: 'auto' }}>
            {list.map((item, index) => {
              return (
                <Dropdown.Item onClick={() => {
                  setSleindex(item)
                }} key={item.area} value={item.number}>{item.area+item.number}</Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
        <input type="text" id='input_value_number' placeholder='请输入您的手机号' />
        <button onClick={() => {
          console.log(parseInt(sleindex.number)+document.querySelector('#input_value_number').value);
          const number = parseInt(sleindex.number)+document.querySelector('#input_value_number').value;
          if(number) {
            window.open('/form?formType=1&phone='+number)
          }
        }}>马上体验</button>
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
