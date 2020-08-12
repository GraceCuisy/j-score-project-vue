<template>
  <div class="benefitWrap">
    <!-- 权益列表 -->
    <div class="benefitList">
      <div class="benefitItem">
        <img class="leftImg" src="../../common/images/video/ai2_03.png" alt="">
        <div class="item-r">
          <div class="item-r-t">爱奇艺视频黄金会员月卡</div>
          <div class="item-r-m">
            <span>充值号码:</span>
            <span class="number">136****2586</span>
          </div>
          <div class="item-r-b">
            <span>兑换日期:</span>
            <span class="date">2020-7-13</span>
            <span class="time">13:33</span>
          </div>
        </div>
      </div>
      <div class="benefitItem">
        <img class="leftImg" src="../../common/images/video/ai2_03.png" alt="">
        <div class="item-r">
          <div class="item-r-t">爱奇艺视频黄金会员月卡</div>
          <div class="item-r-m">
            <span>充值号码:</span>
            <span class="number">136****2586</span>
          </div>
          <div class="item-r-b">
            <span>兑换日期:</span>
            <span class="date">2020-7-13</span>
            <span class="time">13:33</span>
          </div>
        </div>
      </div>
      <div class="benefitItem">
        <img class="leftImg" src="../../common/images/video/ai2_03.png" alt="">
        <div class="item-r">
          <div class="item-r-t">爱奇艺视频黄金会员月卡</div>
          <div class="item-r-m">
            <span>充值号码:</span>
            <span class="number">136****2586</span>
          </div>
          <div class="item-r-b">
            <span>兑换日期:</span>
            <span class="date">2020-7-13</span>
            <span class="time">13:33</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 返回按钮 -->
    <backBtn></backBtn>
  </div>
</template>

<script>
import backBtn from '../../components/backBtn/backBtn'
export default {
  name: 'myBenefit',
  components:{
    backBtn,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .benefitWrap
    position relative
    width 100%
    height 100%
    background-color #f4f4f4
    overflow hidden
    .benefitList
      width 710px
      margin 82px auto 0
      .benefitItem
        display flex
        align-items center
        width 100%
        height 182px
        background-color #fff
        border-radius 20px
        border 1px solid #ddd
        margin-bottom 10px
        .leftImg
          width 120px
          height 120px
          border-radius 50%
          margin-left 18px
          margin-right 11px
        .item-r
          .item-r-t
            font-size 30px
            color #333
            font-weight 700
          .item-r-m,.item-r-b
            font-size 24px
            color #999
            .number,.date,.time
              margin-left 18px


.test
  font-size 0
</style>
