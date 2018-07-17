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
    @Input('height') public g_height: number;
    @Input('width') public g_width: number;
    @Input('origin-x') public origin_x: number;
    @Input('origin-y') public origin_y: number;

    public x_markers_array = [];
    constructor() {}

    ngOnInit() {
        if (!this.g_width)
        this.g_width = 500;
        if (!this.g_height)
        this.g_height = 500;
        if (!this.origin_x)
        this.origin_x = 30;
        if (!this.origin_y)
        this.origin_y = 500;
        for(var i=0; i<5; i++){
            this.x_markers_array.push(this.g_width*i/5);
        }
        var y_max = Math.max(...this.points.map(x => x.y));
        this.points.forEach(x => {x.y = x.y*this.g_height/y_max;});
    }

    ngAfterViewInit() {
    }
}