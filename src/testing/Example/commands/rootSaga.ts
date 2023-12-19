import { all, fork } from "redux-saga/effects";
import { watchCommandChapter } from "../../../createCommand/createCommand";
import * as exampleCommands from './example';

export const rootSaga = function*() {
  yield all([
    fork(watchCommandChapter(exampleCommands)),
  ]);
};
