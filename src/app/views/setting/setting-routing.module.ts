import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';

import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Setting'
    },
    children: [
      {
        path: '',
        redirectTo: 'users'
      },

      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },

      {
        path: 'services',
        component: ServicesComponent,
        data: {
          title: 'Services'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule {}
