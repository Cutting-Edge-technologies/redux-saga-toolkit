import { createAction } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { takeLatestCommandSafe } from './safeEffect';
const commandPrefix = 'command/';
export const createCommand = (name, saga) => {
    const actionCreator = createAction(`${commandPrefix}${name}`);
    const command = {
        action: actionCreator,
        saga,
    };
    return command;
};
export function watchCommandChapter(chapterExports) {
    const watchChapterEffect = function* () {
        const exportsArray = Object.values(chapterExports);
        const commandArray = exportsArray.filter((singleExport) => !!singleExport.action && !!singleExport.saga);
        const effects = commandArray.map((command) => takeLatestCommandSafe(command));
        yield all(effects);
    };
    return watchChapterEffect;
}
//# sourceMappingURL=createCommand.js.map