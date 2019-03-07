<template>
  <div id="app">
    <!-- 路由组件的出口 -->
    <router-view/>
    <!-- 底部栏 -->
    <footerBottom v-if=$store.state.isLogin></footerBottom>
  </div>
</template>
<script>
import footerBottom from 'components/footer/Foot.vue'
export default {
  components:{
    footerBottom
  }
}
</script>
<style lang="scss" scpoed>
@import '@/assets/sass/commonStyle.scss';
</style>
