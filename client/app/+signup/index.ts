import { Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SignupComponent } from './signup.component'

export const ROUTER = [
  { path: '', component: SignupComponent},
]

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    RouterModule.forChild(ROUTER)
  ],
})

export default class SignModule {
  static routes = ROUTER
}
