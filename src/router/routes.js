import index from 'pages/index/index'
import exchangeRule from 'pages/exchangeRule/exchangeRule'
import myBenefit from 'pages/myBenefit/myBenefit'
import weixin from 'pages/index/weixin/weixin'
import phone from 'pages/index/phone/phone'
import video from 'pages/index/video/video'


export default [
  {
    path: '/index',
    component:index,
    children:[
      {
        path:'weixin',
        component:weixin
      },
      {
        path:'phone',
        component:phone
      },
      {
        path:'video',
        component:video
      }
    ]
  },
  {
    path: '/exchangeRule',
    component:exchangeRule
  },
  {
    path: '/myBenefit',
    component:myBenefit
  },
  {
    path:'',
    redirect:'/index'
  }
]