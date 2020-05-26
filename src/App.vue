<template>
  <div id="app">
    <SongAudio></SongAudio>
    <router-view/>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import SongAudio from './components/SongAudio'
export default {
  components: {
    SongAudio
  },
  created () { 
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  },
  name: 'App'
}
</script>

