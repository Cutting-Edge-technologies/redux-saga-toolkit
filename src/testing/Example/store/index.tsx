import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExampleDomainType } from "../api/exampleApi";

const initialExample: IExampleDomainType = {
  message: '',
  count: 0,
}

export const exampleSlice = createSlice({
  name: 'exampleSlice',
  initialState: initialExample,
  reducers: {
    setExample: (state: IExampleDomainType, {payload}: PayloadAction<IExampleDomainType>) => ({
      ...payload,
    }),
    resetExample: () => ({...initialExample}),
  }
});
