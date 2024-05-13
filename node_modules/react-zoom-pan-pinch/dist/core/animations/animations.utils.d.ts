import { ReactZoomPanPinchContext, StateType } from "../../models";
export declare const handleCancelAnimation: (contextInstance: ReactZoomPanPinchContext) => void;
export declare function handleSetupAnimation(contextInstance: ReactZoomPanPinchContext, animationName: string, animationTime: number, callback: (step: number) => void): void;
export declare function animate(contextInstance: ReactZoomPanPinchContext, targetState: StateType, animationTime: number, animationName: string): void;
