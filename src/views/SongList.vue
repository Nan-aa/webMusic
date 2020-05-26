<template>
    <div class="songlist">
        <!-- 头部背景 -->
        <div class="list-header" :style="{backgroundImage : 'url(' + coverImgUrl + ')'}"></div>
        <!-- 头部菜单 -->
        <div class="header">
            <div class="backIcon" @click="goBack">
                <svg t="1589284598653" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21831" width="200" height="200"><path d="M762.450581 1003.982452c-10.074839 0-20.248774-3.600516-27.978323-10.735484L233.604129 529.044645a34.849032 34.849032 0 0 1 0-51.860645L734.472258 12.915613a41.752774 41.752774 0 0 1 55.923613 0 34.849032 34.849032 0 0 1 0 51.893677L317.44 503.114323l472.922839 438.238967a34.849032 34.849032 0 0 1 0 51.860645 41.125161 41.125161 0 0 1-27.945291 10.768517z" p-id="21832"></path></svg>
            </div>
            <div class="title">歌单</div>
            <div class="dians">
                <svg t="1589285567608" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23162" width="200" height="200"><path d="M512 768c-47.104 0-85.2992 38.1952-85.2992 85.2992s38.1952 85.2992 85.2992 85.2992 85.2992-38.1952 85.2992-85.2992S559.104 768 512 768z" p-id="23163"></path><path d="M512 426.7008c-47.104 0-85.2992 38.1952-85.2992 85.2992s38.1952 85.2992 85.2992 85.2992 85.2992-38.1952 85.2992-85.2992S559.104 426.7008 512 426.7008z" p-id="23164"></path><path d="M512 256c47.104 0 85.2992-38.1952 85.2992-85.2992S559.104 85.2992 512 85.2992s-85.2992 38.1952-85.2992 85.2992S464.896 256 512 256z" p-id="23165"></path></svg>
            </div>
            <PlayIcon></PlayIcon>
        </div>
        <!-- 中间图片，文字描述 -->
        <div class="describe">
            <div class="leftImg">
                <img :src="coverImgUrl" alt="">
                <div class="palyNum">
                    <svg t="1589289233539" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27107" width="200" height="200"><path d="M853.333 504.107l21.334 2.346c0-29.226-4.907-42.666-51.414-77.226C782.507 399.36 394.667 153.6 351.573 129.92a167.253 167.253 0 0 0-175.786 1.707 95.573 95.573 0 0 0-34.347 81.706v597.334a94.507 94.507 0 0 0 34.347 81.493 149.333 149.333 0 0 0 85.333 25.387 189.653 189.653 0 0 0 90.24-24.32c42.667-23.68 431.36-270.08 472.107-298.667 45.866-34.987 51.2-55.467 51.2-84.693l-21.334-5.974z m-29.226 10.24c0 15.36 4.053 20.053-29.867 44.8C753.707 588.16 371.627 832 328.96 855.68c-21.333 11.947-80.427 35.84-129.92 1.28-10.24-7.467-14.933-20.267-14.933-46.293V213.333c0-26.24 5.76-39.253 16.213-46.506a104.32 104.32 0 0 1 59.52-17.494 154.24 154.24 0 0 1 70.187 19.2C372.693 192 753.28 436.48 793.6 465.707c33.92 24.746 30.293 29.44 30.293 44.8v3.626z" p-id="27108"></path></svg>
                    <span>{{playCount}}</span>
                </div>
            </div>
            <div class="rightWord">
                <div class="songName">{{name}}</div>
                <div class="creator">
                    <img :src="avatarUrl" alt="">
                    <span class="creatorName">{{nickname}}</span>
                    <svg t="1589288607574" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24541" width="200" height="200"><path d="M288 64c9 0 18.1 3.2 25 9.6l448 415.2c13.8 12.8 13.8 33.6 0 46.4L313 950.4c-13.8 12.8-36.2 12.8-50 0-13.8-12.8-13.8-33.6 0-46.4l423-392-423-392c-13.8-12.8-13.8-33.6 0-46.4 6.9-6.4 16-9.6 25-9.6z" p-id="24542"></path></svg>
                </div>
                <div class="intro">{{description}}</div>
            </div>
        </div>
        <!-- 评论+分享+下载+多选 -->
        <IconList :data="iconList"></IconList>
        <!-- 歌曲列表 -->
        <!-- 播放全部+收藏 -->
        <div class="playHeader">
            <div class="playAll">
                <svg t="1589293897119" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44245" width="200" height="200"><path d="M528.375457 943.124018c-60.32697 0-118.863155-11.875468-173.984566-35.298947-53.216016-22.615067-101.001345-54.980195-142.026714-96.196922-41.015136-41.207517-73.219605-89.197508-95.718015-142.637628-23.295566-55.334259-35.107589-114.094548-35.107589-174.647669 0-60.554144 11.811-119.314433 35.107589-174.648692 22.49841-53.44012 54.702879-101.43011 95.718015-142.637628 41.025369-41.216727 88.809675-73.581856 142.026714-96.195899 55.121412-23.424502 113.658619-35.300994 173.984566-35.300994 60.32697 0 118.863155 11.876492 173.984566 35.300994 53.217039 22.614044 101.001345 54.979172 142.026714 96.195899 41.015136 41.207517 73.219605 89.197508 95.718015 142.637628 23.296589 55.334259 35.108612 114.094548 35.108612 174.648692 0 60.553121-11.812023 119.31341-35.108612 174.647669-22.49841 53.441143-54.702879 101.43011-95.718015 142.638651-41.025369 41.215704-88.809675 73.580832-142.026714 96.195899C647.240659 931.246503 588.702428 943.124018 528.375457 943.124018zM528.375457 106.959034c-212.530464 0-385.437489 173.779905-385.437489 387.383818s172.907025 387.382794 385.437489 387.382794 385.439536-173.777859 385.439536-387.382794C913.814993 280.737916 740.906945 106.959034 528.375457 106.959034z" p-id="44246"></path><path d="M769.102101 495.28634 405.708674 705.09174 405.708674 285.48094Z" p-id="44247"></path></svg>
                <span>播放全部</span>
                <span>(共{{trackCount}}首)</span>
            </div>
            <div class="collection">
                <svg t="1589294004584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="45027" width="200" height="200"><path d="M812 482.001H542V212h-59.999v270.001H212V542h270.001v270H542V542h270v-59.999z m0 0" p-id="45028"></path></svg>
                <span>收藏</span>
                <span>({{subscribedCount}})</span>
            </div>
        </div>
        <!-- 歌曲列表 -->
        <div class="songs">
            <ul>
                <li v-for="(item, index) in songlist" :key="item.id" @click="playSong(item.id, index)">
                    <div class="number">{{index + 1}}</div>
                    <div class="songMsg">
                        <p class="songName">{{item.name}}</p>
                        <p class="songCreator">{{item.ar[0].name}} - {{item.al.name}}</p>
                    </div>
                    <div class="dians">
                        <svg t="1589285567608" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23162" width="200" height="200"><path d="M512 768c-47.104 0-85.2992 38.1952-85.2992 85.2992s38.1952 85.2992 85.2992 85.2992 85.2992-38.1952 85.2992-85.2992S559.104 768 512 768z" p-id="23163"></path><path d="M512 426.7008c-47.104 0-85.2992 38.1952-85.2992 85.2992s38.1952 85.2992 85.2992 85.2992 85.2992-38.1952 85.2992-85.2992S559.104 426.7008 512 426.7008z" p-id="23164"></path><path d="M512 256c47.104 0 85.2992-38.1952 85.2992-85.2992S559.104 85.2992 512 85.2992s-85.2992 38.1952-85.2992 85.2992S464.896 256 512 256z" p-id="23165"></path></svg>
                    </div>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>
<style lang="scss" scoped>
    .songlist{
        .list-header{
            height: 300px;
            background-size:cover;
            /* 高斯模糊 */
            filter: blur(20px);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index:-1;
            overflow: hidden;
        }
        /* 头部菜单 */
        .header{
            padding:10px 20px;
            display: flex;
            height: 30px;
            line-height: 30px;
            text-align: center;
            align-items: center;
            color:#fff;
            .backIcon{
                font-size: 15px;
                width:50px;
                display: flex;
                align-items: center;
            }
            .title{
                flex: 1;
                font-size: 20px;
            }
            .dians{
                width: 50px;
                display: flex;
                align-items: center;
            }
            .play{
                width: 50px;
            }
        }
        /* 歌单图片+描述 */
        .describe{
            height: 150px;
            padding:20px 20px;
            display: flex;
            .leftImg{
                width: 150px;
                height: 150px;
                position: relative;
                img{
                    width: 100%;
                }
                .palyNum{
                    position: absolute;
                    top:5px;
                    right:5px;
                    font-size: 10px;
                    color:#fff;
                    display: flex;
                    align-items: center;
                }
                
            }
            .rightWord{
                flex:1;
                margin-left:20px;
                .songName{
                    display: flex;
                    font-size: 17px;
                    color:#fff;
                    margin-bottom:15px;
                }
                .creator{
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color:#DBD6D2;
                    margin-bottom: 15px;
                    img{
                        width: 25px;
                        height: 25px;
                        border-radius:50%;
                    }
                    .creatorName{
                        margin-left: 10px;
                    }
                    svg{
                        font-size: 10px;
                        margin-left: 10px;
                    }

                }
                .intro{
                    font-size: 12px;
                    line-height: 16px;
                    color:#DBD6D2;
                    height: 50px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    /*设置成弹性盒子 */
                    display: -webkit-box;
                    /*显示的个数 */
                    -webkit-line-clamp: 3;
                    /* 属性规定框的子元素应该被水平或垂直排列。 */
                    -webkit-box-orient: vertical;
                }
            }
        }
        /* 播放列表 */
        .playHeader{
            display: flex;
            background: #fff;
            border-radius:20px 20px 0 0;
            margin-top:20px;
            height: 60px;
            align-items:center;
            /* position:sticky; */
            /* top：60px; */
            .playAll{
                font-size: 16px;
                display:flex;
                align-items:center;
                flex:1;
                margin-left:20px;
                svg{
                    font-size: 18px;
                    margin-right: 10px;
                }
            }
            .collection{
                font-size: 13px;
                display:flex;
                justify-content: center;
                align-items:center;
                width: 130px;
                height: 40px;
                background-color: #D7463F;
                color:#fff;
                border-radius:20px;
                margin-right:20px;
                svg{
                    font-size: 15px;
                }
            }
        }
        /* 歌曲列表 */
        .songs{
            background: #fff;
            padding-bottom:50px;
            li{
                display:flex;
                align-items: center;
                text-align:center;
                color:#959696;
                border-bottom:1px solid #e3e4e5;
                height: 50px;
                .number{
                    width:50px;
                }
                .songMsg{
                    flex:1;
                    text-align:left;
                    .songName{
                        color:#000;
                        font-size: 14px;
                        width: 275px;
                        white-space: nowrap; 
                        overflow: hidden;
                        text-overflow:ellipsis;
                    }
                    .songCreator{
                        font-size: 12px;
                        width: 275px;
                        white-space: nowrap; 
                        overflow: hidden;
                        text-overflow:ellipsis;
                    }
                }
                .dians{
                    width: 50px;
                }
            }
        }
    }
</style>
<script>
    import Footer from '@/components/Footer';
    import IconList from '@/components/IconList';
    import PlayIcon from '@/components/PlayIcon';
    export default {
        components:{
            Footer,
            IconList,
            PlayIcon
        },
        data() {
            return {
                //背景图片
                coverImgUrl: '',
                //歌单名称
                name:'',  
                // 作者头像
                avatarUrl: '', 
                // 作者昵称
                nickname: '', 
                //播放量
                playCount: 0,
                //歌单描述
                description: '',
                // 歌曲数量
                trackCount: 0, 
                // 收藏数
                subscribedCount: '0', 
                //评论数
                shareCount: 0,
                //分享数
                commentCount: 0,
                // 歌曲
                songlist: [], 
                //icon列表
                iconList: [
                    {
                        svg:'<svg t="1589291684077" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29641" width="200" height="200"><path d="M512 960.1H92c-11.4 0-21.7-6.9-26-17.5-4.3-10.6-1.7-22.7 6.5-30.6l19.7-19c36.7-35.3 74.5-71.6 83.2-87.7-26-33.4-49.7-64.9-60-84.6C81.7 656.8 64 584.7 64 512 64 264.9 265 63.9 512.1 63.9s448.1 201 448.1 448.1S759.1 960.1 512 960.1zM161.3 904H512c216.2 0 392-175.9 392-392S728.2 120 512 120 120 295.8 120 512c0 63.6 15.6 126.7 45 182.5 10.1 19.1 43.3 61.7 57.4 79.8 27.5 35.4 0.2 69.8-61.1 129.7z" p-id="29642"></path><path d="M608.4 638H288c-15.5 0-28-12.5-28-28s12.5-28 28-28h320.4c15.5 0 28 12.5 28 28s-12.5 28-28 28zM736 414H288c-15.5 0-28-12.5-28-28s12.5-28 28-28h448c15.5 0 28 12.5 28 28s-12.5 28-28 28z" p-id="29643"></path></svg>',
                        name:'',
                    },
                    {
                        svg:'<svg t="1589291722773" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30509" width="200" height="200"><path d="M812.828 170.667H711.282a28.444 28.444 0 1 1 0-56.89h170.496a28.444 28.444 0 0 1 28.444 28.445v170.61a28.444 28.444 0 0 1-56.889 0v-102.23l-331.377 330.81a28.444 28.444 0 1 1-40.192-40.25l331.064-330.495zM500.907 71.11A28.444 28.444 0 0 1 502.329 128C294.343 133.177 128 303.502 128 512c0 212.11 171.975 384.085 384.114 384.085 207.474 0 377.287-164.778 383.914-371.57a28.444 28.444 0 1 1 56.832 1.821c-7.594 237.483-202.552 426.638-440.746 426.638-243.598 0-441.003-197.433-441.003-441.002 0-239.389 190.976-434.888 429.796-440.86z" p-id="30510"></path></svg>',
                        name:'',
                    },
                    {
                        svg:'<svg t="1589291824837" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40254" width="200" height="200"><path d="M236.615854 752.86913h-0.484162A241.500139 241.500139 0 0 1 0.538332 527.733676a238.78883 238.78883 0 0 1 64.684079-180.011531 242.081134 242.081134 0 0 1 149.025146-74.367324 298.534454 298.534454 0 0 1 596.003751 25.951097V300.95207a221.262156 221.262156 0 0 1 213.031398 233.075715 222.714643 222.714643 0 0 1-221.262156 209.1581h-3.098639a27.500417 27.500417 0 0 1 0-54.904001h2.711309A167.520145 167.520145 0 0 0 968.378705 531.219644a166.261323 166.261323 0 0 0-166.16449-175.363573 151.058627 151.058627 0 0 0-18.204502 1.065157 27.500417 27.500417 0 0 1-30.211725-30.308558 240.822312 240.822312 0 0 0 1.549319-27.306752 243.727285 243.727285 0 0 0-487.357738 0 27.500417 27.500417 0 0 1-27.403584 27.500417 185.627813 185.627813 0 0 0-185.240484 197.538205A186.30564 186.30564 0 0 0 237.100016 697.965129a27.500417 27.500417 0 0 1-0.484162 54.904001z" p-id="40255"></path><path d="M513.266174 1021.869686a27.500417 27.500417 0 0 1-27.500417-27.403584v-484.162268a27.500417 27.500417 0 1 1 54.904001 0v484.162268a27.403584 27.403584 0 0 1-27.403584 27.403584z" p-id="40256"></path><path d="M513.266174 1024a27.500417 27.500417 0 0 1-19.366491-8.037094L342.260061 864.129619a27.500417 27.500417 0 1 1 38.732981-38.732981L513.266174 957.766602l130.530147-130.336483a27.500417 27.500417 0 0 1 38.732981 38.732982L532.632664 1015.962906a27.403584 27.403584 0 0 1-19.36649 8.037094z" p-id="40257"></path></svg>',
                        name:'下载',
                    },
                    {
                        svg:'<svg t="1589291877960" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="43513" width="200" height="200"><path d="M386.133333 362.666667c-10.666667-12.8-32-14.933333-44.8-2.133334-12.8 10.666667-14.933333 32-2.133333 44.8l149.333333 170.666667c12.8 14.933333 34.133333 14.933333 46.933334 0l384-426.666667c12.8-12.8 10.666667-34.133333-2.133334-44.8-12.8-12.8-34.133333-10.666667-44.8 2.133334L512 505.6 386.133333 362.666667z" p-id="43514"></path><path d="M896 480c-17.066667 0-32 14.933333-32 32 0 194.133333-157.866667 352-352 352S160 706.133333 160 512 317.866667 160 512 160c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32C281.6 96 96 281.6 96 512S281.6 928 512 928 928 742.4 928 512c0-17.066667-14.933333-32-32-32z" p-id="43515"></path></svg>',
                        name:'多选',
                    },
                ]
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            getData() {
                let { params } = this.$route;
                //$route.params路由中的动态片段和全匹配片段的键值对 
                this.$http.get(this.$store.state.Host + '/playlist/detail',{ params })
                .then(({ data }) => {
                   this.coverImgUrl = data.playlist.coverImgUrl;
                   this.name = data.playlist.name;
                   this.avatarUrl = data.playlist.creator.avatarUrl;
                   this.nickname = data.playlist.creator.nickname;
                   this.shareCount = data.playlist.shareCount;
                   this.commentCount = data.playlist.commentCount;
                   this.description = data.playlist.description;
                   this.playCount = data.playlist.playCount;
                   this.songlist = data.playlist.tracks;
                   this.trackCount = data.playlist.trackCount;
                   this.subscribedCount = data.playlist.subscribedCount;
                   this.iconList[0].name = data.playlist.commentCount;
                   this.iconList[1].name = data.playlist.shareCount;
                    console.log(data.playlist.trackIds)
                    console.log(data.playlist.tracks)
                    console.log(data)
                    
                })
            },
            playSong(id, index) {
                 //当前歌单歌曲列表
                 this.$store.commit('setSongList', this.songlist);
                //当前点击歌曲的id
                this.$store.commit('setSongId', id)
                console.log()
                //当前点击歌曲是列表中的第几个
                this.$store.commit('setListIndex', index);
                this.$router.push('/player/' + id)

            },

        },
        created() {
            //请求歌曲详情数据
            this.getData();
        }
    }
    
</script>