import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { ScatterPoint } from './d3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public scatterPointList: ScatterPoint[];
  constructor() {
  }

  ngOnInit(){
    this.scatterPointList = new Array<ScatterPoint>();
    for(var i=0; i<200; i++){
      this.scatterPointList.push(new ScatterPoint(i, 2*i));
    }
  }
}