import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Visible } from 'react-grid-system';
import Suspension from '../../src/components/suspension/index';
import { FormType } from '../newPatternForm';
import AutomaticallyAddPowder from './components/automatically-add-powde';
import CallMe from './components/call-me';
import CallMeMobile from './components/call-me-mobile';
import ECommerceCustomerIconsBlock from './components/customer-icons-mobile';
import Footer from './components/footer';
import Header from './components/header';
import HeaderMobile from './components/header-mobile';
import IndustryDemo from './components/industry-demo';
import IndustryMobileDemo from './components/industry-demo-mobile';
import NumberData from './components/number-data';
import Solution from './components/solution';
import SolutionMobile from './components/solution-mobile';
import * as SC from './styled';

const ECommerce = () => {
  const [isDelBg, setIsDelBg] = useState(false);
  useEffect(() => {
    if (window) {
      window.onscroll = function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setIsDelBg(scrollTop > 0);
      };
    }
  }, []);
  const setForm = (visible: boolean, type: FormType = FormType.CUSTOMER) => {
    const hostname = window.location.hostname;
    const testHostList = ['localhost', 'www.xinoa.cc'];
    // 为了兼容open.byai.com, 暂时写死线上路径
    let url = `/form?formType=${type}&origin=ecommerce`;
    if (hostname === 'www.byrobot.cn') {
      url = 'https://www.byrobot.cn' + url;
    } else if (testHostList.includes(hostname)) {
    } else {
      url = 'https://www.byai.com' + url;
    }
    window.open(url);
  };

  return (
    <SC.ECommerceLayout>
      <Head>
        <title>【官网】百应AI电商私域引流解决方案</title>
        <meta
          name="keywords"
          content="私域加粉,私域流量,私域引流,私域代运营,百应,百应科技,电商私域,私域搭建,私域解决方案,电商私域运营。"
        />
        <meta
          name="description"
          content="百应AI私域引流，助力新零售及电商卖家,低成本快速搭建私域流量，目前已陪跑1000+电商头部品牌，资深私域团队服务，可免费试用咨询。"
        />
      </Head>
      <Visible md lg xl xxl xxxl>
        <SC.ContentContainer>
          <Header isDelBg={isDelBg} />
          <Solution />
          <IndustryDemo />
          <AutomaticallyAddPowder />
          <NumberData />
          <ECommerceCustomerIconsBlock />
          <CallMe />
          <Footer />
          <Suspension setForm={setForm} />
        </SC.ContentContainer>
      </Visible>
      <Visible sm xs>
        <HeaderMobile />
        <SC.MobileContentContainer>
          <SolutionMobile />
          <IndustryMobileDemo />
          <ECommerceCustomerIconsBlock />
          <CallMeMobile />
          <button className="call-me" onClick={() => window.open('/form?formType=1&origin=ecommerce')}>
            立即联系我们
          </button>
          <div className="footer">
            <div className="driver"></div>
          </div>
        </SC.MobileContentContainer>
      </Visible>
    </SC.ECommerceLayout>
  );
};

export default ECommerce;
