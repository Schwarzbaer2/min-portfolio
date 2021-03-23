import { createRouter, createWebHistory } from 'vue-router'
import TheMain from '../components/TheMain.vue'
import ThePortfolio from '../components/ThePortfolio.vue'
import PortfolioDetails from '../components/PortfolioDetails.vue'
import TheContact from '../components/TheContact.vue'

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
      path: '/portfolio/:id',
      name: 'PortfolioDetails',
      component: PortfolioDetails,
      props:true
    },
    {
      path: '/contact',
      name: 'Contact',
      component: TheContact
    }
  ]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router