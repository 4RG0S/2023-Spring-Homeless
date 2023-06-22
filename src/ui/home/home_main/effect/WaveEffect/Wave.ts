import { Point } from "./Point";

export class Wave {
    private index: number;
    private totalPoints: number;
    private color: string;
    private points: Array<Point>;

    private stageWidth: number;
    private stageHeight: number;
    private centerY: number;

    private pointGap: number;

    constructor(index: number, totalPoints: number, color: string, stageWidth: number, stageHeight: number) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];

        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerY = this.stageHeight;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);
    }

    resize(stageWidth: number, stageHeight: number) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerY = this.stageHeight / 1.3;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        this.init();
    }

    init() {
        this.points = [];

        for (let i = 0; i < this.totalPoints; i++) {
            const point = new Point(this.index + i, this.pointGap * i, this.centerY);
            this.points[i] = point;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for (let i = 1; i < this.totalPoints; i++) {
            if (i < this.totalPoints - 1) {
                this.points[i].update();
            }

            const cx = (prevX + this.points[i].x) / 2
            const cy = (prevY + this.points[i].y) / 2

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);
            // ctx.lineTo(this.points[i].x, this.points[i].y);

            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }

        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}
