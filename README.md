<h1>
  <p align="center">
    vue3+vite+elemetnplus+admin
  </p>
</h1>

<p align="center">
  <img alt="vue" src="https://img.shields.io/badge/vue-v3.2.25-brightgreen" />
  <img alt="vite" src="https://img.shields.io/npm/v/vite?label=vite&logo=vite" />
  <img alt="element-plus" src="https://img.shields.io/npm/v/element-plus?label=element-plus" />
  <img alt="vue-router" src="https://img.shields.io/badge/vue--router-v4.0.12-green" />
  <img alt="vuex" src="https://img.shields.io/badge/vuex-v4.0.2-blue" />
</p>

## 简介

[vue3+vite+elemetnplus+admin](https://github.com/lpya/vue3-vite-elementplus-admin)是一个后台前端解决方案，它基于 vue3 和 element-plus 实现。它使用了最新的前端技术栈，内置了动态路由、权限验证等业务模型，后续会提供更多的功能组件...

## 目录结构

```
├── public              # 静态资源
│   └── favicon.ico     # favicon图标
├── src                 # 源代码
│   ├── api             # 所有请求
│   ├── assets          # 主题、样式、字体
│   ├── components      # 全局公共组件
│   ├── interface       # 全屏接口
│   ├── layout          # 全局layout
│   ├── filters         # 全局filters
│   ├── plugins         # 插件
│   ├── router          # 路由
│   ├── store           # 全局store管理
│   ├── styles          # 全局样式
│   ├── utils           # 公用方法
│   ├── views           # views所有页面
│   ├── env.d.ts        # 声明
│   ├── main.ts         # 入口文件
│   ├── permission.ts   # 权限管理
│   └── App.vue         # 入口页面
├── index.html          # html模板
├── .env.development    # 配置文件
├── .env.production     # 配置文件
├── package.json        # package.json
├── README.md           # README.md
├── tsconfig.json       # ts配置
└── vite.config.ts      # vite配置
```

## 开发

```
#克隆项目
git clone https://github.com/lpya/vue3-vite-elementplus-admin.git

#进入项目目录
cd vue3-vite-elementplus-admin

#安装依赖
npm install

#启动服务
npm run dev

```

## 发布

```
#预览
npm run preview

#打包发布
npm run build
```

## 其他问题

运行出现下面错误时，先把 App.vue template 里面内容注释掉再随便添加个 div，然后重新运行，该报错就不会出现了，好像更新了elementplus才出现的问题

```
Uncaught SyntaxError: The requested module '/node_modules/_dayjs@1.10.7@dayjs/dayjs.min.js' does not provide an export named 'default'
```

## 感谢

[vuejs [ vue ]](https://github.com/vuejs/vue)

[vitejs [ vite ]](https://github.com/vitejs/vite)

[element-plus [ element-plus ]](https://github.com/element-plus/element-plus)

[PanJiaChen [ vue-element-admin ]](https://github.com/PanJiaChen/vue-element-admin)

...
