import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  templateUrl: './select-residents.component.html',
  styleUrls: ['./select-residents.component.scss']
})
export class SelectResidentsComponent implements OnInit {

  constructor(menuCtrl: MenuController) { }

  ngOnInit() {
  }

}
