import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service/order-service.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './select-boxes.component.html',
  styleUrls: ['./select-boxes.component.scss']
})
export class SelectBoxesComponent implements OnInit {

  private adultBoxAmount: number[] = [0, 0, 0]
  private childrenBoxAmount: number[] = [0, 0, 0]

  private boxes: any = [
    { name: "Dolce Vita", description: "Pasta und Nudeln für Italienisch angehauchtes Essen." },
    { name: "Hong Kong", description: "Mit leckerem Asiatischen Essen und frischem Gemüse." },
    { name: "Vegi Box", description: "Ohne Fleisch und trotzdem Lecker." }
  ]

  constructor(private orderSvc: OrderServiceService, private router: Router) { }

  ngOnInit() { }

  private increaseAdultBoxAmount(index: number) {
    var newAmount: number = this.adultBoxAmount[index] + 1;
    this.adultBoxAmount[index] = newAmount;
  }

  private decreaseAdultBoxAmount(index: number) {
    var newAmount: number = this.adultBoxAmount[index] - 1;
    if (newAmount >= 0) {
      this.adultBoxAmount[index] = newAmount;
    }
  }

  private increaseChildrenBoxAmount(index: number) {
    var newAmount: number = this.childrenBoxAmount[index] + 1;
    this.childrenBoxAmount[index] = newAmount;
  }

  private decreaseChildrenBoxAmount(index: number) {
    var newAmount: number = this.childrenBoxAmount[index] - 1;
    if (newAmount >= 0) {
      this.childrenBoxAmount[index] = newAmount;
    }
  }

  private submitBoxSelection() {
    let adultBoxes: any = {};
    let childrenBoxes: any = {};
    for (let i = 0; i < this.adultBoxAmount.length; i++) {
      if (this.adultBoxAmount[i] > 0) {
        adultBoxes[this.boxes[i].name] = this.adultBoxAmount[i]
      }
      if (this.childrenBoxAmount[i] > 0) {
        childrenBoxes[this.boxes[i].name] = this.childrenBoxAmount[i]
      }
    }
    this.orderSvc.passBoxes(adultBoxes, childrenBoxes);
    this.router.navigate(["order/select-extras"])
  }

}
