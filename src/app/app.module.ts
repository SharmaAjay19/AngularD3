import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {GraphComponent} from './visuals/graph/graph.component';
import {LinkVisualComponent} from './visuals/shared/link-visual.component';
import {NodeVisualComponent} from './visuals/shared/node-visual.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    LinkVisualComponent,
    NodeVisualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
