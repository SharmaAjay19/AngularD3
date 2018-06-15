export class Node implements d3.SimulationNodeDatum {
    index: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    fx: number;
    fy: number;
    id: string;
    linkCount: number = 0;

    constructor(id) {
        this.id = id;
    }
}