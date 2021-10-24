import { Component, OnInit } from '@angular/core';
import { Preke } from 'src/app/models/Preke';

@Component({
  selector: 'app-parduotuve',
  templateUrl: './parduotuve.component.html',
  styleUrls: ['./parduotuve.component.scss']
})
export class ParduotuveComponent implements OnInit {
  public prekes: Preke[] = [];

  constructor() {
    this.prekes.push(new Preke('taburete', 15));
    this.prekes.push(new Preke('keptuve', 10));
    this.prekes.push(new Preke('desra', 20));
  }



  ngOnInit(): void {
  }

}
