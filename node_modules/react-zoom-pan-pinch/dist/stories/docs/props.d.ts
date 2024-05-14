import React from "react";
import { ReactZoomPanPinchProps } from "models";
export type ControlsOptionsType = {
    name: React.ReactNode;
    type: string[];
    defaultValue: string;
    description: string;
    isObjectRow?: boolean;
};
export type ComponentProps = Record<keyof Omit<ReactZoomPanPinchProps, "children">, Omit<ControlsOptionsType, "name" | "isObjectRow"> | Record<string, Omit<ControlsOptionsType, "name" | "isObjectRow">>>;
export declare const componentPropsTable: Record<string, Omit<ControlsOptionsType, "name">>;
export declare const wrapperPropsTable: ComponentProps;
export declare const componentProps: ControlsOptionsType[];
export declare const wrapperProps: ControlsOptionsType[];
