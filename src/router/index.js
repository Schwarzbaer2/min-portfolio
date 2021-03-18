import { createRouter, createWebHistory } from 'vue-router'
import TheMain from '../components/TheMain.vue'
import Portfolio from '../components/Portfolio.vue'
import PortfolioDetails from '../components/PortfolioDetails.vue'
import Contact from '../components/Contact.vue'

const routes = [
    {
      path: '/',
      name: 'TheMain',
      component: TheMain
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/123',
      name: 'PortfolioDetails',
      component: PortfolioDetails
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