import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        Host: 'http://localhost:3000',
        //存储footer显示状态
        activePage: '发现',

        // --------跟播放有关----------

        //歌单歌曲的列表
        songlist: [],
        //当前点击歌曲id
        songId: 0,
        //当前点击歌曲是列表中的第几个
        listIndex: 0,
        //当前歌曲的url
        url:'',
        //当前歌曲当前的播放状态 播放、暂停
        playStatus: false,
        //当前歌曲总长度 秒
        durationTime: 0,
        //当前歌曲播放进度 秒
        currentTime: 0,
        //更改后的时间
        newTime: 0,
        //当前歌曲图片
        songPic: '',

    },
    mutations: {
        //存储footer显示状态 第一位state,第二位传递值
        setActive: (state, name) => { state.activePage = name },
        //存储传递过来的歌曲列表
        setSongList: (state, songlist) => { state.songlist = songlist},
        // 当前点击歌曲的id
        setSongId: (state, id) => { state.songId = id},
        //当前点击歌曲是列表中的第几个
        setListIndex: (state, index) => { state.listIndex = index},
        //当前歌曲的src
        setSongUrl: (state, url) => { state.url = url },
        //当前歌曲当前的播放状态 播放、暂停
        setPlayStatus: (state, playStatus) => { state.playStatus = playStatus},
        //当前歌曲总长度 秒
        setDurationTime: (state, durationTime) => { state.durationTime = durationTime},
        //当前歌曲播放进度 秒
        setCurrentTime: (state, currentTime) => { state.currentTime = currentTime},
        //更改的后的时间
        setNewTime: (state, newTime) => { state.newTime = newTime},
        //歌曲背景图
        setSongPic: (state, songPic) => { state.songPic = songPic},

    }
})
export default store;