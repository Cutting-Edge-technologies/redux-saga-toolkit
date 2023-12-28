import { makeHocTestingStore } from "../testing/utils";
import { useEffect } from "react";
import { makeDecorator } from "./makeDecorator";
import { createAction } from "@reduxjs/toolkit";
export const setState = createAction('setState');
export const resetState = createAction('resetState');
export const createHOCDecorator = (storeCreator) => {
    const store = makeHocTestingStore(storeCreator());
    const HocDecorator = makeDecorator(store);
    const useSetTestState = (stateDiff) => {
        useEffect(() => {
            store.dispatch(setState(stateDiff));
            return () => {
                store.dispatch(resetState());
            };
        }, [stateDiff]);
    };
    return {
        store, HocDecorator, useSetTestState
    };
};
//# sourceMappingURL=index.js.map