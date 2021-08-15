import { Component } from '@angular/core';
import { MatListOption } from '@angular/material/list';

/**
 * @title List with selection
 */
@Component({
  selector: 'list-selection-example',
  styleUrls: ['list-selection-example.css'],
  templateUrl: 'list-selection-example.html'
})
export class ListSelectionExample {
  public var: any;
  test: Array<any> = [];
  selectedPizzas: string[];
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers'
  ];

  onGroupsChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    this.var = options.map(o => o.value);
    this.test.push( this.var );

    //console.log(this.fruits)
  }
  onGroupsChange2(selectedPizzas: string[]) {
    // map these MatListOptions to their values
    this.test.push(selectedPizzas);
    console.log(typeof this.test, this.test);
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
