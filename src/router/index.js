import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import BalanceView from '../views/BalanceView.vue';
import DepositView from '../views/DepositView.vue';
import WithdrawView from '../views/WithdrawView.vue';
import HistoryView from '../views/HistoryView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/balance',
    name: 'Balance',
    component: BalanceView
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: DepositView
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: WithdrawView
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
