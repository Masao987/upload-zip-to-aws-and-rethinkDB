import { Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LoginComponent } from './login.component'
import { LoginRoutes } from './login.routes'

export const ROUTER = [
  { path: '', component: LoginComponent, patchMatch: 'full', index: true},
]

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(ROUTER)
  ],
})

export default class LoginModule {
}
