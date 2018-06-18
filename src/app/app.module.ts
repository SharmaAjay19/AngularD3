import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {GraphComponent} from './visuals/graph/graph.component';
import {LinkVisualComponent} from './visuals/shared/link-visual.component';
import {NodeVisualComponent} from './visuals/shared/node-visual.component';
import {ZoomableDirective, DraggableDirective, D3Service} from './d3';
import {ScatterPlot} from './visuals/scatterplot/scatterplot.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    LinkVisualComponent,
    NodeVisualComponent,
    ZoomableDirective,
    DraggableDirective,
    ScatterPlot
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
