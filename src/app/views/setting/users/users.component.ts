


import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, Input} from '@angular/core';
import {Observable} from 'rxjs';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { CountryService } from './country.service';
import { Country } from './country';
import { FormGroup } from '@angular/forms';






@Component(
  {selector: 'app-users', 
  templateUrl: './users.component.html',
   providers: [CountryService, DecimalPipe]})


export class UsersComponent {

  userForm: FormGroup;
  
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService ) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }
  
  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


}
















