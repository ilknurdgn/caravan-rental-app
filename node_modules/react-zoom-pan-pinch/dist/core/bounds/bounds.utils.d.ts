import { BoundsType, PositionType, ReactZoomPanPinchContext } from "../../models";
import { ComponentsSizesType } from "./bounds.types";
export declare function getComponentsSizes(wrapperComponent: HTMLDivElement, contentComponent: HTMLDivElement, newScale: number): ComponentsSizesType;
export declare const getBounds: (wrapperWidth: number, newContentWidth: number, diffWidth: number, wrapperHeight: number, newContentHeight: number, diffHeight: number, centerZoomedOut: boolean) => BoundsType;
export declare const calculateBounds: (contextInstance: ReactZoomPanPinchContext, newScale: number) => BoundsType;
/**
 * Keeps value between given bounds, used for limiting view to given boundaries
 * 1# eg. boundLimiter(2, 0, 3, true) => 2
 * 2# eg. boundLimiter(4, 0, 3, true) => 3
 * 3# eg. boundLimiter(-2, 0, 3, true) => 0
 * 4# eg. boundLimiter(10, 0, 3, false) => 10
 */
export declare const boundLimiter: (value: number, minBound: number, maxBound: number, isActive: boolean) => number;
export declare const handleCalculateBounds: (contextInstance: ReactZoomPanPinchContext, newScale: number) => BoundsType;
export declare function getMouseBoundedPosition(positionX: number, positionY: number, bounds: BoundsType, limitToBounds: boolean, paddingValueX: number, paddingValueY: number, wrapperComponent: HTMLDivElement | null): PositionType;
