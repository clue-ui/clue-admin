# Clue - Admin

### 核心组建
* vue
* vue-cli3
* vue-router
* vuex
* axios
* tailwindcss
* clue-ui

### 目录结构
```
.
├── README.md
├── babel.config.js
├── package.json
├── public
├── src
│    ├── App.vue
│    ├── assets                    // 样式、资源
│    ├── clue-ui                   // clue ui 组建库, 不建议修改
│    ├── components                // 业务组建
│    ├── layout                    // 页面布局
│    └── mixins                    // 公共混入方法, store引入接口
│        └── store.js
│    ├── store                     // store定义、实现
│    ├── main.js
│    ├── router.js
│    └── views                     // 视图页面
│        ├── About.vue
│        └── Home.vue
└── yarn.lock
```

### store 模块说明

#### storeApp 应用配置

#### storeUser 当前登陆用户信息

### 等待完善
  ...
