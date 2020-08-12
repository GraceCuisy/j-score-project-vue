<template>
  <div id="app">
    <!-- 一级路由显示区域 -->
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Footer from 'components/Footer'
export default {
  name: 'App',
  components: {
    Footer,
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    overflow hidden
</style>
