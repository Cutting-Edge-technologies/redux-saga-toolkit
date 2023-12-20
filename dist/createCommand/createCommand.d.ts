import { PayloadAction } from '@reduxjs/toolkit';
export declare const createCommand: <Payload>(name: string, saga: (action: {
    payload: Payload;
    type: string;
}) => Generator<any, void, never>) => {
    action: import("@reduxjs/toolkit/dist/tsHelpers").IsAny<Payload, import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, import("@reduxjs/toolkit/dist/tsHelpers").IsUnknown<Payload, import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<string>, import("@reduxjs/toolkit/dist/tsHelpers").IfVoid<Payload, import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, import("@reduxjs/toolkit/dist/tsHelpers").IfMaybeUndefined<Payload, import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Payload, string>, import("@reduxjs/toolkit").ActionCreatorWithPayload<Payload, string>>>>>;
    saga: (action: {
        payload: Payload;
        type: string;
    }) => Generator<any, void, never>;
};
export type command = ReturnType<typeof createCommand>;
export type commandChapter = {
    [key: symbol]: command | any;
};
export declare function watchCommandChapter(chapterExports: commandChapter): () => Generator<import("redux-saga/effects").AllEffect<Generator<Generator<import("redux-saga/effects").ForkEffect<void>, void, unknown>, void, unknown>>, void, unknown>;
