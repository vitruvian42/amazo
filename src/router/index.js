import Vue from 'vue'
import Router from 'vue-router'
import Upload from '@/components/Upload'
import View from '@/components/View'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/get-all',
      name: 'View',
      component: View
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ],
  mode: 'history'
})
