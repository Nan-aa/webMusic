<template>
    <div class="cloud">
        <div class="hottitle">
            <svg t="1590474578044" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4113" width="200" height="200"><path d="M57.917085 1023.988577C40.48042 1023.988577 26.302064 1009.808793 26.302064 992.380695c0-98.787303 31.496511-192.638597 91.078447-271.416285 28.645134-37.867491 62.891647-70.887497 101.772897-98.129074 34.580625-24.224571 72.104009-43.364638 111.766282-57.021836-43.571673-24.355931-80.551053-59.067917-107.632713-101.220327-31.158115-48.501972-47.636706-104.668537-47.636706-162.417138C175.650271 135.555365 311.212775 0 477.827734 0c166.619243 0 302.167469 135.553937 302.167469 302.177464 0 57.74289-16.464313 113.889466-47.611005 162.38287-27.077376 42.155265-64.04105 76.872962-107.605584 101.227466 35.430184 12.209378 69.184095 28.800767 100.547818 49.42435l8.742606 6.066851c14.295438 10.096189 17.710809 29.850223 7.671733 44.074269-5.951197 8.397071-15.620465 13.391622-25.873715 13.391622-6.528041 0-12.807639-1.988968-18.167714-5.761296l-7.196265-5.011685c-63.260027-41.596984-136.911804-63.587-212.989464-63.587-213.934688 0-387.9915 174.049673-387.9915 387.994356C89.522112 1009.808793 75.342328 1023.988577 57.917085 1023.988577M477.827734 63.228615c-131.761619 0-238.957416 107.188658-238.957416 238.950277 0 131.773042 107.195797 238.983117 238.957416 238.983117 131.755908 0 238.948849-107.210075 238.948849-238.983117C716.776584 170.417272 609.583642 63.228615 477.827734 63.228615M986.607977 826.429677l-123.847155 0 0-122.784849c0-5.861244-4.978845-10.62877-11.089959-10.62877l-36.125538 0c-6.066851 0-11.015712 4.767526-11.015712 10.62877l0 122.784849-130.283815 0c-6.096836 0-11.081392 4.816072-11.081392 10.74728l0 38.173046c0 5.902651 4.980273 10.677316 11.081392 10.677316l130.283815 0 0 122.756293c0 5.898367 4.947432 10.667321 11.014284 10.667321l36.125538 0c6.103975 0 11.089959-4.768954 11.089959-10.667321l0-122.756293 123.847155 0c6.111114 0 11.084248-4.774665 11.084248-10.677316l0-38.183041C997.66224 831.277161 992.674828 826.429677 986.607977 826.429677" p-id="4114"></path></svg>
            <span>云村热评墙</span>
            <PlayIcon></PlayIcon>
        </div>
        <ul>
            <li v-for="item in user" :key="item.id">
                <div class="background" :style="{backgroundImage: 'url(' + item.simpleUserInfo.avatar + ')'}"></div>
                <div class="user">
                    <div class="usertitle">
                        <img :src="item.simpleUserInfo.avatar" alt="">
                        <span>{{item.simpleUserInfo.nickname}}</span>
                    </div>
                    <div class="content">
                        “{{item.content}}”
                    </div>
                    <div class="like">
                        <span>浏览：{{item.likedCount}}</span>
                        <span>喜欢：{{item.replyCount}}</span>
                    </div>
                </div>
            </li>
        </ul>
        <Footer></Footer>
    </div>
</template>
<style lang="scss" scoped>
    .cloud{
        .hottitle{
            display: flex;
            justify-content:center;
            align-items:center;
            position: fixed;
            height: 60px;
            width:100%;
            background: #fff;
            z-index:9;
            span{
                width: 270px;
                text-align: center;               
            }
        }
        ul{
            padding:15px 15px 100px 15px;
            li{
                position: relative;
                top:60px;
                height: 200px;
                overflow: hidden;
                border-radius:10px;
                padding:10px;
                margin-bottom:10px;
                .background{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 200px;
                    /* background-size:cover; */
                    z-index:-1;
                    filter:blur(30px);
                }
                .user{
                    .usertitle{
                        display: flex;
                        align-items:center;
                        span{
                            flex:1;
                            font-size: 15px;
                        }
                        img{
                            width: 30px;
                            height: 30px;
                            border-radius:50%;
                            margin-right: 10px;
                        }
                    }
                    .content{
                        height:150px;
                        font-size: 13px;
                        line-height: 20px;
                        display: flex;
                        align-items: center;
                    }
                    .like{
                        font-size: 12px;
                        span{
                            margin-right:20px;
                        }
                    }
                    
                }
            }
        }
    }
</style>
<script>
    import Footer from '@/components/Footer';
    import PlayIcon from '@/components/PlayIcon'
    export default {
        data() {
            return {
                user : []
            }
        },
        components:{
            Footer,
            PlayIcon
        },
        methods: {
            getData() {
                this.$http.get(this.$store.state.Host + '/comment/hotwall/list')
                .then(({data}) => {
                    console.log(data)
                    this.user = data.data.slice(0,10);
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>