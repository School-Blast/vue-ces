import Vue from 'vue'
import VueRouter from 'vue-router'

import Title from '../components/Title/Titles'
import TitleName from '../components/Title/TitleName'

Vue.use(VueRouter)

const routes = [

  {
    path: '/title',
    name: 'Title',
    component: Title,
    
  },
  {
    path: '/title/titlename',
    name: 'TitleName',
    component: TitleName,
  },
  {
    path:"/",
    redirect:"/title"
  }
  
]

const router = new VueRouter({
  routes
})

export default router
