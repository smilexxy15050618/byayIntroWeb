# 官网 Q&A

#### Q1: 项目启动报错 (spawn nodemon ENOENT) ？

#### A1: 使用`yarn start:dev` 指令来启动；请全局安装 nodemon。

#### Q2: 如何新建一个带导航栏、侧边、底部布局的页面？

#### A2: 在 pages 中创建对应 url 路径的文件夹与 tsx 文件，使用\<Layout>组件来初始化页面，示例如下：

```tsx
import * as React from 'react';

export default props => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['light', 'light']}>
      (visible, setFormVisible) => (
      	<div onClick={setFormVisible(true, FormType.CUSTOMER)} >跳转免费体验表单</div>
      )
    </Layout>
  )
}
```

- headPlaceholder 控制了顶部导航栏的颜色元组内部两值分别代表 pc 端和移动端(具体看 Q3)
- headFontStyle 表示导航栏头部字体的颜色，light 为白色，dark 为黑色
- setFormVisible 用于跳转统一的表单
- Layout 的 chilren 返回的 jsx 就是页面的主体内容

#### Q3: 最顶部导航栏底色如何控制？

#### A3:

官网 2021 版导航栏头部占位由 Layout 组件传入 Header 和 MobileHeader 当中,  
如导航栏主体高度有变化请在 Header 和 MobileHeader 中修改 `PlaceHolder` 样式组件
例子: `<Layout headerPlaceholder="#267892">`  
headerPlaceholder: 此属性将传入 Header 中配置 header 主体的颜色

| headerPlaceholder | header 主体与占位符                       | 备注                                         |
| ----------------- | ----------------------------------------- | -------------------------------------------- |
| undefined         | header 主体白色、占位符高 60px --默认     | 默认导航栏为纯白色                           |
| 颜色字符串        | header 主体透明、占位符高 60px 颜色村纯色 | 导航栏背景为纯色且下拉变白时使用             |
| false             | header 主体透明、无占位符                 | 页面头图 banner 的背景需要与导航栏融合时使用 |
| true              | 与 undefined 情况相同                     | 与 undefined 情况相同                        |

#### Q4: 使用 animate 动画一些预设的值无效

#### A4: 使用 animate 动画时需要引入 components/voice-robot/style.ts

#### Q5: 开发官网常用到的一些基本库

#### A5:

css 使用[styled-components](https://styled-components.com/)

css 动画 使用[animate.css](https://animate.style/)

轮播效果使用[swiper](https://swiper.com.cn/)

#### Q6: 移动端和 PC 端的代码

#### A6: 移动端和 PC 端的代码

eg. 通过组件区分的方法

```
import { Visible } from 'react-grid-system';

// PC端
<Visible md lg xl xxl xxxl>
</Visible>

// 移动端
<Visible sm xs>
</Visible>
```

eg. 通过 CSS 区分的方法

```
.some-class {
  <!-- PC端 -->
  width: 100%;

  <!-- 移动端 -->
  @media (max-width: 768px) {
    width: 50%;
  }
}

```

#### Q7 项目的路由在哪边控制

#### A7 根目录 pages 下面的路径就是路由, 如 /pages/about/about-baiying.tsx 对应路由就是 /about/about-baiying, /pages/plat/index.tsx 对应路由就是 /plat
