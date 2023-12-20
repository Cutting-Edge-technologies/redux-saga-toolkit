import { PayloadAction } from "@reduxjs/toolkit";
import { commandName } from "../types";
export interface IErrorDetails {
    error: any;
    message: string;
    thrown: Date;
}
export interface IErrorDetailsPayload extends IErrorDetails {
    commandName: commandName;
}
export type errorState = {
    [commandName: commandName]: IErrorDetails | undefined;
};
export declare const errorSlice: import("@reduxjs/toolkit").Slice<errorState, {
    setError: (state: errorState, { payload: { commandName, ...errorDetails } }: PayloadAction<IErrorDetailsPayload>) => {
        [x: string]: IErrorDetails | {
            error: any;
            message: string;
            thrown: Date;
        };
    };
    clearError: (state: errorState, { payload: commandName }: {
        payload: string;
        type: string;
    }) => {
        [x: string]: IErrorDetails;
    };
    resetErrors: () => {};
}, "errorSlice", "errorSlice", import("@reduxjs/toolkit").SliceSelectors<errorState>>;
