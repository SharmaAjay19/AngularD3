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
    var colors = ["red", "green", "blue", "magenta", "black"];
    this.scatterPointList = new Array<ScatterPoint>();
    for(var i=0; i<500; i++){
      this.scatterPointList.push(new ScatterPoint(i, Math.floor(Math.random()*1000), colors[Math.floor(i/100)]));
    }
  }
}