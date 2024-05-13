import { ReactZoomPanPinchContext } from "../../models/context.model";
export declare const isVelocityCalculationAllowed: (contextInstance: ReactZoomPanPinchContext) => boolean;
export declare const isVelocityAllowed: (contextInstance: ReactZoomPanPinchContext) => boolean;
export declare function getVelocityMoveTime(contextInstance: ReactZoomPanPinchContext, velocity: number): number;
export declare function getVelocityPosition(newPosition: number, startPosition: number, currentPosition: number, isLocked: boolean, limitToBounds: boolean, minPosition: number, maxPosition: number, minTarget: number, maxTarget: number, step: number): number;
