import { createRouter} from 'vue-router'
import TheMain from '../components/TheMain.vue'

const routes = [
    {
      path: '/',
      name: 'TheMain',
      component: TheMain
    }
  ]




const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router