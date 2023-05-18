import { Ball } from "./Ball";

export class BallGroup {
    private ball: Array<Ball>;
    private transparent: number;
    private color: Array<string>;

    constructor() {
        this.ball = [];
        this.transparent = 0.8
        this.color = [`rgba(254, 202, 87, ${this.transparent})`, 
                      `rgba(248, 239, 186, ${this.transparent})`, 
                      `rgba(255, 71, 87, ${this.transparent})`, 
                      `rgba(46, 213, 115, ${this.transparent})`, 
                      `rgba(243, 104, 224, ${this.transparent})`, 
                      `rgba(46, 134, 222, ${this.transparent})`];
    }

    push(x: number, y: number) {
        const newBall = new Ball(x, y, this.color[Math.floor(Math.random() * this.color.length)]);
        this.ball.push(newBall);
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.ball.length; i++) {
            this.ball[i].update();
            if (this.ball[i].radius <= 0) {
                this.ball.splice(i, 1);
                i--;
                continue;
            }
            ctx.beginPath();
            ctx.fillStyle = this.ball[i].color;
            ctx.shadowBlur = 0;
            ctx.shadowColor = this.ball[i].color;
            ctx.arc(this.ball[i].x, this.ball[i].y, this.ball[i].radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    }
    
}
