import { createRouter, createWebHistory } from 'vue-router'
import TheMain from '../coponents/TheMain.vue'

const routes = [
    {
      path: '/',
      name: 'EventList',
      component: EventList
    }
  ]




const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router