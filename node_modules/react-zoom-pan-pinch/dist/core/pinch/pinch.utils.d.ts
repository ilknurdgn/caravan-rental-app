import { PositionType, ReactZoomPanPinchContext } from "../../models";
export declare const isPinchStartAllowed: (contextInstance: ReactZoomPanPinchContext, event: TouchEvent) => boolean;
export declare const isPinchAllowed: (contextInstance: ReactZoomPanPinchContext) => boolean;
export declare const calculateTouchMidPoint: (event: TouchEvent, scale: number, contentComponent: HTMLDivElement) => PositionType;
export declare const getTouchDistance: (event: TouchEvent) => number;
export declare const calculatePinchZoom: (contextInstance: ReactZoomPanPinchContext, currentDistance: number) => number;
