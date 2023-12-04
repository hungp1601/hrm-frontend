
import { resolve } from 'path'
import { ROUTE_NAMES } from './route.name'

const loadPage = (path) => {
  return './src/pages' + path
}


export const Routes = [
  {
    path: '/',
    name: ROUTE_NAMES.Index,
    component: loadPage('/index.vue'),
  },

  {
    path: '/login',
    name: ROUTE_NAMES.Login,
    component: loadPage('/auth/login.vue'),
  },

  // {
  //   name: RoutesNames.Deal,
  //   path: '/auth',
  //   component: loadPage('auth/index.vue'),
  // }
]