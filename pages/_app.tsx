import 'isomorphic-fetch';
import App, { AppProps, Container } from 'next/app';
import Head from 'next/head';
import 'normalize.css';
import * as queryString from 'query-string';
import { setConfiguration } from 'react-grid-system';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import 'swiper/swiper-bundle.min.css';
import { ByaiTdk, RetailTdk, TDKItem } from '../src/constants/tdk';
import { isPCContext } from '../src/context';
import { isMobile } from '../src/lib/utils';
import { ServerStyleSheet } from 'styled-components';
// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import ScrollToPlugin from "gsap/ScrollToPlugin.js";
// import './gray.css';
// gsap.registerPlugin(ScrollToPlugin);
import './font.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
setConfiguration({ gridColumns: 24, gutterWidth: 0 });
toast.configure({
  hideProgressBar: true,
  position: toast.POSITION.TOP_CENTER,
});
export default class extends App<
  AppProps & { title: string; description: string; keywords: string; isPC: boolean },
  any
> {
  static async getInitialProps(ctx) {
    const initialProps = await App.getInitialProps(ctx);
    const originalRenderPage = ctx.renderPage;
    let styles: any = undefined;
    if (ctx.ctx.req) {
      // 含有req 为ssr,无req 为懒加载csr
      const sheet = new ServerStyleSheet();
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
          });
        styles = (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        );
      } finally {
        sheet.seal();
      }
      const host = ctx.ctx.req.headers.host;
      console.log('useragent', ctx.ctx.req.headers['user-agent']);
      const pathname = ctx.ctx.pathname;
      let tdk = ByaiTdk[0];
      const userAgentIsMobile = isMobile(ctx.ctx.req.headers['user-agent']);
      console.log(pathname, host, ctx.ctx.req.query);
      if (host) {
        if (host.indexOf('www.byai.com') > -1 || host.indexOf('www.xinoa.cc') > -1) {
          // 原官网 site
        } else if (host.indexOf('ds.byai.com') > -1 || host.indexOf('ds.xinoa.cc') > -1) {
          // 电商 site
          tdk = RetailTdk.find(item => '/retail' + item.path === pathname);
          if (!tdk) {
            tdk = RetailTdk[0];
          }
          if (ctx.ctx.req.query.id) {
            // 私域动态详情
            tdk = {} as TDKItem;
          }
          console.log('电商');
        } else if (host.indexOf('localhost') > -1) {
          if (pathname.startsWith('/retail')) {
            tdk = RetailTdk.find(item => '/retail' + item.path === pathname);
            if (!tdk) {
              tdk = RetailTdk[0];
            }
            if (ctx.ctx.req.query.id) {
              // 私域动态详情
              tdk = {} as TDKItem;
            }
          }
        }
        // console.log(tdk, "23222222")
        return { ...initialProps, ...tdk, isPC: !userAgentIsMobile, styles };
      }
    }
    return { ...initialProps, styles };
  }

  initWow() {
    if (!window) return;
    const WOW = require('wowjs');
    new WOW.WOW({ animateClass: 'animate__animated', offset: 100, live: true }).init();
  }

  componentDidMount() {
    const {
      query: { bd_vid, origin, keywordid },
    } = queryString.parseUrl(location.href);
    if (keywordid) {
      localStorage.setItem('keywordid', keywordid as string);
    }
    if (bd_vid) {
      localStorage.removeItem('bd_vid');
      localStorage.setItem('bd_vid', bd_vid + '');
    }
    if (origin) {
      localStorage.setItem('origin', origin as string);
    }
    this.initWow();
    this.props.router.events.on('routeChangeComplete', this.initWow);
  }

  componentWillUnmount() {
    this.props.router.events.off('beforeHistoryChange', this.initWow);
  }

  render() {
    const { Component, pageProps, title, keywords, description, isPC } = this.props;
    return (
      <Container>
        <isPCContext.Provider value={isPC}>
          <Head>
            {title && <title>{title}</title>}
            {title && <meta name="title" content={title} key="title" />}
            {keywords && <meta name="keywords" content={keywords} />}
            {description && <meta name="description" content={description} />}
          </Head>
          <Component {...pageProps} />
        </isPCContext.Provider>
      </Container>
    );
  }
}
