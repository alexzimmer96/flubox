import { HouseholdService } from './../../../services/household/household.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  templateUrl: './create-household.component.html',
  styleUrls: ['./create-household.component.scss']
})
export class CreateHouseholdComponent implements OnInit {

  private residents: number = 2;
  private form = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required)
 });

  constructor(private householdService: HouseholdService) {}

  ngOnInit() {
  }

  private residentsArray(): any[] {
    return Array(this.residents);
  }

  private createHousehold() {
    console.log(this.form)
    if (this.form.valid) {
      this.householdService.addHousehold({
        id: Date.now(),
        name: this.form.value["name"],
        postalCode: this.form.value["postalCode"],
        city: this.form.value["city"],
        street: this.form.value["street"]
      })
    }
  }

}
