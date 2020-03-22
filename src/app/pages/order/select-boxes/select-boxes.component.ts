import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './select-boxes.component.html',
  styleUrls: ['./select-boxes.component.scss']
})
export class SelectBoxesComponent implements OnInit {

  private adultBoxAmount: number[] = [0,0,0]
  private childrenBoxAmount: number[] = [0,0,0]

  private boxes: any = [
    { name: "Dolce Vita", description: "Pasta und Nudeln für Italienisch angehauchtes Essen." },
    { name: "Hong Kong", description: "Mit leckerem Asiatischen Essen und frischem Gemüse." },
    { name: "Vegi Box", description: "Ohne Fleisch und trotzdem Lecker." }
  ]

  constructor() { }

  ngOnInit() {}

  private increaseAdultBoxAmount(index: number) {
    var newAmount: number = this.adultBoxAmount[index]+1;
    this.adultBoxAmount[index] = newAmount;
  }

  private decreaseAdultBoxAmount(index: number) {
    var newAmount: number = this.adultBoxAmount[index]-1;
    if (newAmount >= 0) {
      this.adultBoxAmount[index] = newAmount;
    }
  }

  private increaseChildrenBoxAmount(index: number) {
    var newAmount: number = this.childrenBoxAmount[index]+1;
    this.childrenBoxAmount[index] = newAmount;
  }

  private decreaseChildrenBoxAmount(index: number) {
    var newAmount: number = this.childrenBoxAmount[index]-1;
    if (newAmount >= 0) {
      this.childrenBoxAmount[index] = newAmount;
    }
  }

}
