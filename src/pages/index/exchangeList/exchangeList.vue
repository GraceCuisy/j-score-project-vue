<template>
  <div class='exchangeListWrap'>
    <div class="list">
      <div class="item" @click="toDetail">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three">消费满10.1元可使用</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three">消费满10.1元可使用</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three">消费满10.1元可使用</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three">消费满10.1元可使用</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exchangeList',
  props:['type'],
  mounted() {
    console.log('111');
  },
  methods: {
    toDetail(){
      this.$router.push({path:`/exchangeDetail/${this.type}`})
    }
  },
  watch: {
    '$route':{
      immediate:true,
      handler:function(newVaule,oldValue){
        console.log(this.type);
      }
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .exchangeListWrap
    width 100%
    height 100%
    .list
      width 100%
      display flex
      flex-wrap wrap
      .item
        width 326px
        height 320px
        background-color #fdffff
        border 1px solid #d2d2d2
        border-radius 13px
        margin 20px 0 18px 18px
        .topImg
          display block
          width 301px
          height 147px
          border-radius 5px
          margin 14px auto 0
        .tit-one
          display flex
          justify-content center
          margin-top 10px
          color #ff6664
          align-items center
          .tit-l
            font-size 38px
            font-weight 700
          .tit-m
            font-size 22px
            margin-left 4px
            margin-right 12px
            margin-top 10px
            font-weight 700
          .tit-r
            font-size 22px
            margin-top 10px
            font-weight 700
        .tit-two
          margin-top 4px
          text-align center
          font-size 26px
          color #525252
          font-weight 700
        .tit-three
          margin-top 4px
          text-align center
          font-size 24px
          color #999
          font-weight 700

.test
  font-size 0
</style>
