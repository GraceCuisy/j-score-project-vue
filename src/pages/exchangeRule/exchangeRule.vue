<template>
  <div class="ruleWrap">
    <div class="contentWrap">
      <img class="titleImg" src="../../common/images/rule-title.png" alt="">
      <p class="text">
        （1）本活动仅限泉州地区手机号用户参加。<br>
        （2）在活动期间内，符合条件的目标用户，绑定手机号即可参加领取微信支付立减金活动，使用“工银e支付”支付1分钱，获得1次立减金领取机会，可选择领取“工行借记卡立减金”或“工行信用卡立减金”，随机获得1-99元不等的微信支付立减金。<br>
        （3）用户通过分享活动，还可邀请好友一起来参加活动。每成功邀请1位好友使用“工银e支付”支付1分钱，分享人还可获赠1次领取机会，领取“工行借记卡立减金”或“工行信用卡立减金”，多邀多得。多张立减金可叠加使用。<br>
        （4）用户获得“工行借记卡立减金”后，需在领取后三天内完成支付使用，逾期将视为自动放弃奖励。用户绑定使用工行借记卡进行微信支付，即可抵扣使用立减金（支付金额需≥立减金额）。<br>
        （5）用户获得“工行信用卡立减金”后，需在领取后三天内完成支付使用，逾期将视为自动放弃奖励。用户绑定使用工行信用卡进行微信支付，即可抵扣使用立减金（支付金额需≥立减金额）。<br>
        （6）对于违反活动规则、使用或涉嫌使用不正当方式套取活动权益的用户，工商银行泉州分行有权取消活动资格、追回已发放的权益。<br>
      </p>
    </div>
    <!-- 返回按钮 -->
    <backBtn></backBtn>
  </div>
</template>

<script>
import backBtn from '../../components/backBtn/backBtn'
export default {
  name: 'exchangeRule',
  components:{
    backBtn,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ruleWrap
    position relative
    display flex
    justify-content center
    width 100%
    height 100%
    background-color #ededed
    overflow hidden
    .contentWrap
      position relative
      width 710px
      height 1000px
      background-color #fff
      margin-top 120px
      border-radius 16px
      .text
        margin 56px 30px 0
        font-family MicrosoftYaHei
        font-size 24px
        line-height 41px
        letter-spacing 1px
        color #666
      .titleImg
        position absolute
        width 313px
        height 75px
        left 50%
        margin-left -157px
        top -36px
</style>
