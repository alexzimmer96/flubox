import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './create-household.component.html',
  styleUrls: ['./create-household.component.scss']
})
export class CreateHouseholdComponent implements OnInit {

  private bewohner: number = 2;
  private form = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required)
 });

  constructor() {}

  ngOnInit() {
  }

  private bewohnerArray(): any[] {
    return Array(this.bewohner);
  }

  private createHousehold() {
    console.log(this.form)
  }

}
