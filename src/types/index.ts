import { Action, Store } from "redux";
import { commonState } from "../state/commonReducer";
import { FC } from "react";

export type HOC = FC<{}>;

export type commandName = string;

export interface ExtendedStore<State> extends Store<State> {
  asyncDispatch: (action: Action) => Promise<unknown>;
  getActionHistory: () => Action<any>[];
  getActionHistoryRepresentation: () => string;
}

export type GenericSelector<State, Result> = (state: State) => Result;
export type ArgumentSelector<Selector> = (...args: any[]) => Selector;
export type CommonSelector<Result> = GenericSelector<commonState, Result>;
