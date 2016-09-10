import { Component, ViewEncapsulation  } from '@angular/core'
import { AppStore } from './app.store'

@Component({
 	selector: 'sd-app',
  // styleUrls: ['../assets/styles/app-midnight-blue.scss'],
  styleUrls: ['../assets/theme/app-blue.scss'],
 	templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor(public appStore: AppStore) {
    console.log('welcome to im-admin-seed')
  }
}
