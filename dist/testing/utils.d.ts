import { Action, Reducer, Store } from "redux";
import { ExtendedStore } from "../types";
export declare const asyncDispatch: <RootState extends {
    loading: import("../state/loadingSlice").loadingState;
    error: import("../state/errorSlice").errorState;
}>(store: Store<RootState, import("redux").UnknownAction, {}>, action: Action) => Promise<string>;
export declare const makeStoreCreator: <State extends {
    loading: import("../state/loadingSlice").loadingState;
    error: import("../state/errorSlice").errorState;
}>(reducer: Reducer<State>, rootSaga: () => Generator<any>) => StoreCreator<State>;
export type StoreCreator<State> = () => ExtendedStore<State>;
export declare const setState: import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<string>;
export declare const makeHocTestingStore: <State extends {
    loading: import("../state/loadingSlice").loadingState;
    error: import("../state/errorSlice").errorState;
}>(store: ExtendedStore<State>) => ExtendedStore<State>;
