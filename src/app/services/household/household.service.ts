import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {

  constructor(private storage: Storage) { }

  public addHousehold(household: Household) {
    household.id = Date.now()
    this.storage.get('households').then((hhList: Household[]) => {
      if (hhList == null) {
        hhList = []
      }
      hhList.push(household);
      console.log(hhList);
      this.storage.set("households", hhList)
    })
  }

}
