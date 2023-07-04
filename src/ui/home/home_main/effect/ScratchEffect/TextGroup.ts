import Text from "./Text";
import { ColorConstant } from "../../../../../GlobalConstant";

export default class TextGroup {
    private ctx: CanvasRenderingContext2D;
    private stageWidth: number;
    private stageHeight: number

    private texts: Array<Text>;

    constructor(ctx: CanvasRenderingContext2D, stageWidth: number, stageHeight: number) {
        this.ctx = ctx;
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.texts = [
            new Text("Cryptography", 1, "normal", "100", "Arial"),
            new Text("Cybersecurity", 1, "italic", "400", "Times New Roman"),
            new Text("Reversing", 0.7, "normal", "200", "Tahoma"),
            new Text("Decompiling", 1, "italic", "200", "Georgia"),
            new Text("Static Analysis", 1, "normal", "bold", "Courier New"),
            new Text("Disassembler", 1, "normal", "200", "Verdana"),
            new Text("Assembly", 0.7, "italic", "300", "Trebuchet MS"),
            new Text("System hacking", 1, "normal", "300", "Times New Roman"),
        ];
    }

    resize(stageWidth: number, stageHeight: number) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw() {
        let lastHeight = 0;

        this.texts.forEach(text => {
            this.ctx.font = `${text.fontStyle} ${text.fontWeight} ${1}px ${text.fontFamily}`;
            let textMatrics = this.ctx.measureText(text.content);
            
            const textWidth = textMatrics.width;
            const fontSize = this.stageWidth / textWidth * 0.9 * text.sizeRatio;

            this.ctx.font = `${text.fontStyle} ${text.fontWeight} ${fontSize}px ${text.fontFamily}`;
            textMatrics = this.ctx.measureText(text.content);

            const textHeight = textMatrics.actualBoundingBoxAscent + textMatrics.actualBoundingBoxDescent;
            lastHeight += textHeight + (textHeight * 0.2);

            this.ctx.fillStyle = ColorConstant.MEDIUM_GREY;
            this.ctx.fillText(text.content, textWidth + 20, lastHeight);
        });
    }

}
