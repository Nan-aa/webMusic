<template>
    <div>
        <audio id="player"
        :src="songUrl"
         controls 
         muted
         preload 
         @canplay="startPlay"
         @timeupdate="playUpdate"
         @ended="playEnd"
         ></audio>
    </div>
</template>
<style lang="scss" scoped>
    #player{
        display: none;
    }
</style>
<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            //当前歌曲id
            songId() {
                return this.$store.state.songId
            },
            //当前歌曲在歌曲列表的位置
            listIndex() {
                return this.$store.state.listIndex
            },
            //当前歌曲url
            songUrl() {
                return this.$store.state.url
            },
            //当前播放状态
            playStatus() {
                return this.$store.state.playStatus
            },
            //歌单列表
            songlist() {
                return this.$store.state.songlist;
            },
            currentTime() {
                return this.$store.state.currentTime;
            },
            newTime() {
                return this.$store.state.newTime;
            },
        },
        methods: {
            //获取当前歌曲地址
            getData(){
                // let { params } = this.$route;
                this.$http.get(this.$store.state.Host + '/song/url?id=' + this.songId)
                .then(({ data }) => {
                    // console.log(data)
                    this.$store.commit('setSongUrl', data.data[0].url);
                })
            },
            //加载完即可播放
            startPlay() {
                let player = document.querySelector('#player');
                console.log(1)
                player.play();
                this.$store.commit('setPlayStatus', true);
                this.$store.commit('setDurationTime', player.duration);
            },
            //调整当前播放时间
            playUpdate() {
                let player = document.querySelector('#player');
                this.$store.commit('setCurrentTime', player.currentTime)
            },
            //播放完毕触法
            playEnd() {
                let player = document.querySelector('#player');
                // this.$store.commit('setPlayStatus', false);
                this.$store.commit('setCurrentTime', 0)
                //自动播放下一曲
                this.playNext();
            },
            //改变播放状态
            changeStatus() {
                let player = document.querySelector('#player');
                if(this.playStatus){
                    player.play();
                } else {
                    player.pause();
                }
            },
            //自动播放下一首
            playNext(){
                // console.log(this.listIndex)
                // 判断当前歌曲是否歌单列表的最后一个，如果是将索引清空到-1，再加一播放第一首。
                if(this.listIndex == this.songlist.length - 1){
                    this.$store.commit('setListIndex', -1)
                }
                this.$store.commit('setSongId', this.songlist[this.listIndex + 1].id);
                this.$store.commit('setListIndex', this.listIndex + 1)
            }
            
        },
        watch: {
            playStatus(){
                this.changeStatus();
            },
            //songId被改变时获取歌url
            songId() {
                this.getData();
            },
            currentTime() {

            },
            newTime() {
                // console.log(this.newTime)
                let player = document.querySelector('#player');
                player.currentTime = this.newTime;
                // this.$store.commit('setCurrentTime', this.newTime)
            }
        },
        created(){
            console.log(this.$store.state.playStatus)
        }
    }
</script>