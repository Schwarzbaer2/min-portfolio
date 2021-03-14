import { createRouter, createWebHistory } from 'vue-router'
import TheMain from '../components/TheMain.vue'
import ThePortfolio from '../components/Portfolio.vue'

const routes = [
    {
      path: '/',
      name: 'TheMain',
      component: TheMain
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: ThePortfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router