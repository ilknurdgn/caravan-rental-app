import { ReactZoomPanPinchContext, PositionType } from "../../models";
export declare const isWheelAllowed: (contextInstance: ReactZoomPanPinchContext, event: WheelEvent) => boolean;
export declare const getDeltaY: (event?: WheelEvent) => 1 | -1 | 0;
export declare function getDelta(event: WheelEvent, customDelta?: number | null): number;
export declare function getMousePosition(event: WheelEvent | MouseEvent | TouchEvent, contentComponent: HTMLDivElement, scale: number): PositionType;
export declare const handleCalculateWheelZoom: (contextInstance: ReactZoomPanPinchContext, delta: number, step: number, disable: boolean, getTarget?: boolean) => number;
export declare const handleWheelZoomStop: (contextInstance: ReactZoomPanPinchContext, event: WheelEvent) => boolean;
