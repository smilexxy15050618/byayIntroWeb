/**
 * 花了很久时间做完然后突然被x掉的页面, 指不定又心血来潮重新上了, 蓝湖地址https://lanhuapp.com/web/#/item/project/board?pid=8fc57827-f324-490e-9003-c4a1e814e5fd
 */
import { isByMobile } from '@indata/regexp';
import axios from 'axios';
import * as classNames from 'classnames';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as React from 'react';
import { Visible } from 'react-grid-system';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import * as Yup from 'yup';
import { LayoutWithoutFooter } from '../src/components/LayoutWithoutFooter';
import { media } from '../src/constants/style';
export enum FormType {
  CUSTOMER = '1',
  LINE = '2',
  PARTNER = '3',
}

// TODO: 后端接口对接
interface ICreateLeadParams {
  /** 验证码 */
  code: string;
  province: string;
  city: string;
  /** 联系人名称 */
  contactName: string;
  origin: string;
  /** 线索名称 */
  name: string;
  /** 联系方式 */
  telephone: string;
  /** 备注 */
  remark: string;
  address: string;
  customerType?: string;
  bd_vid?: string;
  keywordid?: string;
}

interface IValidInfo {
  token: string;
  authenticate: string;
}

interface ICaptchaParams {
  mobile: string;
  client: string;
  token: string;
  authenticate: string;
  source: string;
}

const isMobile = () => window.navigator.userAgent.match(/(iPhone|iPod|Android|ios|Windows Phone)/i);

const CustoemrTypeMap: Record<FormType, string> = {
  [FormType.CUSTOMER]: '最终客户',
  [FormType.LINE]: '线路合作',
  [FormType.PARTNER]: '合作伙伴',
};

const FormTitleMap: Record<FormType, string> = {
  [FormType.CUSTOMER]: '免费体验',
  [FormType.LINE]: '线路合作',
  [FormType.PARTNER]: '加盟百应',
};
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

const errorMessageMap = new Map([
  [20000004, '验证码不存在'],
  [20000006, '手机号码不正确，请重新输入'],
  [20000009, '您的信息已存在，请咨询热线400-0235-100'],
  [20000002, '验证码错误'],
  [20000003, '手机号验证失败，请重新输入'],
]);

function getProvince() {
  let cname = returnCitySN.cname || '';
  let city = '',
    province = '';
  if (/省/g.test(cname)) {
    let citySplit = cname.split('省');
    province = `${citySplit[0]}省`;
    city = citySplit[1];
  } else if (/自治区/g.test(cname)) {
    let citySplit = cname.split('自治区');
    province = `${citySplit[0]}自治区`;
    city = citySplit[1];
  } else {
    city = cname;
  }
  return {
    province: province || '--',
    city: city || '--',
  };
}

const getCaptcha = (params: ICaptchaParams) => {
  return axios.get('/byai/crm/mobileCaptcha/generate', { params });
};

const createCustomer = (params: ICreateLeadParams) => {
  return axios.post('/byai/crm/lead/websiteCreate', params);
};

interface TryFormProps {
  formType?: FormType;
}

enum ErrorTarget {
  PHONE,
  CAPTCHA,
}

interface TryFormState {
  captchaTime: number;
  submitSuccess: boolean;
  error: {
    target: ErrorTarget | null;
    message: string;
    errorChange: boolean;
  };
  isSubmitting: boolean;
  captchaVisible: boolean;
  validInfo: IValidInfo;
}

const FORM_BG = '//cdn.byai.com/static/official-website/form/bg-tanchuang.png';
const ASSISTANT = 'https://cdn.byai.com/node_front/1575270511751/aizhuli%202.png';
const LOGO = '//cdn.byai.com/static/official-website/form/logo-white-1222.png';

const FormSchema = Yup.object().shape({
  companyName: Yup.string().trim().required('请填写您的公司名称'),
  name: Yup.string().trim().required('请填写您的姓名'),
  phone: Yup.string().trim().required('请填写您的电话'),
  captcha: Yup.string().trim().required('请填写验证码'),
});

const FormBgWrapper = styled.div`
  background: #f9faff;
  .form-footer {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
    line-height: 24px;
    align-self: center;
    ${media.phone`
          display: none;
        `}
    p {
      text-align: center;
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

const FormWrapper = styled.div`
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    background-color: transparent !important;
    background-image: none !important;
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
  }
  input::placeholder {
    color: #999;
  }
  .content-wrapper {
    padding-top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    .img-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
    ${media.phone`
      padding-top: 0;
      flex-direction: column;
      max-width: 100vw !important;
      height: auto;
      overflow-y: auto;
    `}
    .img-wrapper-mobile {
      display: none;
      ${media.phone`
        display: block;
      `}
      .img-xs {
        margin: 20px auto;
        width: 90%;
        img {
          width: 50px;
        }
        ${media.phone`
          margin: 0;
          width: 100%;
          height: 16vw;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 18vw;
            /* height: 5.3vw; */
            margin: 0;
          }
        `}
      }
      width: 100%;
      background-image: url(${FORM_BG});
      background-size: cover;
      height: 40vh;
    }
    .img-wrapper {
      width: 30vw;
      min-width: 400px;
      background-image: url(${FORM_BG});
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px 0;
      ${media.phone`display: none;`}
      img {
        width: 140px;
        &:first-child {
          margin-bottom: 0;
          display: none;
        }
        &:last-child {
          width: 98px;
        }
      }
      .slogan {
        margin-top: 11px;
        font-size: 32px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 50px;
        letter-spacing: 1px;
      }
      .assitant {
        margin-top: -100px;
      }
    }

    .form-content {
      width: 582px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      min-height: 100vh;
      ${media.phone`
        width: 90%;
        min-height: auto;
        overflow-y: unset;
      `}

      .form-content-bg {
        position: absolute;
        z-index: 0;
        &.double-circle {
          top: 386px;
          right: -460px;
        }

        &.circle {
          top: 600px;
          left: -310px;
        }

        &.circle-dot {
          top: -20px;
          left: -200px;
        }
        ${media.phone`
          display: none;
        `}
      }

      .back-home {
        position: absolute;
        top: 40px;
        right: 60px;
        display: flex;
        font-size: 28px;
        cursor: pointer;
        text-decoration: none;
        color: rgba(13, 25, 36, 1);
        font-size: 16px;
        ${media.phone`
          display: none;
        `}
        .iconfont {
          padding-right: 8px;
        }
        p {
          line-height: 22px;
        }
      }
      .title {
        position: relative;
        font-size: 32px;
        margin-bottom: 30px;
        ${media.phone`
          text-align: center;
          margin-bottom: 0px;
          width: 90%;
          margin-top: calc(8.5vw - 20px);
        `}
        img {
          display: none;
          ${media.phone`
            display: none;
            position: absolute;
            left: 50%;
            top: -60px;
            transform: translateX(-50%);
            width: 70px;
            z-index: 1;
          `}
        }
        h3 {
          margin-top: 0;
          margin-bottom: 8px;
          ${media.phone`
            font-size: 5.3vw;
            font-weight: 400;
            margin-bottom: 4px;
            color: #0D1924;
            line-height: 1.8;
          `}
        }
        p {
          font-size: 16px;
          color: rgba(102, 102, 102, 1);
          line-height: 22px;
          ${media.phone`
            font-size: 3.2vw;
            font-weight: 400;
            color: #666666;
            line-height: 1.8;
            margin-bottom: 8vw;
          `}
        }
      }
      form {
        ${media.phone`
          width: 90%;
          min-height: 590px;
          padding: 20px;
          box-shadow: 0px 0px 20px 0px rgba(49, 83, 212, 0.1);
          position: absolute;
          left: 50%;
          top: calc(-40vh + 16vw);
          transform: translate(-50%);
          margin-bottom: 30px;
          margin-top: -70px;
          border-radius: 4px;
        `}
        z-index: 1;
        background: #fff;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        margin-bottom: 80px;
        box-sizing: border-box;
        ${media.phone`
          justify-content: unset;
        `}
        h3 {
          font-weight: 400;
          font-size: 36px;
          color: rgba(13, 25, 36, 1);
          line-height: 50px;
          margin-top: 70px;
          margin-bottom: 40px;
        }
        .error-message {
          font-size: 14px;
          line-height: 20px;
          width: 320px;
          color: #ff0000;
          margin-bottom: -20px;
          transform: translateY(-25px);
          z-index: 2;
          white-space: nowrap;
          ${media.phone`
            width: 90%;
            font-size: 12px;
            transform: translateY(-17px);
            white-space: pre-wrap;
          `}
        }
        padding: 60px;
        box-shadow: 0px 16px 42px 0px rgba(3, 43, 183, 0.08);
        border-radius: 16px;
        /* > * {
          margin: 0 60px 32px;
        } */
        .form-row {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          margin: 0 0 32px;

          &.icon-top {
            align-items: flex-start;
            .label {
              margin-top: 16px;
              height: auto;
            }
          }
          ${media.phone`
            margin-bottom: 15px;
          `}
          input {
            ::placeholder {
              font-size: 1.6rem;
            }
          }
          &.error {
            input {
              border: 1px solid #ff0000;
            }
          }
          .captcha-btn {
            position: absolute;
            right: 0;
            bottom: 0;
            top: 0;
            width: 22%;
            user-select: none;

            ${media.phone`
              font-size: 14px;
              padding-right: 10px;
            `}
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 20px;
            color: #2b58f9;
            cursor: pointer;
            min-width: 120px;
            &.disabled {
              color: #999999;
            }
          }
          .label {
            position: absolute;
            left: 0;
            height: 100%;
            display: flex;
            align-items: center;

            .label-icon {
              display: inline-flex;
              align-items: center;
              transition: all 0.3s ease-in-out;

              img {
                margin-left: 24px;
                height: 22px;
                margin-bottom: 0;
                ${media.phone`
                  margin-left: 10px;
                `}
              }
            }

            .iconfont,
            img {
              margin-left: 26px;
              height: 100%;
              display: inline-flex;
              align-items: center;
              color: rgba(0, 0, 0, 0.65);
            }
            /* img {
              transition: all 0.3s ease-in-out;
            } */

            &.required {
              i:after {
                content: '*';
                font-family: 'iconfont';
                font-size: 18px;
                font-style: normal;
                color: #ff0000;
                display: inline-block;
                margin-left: 8px;
                margin-top: 5px;
                ${media.phone`
                  font-size: 14px;
                  margin-left: 4px;
                `}
              }
            }
          }
          input,
          textarea {
            border-radius: 4px;
            padding-top: 0;
            padding-bottom: 0;
            flex: 1;
            border: 1px solid rgba(238, 238, 238, 1);
            padding-left: 78px;
            box-shadow: none;
            -webkit-appearance: none;
            transition: all 0.3s ease-in-out;
            &.error-input {
              color: #ff0000 !important;
              transition: none;
            }
            &:focus {
              outline: none;
              border-color: #3153d4;
            }

            &::placeholder {
              color: rgba(0, 0, 0, 0.25);
            }
          }
          textarea {
            resize: none;
            box-sizing: border-box;
            height: 112px;
            padding-top: 16px;
            padding-right: 24px;
            padding-bottom: 16px;
            ${media.phone`
              height: 60px;
              padding-left: 48px;
            `}
          }

          input {
            height: 56px;
            ${media.phone`
              font-size: 14px;
              height: 46px;
              padding-left: 48px;
            `}
          }
        }
        button {
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2b58f9;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
          border: none;
          ${media.phone`
            margin-top: 8px;
            height: 11.73vw;
            border-radius: 5.865vw;
            line-height: 11.73vw;
          `}
          transition: all 0.3s ease-in-out;
          &:hover {
            color: #ffffff;
            background: #1f31af;
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
`;

const SuccessContent = styled.div`
  height: 700px;
  padding-top: 96px;
  margin-bottom: 40px;
  text-align: center;
  .success-btn-group {
    margin-top: 56px;
    padding: 0 90px;
    display: flex;
    justify-content: space-between;
    ${media.phone`
      padding: 0;
    `}
    .btn {
      color: #2b58f9;
      cursor: pointer;
      display: flex;
      align-items: center;
      > img {
        height: 21px;
        margin-right: 10px;
      }
      > desc {
        font-size: 18px;
      }
    }
  }
  .success-icon {
    width: 72px;
    height: 72px;
    margin-bottom: 24px;
    font-size: 72px;
    background: #fff;
    color: #1bb723;
  }
  .success-title {
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
    line-height: 40px;
  }
  .tips {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 28px;
    color: #666;
    margin-bottom: 64px;
    p {
      margin: 0;
    }
  }
  .code {
    width: 250px;
    margin-bottom: 24px;
  }
  .footer-tips {
    color: #666;
    font-size: 16px;
    line-height: 33px;
    p {
      margin: 0;
    }
    img {
      width: 21px;
    }
    /* i {
      display: inline-block;
      width: 19px;
      height: 17px;
      background-size: cover;
      color: #1BB723;
      font-size: 20px;
    } */
  }
  ${media.phone`
    width: calc(100vw - 8vw);
    box-shadow:0px 0px 20px 0px rgba(49,83,212,0.1);
    position: absolute;
    left: 50%;
    top: 60px;
    transform: translate(-50%);
    padding: 8.5vw 8% 6.4vw;
    height: calc(100vh - 32vw);
    min-height: 547px;
    .success-icon {
      width: 16vw;
      height: 16vw;
      font-size: 16vw;
      margin-bottom: 6.4vw;
    }
    .success-title {
      font-size: 4.7vw;
      color: #0D1924;
    }
    .tips {
      font-size: 3.2vw;
      line-height: 5.2vw;
      text-align: center;
      color: #999999;
      margin-bottom: 6.4vw;
    }
    .code {
      width: 37.3vw;
      height: 37.3vw;
      margin-bottom: 3.2vw;
    }
    .footer-tips {
      color: #0D1924;
      font-size: 3.2vw;
      line-height: 5.2vw;
      margin-bottom: 15vw;
      
    }
    .back-btn {
      color: #3153D4;
      display: inline-block;
      width: 44vw;
      height: 10.8vw;
      border-radius: 5.4vw;
      border: 1px solid #3153D4;
      background: #FFF;
      font-size: 3.7vw;
      line-height: 10.8vw;
      text-align: center;
      transition: all 0.3s;
      cursor: pointer;
      /* position: absolute;
      bottom: 8.5vw;
      left: 50%;
      transform: translateX(-50%); */
      &:hover {
        border: 1px solid #FFF;
        color: #FFF;
        background: #3153D4;
      }
    }
  `}
`;

const YpRiddlerWrapper = styled.div`
  /* position: absolute !important;
  top: -20px;
  height: 40px; */
  .yp-riddler {
    .yp-riddler-slide-img-container {
      width: 462px !important;
      ${media.phone`
        width: 320px !important;
      `}
      .yp-riddler-slider-bg {
        width: 462px !important;
        height: 238px !important;
        ${media.phone`
          width: 320px !important;
          height: 165px !important;
        `}
      }
    }
  }
  .yp-riddler-win-masker {
    bottom: 10px !important;
  }
  .yp-riddler-mark {
    display: none !important;
  }
  .yp-riddler-slider-area {
    margin-top: 0 !important;
    width: auto !important;
    height: 56px !important;
    line-height: 56px !important;
    margin-bottom: 32px;
    ${media.phone`
      margin-bottom: 15px;
      height: 46px !important;
      line-height: 46px !important;
    `}
  }
  .yp-riddler-slider-btn {
    top: -1px !important;
    width: 56px !important;
  }
`;
export default class TryForm extends React.Component<TryFormProps, TryFormState> {
  static getInitialProps({ query }) {
    if (query && query.formType) {
      return { formType: query.formType };
    }
    return { formType: FormType.CUSTOMER };
  }

  state: TryFormState = {
    captchaTime: 0,
    submitSuccess: false,
    error: {
      target: null,
      message: '',
      errorChange: false,
    },
    isSubmitting: false,
    captchaVisible: false,
    validInfo: {
      token: '',
      authenticate: '',
    },
  };

  timer: number;
  form: Formik | null;

  handleGetcaptcha = async (mobile: string, validInfo: IValidInfo) => {
    const { error } = this.state;
    this.setState({ error: { ...error, target: null } });
    if (!isByMobile(mobile)) {
      this.setState({
        error: {
          target: ErrorTarget.PHONE,
          message: '手机号码不正确，请重新输入',
          errorChange: false,
        },
        validInfo,
      });
      return;
    }
    const params = {
      mobile,
      client: 'WEB',
      token: validInfo.token,
      authenticate: validInfo.authenticate,
      source: 'OFFICIAL_WEBSITE',
    };
    const res = await getCaptcha(params);
    if (res.data.code !== 200) {
      return toast.error(res.data.resultMsg);
    }
    this.setState({ captchaTime: 60, validInfo: { token: '', authenticate: '' } }, () => {
      this.timer = setInterval(() => {
        if (this.state.captchaTime <= 0 && this.timer) {
          clearInterval(this.timer);
        }
        this.setState(prevState => ({
          captchaTime: prevState.captchaTime - 1,
        }));
      }, 1000);
    });
  };

  handleSubmit = async value => {
    if (this.state.isSubmitting) {
      return;
    }
    this.setState({
      error: {
        target: null,
        message: '',
        errorChange: false,
      },
      isSubmitting: true,
    });
    const formType = this.props.formType || FormType.CUSTOMER;
    const origin = localStorage.getItem('origin');
    const keywordid = localStorage.getItem('keywordid');
    const { city, province } = getProvince();
    const address = typeof returnCitySN !== 'undefined' ? returnCitySN.cname : '';
    const customerType = CustoemrTypeMap[formType];
    const submitRes = await createCustomer({
      code: value.captcha,
      province,
      city,
      contactName: value.name,
      origin: origin ? spreadOrigin[origin] : '官网自然流量',
      name: value.companyName,
      telephone: value.phone,
      remark: value.remark,
      customerType,
      address,
      keywordid,
      // bd_vid: localStorage.getItem('bd_vid') ? localStorage.getItem('bd_vid') : '',
    });

    this.setState({ isSubmitting: false });
    if (submitRes.data.code !== 200) {
      let flag = true;
      errorMessageMap.forEach((message, code) => {
        if (code === submitRes.data.code) {
          flag = false;
          return this.setState({
            error: {
              target: code === 20000004 || code === 20000002 ? ErrorTarget.CAPTCHA : ErrorTarget.PHONE,
              message,
              errorChange: false,
            },
          });
        }
      });
      return flag && toast.error(submitRes.data.resultMsg);
    }
    window._agl && window._agl.push(['track', ['success', { t: 3 }]]);
    // 非线路合作 百度统计 事件转换
    if (formType !== FormType.LINE) {
      window._hmt &&
        window._hmt.push(['_trackEvent', '报名成功', FormTitleMap[formType], isMobile() ? '移动端' : 'PC端']);
    }
    // toast.success('提交成功，我们将在24小时内联系您');
    localStorage.removeItem('bd_vid');

    this.setState({
      submitSuccess: true,
    });
    // setTimeout(() => {
    //   location.href = '/service';
    // }, 300);
  };

  backHomePage = () => {
    location.href = '/index';
  };

  renderYpRiddler = () => {
    if (!window.YpRiddler) {
      setTimeout(() => {
        this.renderYpRiddler();
      }, 100);
      return;
    }
    if (!document.getElementById('validate-code') || this.state.captchaVisible) {
      return;
    }
    const _this = this;
    new window.YpRiddler({
      expired: 10,
      mode: 'external',
      winWidth: 240,
      lang: 'zh-cn',
      container: document.getElementById('validate-code'),
      appId: 'eeef14fd188a430da6b386ffec1283d9',
      version: 'v1',
      onError(param: any) {
        if (param.code === 429) {
          toast.error('请求过于频繁，请稍后再试！');
        }
        // 异常回调
        toast.error('验证服务异常');
      },
      onSuccess(validInfo: IValidInfo, close: any) {
        _this.form.setFieldValue('captcha', '');
        _this.handleGetcaptcha(_this.form.state.values.phone, validInfo);
        _this.setState({
          captchaVisible: true,
        });
        close();
      },
      onFail(code: any, msg: any, retry: any) {
        // toast.error('验证失败，请重试');
        retry();
      },
    });
  };

  componentDidMount() {
    this.renderYpRiddler();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.captchaVisible !== prevState.captchaVisible) {
      this.renderYpRiddler();
    }
  }

  render() {
    const { formType = FormType.CUSTOMER } = this.props;
    const { captchaTime, submitSuccess, error, captchaVisible, validInfo } = this.state;
    if (typeof document === 'undefined') return null;

    return (
      <FormBgWrapper>
        <LayoutWithoutFooter hasSuspension={false}>
          {(formVisible, setFormVisible) => (
            <FormWrapper>
              <div className="content-wrapper">
                {/* <div className="img-wrapper">
                  <img src={ASSISTANT} alt="" style={{ marginBottom: 40, height: 100, width: 89 }}/>
                  <img src={LOGO} alt="" />
                  <div className="slogan">以数智化驱动新商业文明</div>
                </div> */}
                {/* <div className="img-wrapper-mobile">
                  <div className="img-xs">
                    <Link href="/">
                      <img src={LOGO} alt="" />
                    </Link>
                  </div>
                </div> */}
                {submitSuccess ? (
                  <SuccessContent>
                    <p className="success-title">您的申请已经提交成功！</p>
                    <div className="tips">
                      <Visible md lg xl xxl xxxl>
                        <p>百应客服人员会尽快与您联系，请保持电话畅通，感谢您的关注！</p>
                        <p>官方电话：400-0235-100</p>
                      </Visible>
                      <Visible xs sm>
                        <p>百应客服人员会尽快与您联系，请保持电话畅通，感谢您的关注！官方电话：400-0235-100</p>
                      </Visible>
                    </div>
                    <img className="code" src="//cdn.byai.com/static/intro/img/custom-qr-0119.png" />
                    <div className="footer-tips">
                      <p>
                        打开 <img src="https://cdn.byai.com/static/intro/img/form/wechat.png" /> 微信，立即一对一咨询
                      </p>
                      <p style={{ paddingLeft: '7px' }}>获取更多产品信息及客服支持！</p>
                    </div>
                    <div className="success-btn-group">
                      <div className="btn">
                        <img src="https://cdn.byai.com/static/intro/img/form/back.png" />
                        <a className="desc" href="/">
                          回到首页
                        </a>
                      </div>
                      <div className="btn">
                        <img src="https://cdn.byai.com/static/intro/img/form/call.png" />
                        <a className="desc" href="tel:400-0235-100">
                          电话咨询
                        </a>
                      </div>
                    </div>
                  </SuccessContent>
                ) : (
                  <div className="form-content">
                    <img
                      className="form-content-bg circle"
                      src="https://cdn.byai.com/static/intro/img/form/circle.png"
                    />
                    <img
                      className="form-content-bg double-circle"
                      src="https://cdn.byai.com/static/intro/img/form/circle_circle.png"
                    />
                    <img
                      className="form-content-bg circle-dot"
                      src="https://cdn.byai.com/static/intro/img/form/circle_dot.png"
                    />

                    {/* <Link href="/">
                    <a className="back-home">
                      <i className="iconfont iconshouye" />
                      <p>回到首页</p>
                    </a>
                  </Link> */}
                    <Formik
                      ref={r => (this.form = r)}
                      initialValues={{
                        companyName: '',
                        business: '',
                        post: '',
                        name: '',
                        phone: '',
                        captcha: '',
                        remark: '',
                      }}
                      validationSchema={FormSchema}
                      onSubmit={this.handleSubmit}>
                      <Form className="form">
                        <div className="title">
                          <Link href="/">
                            <img src={ASSISTANT} alt="" style={{ marginTop: -45 }} />
                          </Link>
                          {/* <h3>{FormTitleMap[formType]}</h3> */}
                          <h3>申请加入百应合作生态</h3>
                          <p>提交后，我们将在一个工作日内与您联系</p>
                        </div>
                        <Field
                          name="companyName"
                          render={({ field, form: { touched, errors } }) => (
                            <div className={'form-row ' + (touched[field.name] && errors[field.name] ? 'error' : '')}>
                              <input placeholder="请填写您的公司名称" type="text" {...field} />
                              <div className="label required">
                                {/* <i className="iconfont icongongsi" /> */}
                                <i className="label-icon">
                                  <img src="https://cdn.byai.com/static/intro/img/form/company_name.png" />
                                </i>
                              </div>
                            </div>
                          )}
                        />
                        {/* TODO:  */}
                        <Field
                          name="business"
                          render={({ field, form: { touched, errors } }) => (
                            <div className={'form-row ' + (touched[field.name] && errors[field.name] ? 'error' : '')}>
                              <input placeholder="请填写贵司的主营业务" type="text" {...field} />
                              <div className="label required">
                                <i className="label-icon">
                                  <img src="https://cdn.byai.com/static/intro/img/form/business.png" />
                                </i>
                              </div>
                            </div>
                          )}
                        />
                        <Field
                          name="name"
                          render={({ field, form: { touched, errors } }) => (
                            <div className={'form-row ' + (touched[field.name] && errors[field.name] ? 'error' : '')}>
                              <input placeholder="请填写您的姓名" type="text" {...field} />
                              <div className="label required">
                                {/* <i className="iconfont iconxingming" /> */}
                                <i className="label-icon">
                                  <img src="https://cdn.byai.com/static/intro/img/form/name.png" />
                                </i>
                              </div>
                            </div>
                          )}
                        />
                        {/* TODO */}
                        <Field
                          name="post"
                          render={({ field, form: { touched, errors } }) => (
                            <div className={'form-row ' + (touched[field.name] && errors[field.name] ? 'error' : '')}>
                              <input placeholder="请填写您的职务" type="text" {...field} />
                              <div className="label required">
                                {/* <i className="iconfont icongongsi" /> */}
                                <i className="label-icon">
                                  <img src="https://cdn.byai.com/static/intro/img/form/post.png" />
                                </i>
                              </div>
                            </div>
                          )}
                        />
                        <Field
                          name="phone"
                          render={({ field, form: { touched, errors } }) => (
                            <div className={'form-row ' + (touched[field.name] && errors[field.name] ? 'error' : '')}>
                              <input
                                placeholder="请填写您的电话"
                                type="text"
                                {...field}
                                className={error.target === ErrorTarget.PHONE ? 'error-input' : ''}
                                onFocus={e => {
                                  e.target.className = '';
                                }}
                                autoComplete="off"
                              />
                              <div className="label required">
                                {/* <i className="iconfont iconshoujidianhua" /> */}
                                <i className="label-icon">
                                  <img src="https://cdn.byai.com/static/intro/img/form/phone.png" />
                                </i>
                              </div>
                            </div>
                          )}
                        />
                        {error.target === ErrorTarget.PHONE && <div className="error-message">{error.message}</div>}
                        {/* 验证码 */}
                        {!captchaVisible ? (
                          <YpRiddlerWrapper id="validate-code" />
                        ) : (
                          <Field
                            name="captcha"
                            render={({ field, form: { touched, errors, values } }) => (
                              <div className={'form-row ' + (touched[field.name] && errors[field.name] ? 'error' : '')}>
                                <input
                                  placeholder="请填写验证码"
                                  type="text"
                                  {...field}
                                  className={error.target === ErrorTarget.CAPTCHA ? 'error-input' : ''}
                                  onFocus={e => {
                                    e.target.className = '';
                                  }}
                                  autoComplete="off"
                                />
                                <div className="label required">
                                  <i className="label-icon">
                                    <img src="https://cdn.byai.com/static/intro/img/form/code.png" />
                                  </i>
                                </div>
                                <div
                                  className={classNames('captcha-btn', {
                                    disabled: !values.phone || captchaTime > 0,
                                  })}
                                  onClick={
                                    !values.phone || captchaTime > 0
                                      ? undefined
                                      : validInfo.token
                                      ? () => this.handleGetcaptcha(values.phone, validInfo)
                                      : () => this.setState({ captchaVisible: false })
                                  }>
                                  {captchaTime > 0 ? `${captchaTime}s` : '获取验证码'}
                                </div>
                              </div>
                            )}
                          />
                        )}
                        {error.target === ErrorTarget.CAPTCHA && <div className="error-message">{error.message}</div>}
                        <Field
                          name="remark"
                          render={({ field, form: { touched, errors } }) => (
                            <div
                              className={
                                'form-row icon-top' + (touched[field.name] && errors[field.name] ? 'error' : '')
                              }>
                              <textarea placeholder="请填写您的备注" type="text" {...field} />
                              <div className="label">
                                {/* <i className="iconfont iconbeizhu" /> */}
                                {/* <img src="https://cdn.byai.com/static/intro/img/form/remark.png" /> */}
                                <i className="label-icon">
                                  <img src="https://cdn.byai.com/static/intro/img/form/remark.png" />
                                </i>
                              </div>
                            </div>
                          )}
                        />
                        <button type="submit">立即提交</button>
                      </Form>
                    </Formik>
                  </div>
                )}
                <div className="form-footer">
                  <p>浙江省杭州市余杭区梦想小镇天使村11幢</p>
                  <p>
                    Copyright 2016-{new Date().getFullYear()}{' '}
                    <a href="https://beian.miit.gov.cn/" target="_Blank">
                      浙ICP备16033928号
                    </a>{' '}
                    版权所有 浙江百应科技有限公司
                  </p>
                </div>
              </div>
            </FormWrapper>
          )}
        </LayoutWithoutFooter>
      </FormBgWrapper>
    );
  }
}
