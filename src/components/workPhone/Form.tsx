import React, { useState, useEffect } from 'react';
import { Visible, Row, Col, Container } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CustoemrTypeMap } from '../../../pages/form';

const PhoneReg = /^[1]([3-9])[0-9]{9}$/;

const Input = styled(Col)`
  text-align: center;
  position: relative;
  margin-bottom: 16px;
  ${media.phone`
    margin: 0 auto 16px auto !important;
  `}
  &:focus-within input {
    outline: none;
    border-color: #3153d4;
  }
  &:focus-within .icon > i {
    color: #3153d4;
  }
  .input {
    width: 100%;
    background: #fff;
    border: 1px solid #d9d9d9;
    height: 32px;
    color: #999;
    font-size: 14px;
    padding-left: 34px;
    transition: all 0.3s;
  }
  .icon {
    position: absolute;
    left: 13px;
    top: 6px;
    width: 14px;
    height: 14px;
    font-size: 14px;
    i {
      font-size: 14px;
      color: #999999;
      transition: all 0.3s;
    }
  }
  .link {
    font-size: 14px;
    position: absolute;
    top: 5px;
    right: 12px;
    color: #999;
    a {
      color: #999;
    }
  }
  .red-point {
    color: #f00;
    position: absolute;
    top: 8px;
    font-size: 14px;
  }
`;

const Form = styled.div`
  width: 100%;
  height: 460px;
  padding: 60px 15vw;
  background: url('https://cdn.byai.com/static/intro/img/workphone/Form/bg5.png') no-repeat center center;
  background-size: cover;
  ${media.phone`
    background: url('https://cdn.byai.com/static/intro/img/workphone/Form/bg5.png') no-repeat center bottom #F8F9FB;
    background-size: 100%;
    height: 560px;
    padding: 60px 10vw;
  `}

  h3 {
    color: #0d1924;
    font-size: 24px;
    margin-bottom: 8px;
    text-align: center;
    ${media.phone`
      font-size: 20px;
      margin-bottom: 20px;
    `}
  }
  .tip {
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-bottom: 32px;
    ${media.phone`
      font-size: 12px;

    `}
  }
  .form-footer {
    text-align: center;
    .submitBtn {
      width: 200px;
      height: 50px;
      color: #fff;
      font-size: 16px;
      background: #3153d4;
      border-radius: 25px;
      margin-top: 16px;
    }
    p {
      color: #999;
      font-size: 14px;
      margin-top: 16px;
      ${media.phone`
        display: none;
      `}
    }
  }
`;

const spreadOrigin = {
  baidupc: '网络推广-百度PC',
  baiduyd: '网络推广-百度移动',
  sougoupc: '网络推广-搜狗PC',
  sougouyd: '网络推广-搜狗移动',
  '360pc': '网络推广-360PC',
  '360yd': '网络推广-360移动',
  shenmapc: '网络推广-神马PC',
  shenmayd: '网络推广-神马移动',
  baidupc1: '网络推广-百度PC1',
  baiduyd1: '网络推广-百度移动1',
  baidupc2: '网络推广-百度PC2',
  baiduyd2: '网络推广-百度移动2',
  baidupc3: '网络推广-百度PC3',
  baiduyd3: '网络推广-百度移动3',
  baidupc4: '网络推广-百度PC4',
  baiduyd4: '网络推广-百度移动4',
  baidupc5: '网络推广-百度PC5',
  baiduyd5: '网络推广-百度移动5',
  baidupc6: '网络推广-百度PC6',
  baiduyd6: '网络推广-百度移动6',
  baidupc7: '网络推广-百度PC7',
  baiduyd7: '网络推广-百度移动7',
  baidupc8: '网络推广-百度PC8',
  baiduyd8: '网络推广-百度移动8',
  toutiao1: '网络推广-今日头条品众',
  toutiao2: '网络推广-今日头条雅氪',
  baidufeed: '网络推广-百度信息流',
  baidufeed1: '网络推广-百度信息流1',
  baidufeed2: '网络推广-百度信息流2',
};

function getProvince() {
  const cname = returnCitySN.cname || '';
  let city = '',
    province = '';
  if (/省/g.test(cname)) {
    const citySplit = cname.split('省');
    province = citySplit[0];
    city = citySplit[1];
  } else {
    city = cname;
  }
  return {
    province: province || '--',
    city: city || '--',
  };
}

export default props => {
  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const createCustomer = (customer: Record<string, string>, code: string, origin: string) =>
    axios.post('/api/apply/customer', {
      customer,
      code,
      origin,
      bd_vid: localStorage.getItem('bd_vid') ? localStorage.getItem('bd_vid') : '',
    });

  const handleSubmit = async () => {
    const { companyName, name, phone, verificationCode } = inputValues;
    if (!companyName || !name || !phone || !verificationCode) {
      toast.error('请输入完整的信息');
      return;
    }
    const origin = localStorage.getItem('origin');
    const { city, province } = getProvince();
    const customerType =
      // CustoemrTypeMap[this.props.formType || FormType.CUSTOMER];
      CustoemrTypeMap[1];
    const submitRes = await createCustomer(
      {
        创建人: '晨翔',
        备注: inputValues.remarks,
        客户分级: '小型',
        客户名称: inputValues.companyName,
        客户来源: origin ? spreadOrigin[origin] : '官网自然流量',
        客户状态: 'C类—初步接触',
        客户电话: inputValues.phone,
        客户简称: inputValues.name,
        客户类型: customerType,
        客户邮箱: '',
        市: city,
        省: province,
        详细地址: '--',
        负责人: '慕斯',
        重要程度: '重要',
      },
      inputValues.verificationCode,
      spreadOrigin[origin],
    );

    if (submitRes.data.code !== 200) {
      return toast.error(submitRes.data.resultMsg);
    }
    console.log(submitRes);
    window._agl && window._agl.push(['track', ['success', { t: 3 }]]);
    toast.success('提交成功，我们将在24小时内联系您');
    localStorage.removeItem('bd_vid');
    setTimeout(() => {
      location.href = '/service';
    }, 300);
  };

  const getCaptcha = (mobile: string) => {
    const fd = new FormData();
    fd.append('mobile', mobile);
    return axios.post('/api/homeRegister/getRegisterCaptcha', fd, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  };

  const getCode = async () => {
    if (!PhoneReg.test(inputValues.phone)) {
      toast.error('请输入正确的手机号');
      return;
    }
    setTimer(60);
    const res = await getCaptcha(inputValues.phone);
    if (res.data.code !== 200) {
      return toast.error(res.data.resultMsg);
    }
  };

  const [inputValues, setInputValues] = useState({
    companyName: '',
    name: '',
    phone: '',
    verificationCode: '',
    remarks: '',
  });

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer <= 60 && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);

  return (
    <Form>
      <Container>
        <h3>免费体验</h3>
        <p className="tip">和42000+顶级企业一起，探索大数据+AI智能的运营与销售</p>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Input md={11} lg={11} xl={11} sm={24} xs={24}>
            <input
              type="text"
              className="input"
              placeholder="请填写您的公司名称"
              onChange={handleOnChange}
              name="companyName"
              value={inputValues.companyName}
            />
            <div className="icon">
              <i className={`iconfont icongongsi`} />
            </div>
            {!inputValues.companyName && (
              <i className="red-point" style={{ left: '160px' }}>
                *
              </i>
            )}
          </Input>
          <Input md={11} lg={11} xl={11} sm={24} xs={24}>
            <input
              type="text"
              className="input"
              placeholder="姓名"
              name="name"
              onChange={handleOnChange}
              value={inputValues.name}
            />
            <div className="icon">
              <i className={`iconfont iconxingming`} />
            </div>
            {!inputValues.name && (
              <i className="red-point" style={{ left: '62px' }}>
                *
              </i>
            )}
          </Input>
        </Row>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Input md={11} lg={11} xl={11} sm={24} xs={24}>
            <input
              type="text"
              className="input"
              placeholder="请填写您的电话"
              name="phone"
              onChange={handleOnChange}
              maxLength={11}
              value={inputValues.phone}
            />
            <div className="icon">
              <i className={`iconfont iconshoujidianhua`} />
            </div>
            {!inputValues.phone && (
              <i className="red-point" style={{ left: '132px' }}>
                *
              </i>
            )}
          </Input>
          <Input md={11} lg={11} xl={11} sm={24} xs={24}>
            <input
              type="text"
              className="input"
              placeholder="请填写验证码"
              name="verificationCode"
              onChange={handleOnChange}
              value={inputValues.verificationCode}
            />
            <div className="icon">
              <i className={`iconfont iconyanzhengma`} />
            </div>
            {inputValues.phone && (
              <div className="link">
                {timer > 0 ? (
                  `${timer}s`
                ) : (
                  <a href="javascript:void(0)" onClick={getCode}>
                    获取验证码
                  </a>
                )}
              </div>
            )}
            {!inputValues.verificationCode && (
              <i className="red-point" style={{ left: '118px' }}>
                *
              </i>
            )}
          </Input>
        </Row>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Input md={24} lg={24} xl={24} sm={24} xs={24}>
            <input
              type="text"
              className="input"
              placeholder="请填写您的备注"
              name="remarks"
              onChange={handleOnChange}
              value={inputValues.remarks}
            />
            <div className="icon">
              <i className={`iconfont iconbeizhu`} />
            </div>
          </Input>
        </Row>
        <div className="form-footer">
          <button className="submitBtn" onClick={handleSubmit}>
            立即体验
          </button>
          <p>提交后，我们将在一个工作日内与您联系</p>
        </div>
      </Container>
    </Form>
  );
};
