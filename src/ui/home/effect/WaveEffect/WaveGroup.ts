import { Wave } from "./Wave";

export class WaveGroup {
    private totalWaves: number;
    private totalPoints: number;
    private color: Array<string>
    private waves: Array<Wave>

    constructor(stageWidth: number, stageHeight: number) {
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = ['rgba(231, 76, 60, 0.7)', 'rgba(46, 204, 113, 0.7)', 'rgba(52, 152, 219, 0.7)'];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(i, this.totalPoints, this.color[i], stageWidth, stageHeight);
            this.waves[i] = wave;
        }
    }

    resize(stageWidth: number, stageHeight: number) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}
