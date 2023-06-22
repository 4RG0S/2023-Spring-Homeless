import { WaveGroup } from "./WaveGroup";

export class WaveEffectController {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private stageWidth: number;
    private stageHeight: number;
    private waveGroup: WaveGroup;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.stageHeight = this.canvas.height;
        this.stageWidth = this.canvas.width;

        this.waveGroup = new WaveGroup(this.stageWidth, this.stageHeight);

        window.addEventListener('resize', this.resize.bind(this), false);
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

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.waveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}
