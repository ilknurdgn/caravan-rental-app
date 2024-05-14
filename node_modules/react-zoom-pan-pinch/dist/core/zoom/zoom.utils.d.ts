import { BoundsType, PositionType, ReactZoomPanPinchContext } from "../../models";
export declare function handleCalculateZoomPositions(contextInstance: ReactZoomPanPinchContext, mouseX: number, mouseY: number, newScale: number, bounds: BoundsType, limitToBounds: boolean): PositionType;
export declare function checkZoomBounds(zoom: number, minScale: number, maxScale: number, zoomPadding: number, enablePadding: boolean): number;
