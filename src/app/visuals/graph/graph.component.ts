import {Component, Input} from '@angular/core';
import {ForceDirectedGraph, Node } from '../../d3';
import {D3Service} from '../../d3/d3.service';

@Component({
    selector: 'graph',
    template: `
    <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
    <g [zoomableOf]="svg">
      <g [linkVisual]="link" *ngFor="let link of links"></g>
      <g [nodeVisual]="node" *ngFor="let node of nodes"
          [draggableNode]="node" [draggableInGraph]="graph"></g>
    </g>
    </svg>
    `,
    styleUrls: ['./graph.component.css']
})

export class GraphComponent {
    @Input('nodes') nodes;
    @Input('links') links;

    graph: ForceDirectedGraph;

    constructor(private d3Service: D3Service) {}

    ngOnInit() {
        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this._options);
    }

    ngAfterViewInit() {
        this.graph.initSimulation(this._options);
    }

    public _options: {width, height} = {width: window.innerWidth, height: window.innerHeight};

    get options() {
        return this._options = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
}