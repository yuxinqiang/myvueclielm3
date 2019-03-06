<template>
  <div id="app">
    <headerTop></headerTop>
    <router-view/>
    <footerBottom v-if=$store.state.isLogin></footerBottom>
  </div>
</template>
<script>
import headerTop from 'components/header/Head.vue'
import footerBottom from 'components/footer/Foot.vue'

export default {
  components:{
    headerTop,
    footerBottom
  }
}
</script>
<style lang="scss" scpoed>
@import '@/assets/sass/commonStyle.scss';
</style>
