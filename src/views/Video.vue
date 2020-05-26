<template>
    <div class="video">
        <Header></Header>
        <ul class="videoList">
            <li v-for="item in videoTitle" :key="item.id">{{item.name}}</li>
        </ul>
        <!-- 视频列表下得内容需要登陆稍后开发 -->
        <ul class="videoContent">
            <li>视频列表下内容需要登陆稍后开发</li>
        </ul>
        <Footer></Footer>
    </div>
</template>
<style lang="scss" scoped>
    .video{
        .videoList{
            display: flex;
            padding: 0 10px;
            border-bottom:1px solid #e3e4e5;
            li{
                height: 50px;
                line-height: 50px;
                text-align: center;
                width: 20%;
                font-size: 14px;
            }
        }
        .videoContent{
            li{
                font-size: 12px;
                text-align: center;
                margin-top: 100px;
            }
        }
    }
</style>
<script>
    import Footer from '@/components/Footer';
    import Header from '@/components/Header'
    export default {
        components:{
            Footer,
            Header
        },
        data() {
            return {
                //视频得title
                videoTitle: []
            }
        },
        methods: {
            getData() {
                this.$http.get(this.$store.state.Host + '/video/group/list')
                    .then(({data}) => {
                        console.log(data)
                        this.videoTitle = data.data.slice(0, 5);
                    })
            },
            // 视频列表下得内容需要登陆暂时不开发
        },
        created() {
            this.getData();
        }
    }
</script>