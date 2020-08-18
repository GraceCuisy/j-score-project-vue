<template>
  <div class="detailWrap">
    <!-- 弹窗 -->
    <messageDialog :isShowDialog.sync="isShowDialog" :isPhoneErr="isPhoneErr" v-if="isShowDialog">
      <!-- 手机号错误提示结构 -->
      <span class="msgContent" v-if="isPhoneErr">请输入正确的手机号!</span>
      <!-- 积分兑换的结构 -->
      <div class="exchangeContent" v-else>
        <div>您将使用<span class="lightNum">7340</span>个积分</div>
        <div>兑换<span class="lightNum">10</span>元{{correctText}}</div>
        <div>兑换后积分将自动扣除</div>
      </div>
    </messageDialog>
    <!-- 返回按钮 -->
    <backBtn></backBtn>
    <!-- 头部 -->
    <div class="titleWrap">
      <img src="../../common/images/weixin/li.png" alt="">
      <div class="tit-r">
        <div class="tit-r-t">10元微信立减金</div>
        <div class="tit-r-b">(今日剩余1000份)</div>
      </div>
    </div>
    <!-- 微信立减金中间操作 -->
    <div class="weixinMiddle" v-if="type==='weixin'">
      <div class="wei-tit">
        <span class="wei-tit-l">20</span>
        <span class="wei-tit-r">积分</span>
      </div>
      <div class="line"></div>
      <div class="wei-bottom">
        <div class="wei-bottom-t">选择立减金类型</div>
        <div class="wei-bottom-b">
          <div class="selectItem" @click="changeCardType('saving')" >
            <i class="radioBtn" :class="{activeClass:selectedCardType==='saving'}"></i>
            <span>仅限工行储蓄卡</span>
          </div>
          <div class="selectItem" @click="changeCardType('debit')">
            <i class="radioBtn" :class="{activeClass:selectedCardType==='debit'}"></i>
            <span>仅限工行信用卡</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 手机话费和视频会员操作 -->
    <div class="phoneMiddle" v-else>
      <div class="phone-tit">
        <span class="phone-tit-l">20</span>
        <span class="phone-tit-r">积分</span>
      </div>
      <van-cell-group class="inputWrap">
        <van-field class="phoneNum" v-model="phoneNum" type="tel" placeholder="请输入充值手机号码" />
      </van-cell-group>
    </div>
    <!-- 兑换规则 -->
    <div class="ruleWrap">
      <div class="ruleTit">兑换规则</div>
        <p>用户在华为商城购买华为或荣耀品牌实物商品可获得实际支付金额数值的10%的积分，具体规则如下：<br>
          1. 购物端口：用户须在华为商城APP、电脑版、触屏版等端口购物才可获得积分，在华为商城今日头条小程序、百度小程序购物无法获得积分。如用户通过华为商城微信小程序购物，使用华为帐号登录进行购买才可获得积分，使用微信帐号购物无法获得积分。<br>
          2. 积分商品：用户须购买华为或荣耀品牌实物商品才可获得积分，购买虚拟商品、企业购商品、第三方商家商品等无法获得积分。<br>
        </p>
    </div>
    <!-- 兑换按钮 -->
    <div class="btnWrap">
      <div class="exchangeBtn" @click="toExchange">
        <img src="../../common/images/phone/an_10.png" alt="">
        <span>立即兑换</span>
      </div>
    </div>
  </div>
</template>

<script>
import messageDialog from "../../components/messageDialog/messageDialog"
import backBtn from '../../components/backBtn/backBtn'
export default {
  name: 'exchangeDetail',
  props:['type'],
  data() {
    return {
      phoneNum:'',
      // 手机号校验规则
      phoneNumRule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
      isPhoneErr:false, //判断消息弹窗显示的文本是手机号错误/兑换详情信息
      isShowDialog:false,// 是否显示消息弹窗
      selectedCardType:'saving' //选中的银行卡类型 储蓄卡 saving  信用卡 debit
    }
  },
  components:{
    backBtn,
    messageDialog,
  },
  mounted() {
    console.log(this.type);
    if(this.type==="weixin"){
      this.correctText="微信立减金"
    }else if(this.type==="phone"){
      this.correctText="话费充值"
    }else{
      // 点击每一项跳转到兑换详情页时需要把具体是什么会员月卡传过来, 爱奇艺/腾讯/优酷/芒果
      this.correctText="视频会员月卡"
    }
  },
  methods: {
    // 点击立即兑换的回调函数
    toExchange(){
      if(!this.phoneNumRule.test(this.phoneNum) && this.type !== "weixin"){
        // 不是合法手机号时弹窗提示
        this.isShowDialog=true
        this.isPhoneErr=true
      }else{
        // 手机号码合法    点击确定调用接口进行兑换, 得到结果显示兑换成功或失败的弹窗
        this.isShowDialog=true
        this.isPhoneErr=false
      }
    },
    changeCardType(cardType){
      this.selectedCardType=cardType;
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detailWrap
    position relative
    width 100%
    height 100%
    background-color #f4f4f4
    overflow hidden
    .msgContent
      font-size 28px
      color #666
      font-weight bold
    .exchangeContent
      font-size 28px
      color #666
      font-weight bold
      .lightNum
        color #FF7753
    .titleWrap
      display flex
      align-items center
      width 710px
      height 201px
      background-color #fff
      border-radius 16px
      margin 83px auto 0
      img 
        width 160px
        height 160px
        margin-left 22px
        margin-right 30px
      .tit-r
        .tit-r-t
          font-size 32px
          font-weight 700
          line-height 46px
          color #333
        .tit-r-b
          font-size 24px
          color #666
    .weixinMiddle
      width 710px
      background-color #fff
      border-radius 16px
      margin 16px auto 0
      padding 30px 20px 24px
      .wei-tit
        margin-bottom 28px
        .wei-tit-l
          font-size 38px
          font-weight bold
          color #ff6e7f
        .wei-tit-r
          font-size 24px
          font-weight bold
          color #ff6e7f
      .line
        width 100%
        height 1px
        background-color #ddd
      .wei-bottom
        .wei-bottom-t
          width 100%
          height 75px
          font-size 28px
          font-weight bold
          color #333
          text-align center
          line-height 75px
        .wei-bottom-b
          width 100%
          height 89px
          display flex
          justify-content space-around
          .selectItem
            display flex
            align-items center
            justify-content center
            width 279px
            height 89px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 13px
            .radioBtn
              display block
              width 30px
              height 30px
              margin-right 13px
              background-image url('../../common/images/weixin/no-select.png')
              background-size contain
              background-repeat no-repeat  
              &.activeClass
                background-image url('../../common/images/weixin/selected.png')
            span 
              font-size 26px
              font-weight 700
              color #666
    .phoneMiddle
      width 710px
      background-color #fff
      border-radius 16px
      margin 16px auto 0
      padding 30px 20px 24px
      .phone-tit
        margin-bottom 28px
        .phone-tit-l
          font-size 38px
          font-weight bold
          color #ff6e7f
        .phone-tit-r
          font-size 24px
          font-weight bold
          color #ff6e7f
      .inputWrap
        display flex
        align-items center
        width 679px
        height 97px
        background-color #f3f3f3
        border: 1px solid #ddd
        border-radius 16px
        .phoneNum
          width 100%
          border none
          outline none
          background-color #f3f3f3
    .ruleWrap
      width 710px
      background-color #fff
      padding 34px 25px 47px 25px
      margin 16px auto 0
      border-radius 16px
      .ruleTit
        font-size 28px
        color #333
        font-weight bold
        margin-bottom 5px
      p
        font-size 22px
        color #666
        line-height 40px
    .btnWrap
      position fixed
      display flex
      justify-content center
      align-items center
      left 0
      bottom 0
      width 750px
      height 138px
      background-color #fff
      .exchangeBtn
        position relative
        width 654px
        height 86px
        span 
          position absolute
          left 50%
          margin-left -59px
          top 50%
          margin-top -20px
          font-size 30px
          color #fff
          font-weight 700

.test
  font-size 0
</style>
