<template>
    <div class="playIcon">
        <router-link to="/player" tag="div" class="showPlayIcon">
            <div :style="{backgroundImage: 'url(' + songPic + ')'}"></div>
            <!-- <p>playIcon</p> -->
        </router-link>
    </div>
</template>
<style scoped lang="scss">
    .playIcon{     
        .showPlayIcon{
            display: flex;
            align-items:center;
            width: 30px;
            height: 30px;
            position: relative;
            align-items:center;
            justify-content:center;
            border: 1px solid #969696;
            padding:2px;
            border-radius: 50%;
            div{
                background-size: cover;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                position: absolute;               
            }
        }
    }
</style>
<script>
    export default {
        computed: {
            songPic() {
                return this.$store.state.songPic
            },
            playStatus() {
                return this.$store.state.playStatus
            }
        },
        watch: {

        }

    }
</script>