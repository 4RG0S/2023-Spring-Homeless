import React, { useEffect, useRef } from "react";
import { WaveEffectController } from "./WaveEffect/WaveEffectController";

export const Effect = ({...additionalAttributes}): JSX.Element => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
            new WaveEffectController(canvas);
        } else {
            console.log("error");
        }
    }, []);

    return (
        <canvas ref={canvasRef} style={additionalAttributes}></canvas>
    );
}
