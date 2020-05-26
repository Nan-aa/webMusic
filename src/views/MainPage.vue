<template>
    <div class="mainPage">
        <Header :show="true" backgroundColor="#fff"></Header>
        <Banner></Banner>
        <ul class="tags">
            <li v-for="(item, index) in tags" :key="index">
                <img :src="item.src"/>
            </li>
        </ul>
        <div class="content">
            <!-- 传递给推荐组件 -->
            <!-- 当父组件拿到处理后的值时，子组件钩子函数生命周期已经走完，即便拿到值也不会再次渲染。简单的解决方案就是通过v-if，设置一个flag，让子组件在父组件拿到值后再开始渲染。 -->
            <Rec title="推荐歌单" :List="personalized" v-if="personalized.length > 0"></Rec>
            <!-- <Rec title="推荐歌曲" :List="newSongs" v-if="newSongs.length > 0"></Rec> -->
            <Rec title="推荐电台" :List="Djprograms" v-if="Djprograms.length > 0"></Rec>
        </div>
        <Footer></Footer>
    </div>
</template>
<style lang="scss" scoped>
    .mainPage{
        .tags{
            display: flex;
            li{
                img{
                    width:75px;
                    height: 80px;
                }
            }
        }
        .content{
            padding:0 10px 60px 10px;
        }
    }
</style>
<script>
    import Header from '@/components/Header';
    import Banner from '@/components/Banner';
    import Rec from '@/components/Recommand';
    import Footer from '@/components/Footer';
    export default {
        name: 'MainPage',
        components: {
            Header,
            Banner,
            Rec,
            Footer
        },
        data() {
            return {
                //推荐歌单列表
                personalized:[],
                //每日推荐，歌单，排行榜菜单
                tags:[
                    //require('xx.jpg')的作用就是把图片复制到dist目录下的某个目录(根据你的配置), 然后返回相对web服务器根目录的相对路径字符串, 这个是构建时就返回了
                    //直接写src：@/assets/img/1.jpg不会生效
                    {src:require('@/assets/img/1.jpg')},
                    {src:require('@/assets/img/2.jpg')},
                    {src:require('@/assets/img/3.jpg')},
                    {src:require('@/assets/img/4.jpg')},
                    {src:require('@/assets/img/5.jpg')},
                ],
                //content标题
                title:['推荐歌单', '推荐歌曲'],
                //推荐歌曲列表
                newSongs:[],
                //推荐电台
                Djprograms:[]
            }
        },
        //创建期完成时请求数据
        created () {
            this.getRec();
            this.getNewSong();
            this.getDjprogram();
        },
        methods: {
            //获取推荐歌单
            getRec() {
                // console.log(this.$store)
                //在store中读取相同的地址前缀
                this.$http.get(this.$store.state.Host + '/personalized?limit=9')
                .then(({data}) => {
                    //推荐歌单存放在data中
                    this.personalized = data.result;
                    console.log('推荐歌单',this.personalized)
                })
                .catch((error) => console.log(error))
            },
            //获取推荐歌曲
            getNewSong() {
                this.$http.get(this.$store.state.Host + '/personalized/newsong')
                .then(({data}) => {
                    this.newSongs = data.result.slice(0,6);
                     console.log('推荐歌曲',this.newSongs)
                }).catch((error) => console.log(error))
            },
            //推荐电台
            getDjprogram() {
                this.$http.get(this.$store.state.Host + '/personalized/djprogram')
                .then(({data}) => {
                    this.Djprograms = data.result;
                    // console.log('djprogram', data);
                    console.log('推荐电台', this.Djprograms);
                }).catch((error) => console.log(error))
            }
            
        }
    }
</script>