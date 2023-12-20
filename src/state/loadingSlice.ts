import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { commandName } from "../types";

export type loadingState = {[commandName: string]: boolean | undefined};

export const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState: {} as loadingState,
  reducers: {
    setLoading: (state: loadingState, { payload: commandName }: PayloadAction<commandName>) => ({
      ...state,
      [commandName]: true,
    }),
    unsetLoading: (state: loadingState, { payload: commandName } :PayloadAction<commandName>) => ({
      ...state,
      [commandName]: false,
    }),
    resetLoading: () => ({}),
  },
});
