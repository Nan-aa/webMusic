<template>
    <div class="iconList">
        <ul>
            <li v-for="(item, index) in data" :key="index">
                <div v-html="item.svg"></div>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    .iconList{
        ul{
            display:flex;
            li{
                width:25%;
                text-align: center;
                color:#fff;
                font-size: 14px;
            }
        }
    }
</style>
<script>
    export default {
        props:['data']
    }
</script>