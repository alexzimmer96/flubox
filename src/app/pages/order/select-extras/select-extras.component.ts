import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './select-extras.component.html',
  styleUrls: ['./select-extras.component.scss']
})
export class SelectExtrasComponent implements OnInit {

  private extras: any = [
    { name: "Aluminiumfolie" },
    { name: "Toilettenpapier" },
    { name: "Küchenrolle" },
    { name: "Taschentücher" },
    { name: "Waschmittel" },
    { name: "Teelichter" },
    { name: "Streichhölzer" },
  ]

  constructor() { }

  ngOnInit() { }

}
