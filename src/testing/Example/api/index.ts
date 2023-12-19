import { call } from "redux-saga/effects";
import { defaultExampleMessage, exampleApiCall, IExampleDomainType } from "./exampleApi";

export function* exampleApiEffect(count: number, message: string = defaultExampleMessage) {
  const data: IExampleDomainType = yield call(exampleApiCall, count, message);
  return data;
}
