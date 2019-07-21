import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/b/:bid', component: Board, children: [
    { path: 'c/:cid', component: Card }
  ]},
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router