import { PayloadAction } from "@reduxjs/toolkit";
export type loadingState = {
    [commandName: string]: boolean | undefined;
};
export declare const loadingSlice: import("@reduxjs/toolkit").Slice<loadingState, {
    setLoading: (state: loadingState, { payload: commandName }: {
        payload: string;
        type: string;
    }) => {
        [x: string]: boolean;
    };
    unsetLoading: (state: loadingState, { payload: commandName }: {
        payload: string;
        type: string;
    }) => {
        [x: string]: boolean;
    };
    resetLoading: () => {};
}, "loadingSlice", "loadingSlice", import("@reduxjs/toolkit").SliceSelectors<loadingState>>;
