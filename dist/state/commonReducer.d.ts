export declare const commonReducer: import("redux").Reducer<{
    loading: import("./loadingSlice").loadingState;
    error: import("./errorSlice").errorState;
}, import("redux").UnknownAction, Partial<{
    loading: import("./loadingSlice").loadingState;
    error: import("./errorSlice").errorState;
}>>;
export type commonState = ReturnType<typeof commonReducer>;
