import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
Vue.use(Router)
Vue.use(Meta)
const Index = resolve => {
  require.ensure([], () => {
    resolve(require('../views/Index'))
  }, 'index')
}
const Home = resolve => {
  require.ensure([], () => {
    resolve(require('../views/Home'))
  }, 'home')
}

const NotFound = resolve => {
  require.ensure([], () => {
    resolve(require('../views/NotFound'))
  }, 'notFound')
}
const Status666 = resolve => {
  require.ensure([], () => {
    resolve(require('../views/Status666'))
  }, 'status666')
}
// 相关链接菜单列表
const MenuList = resolve => {
  require.ensure([], () => {
    resolve(require('../views/MenuList'))
  }, 'menulist')
}
// 相关协议列表
const AgreementMenuList = resolve => {
  require.ensure([], () => {
    resolve(require('../views/AgreementMenuList'))
  }, 'agreementlist')
}
// 注册协议
const SignUpAgreement = resolve => {
  require.ensure([], () => {
    resolve(require('../views/agreement/signUpAgreement'))
  }, 'signupagreement')
}

// 我的账单
const MyBill = resolve => {
  require.ensure([], () => {
    resolve(require('../views/MyBill'))
  }, 'mybill')
}
// 出借详情
const LendDetails = resolve => {
  require.ensure([], () => {
    resolve(require('../views/LendDetails'))
  }, 'lenddetails')
}
// 签约成功
const SignUpSuccess = resolve => {
  require.ensure([], () => {
    resolve(require('../views/sign/SignUpSuccess'))
  }, 'signupsuccess')
}
export default new Router({
  base: process.env.VUE_APP_BASE_NAME,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/status666',
      name: 'Status666',
      component: Status666
    },
    {
      path: '/menulist',
      name: 'MenuList',
      component: MenuList
    },
    {
      path: '/agreement-menu',
      name: 'AgreementMenuList',
      component: AgreementMenuList
    },
    {
      path: '/register-agreement',
      name: 'SignUpAgreement',
      component: SignUpAgreement
    },
    {
      path: '/mybill',
      name: 'MyBill',
      component: MyBill
    },
    {
      path: '/lend-details',
      name: 'LendDetails',
      component: LendDetails
    },
    {
      path: '/sign-up-success',
      name: 'SignUpSuccess',
      component: SignUpSuccess
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
