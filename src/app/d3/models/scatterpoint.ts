export class ScatterPoint {
    public x: number;
    public y: number;
    public color: string;

    public constructor(x, y, color?) {
        this.x = x;
        this.y = y;
        if (color){
            this.color = color;
        }
        else{
            this.color = "black";
        }
    }
}