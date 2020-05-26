import Vue from 'vue'
import Router from 'vue-router'
// import MainPage from '@/components/HelloWorld'
//引入主页面 显示主页面
import MainPage from '@/views/MainPage'
import Player from '@/views/Player'

Vue.use(Router)
//防止报错bug router版本问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    //默认显示发现首页主页面
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    //歌曲列表页面
    {
      path: '/songlist/:id',
      name: 'SongList',
      component: () => import('@/views/SongList')
    },
    //搜索页面
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/Search')
    },
    //播放页面
    {
      path: '/player/:id',
      component: Player
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    },
    //视频页面
    {
      path: '/video',
      name: 'Video',
      component: () => import('@/views/Video')
    },
    //我的页面
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('@/views/Mine')
    },
    //云村页面
    {
      path: '/cloud',
      name: 'Cloud',
      component: () => import('@/views/Cloud')
    },
    //账号页面
    {
      path: '/account',
      name: 'Account',
      component: () => import('@/views/Account')
    },
  ]
})
