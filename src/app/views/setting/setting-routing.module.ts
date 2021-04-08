import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { EdituserComponent } from './users/component/editor/edituser/edituser.component';

import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'list',
    component: UsersComponent,
    data: {
      title: 'Users'
    }
  },
  {
    path: 'editor',
    component: EdituserComponent,
    data: {
      title: 'User Editor'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule {}
