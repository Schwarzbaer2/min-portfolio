import { createRouter, createWebHistory } from 'vue-router'
import TheMain from '../components/TheMain.vue'
import ThePortfolio from '../components/ThePortfolio.vue'

const routes = [
    {
      path: '/',
      name: 'TheMain',
      component: TheMain
    },
    {
      path: '/',
      name: 'ThePortfolio',
      component: ThePortfolio
    }
  ]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router