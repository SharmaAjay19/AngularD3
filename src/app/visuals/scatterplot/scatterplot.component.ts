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
    public x_axis_length = 500;
    public y_axis_length = 500;
    public origin_x = 30;
    public origin_y = 500;
    public x_markers_array = [];
    constructor() {}

    ngOnInit() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        for(var i=0; i<5; i++){
            this.x_markers_array.push(this.x_axis_length*i/5);
        }
        var y_max = Math.max(...this.points.map(x => x.y));
        this.points.forEach(x => {x.y = x.y*this.y_axis_length/y_max;});
    }

    ngAfterViewInit() {
    }
}