import {provideRouter, RouterConfig} from '@angular/router'

import { categoriesRoutes } from './categories_component/categories.routes'

const routes: RouterConfig = [
  ...categoriesRoutes
]

export const appRouterProvider = [
  provideRouter(routes)
]