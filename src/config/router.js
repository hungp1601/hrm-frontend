
import { resolve } from 'path'
import { RouteNames } from './route.name'

const loadPage = (path) => {
  console.log(123, resolve('../pages', path))
  return './src/pages' + path
}


export const Routes = [
  {
    path: '/',
    name: RouteNames.Index,
    component: loadPage('/auth/login.vue'),
  },

  // {
  //   name: RoutesNames.Deal,
  //   path: '/auth',
  //   component: loadPage('auth/index.vue'),
  // }
]