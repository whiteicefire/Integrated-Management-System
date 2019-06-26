# Quasar App

> WIP
## 文件结构
```shell
.
├── .quasar  Quasar CLI生成的配置
└── src
    ├── assets  资源文件
    ├── components 自定义组件
    ├── css 样式文件
    ├── layout 布局组件
    ├── libs  工具方法
        ├──auth token管理
        ├──dynamicRoutes 本地路由表
        ├──loading 全局loading方法
    ├── router  路由配置
    ├── store  状态管理
        ├──menu 模块菜单、路由表管理
        ├──menurouter 本地菜单表管理
        ├──tabrouter 导航tab管理
        ├──theme 主题颜色管理
        ├──user 登录、退出、用户信息管理
    ├── api  API管理
    ├── plugins  需要全局注册的组件、指令、插件
    ├── utils 自定义函数方法
    └── pages
        ├── dome 
        │   └── dome页面
        ├── zhgl_view
        │   └── 业务组件
        ├── Error404 404页面
        ├── index 首页
        └── login 登录页
        
```

## 安装使用

## Install
```bush
npm install -g @quasar/cli

```
```bush
npm install
```
## Run
### Development
```bush
quasar dev
```
### Production(Build)
```bush
quasar build
```