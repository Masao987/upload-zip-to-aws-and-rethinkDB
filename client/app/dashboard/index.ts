import { Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { DashboardComponent } from './dashboard.component'
import { HomeComponent } from './+home/home.component'
import { TableComponent } from './+tables/table.component'
import { ProfileComponent } from './+profile/profile.component'
import { TopNavComponent, SidebarComponent } from '../shared/index'


export const ROUTER = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'tables', component: TableComponent},
      { path: 'profile', component: ProfileComponent}
    ]
  },
]


@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DashboardComponent,
    TopNavComponent,
    SidebarComponent,
    HomeComponent,
    TableComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTER)
  ],
})

export default class DashboardModule {
  static routes = ROUTER
}
