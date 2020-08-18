import index from 'pages/index/index'
import exchangeRule from 'pages/exchangeRule/exchangeRule'
import myBenefit from 'pages/myBenefit/myBenefit'
import exchangeList from 'pages/index/exchangeList/exchangeList'
import exchangeDetail from 'pages/exchangeDetail/exchangeDetail'
import scoreQuery from 'pages/scoreQuery/scoreQuery'
import eGuide from 'pages/eGuide/eGuide'

export default [
  {
    path: '/index',
    component:index,
    children:[
      {
        path:'exchangeList/:type',
        component:exchangeList,
        props:true,
      },
      {
        path:'',
        redirect:'exchangeList/weixin'
      }
    ],
    meta:{
      isHideFooter:false, //标识footer是否隐藏
      title:"积分大派兑"
    }
  },
  {
    path: '/scoreQuery',
    component:scoreQuery,
    meta:{
      isHideFooter:false, //标识footer是否隐藏
      title:"积分查询"
    }
  },
  {
    path: '/exchangeRule',
    component:exchangeRule,
    meta:{
      isHideFooter:false, //标识footer是否隐藏
      title:"兑换规则"
    }
  },
  {
    path: '/myBenefit',
    component:myBenefit,
    meta:{
      isHideFooter:false, //标识footer是否隐藏
      title:"我的权益"
    }
  },
  {
    path: '/exchangeDetail/:type',
    component:exchangeDetail,
    props:true,
    meta:{
      isHideFooter:true, //标识footer是否隐藏
      title:"兑换详情"
    }
  },
  {
    path: '/eGuide',
    component:eGuide,
    props:true,
    meta:{
      isHideFooter:true, //标识footer是否隐藏
      title:"如何开通e支付"
    }
  },
  {
    path:'',
    redirect:'/index'
  },
]