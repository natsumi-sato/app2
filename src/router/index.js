import Vue from 'vue'
import Router from 'vue-router'
import Edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Edit',
      component: Edit
    }
  ]
})
