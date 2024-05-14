import { ReactZoomPanPinchContext } from "../../models";
import { animations } from "../animations/animations.constants";
export declare const zoomIn: (contextInstance: ReactZoomPanPinchContext) => (step?: number, animationTime?: number, animationType?: keyof typeof animations) => void;
export declare const zoomOut: (contextInstance: ReactZoomPanPinchContext) => (step?: number, animationTime?: number, animationType?: keyof typeof animations) => void;
export declare const setTransform: (contextInstance: ReactZoomPanPinchContext) => (newPositionX: number, newPositionY: number, newScale: number, animationTime?: number, animationType?: keyof typeof animations) => void;
export declare const resetTransform: (contextInstance: ReactZoomPanPinchContext) => (animationTime?: number, animationType?: keyof typeof animations) => void;
export declare const centerView: (contextInstance: ReactZoomPanPinchContext) => (scale?: number, animationTime?: number, animationType?: keyof typeof animations) => void;
export declare const zoomToElement: (contextInstance: ReactZoomPanPinchContext) => (node: HTMLElement | string, scale?: number, animationTime?: number, animationType?: keyof typeof animations) => void;
