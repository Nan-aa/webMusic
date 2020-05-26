<template>
    <div class="banner">
        <mt-swipe :auto="4000" class="swiper" :defaultIndex="defaultIndex">
            <mt-swipe-item v-for="(item, index) in banners" :key="index">
                <img :src="item.pic"/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<style lang="scss" scoped>
    .banner{
        height: 150px;
        padding:10px 15px 10px;
        .swiper{
            border-radius: 8px;
            overflow: hidden;
           img{
               width: 100%;
               height: 100%;
           }
       }
    }
</style>
<script>
    export default {
        name: 'Banner',
        //请求轮播图数据 
        created () {
            this.$http.get(this.$store.state.Host + '/banner?type=2')
            .then(({ data }) => {
                this.banners = data.banners;
                // console.log(data.banners)
            })
        },
        data() {
            return {
                //存放轮播图数据
                banners: [],
                //轮播图索引
                defaultIndex: 0
            }
        },
        methods: {
            //每次执行轮播时候执行此事件，参数为当前index
            changeSwipe(index){
                // console.log(index);
            }
        }
    }
</script>