import Head from 'next/head';
import * as React from 'react';
import { ScreenClassProvider } from 'react-grid-system';
import { isPCContext } from '../context';
import { Header } from './Header-2021';
import HeaderMobile from './HeaderMobile/index';
import Suspension from './Suspension';
import SuspensionMobile from './SuspensionMobile';
import { FormType } from './TryForm';

export const LayoutWithoutFooter: React.FunctionComponent<{
  hasSuspension?: boolean;
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
    window.open(`/form?formType=${type}`);
    // setFormType(type);
    // setFormVisible(visible);
  };
  return (
    <ScreenClassProvider fallbackScreenClass={isPC ? 'lg' : 'xs'}>
      <div id="layout">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Header onBtnClick={() => setForm(true)} />
        <HeaderMobile />
        {props.hasSuspension !== false && (
          <>
            <Suspension setForm={setForm} />
            <SuspensionMobile setForm={setForm} />
          </>
        )}
        <main>{props.children(formVisible, setForm, formType)}</main>
      </div>
    </ScreenClassProvider>
  );
};
