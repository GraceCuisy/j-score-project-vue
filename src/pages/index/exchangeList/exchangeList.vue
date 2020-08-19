<template>
  <div class='exchangeListWrap' ref="exchangeListWrap">
    <div class="list" ref="list">
      <div class="item" @click="toDetail">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item" @click="toDetail">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item" @click="toDetail">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
      <div class="item">
        <img  class="topImg" src="../../../common/images/weixin/weixin.png" alt="">
        <div class="tit-one">
          <span class="tit-l">20</span>
          <span class="tit-m">积分</span>
          <span class="tit-r">(10.1元)</span>
        </div>
        <div class="tit-two">10元微信立减金</div>
        <div class="tit-three" v-if="type==='weixin'">消费满10.1元可使用</div>
        <div class="peopleNum">已有1000人兑换</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'exchangeList',
  props:['type'],
  mounted() {
    this.$nextTick(()=>{
      this.scroll=new BScroll(this.$refs.exchangeListWrap,{
        scrollY:true,
        click:true
      })
    })
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
    height 720px
    overflow hidden
    webkit-overflow-scrolling: touch;
    .list
      width 100%
      display flex
      flex-wrap wrap
      .item
        position relative
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
          margin-top 4px
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
        .peopleNum
          position absolute
          left 50%
          margin-left -108px
          bottom -17px
          width 216px
          height 34px
          background-color #ededed
          border 1px solid #e5e5e5
          font-size 24px
          color #ffa200
          text-align center
          line-height 34px
          border-radius 20px
.test
  font-size 0
</style>
