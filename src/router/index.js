import Vue from 'vue'
import Router from 'vue-router'
import Edit from '@/components/edit'
import confirmScreen from '@/components/confirmScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/confirm',
      name: 'confirmScreen',
      component: confirmScreen
    }
  ]
})
