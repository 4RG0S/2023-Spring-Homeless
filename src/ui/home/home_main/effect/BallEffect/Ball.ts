export class Ball {
    public x: number;
    public y: number;
    public radius: number;
    public color: string;
    private speed: number;
    private vectorX: number;
    private vectorY: number;
    private radiusDecreasingSpeed: number;

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.vectorX = (Math.random() * 2 - 1) * this.speed;
        this.vectorY = (Math.random() * 2 - 1) * this.speed;
        this.radius = Math.random() * 100;
        this.radiusDecreasingSpeed = 0.3;
        this.color = color;
    }

    update() {
        if (this.radius > 0) this.radius -= this.radiusDecreasingSpeed;
        this.x += this.vectorX;
        this.y += this.vectorY;
    }
}
