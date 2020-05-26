<template>
    <div class="Rec">
        <h3>{{title}}</h3>
        <ul class="RecList">
            <li v-for="item in List" :key="item.id">
                <router-link :to="'/SongList/' + item.id">
                    <img class="itemImg" :src="item.picUrl" alt="">
                    <span class="itemTitle">{{item.name}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
    .Rec{
        h3{
            height: 40px;
            line-height: 40px;
        }
        .RecList{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width:30%;
                margin-bottom: 10px;
                img{
                    width: 100%;
                    border-radius: 5px;
                }
                .itemTitle{
                    font-size: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    /*设置成弹性盒子 */
                    display: -webkit-box;
                    /*显示的个数 */
                    -webkit-line-clamp: 2;
                    /* 属性规定框的子元素应该被水平或垂直排列。 */
                    -webkit-box-orient: vertical;
 
                }
            }
        }
        
        
    }
</style>
<script>
    export default {
        data() {
            return {
               
            }
        },
        props:[
            //注意要加引号
            'title',
            'List'
        ],
        created() {
            // console.log(222, this.List,this.title)
        }
    }
</script>