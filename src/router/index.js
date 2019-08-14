import Vue from 'vue'
import Router from 'vue-router'
import emplist from '@/components/emplist'
import empadd from '@/components/empadd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'emplist',
      component: emplist
    },
    {
      path: '/empadd',
      name: 'empadd',
      component: empadd
    }
  ]
})
