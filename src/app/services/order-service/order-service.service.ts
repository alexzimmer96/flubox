import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private activeOrder: Order;

  constructor() { }

  public getActiveOrder(): Order {
    if (this.activeOrder === undefined) {
      this.activeOrder = {};
    }
    return this.activeOrder;
  }

  public passResidents(adults: number, children: number, toddlers: number) {
    this.activeOrder.residentAdults = adults;
    this.activeOrder.residentChildren = children;
    this.activeOrder.residentToddlers = toddlers;
  }

  public passBoxes(adultBoxes: any, childrenBoxes: any) {
    this.activeOrder.adultBoxes = adultBoxes;
    this.activeOrder.childrenBoxes = childrenBoxes;
  }

}
