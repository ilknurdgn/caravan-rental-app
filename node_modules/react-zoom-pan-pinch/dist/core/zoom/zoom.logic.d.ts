import { ReactZoomPanPinchContext, ReactZoomPanPinchState } from "../../models";
export declare function handleZoomToPoint(contextInstance: ReactZoomPanPinchContext, scale: number, mouseX: number, mouseY: number): Omit<ReactZoomPanPinchState, "previousScale"> | undefined;
export declare function handleAlignToScaleBounds(contextInstance: ReactZoomPanPinchContext, mousePositionX?: number, mousePositionY?: number): void;
