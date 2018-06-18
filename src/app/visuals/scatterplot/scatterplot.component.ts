import {Component, Input} from '@angular/core';
import {ScatterPoint } from '../../d3';

@Component({
    selector: 'scatterplot',
    templateUrl: './scatterplot.component.html',
    styleUrls: ['./scatterplot.component.css']
})

export class ScatterPlot {
    @Input('points') public points: ScatterPoint[];
    @Input('xlabel') public xlabel: string;
    @Input('ylabel') public ylabel: string;
    @Input('color') public color: string;

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
        console.log(this.xlabel);
        console.log(this.points);
    }

    ngAfterViewInit() {
    }

    public _options: {width, height} = {width: window.innerWidth, height: window.innerHeight};
}