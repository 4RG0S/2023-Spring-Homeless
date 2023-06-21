export default class TransparentBall {
    public x: number;
    public y: number;
    public radius: number;
    public transparency: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = 70;
        this.transparency = 1;
    }

    update() {
        if (this.transparency > 0) this.transparency -= 0.01;
    }
}
