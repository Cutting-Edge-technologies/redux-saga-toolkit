import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { takeLatestCommandSafe } from './safeEffect';

const commandPrefix = 'command/';

export const createCommand = <Payload>(
  name: string,
  saga: (action: PayloadAction<Payload>) => Generator<any, void, never>,
) => {
  const actionCreator = createAction<Payload>(`${commandPrefix}${name}`);

  const command = {
    action: actionCreator,
    saga,
  };

  return command;
};

export type command = ReturnType<typeof createCommand>;

export type commandChapter = {[key: symbol]: command | any };

export function watchCommandChapter(chapterExports: commandChapter) {

  const watchChapterEffect = function*() {
    const exportsArray: command[] = Object.values(chapterExports);
    const commandArray = exportsArray.filter((singleExport) => !!singleExport.action && !!singleExport.saga);
    const effects = commandArray.map((command) => takeLatestCommandSafe(command));
    yield all(effects);
  }

  return watchChapterEffect;
}
