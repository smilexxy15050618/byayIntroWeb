import Document, { Head, Main, NextScript } from 'next/document';
import { TypographyStyle } from 'react-typography';
import { ServerStyleSheet } from 'styled-components';
import Typography from 'typography';
import githubTheme from 'typography-theme-github';

const typography = new Typography(githubTheme);
// byai.com域名下加载HMT_BYAI_ID
// byrobot.cn域名下加载HMT_BYROBOT_ID
// 其他域名不加载 调试/调试
const HMT_BYAI_ID = '39d006e8726f3c20d0495e020413e7c4';
const HMT_BYROBOT_ID = '58d65fcc16e66607181e8a8c630dfd5f';
// import {
//   DEV, FB_TRACKING_ID, SENTRY_TRACKING_ID, SITE_DESCRIPTION, SITE_IMAGE,
//   SITE_NAME, SITE_TITLE
// } from '../src/constants/env'

interface IProps {
  htmId?: string;
}

export default class extends Document<IProps> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const host = ctx.req.headers.host || ctx.req.headers.Host;
    let htmId: string | undefined;
    if (host) {
      if (host.indexOf('byai.com') > -1) {
        htmId = HMT_BYAI_ID;
      }
      if (host.indexOf('byrobot.cn') > -1) {
        htmId = HMT_BYROBOT_ID;
      }
    }
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        htmId,
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const { htmId } = this.props;
    return (
      <html style={{ fontSize: 10 }} lang="zh-cmn-Hans">
        <Head>
          <meta name="baidu-site-verification" content="code-pcKRkzWCMH" />
          <meta name="sogou_site_verification" content="tTW9RTWOSX" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta
            property="og:image"
            content="https://cdn.byai.com/static/oss-script/c8226ed5c02ece1d0a2191475dbc666c.png"
          />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="//at.alicdn.com/t/font_1180689_ozcjmf2k73p.css" />
          <link rel="stylesheet" href="//cdn.byai.com/static/official-website/bootstrap.min.css" />
          <link rel="stylesheet" href="https://cdn.byai.com/static/intro/img/index/animate.min.css" />
          <style
            dangerouslySetInnerHTML={{
              __html: `::-webkit-scrollbar { width: 0!important;height:0!important; }`,
            }}></style>
          <script src="//pv.sohu.com/cityjson" />
          <script src="//www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js" defer={true}></script>
          {htmId && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?${htmId}";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
              `,
              }}
            />
          )}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(){
              var bp = document.createElement('script');
              var curProtocol = window.location.protocol.split(':')[0];
              if (curProtocol === 'https') {
                  bp.src = '//zz.bdstatic.com/linksubmit/push.js';
              }
              else {
                  bp.src = '//push.zhanzhang.baidu.com/push.js';
              }
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(bp, s);
            })();
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window._agl = window._agl || [];
                    (function () {
                      _agl.push(
                        ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
                      );
                    (function () {
                            var agl = document.createElement('script');
                    agl.type = 'text/javascript';
                    agl.async = true;
                    agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(agl, s);
                })();
            })();
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?dc7fb5e6b8f9100896f0e0271a231444";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
              
              // 默认 auto: 将恢复用户已滚动到的页面上的位置
              if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
                // history.scrollRestoration = 'auto';
              }
            })();
            `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?4a6fc6697c90fc986d209fb23ad81d4f";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
              
            })();
            `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function() {
              var browserRule = /^.*((iPhone)|(iPad)|(Safari))+.*$/;
              if (browserRule.test(navigator.userAgent)) {
                  window.onpageshow = function(event) {
                      if (event.persisted) {
                          window.location.reload()
                      }
                  };
              }
            })();
            `,
            }}
          />
          <TypographyStyle typography={typography} />
        </Head>
        <body>
          <img
            src="https://cdn.byai.com/static/oss-script/c8226ed5c02ece1d0a2191475dbc666c.png"
            style={{ position: 'fixed', left: '-10000px', top: '-10000px' }}
          />
          <img
            src="https://cdn.byai.com/static/official-website/cooperation/by-logo.png"
            style={{ position: 'fixed', left: '-10000px', top: '-10000px', zIndex: 9999 }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
