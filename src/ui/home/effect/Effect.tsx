import React, { useEffect, useRef } from "react";
import { EffectController } from "./EffectController";

export const Effect = (): JSX.Element => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
            new EffectController(canvas);
        } else {
            console.log("error");
        }
    }, []);

    return (
        <canvas ref={canvasRef} style={{position: 'absolute', zIndex: 1}}></canvas>
    );
}
