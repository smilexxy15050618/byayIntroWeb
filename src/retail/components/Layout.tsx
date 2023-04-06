import Head from 'next/head';
import * as React from 'react';
import { Hidden, ScreenClassProvider, Visible } from 'react-grid-system';
import NewSuspension from '../../components/NewSuspension';
import { SimpleHeader } from '../../components/SimpleHeader';
import { FormType } from '../../components/TryForm';
import { isPCContext } from '../../context';
import { retailUrl } from '../../lib/utils';
import { Header } from './Header';
import HeaderMobileNew from './HeaderMobile';
import { Footer } from './NewFooter';
import SuspenMobileNew from './SuspenMobileNew';
import Suspension from './suspension';

export const Layout: React.FunctionComponent<{
  children: (
    visible: boolean,
    setFormVisible: (visible: boolean, formType?: FormType) => void,
    formType: FormType,
  ) => React.ReactNode;
  simpleHeader?: boolean;
  expBtnBgColor?: string[];
  headPlaceholder?: (boolean | string)[];
  headFontStyle?: ('light' | 'dark')[];
}> = ({
  children,
  headPlaceholder = [undefined, undefined],
  simpleHeader,
  headFontStyle = ['dark', 'dark'],
  expBtnBgColor,
}) => {
  const isPC = React.useContext(isPCContext);
  const [formVisible, setFormVisible] = React.useState(false);
  const [formType, setFormType] = React.useState(FormType.CUSTOMER);
  const [placeholder, placeholderXs] = headPlaceholder;
  const [headFont, headFontXs] = headFontStyle;
  const setForm = (visible: boolean, type: FormType = FormType.CUSTOMER) => {
    // 为了兼容open.byai.com, 暂时写死线上路径
    const url = retailUrl(`/form?formType=${type}`);
    window.open(url);
  };
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
                headPlaceholder={placeholder}
                headFontStyle={headFont}
                expBtnBgColor={expBtnBgColor}
                onBtnClick={() => setForm(true)}
                initialOpacity={false}
              />
              {/* TODO://待解决，有无用代码 */}
              <Suspension setForm={setForm} />
            </Hidden>
            {/* 手机端header */}
            <Visible sm xs>
              <SuspenMobileNew setForm={setForm} />
              <HeaderMobileNew headPlaceholder={placeholderXs} headFontStyle={headFontXs} setForm={setForm} />
            </Visible>
          </>
        )}
        <main>{children(formVisible, setForm, formType)}</main>
        <Footer disableLink={simpleHeader} />
      </div>
    </ScreenClassProvider>
  );
};
