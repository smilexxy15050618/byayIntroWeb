# 组件文档

本文档主要说明于 src/components/common 文件夹下的一些组件

## 组件兼容视口传值方式

通常的一些布局组件如：`<ByContainer> <ByDesc> <Banner>` 等组件

在使用 `background`、`height`、`padding` 等属性时可设置 元组，比如 ：

`<ByDesc height={['680px','calc(100vh - 50px)']}> 主体内容 </ByDesc>`

这样就可以同时设置 pc 端和移动端该模块的一些 css 属性以便开发。

## 常用组件

### 1. 通用带标题模块组件 \<ByDesc\>

用途：用于处理具有模块大标题的视觉需求，可同时提供其 PC 端 与 移动端 背景与宽高。

组件属性：

| 属性           | 类型                  | 必选 - 默认值                       | 功能               |
| -------------- | --------------------- | ----------------------------------- | ------------------ |
| title          | string \| ReactNode   | 是                                  | 模块大标题         |
| desc           | string                | 否-''                               | 模块小标题         |
| padding        | string \| string[ ]   | 否-[ '60px 20px', '40px 20px' ]     | 容器内边距         |
| background     | string \| string[ ]   | 否-[ 'transparent', 'transparent' ] | 背景               |
| needDecoration | boolean \| boolean[ ] | 否-[ true,true ]                    | 是否需要左右装饰条 |
| descBottom     | string \| string[ ]   | 否-[ '0px', '0px' ]                 | 小标题下方间距     |
| children       | ReactNode             | 否-''                               | 内容               |

模样：<img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/docs-img/by-desc.png"/>

### 2. 通用带标题模块组件 \<ByContainer\>

用途：用于布局包裹

组件属性：

| 属性       | 类型                | 必选 - 默认值                       | 功能          |
| ---------- | ------------------- | ----------------------------------- | ------------- |
| padding    | string \| string[ ] | 否-[ '0 0', '40px 20px' ]           | 模块内边距    |
| height     | string \| string[ ] | 否-[ 'auto', 'auto' ]               | 模块高度      |
| background | string \| string[ ] | 否-[ 'transparent', 'transparent' ] | 背景          |
| maxWidthPc | string              | 否-'1200px'                         | PC 端最大宽度 |
| minWidthPC | string              | 否-'unset'                          | PC 端最小宽度 |
| children   | ReactNode           | 否-''                               | 内容          |

### 3. 宽高定比例组件 \<ByRatioBox\>

用途：永不处理那些在不同视口需要保持相同宽高比例或宽高关系的组件

组件属性：

| 属性       | 类型                      | 必选 - 默认值 | 功能                                                                                                                      |
| ---------- | ------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| width      | string                    | 是            | 组件宽度                                                                                                                  |
| background | string                    | 否-'unset'    | 背景                                                                                                                      |
| ratio      | number                    | 否-0          | 高/宽 的比例(小数)，如无                                                                                                  |
| calcHeight | (width: string) => string | 否            | 改函数，返回表示高度的 css 字符串，<br />其中涉及的百分比将与宽度关联如:<br />calc(70% + 10px)<br />设置此值后 ratio 失效 |
| height     | string                    | 否-'unset'    | 使用固定高度，设置此值后 ratio 和 calcHeight 都将失效                                                                     |
