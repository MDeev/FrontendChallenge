import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Repo from '@/views/Repo.vue'
import About from '@/views/About.vue'
import FAQ from '@/views/FAQ.vue'
import NotFound from '@/views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:user/:query',
      component: Repo, 
      props: true
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/faq',
      component: FAQ
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
