import React from "react";
import { ReactZoomPanPinchHandlers } from "../../models/context.model";
export type ControlsFnOptionsType = {
    name: React.ReactNode;
    type: string[];
    parameters: string[];
    description: string;
    isObjectRow?: boolean;
};
export type ComponentProps = Record<keyof ReactZoomPanPinchHandlers, Omit<ControlsFnOptionsType, "name" | "isObjectRow"> | Record<string, Omit<ControlsFnOptionsType, "name" | "isObjectRow">>>;
export declare const handlersTable: ComponentProps;
export declare const getHandlersTable: () => ControlsFnOptionsType[];
