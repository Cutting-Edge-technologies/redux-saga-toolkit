/// <reference types="react" />
import { StoreCreator } from "../testing/utils";
export declare const setState: import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<string>;
export declare const resetState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"resetState">;
export declare const createHOCDecorator: <State extends {
    loading: import("../state/loadingSlice").loadingState;
    error: import("../state/errorSlice").errorState;
}>(storeCreator: StoreCreator<State>) => {
    store: import("..").ExtendedStore<State>;
    HocDecorator: (Story: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, any>) => import("react").ReactNode;
    useSetTestState: (stateDiff: Partial<State>) => void;
};
