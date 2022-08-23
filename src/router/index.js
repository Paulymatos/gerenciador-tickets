import Vue from 'vue'
import Router from 'vue-router'

import LoginView from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Dashboard from '../views/Dashboard.vue'
import MyTickets from '../views/MyTickets.vue'
import Teams from '../views/Teams.vue'
import Projects from '../views/Projects.vue'
import Statistics from '../views/Statistics.vue'
import Settings from '../views/Settings.vue'
import TicketView from '../views/TicketView.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Dashboard },
    { path: '/login', component: LoginView },
  ]
})
