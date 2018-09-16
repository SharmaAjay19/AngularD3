import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularDraggableModule} from 'angular2-draggable';
import { AppComponent } from './app.component';

import {ScatterPlot} from './visuals/scatterplot/scatterplot.component';

@NgModule({
  declarations: [
    AppComponent,
    ScatterPlot
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
