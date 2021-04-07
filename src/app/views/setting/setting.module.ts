
import { SettingRoutingModule } from './setting-routing.module';
import { UsersComponent } from './users/users.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdSortableHeader } from './users/sortable.directive';
import { ServicesComponent } from './services/services.component';


@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule,
 
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

    
    
  ],
  declarations: [
    UsersComponent,
    NgbdSortableHeader,
    UsersComponent,
    ServicesComponent,
  ],
  exports: [UsersComponent],
  bootstrap: [UsersComponent]


})
export class SettingModule { }
