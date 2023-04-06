import { NextFunctionComponent } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { withRouter, WithRouterProps } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../../src/retail/components/Layout';

const PostBodyNoSsr = dynamic(
  () => {
    return import('../../src/components/post-body-nossr');
  },
  { ssr: false },
);

const News: NextFunctionComponent<{ html: string } & WithRouterProps> = ({
  router,
  html,
  htmlData,
  styleList,
  title,
  keywords,
  description,
}) => {
  useEffect(() => {
    var styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.innerHTML = 'h2{border: none} a:hover{ text-decoration: none}';
    document.getElementsByTagName('head').item(0).appendChild(styleTag);
    document.getElementById('news-container').innerHTML = html;
  }, []);
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <>
          <Head>
            {<title>{title}</title>}
            {title && <meta name="title" content={title} key="title" />}
            {keywords && <meta name="keywords" content={keywords} />}
            {description && <meta name="description" content={description} />}
          </Head>
          <div style={{ paddingTop: 60 }} id="news-container" dangerouslySetInnerHTML={{ __html: '' }}></div>
          {router.query.id && <PostBodyNoSsr content={htmlData.content} />}
        </>
      )}
    </Layout>
  );
};

News.getInitialProps = async ctx => {
  let htmlRes;
  let htmlDataRes = {};
  let titleRes;
  let metaInfo = {};
  let styleList = [];
  try {
    let id = ctx.req.query.id;
    const host = ctx.req.headers.host.startsWith('localhost')
      ? 'http://' + ctx.req.headers.host
      : 'https://' + ctx.req.headers.host;
    console.log(host, 'host');
    let html = `${host}/list/news`;
    let htmlData = '';
    if (id) {
      html = `${host}/detail/news/` + id;
      htmlData = `${host}/hcapi/wiki/article/` + id;
    }
    try {
      htmlRes = await fetch(html).then(response => {
        return response.text();
      });
    } catch (error) {
      console.log({ error });
    }

    if (id) {
      try {
        htmlDataRes = await fetch(htmlData).then(response => {
          return response.json();
        });
      } catch (error) {
        console.log({ error });
      }
    }
    function getLinkUrl(str) {
      var a = str;
      var arrLink = [];
      a.replace(/<link [^>]*href=['"]([^'"]+)[^>]*/gi, function (match, capture) {
        arrLink.push(capture);
      });
      if (arrLink != null && arrLink.length > 0) {
        return arrLink;
      }
    }
    // 咨询列表替换 href
    if (!id) {
      var re = /\/detail\/news\//g;
      console.log(ctx.req, 'req');
      const replaceString = ctx.req.headers.host.startsWith('localhost')
        ? host + '/retail/anews?id='
        : host + '/anews?id=';
      htmlRes = htmlRes.replace(re, replaceString);
    }

    // TODO: 正则
    // 处理 CSS
    let styleRe = /<link\/?.+?>/g;
    const stylesheet = htmlRes.matchAll(styleRe);
    let styleRes = Array.from(new Set([...stylesheet].map(item => item[0]).filter(item => item.includes('.css'))));
    for (const link of styleRes) {
      if (link.includes('preload')) {
        htmlRes = htmlRes.replace(link, '');
      } else {
        let url = getLinkUrl(link);
        const res = await fetch(url[0]).then(response => {
          return response.text();
        });
        htmlRes = htmlRes.replace(link, '<style>' + res + '</style>');
      }
    }
    if (id) {
      // 处理 TDK
      let metaTag = /<meta\/?.+?>/g;
      let titleTag = /<title\/?.+?>/g;
      titleRes = htmlRes.matchAll(titleTag);
      let metaRes = htmlRes.matchAll(metaTag);
      titleRes = [...titleRes].map(item => item[0])[0].slice('<title>'.length, -'</title>'.length);
      metaRes = [...metaRes].map(item => item[0]).filter(item => item.includes('name=') && item.includes('content='));
      metaRes.forEach(item => {
        let nameStartIndex = item.indexOf('name="') + 6;
        let nameEndIndex = item.indexOf('"', nameStartIndex);
        // console.log(item.substring(nameStartIndex, nameEndIndex));
        let contentStartIndex = item.indexOf('content="') + 8;
        let contentEndIndex = item.indexOf('"', contentStartIndex);
        // console.log(item.substring(contentStartIndex, contentEndIndex));
        metaInfo[item.substring(nameStartIndex, nameEndIndex)] = item.substring(contentStartIndex, contentEndIndex);
      });
      console.log('title: ', titleRes, metaInfo);
    }
  } catch (error) {
    console.log(error);
  }
  return {
    html: htmlRes,
    htmlData: htmlDataRes,
    styleList,
    title: titleRes || metaInfo.title,
    description: metaInfo.description,
    keywords: metaInfo.keywords,
  };
};

export default withRouter(News);
