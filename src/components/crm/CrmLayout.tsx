import Head from 'next/head';
import * as React from 'react';
import { ScreenClassProvider, Visible } from 'react-grid-system';
import { isPCContext } from '../../context';
import ByVoiceFooter from '../common/ByVoiceFooter';
import CustomerIconsBlock from '../common/CustomerIconsBlock';
import { Footer } from '../NewFooter';
import Suspension from '../NewSuspension';
import SuspenMobileNew from '../SuspenMobileNew';
import { FormType } from '../TryForm';
import { Header } from './Header';

export const CrmLayout: React.FunctionComponent<{
  children: (
    visible: boolean,
    setFormVisible: (visible: boolean, formType?: FormType) => void,
    formType: FormType,
  ) => React.ReactNode;
}> = props => {
  const isPC = React.useContext(isPCContext);
  const [formVisible, setFormVisible] = React.useState(false);
  const [formType, setFormType] = React.useState(FormType.CUSTOMER);
  const setForm = (visible: boolean, type: FormType = FormType.CUSTOMER) => {
    const hostname = window.location.hostname;
    const testHostList = ['localhost', 'www.xinoa.cc'];
    // 为了兼容open.byai.com, 暂时写死线上路径
    let url = `/form?formType=${type}&origin=crm`;
    if (hostname === 'www.byrobot.cn') {
      url = 'https://www.byrobot.cn' + url;
    } else if (testHostList.includes(hostname)) {
      console.log('');
    } else {
      url = 'https://www.byai.com' + url;
    }
    window.open(url);
    // setFormType(type);
    // setFormVisible(visible);
  };
  return (
    <ScreenClassProvider fallbackScreenClass={isPC ? 'lg' : 'xs'}>
      <div id="layout">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Header onBtnClick={() => setForm(true)} origin="crm" />
        {/* <HeaderMobile /> */}
        <Suspension setForm={setForm} />
        <Visible sm xs>
          <SuspenMobileNew setForm={setForm} />
        </Visible>
        <main>{props.children(formVisible, setForm, formType)}</main>
        <CustomerIconsBlock />
        <ByVoiceFooter
          title="开启数智时代一站式新营销方式"
          desc="留下联系方式，我们将有AICRM专家为您提供服务"
          btnText="与我联系"
          onClick={() => setForm(true)}
          background="url(https://cdn.byai.com/static/intro/img/common/voice-footer-img.png)"
        />
        <Footer origin="crm" />
      </div>
    </ScreenClassProvider>
  );
};
