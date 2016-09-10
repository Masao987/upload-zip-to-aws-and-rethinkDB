import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import LoginModule from './+login'


export const ROUTES = [
	{ path: '', loadChildren: () => LoginModule },
	{ path: 'signup', loadChildren: () => System.import('./+signup') },
	{ path: 'dashboard', loadChildren: () => System.import('./dashboard')},
	{ path: '404-page', loadChildren: () => System.import('./+404')},
	{ path: '**', redirectTo: '/404-page' }
]

@NgModule({
  providers: [
  ],
  declarations: [
    // Components / Directives/ Pipes
  ],
  imports: [
    RouterModule.forChild(ROUTES),
  ],
})
export default class AppModule {
  static routes = ROUTES
}
