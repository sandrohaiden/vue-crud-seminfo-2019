import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/disciplinas',
      name: 'disciplinas',
      component: () => import('./views/Disciplinas.vue')
    },
    {
      path: '/professores',
      name: 'professores',
      component: () => import('./views/Professores.vue')
    }
  ]
})
