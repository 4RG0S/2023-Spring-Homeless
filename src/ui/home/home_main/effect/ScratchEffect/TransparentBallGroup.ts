import TransparentBall from "./TransparentBall";

export default class TransparentBallGroup {
    private ctx: CanvasRenderingContext2D;

    private balls: Array<TransparentBall>;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.balls = [];
    }

    push(x: number, y: number) {
        const newBall = new TransparentBall(x, y);
        this.balls.push(newBall);
    }

    draw() {
        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].update();
            if (this.balls[i].transparency <= 0) {
                this.balls.splice(i, 1);
                i--;
                continue;
            }
            this.ctx.globalCompositeOperation = 'destination-out';
            this.ctx.beginPath();
            this.ctx.fillStyle = `rgba(255, 255, 255, ${this.balls[i].transparency})`;
            this.ctx.shadowBlur = 0;
            this.ctx.arc(this.balls[i].x, this.balls[i].y, this.balls[i].radius, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.globalCompositeOperation = 'source-over';
        }
    }
    
}
