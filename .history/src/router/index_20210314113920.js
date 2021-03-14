import { createRouter, createWebHistory } from 'vue-router'
import TheMain from '../components/TheMain.vue'
import ThePortfolio from '../components/ThePortfolio.vue'

const routes = [
    {
      path: '/',
      name: 'TheMain',
      component: TheMain
    }
  ]
  src/components/TheMain.vue



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router