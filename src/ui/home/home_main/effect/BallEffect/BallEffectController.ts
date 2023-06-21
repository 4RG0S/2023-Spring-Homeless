import { BallGroup } from "./BallGroup";

export class BallEffectController {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private stageWidth: number;
    private stageHeight: number;
    private ballGroup: BallGroup;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.stageHeight = this.canvas.height;
        this.stageWidth = this.canvas.width;

        this.ballGroup = new BallGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.canvas.addEventListener('mousemove', this.drag.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        if (this.canvas.parentElement) {
            this.stageWidth = this.canvas.parentElement?.clientWidth as number;
            this.stageHeight = this.canvas.parentElement?.clientHeight as number;
        } else {
            this.stageWidth = document.body.clientWidth;
            this.stageHeight = document.body.clientHeight;
        }
        
        const dpr: number = window.devicePixelRatio;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        // this.ctx.scale(dpr, dpr);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.ballGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }

    drag(event: MouseEvent) {
        this.ballGroup.push(event.offsetX, event.offsetY);
    }
}
