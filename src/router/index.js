import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Notfound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  { path: '/jobs/:id', 
    name: 'JobDetails',
    component: JobDetails,
    props: true // without this the props cannot work on JobDetails.vue  props: ['id'],
  },
  // redirect 
  {
    path: '/all-jobs',
    redirect: 'jobs',
  },
  // catchall 404
  {
    path: '/:catchAll(.*)', // any route not defined here
    name: 'Notfound',
    component: Notfound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
