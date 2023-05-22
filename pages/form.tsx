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
import IconList from '../src/components/IconList';
import { FormType } from '../src/components/TryForm';
import { media } from '../src/constants/style';

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

export const CustoemrTypeMap: Record<FormType, string> = {
  [FormType.CUSTOMER]: '最终客户',
  [FormType.LINE]: '线路合作',
  [FormType.PARTNER]: '合作伙伴',
  [FormType.ECOLOGY]: '生态合作',
};

export const FormTitleMap: Record<FormType, string> = {
  [FormType.CUSTOMER]: '免费体验',
  [FormType.LINE]: '线路合作',
  [FormType.PARTNER]: '渠道合作',
  [FormType.ECOLOGY]: '生态合作',
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
  let cname = typeof returnCitySN !== 'undefined' && returnCitySN.cname ? returnCitySN.cname : '';
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
  origin?: 'crm' | 'ecommerce';
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
  publicCodeVisible: boolean;
  videoCodeVisible: boolean;
  isAgree: boolean;
}

const FORM_BG = '//cdn.byai.com/static/official-website/form/bg-tanchuang.png';
const LOGO = '//cdn.byai.com/static/official-website/form/logo-white-1222.png';
const CRM_LOGO =
  '//cdn.byai.com/static/official-website/crm/%E7%99%BE%E5%BA%94%E6%98%93%E5%AE%A2%E6%B7%B1%E8%89%B2%E8%83%8C%E6%99%AFlogo.png';
const IMG_BG = 'https://cdn.byai.com/by-fe-cdn/static/pmp/c5175ec6-804c-4cb6-b611-39e90fe67eeb.png';
const LOGO_PC = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/左上角-百应logo.svg';
// 公众号默认图
const PUBLIC_DEFAULT_IMG = 'https://cdn.byai.com/by-fe-cdn/static/pmp/4c7f4da2-03aa-4545-93ba-4927b8955d73.png';
// 视频号默认图
const VIDEO_DEFAULT_IMG = 'https://cdn.byai.com/by-fe-cdn/static/pmp/58582b22-bc00-4f62-b68e-ef16d39296f1.png';
// 公众号hover图
const PUBLIC_HOVER_IMG = 'https://cdn.byai.com/by-fe-cdn/static/pmp/c4f18427-8362-4664-8e4c-f0e26303927f.png';
// 视频号hover图
const VIDEO_HOVER_IMG = 'https://cdn.byai.com/by-fe-cdn/static/pmp/a17639a9-7a79-4df1-8538-9582a23ed711.png';
// 公众号二维码
const PUBLIC_CODE = 'https://cdn.byai.com/by-fe-cdn/static/pmp/812536b8-5dd6-4fdf-8f8d-57792f7d9858.png';
// 视频号二维码
const VIDEO_CODE = 'https://cdn.byai.com/by-fe-cdn/static/pmp/77229f52-63fc-45b3-a901-4e54192c540a.png';
// 申请成功二维码
const QR_CODE = 'https://cdn.byai.com/by-fe-cdn/static/pmp/1791c040-9639-4021-a665-17598585f812.png';

const FormSchema = Yup.object().shape({
  companyName: Yup.string().trim().required('请输入您的公司名称'),
  name: Yup.string().trim().required('请输入您的姓名'),
  phone: Yup.string().trim().required('请输入您的电话'),
  captcha: Yup.string().trim().required('请输入验证码'),
});

const FormWrapper = styled.div<{ origin?: 'crm' | 'ecommerce' }>`
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
      background-color: transparent!important;
      background-image: none !important;
      -webkit-box-shadow: 0 0 0 1000px white inset !important;
  }
  background-color: #ffffff;
  input::placeholder {
    color: #999;
  }
  .free-page-head {
    .logo {
      ${media.phone`
        display: none;
      `}
      position: absolute;
      top: 40px;
      left: 40px;
      width: 112px;
    }
    .back-home {
      ${media.phone`
        display: none;
      `}
      position: absolute;
      top: 48px;
      right: 40px;
      display: flex;
      font-size: 28px;
      cursor: pointer;
      text-decoration: none;
      color: rgba(13, 25, 36, 1);
      font-size: 16px;
      .iconfont {
        padding-right: 8px;
      }
      p {
        line-height: 22px;
      }
      &: hover {
        color: #2B58F9;
      }
    }
  }
  .content-wrapper {
    width: 100vw;
    min-height: 100vh;
    ${media.phone`
      flex-direction: column;
      max-width: 100vw !important;
      height: auto;
      overflow-y: auto;
    `}
  }
    .content {
      display: flex;
      justify-content: center;
    }
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
        @media (max-width: 768px) {
          margin: 0;
          width: 100%;
          height: 16vw;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: ${props => (props.origin === 'crm' ? '26vw' : '18vw')};
            margin: 0;
          }
        }
      }
      width: 100%;
      background-image: url(${FORM_BG});
      background-size: cover;
      height: 40vh;
    }
    .left-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ${media.phone`
        display: none;
      `}
      .left-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 86px;
        margin-bottom: 54px;
        .title {
          font-size: 32px;
          font-weight: 600;
          color: #2B58F9;
          line-height: 38px;
        }
        .divider {
          width: 40px;
          height: 4px;
          background: #00C8BD;
          margin-top: 18px;
        }
        .partners {
          ${media.phone`
            display: none;
          `}
          img {
            /* width: 500px; */
            margin-bottom: 0;
          }
        }
      }
      .advertise {
        position: fixed;
        bottom: 0;
        margin-top: 77px;
        margin-bottom: 24px;
        display: flex;
        align-self: flex-start;
        .public-img {
          width: 32px;
          height: 32px;
          margin-right: 8px;
          background-image: url(${PUBLIC_DEFAULT_IMG});
          background-size: 32px;
          background-repeat: no-repeat;
          cursor: pointer;
          &: hover {
            background-image: url(${PUBLIC_HOVER_IMG});
          }
        }
        .video-img {
          width: 32px;
          height: 32px;
          background-image: url(${VIDEO_DEFAULT_IMG});
          background-size: 32px;
          background-repeat: no-repeat;
          cursor: pointer;
          &: hover {
            background-image: url(${VIDEO_HOVER_IMG});
          }
        }
        .public-code {
          position: fixed;
          bottom: 54px;
          width: 140px;
          height: 140px;
          margin-left: -10px;
          background-image: url(${PUBLIC_CODE});
          background-size: 140px;
          background-repeat: no-repeat;
        }
        .video-code {
          position: fixed;
          bottom: 54px;
          width: 140px;
          height: 140px;
          margin-left: -10px;
          background-image: url(${VIDEO_CODE});
          background-size: 140px;
          background-repeat: no-repeat;
        }
      }
    }
      .assitant {
        margin-top: -100px;
      }
    }
    .form-content {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      min-height: 100vh;
      overflow-y: auto;
      ${media.phone`
        width: 90%;
        min-height: 590px;
        height: calc(100vh - 32vw);
        padding: 20px;
        box-shadow: 0px 0px 20px 0px rgba(49, 83, 212, 0.1);
        position: absolute;
        left: 50%;
        top: 18vw;
        justify-content: unset;
        transform: translate(-50%);
        margin-bottom: 30px;
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
      `}
      .title {
        position: relative;
        width: 320px;
        margin-bottom: 32px;
        ${media.phone`
          text-align: center;
          margin-top: calc(8.5vw - 20px);
        `}
        img {
          display: none;
        }
        h3 {
          margin-top: 0;
          margin-bottom: 0;
          ${media.phone`
            font-size: 5.3vw;
            font-weight: 400;
            margin-bottom: 4px;
            color: #0D1924;
            line-height: 1.8;
          `}
        }
        p {
          font-size: 12px;
          color: #666666;
          line-height: 16px;
          margin-bottom: 0;
          ${media.phone`
            font-size: 3.2vw;
            font-weight: 400;
            color: #666666;
            line-height: 1.8;
          `}
        }
      }
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        margin-bottom: 0;
        h3 {
          font-weight: 500;
          font-size: 24px;
          color: #0D1924;
          line-height: 32px;
          margin-top: 70px;
          margin-bottom: 40px;
        }
        .error-message {
          font-size: 14px;
          line-height: 20px;
          width: 320px;
          padding-left: 68px;
          color: #ff0000;
          position: relative;
          bottom: 16px;
          right: 60px;
          margin-bottom: -20px;
          transform: translateY(-5px);
          z-index: 2;
          white-space: nowrap;
        }
        .form-row-wrapper {
          height: 64px;
        }
        .form-row {
          position: relative;
          width: 330px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          margin-bottom: 24px;
          ${media.phone`
            width: 30rem;
            font-size: 1.2rem;
          `}
          font-size: 1.4rem;
          input {
            ::placeholder {
              font-size: 14px;
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
            width: 22%;
            height: 70px;
            user-select: none;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 20px;
            color: #2B58F9;
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
            .iconfont {
              height: 100%;
              display: inline-flex;
              align-items: center;
              font-size: 22px;
              color: #999;
              transition: all 0.3s ease-in-out;
            }

            &.required {
              i:after {
                content: '*';
                color: #ff0000;
                display: inline-block;
                margin-left: 8px;
                margin-top: 5px;
              }
            }
          }
          input {
            padding-top: 0;
            padding-bottom: 0;
            flex: 1;
            border: none;
            border-radius: 4px;
            height: 100%;
            border: 1px solid rgba(10, 15, 44, 0.15);
            padding-left: 16px;
            height: 40px;
            box-shadow: none;
            -webkit-appearance: none;
            transition: all 0.3s ease-in-out;
            &.error-input {
              color: #ff0000 !important;
              transition: none;
            }
            &:focus {
              outline: none;
              border: 1px solid #3153d4;
            }
          }
        }
        .error-tips {
          position: relative;
          font-size: 14px;
          bottom: 22px;
          color: #F5222D;
          line-height: 22px;
        }
        button {
          ${media.phone`
            width: 18rem;
            margin-top: 30px;
            margin-bottom: 40px;
            height: 11.73vw;
            border-radius: 5.865vw;
            line-height: 11.73vw;
          `}
          width: 330px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #2B58F9;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
          margin-top: 8px;
          margin-bottom: 16px;
          border: none;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: #ffffff;
            background: #547FFF;
          }
          &:active {
            background: #193CD4
          }
          &:focus {
            outline: none;
          }
        }
        .privacy-policy {
          height: 34px;
          margin-bottom: 56px;
          input {
            position: relative;
            top: 2px;
            margin-right: 8px;
            border: 1px solid #2B58F9;
          }
          a {
            text-decoration: none;
          }
          .error-tips {
            font-size: 12px;
            bottom: 0;
            line-height: 16px;
          }
        }
        .form-footer {
          ${media.phone`
            display: none;
          `}
          position: fixed;
          bottom: 0;
          align-self: flex-end;
          margin-bottom: 16px;
          a {
            color: rgba(153, 153, 153, 1);
            text-decoration: none;
          }
          p {
            text-align: right;
            font-size: 12px;
            color: rgba(153, 153, 153, 1);
            line-height: 18px;
          }
        }
      }
    }
  }
`;

const SuccessContent = styled.div`
  text-align: center;
  .success-icon {
    width: 72px;
    height: 72px;
    margin-bottom: 24px;
    font-size: 72px;
    color: #5ac5bc;
  }
  .success-title {
    color: #0d1924;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    line-height: 25px;
  }
  .tips {
    color: #666666;
    font-size: 12px;
    margin-bottom: 24px;
    line-height: 18px;
    p {
      margin: 0;
    }
  }
  .code {
    width: 146px;
    height: 146px;
    margin-bottom: 24px;
  }
  .footer-tips {
    color: #666666;
    font-size: 12px;
    line-height: 24px;
    margin-bottom: 106px;
    p {
      margin: 0;
    }
    i {
      display: inline-block;
      position: relative;
      top: 3px;
      width: 19px;
      height: 17px;
      background-size: cover;
      color: #5ac5bc;
      font-size: 20px;
    }
  }
  .success-footer {
    ${media.phone`
      display: none;
    `}
    align-self: flex-end;
    margin-bottom: 24px;
    a {
      color: rgba(153, 153, 153, 1);
      text-decoration: none;
    }
    p {
      text-align: right;
      font-size: 12px;
      color: rgba(153, 153, 153, 1);
      line-height: 18px;
    }
  }
`;

const YpRiddlerWrapper = styled.div`
  .yp-riddler {
    .yp-riddler-slide-img-container {
      width: 320px !important;
      .yp-riddler-slider-bg {
        width: 320px !important;
        height: 165px !important;
      }
    }
  }
  .yp-riddler-win-masker {
    bottom: 10px !important;
  }
  .yp-riddler-mark {
    display: none !important;
  }
  .yp-riddler-slider-tip-error {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #f5222d;
    line-height: 22px;
  }
  .yp-riddler-slider-area {
    width: 330px !important;
    height: 40px !important;
    line-height: 38px !important;
    margin-top: 0px;
    margin-bottom: 24px;
    border: 1px solid rgba(10, 15, 44, 0.15);
    border-radius: 4px;
    ${media.phone`
      width: 30rem !important;
    `}
  }
  .yp-riddler-slider-btn {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
    top: -1px !important;
    img {
      margin-bottom: 0;
    }
  }
`;
export default class TryForm extends React.Component<TryFormProps, TryFormState> {
  static getInitialProps({ query }) {
    if (query && query.formType) {
      return { formType: query.formType, origin: query.origin };
    }
    if (query && query.phone) {
      return { phone: query.phone, origin: query.origin };
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
    publicCodeVisible: false,
    videoCodeVisible: false,
    isAgree: true,
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
  getparamsfromurl = (variable) =>{
    // 从?开始获取后面的所有数据
    var query = window.location.search.substring(1);
    // 从字符串&开始分隔成数组split
    var vars = query.split("&");
    // 遍历该数组
    for (var i = 0; i < vars.length; i++) {
      // 从等号部分分割成字符
        var pair = vars[i].split("=");
        // 如果第一个元素等于 传进来的参的话 就输出第二个元素
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
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
    let { formType = FormType.CUSTOMER, origin, phone } = this.props;
    const {
      captchaTime,
      submitSuccess,
      error,
      captchaVisible,
      validInfo,
      publicCodeVisible,
      videoCodeVisible,
      isAgree,
    } = this.state;
    if (typeof document === 'undefined') return null;
    // const inputpone = React.useRef(null);
    // phone = 
    // console.log( this.getparamsfromurl('phone'));
    // 获取地址栏参数
    phone = this.getparamsfromurl('phone')
    return (
      <FormWrapper origin={origin}>
        <div className="free-page-head">
          <img className="logo" src={LOGO_PC} />
          <Link href={origin === 'crm' ? '/crm' : origin === 'ecommerce' ? '/landingPageSem/ecommerce' : '/'}>
            <a className="back-home">
              <i className="iconfont iconshouye" />
              <p>回到首页</p>
            </a>
          </Link>
        </div>
        <div className="content-wrapper">
          <div className="img-wrapper-mobile">
            <div className="img-xs">
              <Link href="/">
                <img src={origin === 'crm' ? CRM_LOGO : LOGO} alt="" />
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="left-wrapper">
              <div className="left-content">
                <div className="title">就现在，开启智能用户运营之旅</div>
                <div className="divider"></div>
                <div className="partners">
                  <IconList
                    style={{ marginTop: 24 }}
                    gap={19}
                    row={5}
                    column={5}
                    iconInfoList={Array.from({ length: 25 }).map(
                      (_, i) =>
                        `https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/logo/logo%E5%A2%99-${Math.floor(
                          i / 5,
                        )}${(i % 5) + 1}.png`,
                    )}
                  />
                </div>
              </div>
              <div className="advertise">
                <div
                  className="public-img"
                  onMouseOver={() => {
                    this.setState({ publicCodeVisible: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ publicCodeVisible: false });
                  }}></div>
                {publicCodeVisible && <div className="public-code"></div>}
                <div
                  className="video-img"
                  onMouseOver={() => {
                    this.setState({ videoCodeVisible: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ videoCodeVisible: false });
                  }}></div>
                {videoCodeVisible && <div className="video-code"></div>}
              </div>
            </div>
            <div className="form-content">
              {submitSuccess ? (
                <SuccessContent>
                  <i className="iconfont iconshangchuanchenggong success-icon" />
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
                  <img className="code" src={QR_CODE} />
                  <div className="footer-tips">
                    <p>
                      打开 <i className="iconfont iconweixin" /> 微信，立即一对一咨询
                    </p>
                    <p>获取更多产品信息及客服支持！</p>
                  </div>
                  <div className="success-footer">
                    <p>浙江省杭州市余杭区梦想小镇天使村11幢</p>
                    <p>
                      Copyright 2016-{new Date().getFullYear()}{' '}
                      <a href="https://beian.miit.gov.cn/" target="_Blank" rel="noreferrer">
                        浙ICP备16033928号
                      </a>{' '}
                      版权所有 浙江百应科技有限公司
                    </p>
                  </div>
                </SuccessContent>
              ) : (
                <Formik
                  ref={r => (this.form = r)}
                  initialValues={{
                    companyName: '',
                    name: '',
                    phone: phone,
                    captcha: '',
                    remark: '',
                  }}
                  validationSchema={FormSchema}
                  onSubmit={this.handleSubmit}>
                  <Form className="form">
                    <div className="title">
                      <h3>{FormTitleMap[formType]}</h3>
                      <p>留下联系方式，将有AI行业专家为您提供专属服务</p>
                    </div>
                    <Field
                      name="companyName"
                      render={({ field, form: { touched, errors } }) => (
                        <div className="form-row-wrapper">
                          <div className={'form-row ' + (touched[field.name] && errors[field.name] ? 'error' : '')}>
                            <input placeholder="请填写您的公司名称" type="text" {...field} />
                          </div>
                          {touched[field.name] && errors[field.name] && (
                            <div className="error-tips">{touched[field.name] && errors[field.name]}</div>
                          )}
                        </div>
                      )}
                    />
                    <Field
                      name="name"
                      render={({ field, form: { touched, errors } }) => (
                        <div className="form-row-wrapper">
                          <div className={'form-row ' + (touched[field.name] && errors[field.name] ? 'error' : '')}>
                            <input placeholder="请填写您的姓名" type="text" {...field} />
                          </div>
                          {touched[field.name] && errors[field.name] && (
                            <div className="error-tips">{touched[field.name] && errors[field.name]}</div>
                          )}
                        </div>
                      )}
                    />
                    <Field
                      name="phone"
                      render={({ field, form: { touched, errors } }) => (
                        <div className="form-row-wrapper">
                          <div className={'form-row ' + (touched[field.name] && errors[field.name] ? 'error' : '')}>
                            <input
                              placeholder="请填写您的电话"
                              type="text"
                              {...field}
                              // ref={inputpone}
                              // value={phone}
                              className={error.target === ErrorTarget.PHONE ? 'error-input' : ''}
                              onFocus={e => {
                                e.target.className = '';
                              }}
                              autoComplete="off"
                            />
                          </div>
                          {touched[field.name] && errors[field.name] && (
                            <div className="error-tips">{touched[field.name] && errors[field.name]}</div>
                          )}
                        </div>
                      )}
                    />
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
                    <Field
                      name="remark"
                      render={({ field, form: { touched, errors } }) => (
                        <div className={'form-row ' + (touched[field.name] && errors[field.name] ? 'error' : '')}>
                          <input placeholder="请填写您的备注" type="text" {...field} />
                        </div>
                      )}
                    />
                    <button type="submit" disabled={!isAgree}>
                      立即体验
                    </button>
                    <div className="privacy-policy">
                      <input
                        type="checkbox"
                        defaultChecked
                        checked={isAgree}
                        onChange={() => {
                          this.setState({ isAgree: !isAgree });
                        }}
                      />
                      <span>
                        我已阅读并同意
                        <a href="/privacy-policy" target="_blank">
                          《百应隐私政策》
                        </a>
                      </span>
                      {!isAgree && <div className="error-tips">请同意隐私政策</div>}
                    </div>
                    <div className="form-footer">
                      <p>浙江省杭州市余杭区梦想小镇天使村11幢</p>
                      <p>
                        Copyright 2016-{new Date().getFullYear()}{' '}
                        <a href="https://beian.miit.gov.cn/" target="_Blank" rel="noreferrer">
                          浙ICP备16033928号
                        </a>{' '}
                        版权所有 浙江百应科技有限公司
                      </p>
                    </div>
                  </Form>
                </Formik>
              )}
            </div>
          </div>
        </div>
      </FormWrapper>
    );
  }
}
