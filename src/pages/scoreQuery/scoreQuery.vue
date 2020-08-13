<template>
  <div class="scoreWrap">
    <!-- 返回按钮 -->
    <backBtn></backBtn>
    <!-- 积分兑换说明 -->
    <div class="stateWrap">
      <img class="stateTit" src="../../common/images/rule-title2.png" alt="">
      <p>1、即日起至2020年12月31日，持工行卡用户可通过积分或直接购买的形式兑换中国工商银行（借记卡/信用卡）微信支付立减金或三网通话费进行充值。<br/>
         2、活动期间，积分兑换比例将按照734积分=1元计算兑换金额，具体设置的积分兑换值以实际活动页面展示为准。<br/>
         3、兑换商品数量有限，先到先得。<br/>
         4、一经兑换不支持退还。<br/>
      </p>
    </div>
    <!-- 如何查询积分 -->
    <div class="queryWrap">
      <img class="queryTit" src="../../common/images/rule-title1.jpg" alt="">
      <p>下载注册并登录“中国工商银行”APP，进入首页后，点击
         底部菜单栏“惠精选”按钮，在“热门活动”上方可以查看到
         个人拥有的综合积分详情。
         <span class="clickDetail">点此查看积分详情</span>
      </p>
    </div>
  </div>
</template>

<script>
import backBtn from '../../components/backBtn/backBtn'
export default {
  name: 'scoreQuery',
  components:{
    backBtn
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .scoreWrap
    position relative
    width 100%
    height 100%
    background-color #fefde2
    overflow hidden
    .stateWrap
      position relative
      width 670px
      height 404px
      background-color #ffffff
      border-radius 13px
      margin 89px auto 0
      padding 56px 27px 0 27px
      font-size 24px
      color #666
      letter-spacing 1px
      line-height 41px
      .stateTit
        position absolute
        width 316px
        height 72px
        left 50%
        top -36px
        margin-left -156px
    .queryWrap
      position relative
      width 670px
      background-color #ffffff
      border-radius 13px
      margin 70px auto 0
      padding 62px 22px 0 22px
      font-size 24px
      color #666
      line-height 41px
      .queryTit
        position absolute
        width 316px
        height 72px
        left 50%
        top -36px
        margin-left -156px
      .clickDetail
        color #ff7d5b
        font-weight 700
</style>
