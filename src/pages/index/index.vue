<template>
  <div class='indexContainer'>
    <!-- 头部 -->
    <div class="header">
      <img class="ding" src="../../common/images/ding_01.jpg" alt="">
      <div class="titleWrap">
        <router-link class='titleItem' to="/index/exchangeList/weixin">兑换微信立减金</router-link>
        <router-link class='titleItem' to="/index/exchangeList/phone">兑换手机话费</router-link>
        <router-link class='titleItem' to="/index/exchangeList/video">兑换视频会员</router-link>
      </div>
      <!-- 如何开通e支付按钮 -->
      <div class="eRule" @click="toEGuide">
        <span>如何开通e支付</span>
        <img class="wen" src="../../common/images/wen_03.png" alt="">
      </div>
      <!-- 用户信息展示框 -->
      <div class="userWrap">
        <img src="../../common/images/video/you_03.png" alt="">
        <div class="userInfoBox">
          <div class="weixinName">焰火灿烂</div>
          <!-- <div class="phoneNum">13658962568</div> -->
          <div class="phoneNum">{{"13658962568".replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}}</div>
        </div>
      </div>
    </div>
    <div class="contentWrap">
      <div class="content">
        <!-- 二级路由展示区 -->
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    toEGuide(){
      this.$router.push('/eGuide')
    }
  },
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
      .eRule
        position absolute
        display flex
        justify-content space-around
        align-items center
        left 246px
        top 310px
        width 259px
        height 47px
        background-color #fff
        border-radius 24px
        span 
          font-size 26px
          font-weight bold
          color #440802
          margin 0 10px
        .wen
          width 32px
          height 32px
          margin-right 16px
      .userWrap
        position absolute
        display flex
        align-items center
        width 230px
        height 78px
        right 0
        top 38px
        background-color #fff
        border 3px solid #e85d68
        border-radius 50px 0 0 50px
        border-right none
        img 
          width 63px
          height 63px
          margin-left 8px
          margin-right 5px
        .userInfoBox
          color #440802
          .weixinName
            font-size 24px
            font-weight 700
          .phoneNum
            font-size 22px
      .ding
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
          position relative
          text-decoration none
          height 100%
          padding 0 10px
          font-size 26px
          font-weight 700
          color #666
          &.active
            color #ff6664
            &:after
              content ""
              position absolute
              left 0
              bottom 0
              display block
              width 100%
              height 8px
              background-color #ff6664
    .contentWrap
      position relative
      left 0
      top 503px
      width 100%
      height calc(100vh - 503px) 
      .content
        width 708px
        padding-bottom 30px
        background-color #fff
        margin 0 auto
</style>
