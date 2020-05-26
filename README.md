# Vue 实现网易云音乐 WebApp

 Vue + vuex + vue-router + axios  + Scss + ES6 等开发一款移动端音乐 WebApp

UI 界面参考了网易云音乐

移动端flex布局适配


# 界面截图

>![主界面](.\ui\main.png)

![歌单列表](.\ui\list.png)

![播放界面](.\ui\play.png)

![搜索](.\ui\search.png)

![搜索详细](.\ui\search1.png)

![云村热评](.\ui\cloud.png)

## 实现

通过对vue的学习，实现一个音乐播放webApp，积累项目经验，提高技术能力。

## 功能

播放器内核。刷新界面音乐自动播放，自动进入下一曲功能。上/下一首，播放/暂停，滚动条实时更新显示，拖动改变播放进度

搜索功能，输入关键字即可联想搜索，点击歌曲进行播放

主页面，歌单详情页面，搜索详情页面，播放页面，播放内核，云村热评等等功能。

## 技术架构

前端：Vue-cli、Vue、Vuex、Vue-Router、Axios、Mint-UI、Sass、ES6、ES Module

后端：Express 搭建的本地测试服务器  Node.js

​			NeteaseCloudMusicApi：网易云音乐 NodeJS 版 API

## 特别感谢

 [Binaryify](https://github.com/Binaryify) 对接口文档 [NeteaseCloudMusicApi](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi) 的提供

## Build Setup

**1.需要先运行 [NeteaseCloudMusicApi](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi)**

``` bash
# 下载后端项目到本地
git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
# 安装依赖模块
npm install
# 启动服务器
node app.js
```

**2、下载本项目到本地**

```bash
# 克隆到本地
git clone https://github.com/Nan-aa/webMusic.git
# 安装依赖模块
npm install
# 启动项目
npm run dev
```

