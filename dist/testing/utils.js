import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { StoreLogSagaMonitor, StoreSagaMonitor } from "./sagaMonitor";
import makeSagaMiddleware from 'redux-saga';
const tooLongInMs = 3000;
export const asyncDispatch = (store, action) => {
    const actionType = action.type;
    const promiseToDispachAction = new Promise((resolve, reject) => {
        const promiseTimeOut = setTimeout(() => {
            // Rise error if taking too long
            console.log(action);
            console.log(`The action ${actionType} took too much time to execute`);
            throw new Error(`The action ${actionType} took too much time to execute`);
        }, tooLongInMs);
        const clearPromiseTimeOut = () => {
            clearTimeout(promiseTimeOut);
        };
        // Subscribe on loading state
        let actionStarted = false;
        store.subscribe(() => {
            const state = store.getState();
            const actionLoad = !!state.loading[actionType];
            const actionError = !!state.error[actionType];
            // loading is true. Action started
            if (actionLoad) {
                actionStarted = true;
            }
            // loading was true, but then changed to false. Action finished.
            if (actionLoad === false && actionStarted) {
                clearPromiseTimeOut();
                resolve('');
            }
            if (actionError) {
                resolve('');
            }
        });
    });
    store.dispatch(action);
    return promiseToDispachAction;
};
export const makeStoreCreator = (reducer, rootSaga) => {
    const makeANewStore = () => {
        const actionHistory = [];
        const sagaMonitor = new StoreSagaMonitor(actionHistory);
        const sagaMiddleware = makeSagaMiddleware({ sagaMonitor });
        const store = configureStore({
            reducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
            devTools: process.env.NODE_ENV !== 'production',
        });
        sagaMiddleware.run(rootSaga);
        return {
            ...store,
            asyncDispatch: (action) => asyncDispatch(store, action),
            getActionHistory: () => [...actionHistory],
            getActionHistoryRepresentation: () => JSON.stringify(actionHistory, undefined, 2),
        };
    };
    return makeANewStore;
};
export const setState = createAction('setState');
const resetState = createAction('resetState');
export const makeHocTestingStore = (store) => {
    const initialState = store.getState();
    const rootReducer = createReducer(initialState, (builder) => {
        builder
            .addCase(setState, (state, action) => {
            return { ...state, ...action.payload };
        })
            .addCase(resetState, () => {
            return { ...initialState };
        });
    });
    const actionHistory = [];
    const sagaMonitor = new StoreLogSagaMonitor(actionHistory);
    const sagaMiddleware = makeSagaMiddleware({ sagaMonitor });
    const hocStore = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
        devTools: process.env.NODE_ENV !== 'production',
    });
    const rootSaga = function* () {
    };
    sagaMiddleware.run(rootSaga);
    return {
        ...hocStore,
        asyncDispatch: (action) => { throw NotImplementedException(); },
        getActionHistory: () => [...actionHistory],
        getActionHistoryRepresentation: () => JSON.stringify(actionHistory, undefined, 2),
    };
};
const NotImplementedException = () => new Error('Not implemented because no logic is connected.');
//# sourceMappingURL=utils.js.map