import { ReactZoomPanPinchContext, ReactZoomPanPinchState } from "../../models";
import { animations } from "../animations/animations.constants";
export declare const handleCalculateButtonZoom: (contextInstance: ReactZoomPanPinchContext, delta: number, step: number) => number;
export declare function handleZoomToViewCenter(contextInstance: ReactZoomPanPinchContext, delta: number, step: number, animationTime: number, animationType: keyof typeof animations): void;
export declare function resetTransformations(contextInstance: ReactZoomPanPinchContext, animationTime: number, animationType: keyof typeof animations, onResetTransformation?: () => void): void;
export declare function getOffset(element: HTMLElement, wrapper: HTMLElement, content: HTMLElement, state: ReactZoomPanPinchState): {
    x: number;
    y: number;
};
export declare function calculateZoomToNode(contextInstance: ReactZoomPanPinchContext, node: HTMLElement, customZoom?: number): {
    positionX: number;
    positionY: number;
    scale: number;
};
