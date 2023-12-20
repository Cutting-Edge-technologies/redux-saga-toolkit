import { Action } from 'redux';
import {
  call,
  put,
  takeLatest,
  spawn,
} from 'redux-saga/effects';
import { errorSlice } from '../state/errorSlice';
import { loadingSlice } from '../state/loadingSlice';
import { createCommand } from './createCommand';
import { commandName } from '../types';

const { actions: {setError, clearError} } = errorSlice;
const { actions: {setLoading, unsetLoading} } = loadingSlice;

function safeSagaWrapper(saga: (action: any) => Generator<any>) {
  return function* (action: Action) {
    const commandName: commandName = action.type;

    yield put(setLoading(commandName));
    yield put(clearError(commandName));

    try {
      yield saga(action);
      // yield showSuccessSnackBar(sagaName);
    } catch (error) {
      yield call(console.warn, error);
      const errorCasted = error as Error;
      yield put(
        setError({
          commandName,

          error: error,
          message: errorCasted?.message,
          thrown: new Date(),
        }),
      );
      // yield showFailureSnackBar(commandName);
    } finally {
      yield put(unsetLoading(commandName));
    }
  };
}

export function* takeLatestSafe(
  actionType: string,
  saga: (action: any) => Generator<any>,
) {
  function* takeSafeSaga() {
    const wrappedSaga = safeSagaWrapper(saga);
    yield takeLatest(actionType, wrappedSaga);
  }

  yield spawn(takeSafeSaga);
}

export function* takeLatestCommandSafe(command: ReturnType<typeof createCommand>) {
  yield takeLatestSafe(command.action.type, command.saga);
}
