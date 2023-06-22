export default class Text {
    public content: string;
    public sizeRatio: number;
    public fontStyle: string;
    public fontWeight: string;
    public fontFamily: string;

    constructor(content: string, sizeRatio: number, fontStyle: string, fontWeight: string, fontFamily: string) {
        this.content = content;
        this.sizeRatio = sizeRatio;
        this.fontStyle = fontStyle;
        this.fontWeight = fontWeight;
        this.fontFamily = fontFamily;
    }
}
