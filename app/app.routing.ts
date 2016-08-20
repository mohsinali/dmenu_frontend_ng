import { Routes, RouterModule } from '@angular/router'

import { CrisisListComponent }  from './crisis-list.component'

const appRoutes: Routes = [
  { path: '', component: CrisisListComponent },
  { path: 'crisis-center', component: CrisisListComponent },
  // { path: '**', component: 'PageNotFoundComponent' }
]


export const appRoutingProviders: any[] = [

]

export const routing = RouterModule.forRoot(appRoutes)
