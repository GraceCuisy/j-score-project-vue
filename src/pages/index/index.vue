<template>
  <div class='indexContainer'>
    <!-- 头部 -->
    <div class="header">
      <img src="../../common/images/ding_01.jpg" alt="">
      <div class="titleWrap">
        <router-link class='titleItem' to="/index/weixin">兑换微信立减金</router-link>
        <router-link class='titleItem' to="/index/phone">兑换手机话费</router-link>
        <router-link class='titleItem' to="/index/video">兑换视频会员</router-link>
      </div>
    </div>
    <div class="contentWrap">
      <div class="content">
        <!-- 二级路由展示区 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .indexContainer
    width 100%
    height 100%
    position relative
    background-color #FFAA94
    .header
      width 100%
      position absolute
      z-index 99
      left 0
      top 0
      image
        width 100%
        height 413px
      .titleWrap
        width 708px
        height 90px
        margin 0 auto
        border-radius 13px 13px 0 0
        background-color rgba(255,227,220,0.9)
        display flex
        justify-content space-around
        align-items center
        line-height 90px
        .titleItem
          text-decoration none
          height 100%
          padding 0 10px
          font-size 26px
          font-weight 700
          color #666
    .contentWrap
      position relative
      left 0
      top 503px
      width 100%
      height calc(100vh - 503px) 
      .content
        width 708px
        height 500px
        background-color #fff
        margin 0 auto
</style>
