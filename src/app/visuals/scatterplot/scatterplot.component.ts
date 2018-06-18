import {Component, Input} from '@angular/core';
import {ScatterPoint } from '../../d3';

@Component({
    selector: 'scatterplot',
    template: `
    <svg #svg [attr.width]="width" [attr.height]="height">
    <line x1="0" y1="500" x2="500" y2="500" style="stroke:rgb(255,0,0);stroke-width:2" />
    <line x1="0" y1="500" x2="0" y2="0" style="stroke:rgb(0,0,255);stroke-width:2" />
    <text class="label"
        x = "0"
        y = "580"
        fill = "red"
    >{{xlabel}}</text>
    </svg>
    `,
    styleUrls: ['./scatterplot.component.css']
})

export class ScatterPlot {
    @Input('points') points;
    @Input('xlabel') xlabel;
    @Input('ylabel') ylabel;
    @Input('color') color;

    public width: number = 0;
    public height: number = 0;
    constructor() {}

    ngOnInit() {
        this._options = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.width = 500;
        this.height = 500;
    }

    ngAfterViewInit() {
    }

    public _options: {width, height} = {width: window.innerWidth, height: window.innerHeight};
}