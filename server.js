const express = require('express');
const next = require('next');
const proxyMiddleware = require('http-proxy-middleware');

const devProxy = {
  '/api': {
    target: 'http://116.62.191.227:7070',
    changeOrigin: true,
  },
  '/byai/crm': {
    target: 'https://www.xinoa.cc',
    changeOrigin: true,
  },
  '/intro/news': {
    target: 'https://www.byai.com',
    changeOrigin: true,
  },
  '/list': {
    target: 'https://ds.byai.com',
    changeOrigin: true,
  },
  '/hcapi': {
    target: 'https://ds.byai.com',
    changeOrigin: true,
  },
  '/detail': {
    target: 'https://ds.byai.com',
    changeOrigin: true,
  },
};

const port = parseInt(process.env.PORT, 10) || 6003;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
});

const handle = app.getRequestHandler();

const robotsOptions = {
  root: __dirname + '/static/',
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  },
};

const faviconOptions = {
  root: __dirname + '/static/',
};
const sitemapOptions = {
  root: __dirname + '/static/',
  headers: {
    'Content-Type': 'text/xml;charset=UTF-8',
  },
};

let server;
app
  .prepare()
  .then(() => {
    server = express();

    // Set up the proxy.
    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function (context) {
        server.use(proxyMiddleware(context, devProxy[context]));
      });
    }

    server.get('/newsDetail/:id', (req, res) => {
      return app.render(req, res, '/newsDetail', { id: req.params.id });
    });

    // 健康检查配置
    server.get('/checkpreload.htm', async (req, res) => {
      res.send('Hello World!');
      return handle(req, res);
    });

    // SEO 信息
    server.get('/favicon.ico', (req, res) => res.status(200).sendFile('favicon.ico', faviconOptions));
    server.get('/robots.txt', (req, res) => res.status(200).sendFile('robots.txt', robotsOptions));
    server.get('/retail/favicon.ico', (req, res) => res.status(200).sendFile('/retail/favicon.ico', faviconOptions));
    server.get('/retail/robots.txt', (req, res) => res.status(200).sendFile('/retail/robots.txt', robotsOptions));
    // server.get('/retail/sitemap.xml', (req, res) => res.status(200).sendFile('/retail/sitemap.xml', sitemapOptions));
    server.get('/retail/baidu_verify_code-WAYGtDLOTB.html', (req, res) =>
      res.status(200).sendFile('/retail/baidu_verify_code-WAYGtDLOTB.html', faviconOptions),
    );
    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
