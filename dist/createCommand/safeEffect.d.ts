import { createCommand } from './createCommand';
export declare function takeLatestSafe(actionType: string, saga: (action: any) => Generator<any>): Generator<import("redux-saga/effects").ForkEffect<void>, void, unknown>;
export declare function takeLatestCommandSafe(command: ReturnType<typeof createCommand>): Generator<Generator<import("redux-saga/effects").ForkEffect<void>, void, unknown>, void, unknown>;
