import { StoreCreator, makeHocTestingStore } from "../testing/utils";
import { useEffect } from "react";
import { commonState } from "../state/commonReducer";
import { makeDecorator } from "./makeDecorator";
import { createAction } from "@reduxjs/toolkit";

export const setState = createAction<Partial<commonState>>('setState');
export const resetState = createAction('resetState');

export const createHOCDecorator = <State extends commonState> (storeCreator: StoreCreator<State>) => {
  const store = makeHocTestingStore(storeCreator());
  const HocDecorator = makeDecorator(store);

  const useSetTestState = (stateDiff: Partial<State>) => {
    useEffect(() => {
      store.dispatch(setState(stateDiff));
    
      return () => {
        store.dispatch(resetState());
      }
    }, [stateDiff]);
  };

  return {
    store, HocDecorator, useSetTestState
  }
}
