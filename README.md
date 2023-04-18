# 百应公司官网项目 https://www.byai.com/

# 官网测试地址：https://www.xinoa.cc/

## 文档

- [官网 Q&A](./Q&A.md)
- [组件文档](./Document.md)

## 特性

- TypeScript
- Styled-jsx
- Module css **(PostCSS - cssnext, nested, import)**
- SEO & analytics(Google Analytics, Facebook Pixel, <s>Naver Analytics</s>)
- Jest & Enzyme **(support module css)**

## Installation

```sh
git clone git@gitlab.indata.cc:byfe/byai-intro.git
cd byai-intro
yarn
```

## Run dev

```bash
yarn start:dev
```

#### 生产环境部署

> k8s 环境部属

## Configuration

Set SEO & analytics variables

> src/constants/env.ts

```typescript
export const GA_TRACKING_ID = '';
export const FB_TRACKING_ID = '';
export const SENTRY_TRACKING_ID = '';

// for meta tag <og & twitter>
export const SITE_NAME = '';
export const SITE_TITLE = '';
export const SITE_DESCRIPTION = '';
export const SITE_IMAGE = '';
```

If each variable evaluated false, it does not load related library

## 一些库的使用

### Module CSS ([src/components/Home.tsx](src/components/Home.tsx))

```typescript jsx
import * as classnames from 'classnames'
import * as css from './Home.css'

export const Just = props => <div className={css.className}>
export const Mixed = props => <div className={classnames('row', 'home', css.home)}>
```

### Styled-jsx

#### Global scope ([src/components/Layout.tsx](src/components/Layout.tsx))

```typescript jsx
const Layout = props => (
  <head>
    <style jsx global>
      {`
        div > * {
          font-size: 32px;
        }
      `}
    </style>
  </head>
);
```

#### Local scope ([src/components/Home.tsx](src/components/Home.tsx))

```typescript jsx
export const Home = props => (
  <div>
    <style jsx>{`
       {
        color: darkred;
      }
    `}</style>
    home
  </div>
);
```

#### 其他

- styled-jsx/css [issue#2](https://github.com/deptno/next.js-typescript-starter-kit/issues/2)
- external css, module [issue#3](https://github.com/deptno/next.js-typescript-starter-kit/issues/3)

### 相关

- [typescript-monorepo-next-example](https://github.com/deptno/typescript-monorepo-next-example) - Next.js version

11dsfds