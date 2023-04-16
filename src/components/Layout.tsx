import Head from 'next/head';
import * as React from 'react';
import { Hidden, ScreenClassProvider, Visible } from 'react-grid-system';
import { isPCContext } from '../context';
import { HOST_ENUM } from '../lib/utils';
import { Header } from './Header-2021';
import HeaderMobileNew from './HeaderMobile/index';
import { Footer } from './NewFooter';
import NewSuspension from './NewSuspension';
import { SimpleHeader } from './SimpleHeader';
import SuspenMobileNew from './SuspenMobileNew';
// import Suspension from './Suspension';
import Suspension from './suspension/index';
import { FormType } from './TryForm';
/**
 * 官网2021版导航栏头部占位由 Layout 组件传入 Header 和 MobileHeader 当中,
 * 请手动配置两个参数:
 * @param headplaceholder :(boolean | string)[]
 *  - undefined true 导航栏透明 占位元素白色 字体默认 -- 黑色 --默认
 *  -          false 导航栏透明 无占位元素   字体颜色默认 -- 黑色
 *  -         string 导航栏透明 占位元素string指定的颜色 字体默认 -- 黑色
 *
 * @param fontStyle :('dark' | 'light')[]
 *  - 'dark'  导航栏字体黑色 -- 默认
 *  - 'light' 导航栏字体白色
 **/
export const Layout: React.FunctionComponent<{
  children: (
    visible: boolean,
    setFormVisible: (visible: boolean, formType?: FormType) => void,
    formType: FormType,
  ) => React.ReactNode;
  simpleHeader?: boolean;
  headPlaceholder?: (boolean | string)[];
  headFontStyle?: ('light' | 'dark')[];
  initialOpacity?: boolean;
  hostType?: HOST_ENUM;
}> = ({
  children,
  headPlaceholder = [undefined, undefined],
  simpleHeader,
  headFontStyle = ['dark', 'dark'],
  initialOpacity,
  hostType,
}) => {
  const isPC = React.useContext(isPCContext);
  const [formVisible, setFormVisible] = React.useState(false);
  const [formType, setFormType] = React.useState(FormType.CUSTOMER);
  const [placeholder, placeholderXs] = headPlaceholder;
  const [headFont, headFontXs] = headFontStyle;
  const setForm = (visible: boolean, type: FormType = FormType.CUSTOMER) => {
    const hostname = window.location.hostname;
    const testHostList = ['localhost', 'www.xinoa.cc'];
    // 为了兼容open.byai.com, 暂时写死线上路劲
    let url = `/form?formType=${type}`;
    if (hostname === 'www.byrobot.cn') {
      url = 'https://www.byrobot.cn' + url;
    } else if (testHostList.includes(hostname)) {
    } else {
      url = 'https://www.byai.com' + url;
    }
    window.open(url);
    // setFormType(type);
    // setFormVisible(visible);
  };
  console.log(headFontStyle, 'isPC');
  const guessOpacity = headFontStyle[0] ;
  const guessOpacityMobile = headFontStyle[1] ;
  initialOpacity = typeof initialOpacity !== 'undefined' ? initialOpacity : guessOpacity;
  const initialOpacityMobile = typeof initialOpacity !== 'undefined' ? initialOpacity : guessOpacityMobile;
  return (
    <ScreenClassProvider fallbackScreenClass={isPC ? 'lg' : 'xs'}>
      <div id="layout">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        {simpleHeader && (
          <>
            <SimpleHeader onBtnClick={() => setForm(true)} />
            <NewSuspension setForm={setForm} />
            <Visible sm xs>
              <SuspenMobileNew setForm={setForm} />
            </Visible>
          </>
        )}
        {!simpleHeader && (
          <>
            <Hidden sm xs>
              <Header
                hostType={hostType}
                initialOpacity={initialOpacity}
                headPlaceholder={placeholder}
                headFontStyle={headFont}
                onBtnClick={() => setForm(true)}
              />
              <Suspension setForm={setForm} />
            </Hidden>
            <Visible sm xs>
              <SuspenMobileNew setForm={setForm} />
              <HeaderMobileNew
                initialOpacity={initialOpacityMobile}
                headPlaceholder={placeholderXs}
                headFontStyle={headFontXs}
                setForm={setForm}
              />
            </Visible>
          </>
        )}

        <main>{children(formVisible, setForm, formType)}</main>
        <Footer disableLink={simpleHeader} />
      </div>
    </ScreenClassProvider>
  );
};
