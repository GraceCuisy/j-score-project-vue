<template>
  <div class="tabbar">
    <router-link class="tabItem" to="/index">
      <i class="iconfont iconzhuye"></i>
      <span>主页</span>
    </router-link>
    <router-link class="tabItem" to="/scoreQuery">
      <i class="iconfont icondapaidui"></i>
      <span>积分查询</span>
    </router-link>
    <router-link class="tabItem" to="/exchangeRule">
      <i class="iconfont iconduihuan_huaban1"></i>
      <span>兑换规则</span>
    </router-link>
    <router-link class="tabItem" to="/myBenefit">
      <i class="iconfont iconquanyi_huaban1"></i>
      <span>我的权益</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'v-footer',
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tabbar
    box-sizing border-box
    border-top 1px solid #000
    position fixed
    z-index 9
    left 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    justify-content space-around
    .tabItem
      display flex
      flex-direction column
      align-items center
      justify-content center
      text-decoration none
      color #CECECE
      &.active
          color #FF9C00
      .iconfont
        font-size 52px
      span 
        font-size 21px
        font-weight 700
</style>
