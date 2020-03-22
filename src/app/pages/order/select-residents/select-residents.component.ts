import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { OrderServiceService } from 'src/app/services/order-service/order-service.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './select-residents.component.html',
  styleUrls: ['./select-residents.component.scss']
})
export class SelectResidentsComponent implements OnInit {

  private adults: number;
  private children: number;
  private toddlers: number;

  constructor(private menuCtrl: MenuController, private orderSvc: OrderServiceService, private router: Router) { }

  ngOnInit() {}

  ionViewWillEnter() {
    let order = this.orderSvc.getActiveOrder();
    this.adults = order.residentAdults || 1;
    this.children = order.residentChildren || 0;
    this.toddlers = order.residentToddlers || 0;
  }

  submitResidentSelection() {
    console.log("Adults: "+this.adults+", children: "+this.children+", toddlers: "+this.toddlers);
    this.orderSvc.passResidents(this.adults, this.children, this.toddlers);
    this.router.navigate(["order/select-boxes"])
  }

}
