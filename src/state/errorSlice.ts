import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { commandName } from "../types";

export interface IErrorDetails {
  error: any;
  message: string;
  thrown: Date;
}

export interface IErrorDetailsPayload extends IErrorDetails {
  commandName: commandName;
}

export type errorState = {[commandName: commandName]: IErrorDetails | undefined};

export const errorSlice = createSlice({
  name: 'errorSlice',
  initialState: {} as errorState,
  reducers: {
    setError: (state: errorState, { payload: { commandName, ...errorDetails } }: PayloadAction<IErrorDetailsPayload>) => ({
      ...state,
      [commandName]: errorDetails,
    }),
    clearError: (state: errorState, { payload: commandName }: PayloadAction<commandName>) => ({
      ...state,
      [commandName]: undefined,
    }),
    resetErrors: () => ({}),
  }
});
