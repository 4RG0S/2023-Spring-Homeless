import React, { useEffect, useRef } from "react";
import { ScratchEffectController } from "./ScratchEffect/ScratchEffectController";

export const Effect = ({...additionalAttributes}): JSX.Element => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
            new ScratchEffectController(canvas);
        } else {
            console.log("error");
        }
    }, []);

    return (
        <canvas ref={canvasRef} style={additionalAttributes}></canvas>
    );
}
