import { Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PageNotFoundComponent } from './404.component'


export const ROUTER = [
  {
    path: '',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forChild(ROUTER)
  ],
})

export default class PageNotFoundModule {
  static routes = ROUTER
}
