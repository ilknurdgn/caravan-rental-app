import { PositionType } from "../../models";
import { ReactZoomPanPinchContext } from "../../models/context.model";
export declare function getSizeMultiplier(wrapperComponent: HTMLDivElement, equalToMove: boolean): number;
export declare function handleCalculateVelocity(contextInstance: ReactZoomPanPinchContext, position: PositionType): void;
export declare function handleVelocityPanning(contextInstance: ReactZoomPanPinchContext): void;
