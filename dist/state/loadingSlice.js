import { createSlice } from "@reduxjs/toolkit";
export const loadingSlice = createSlice({
    name: 'loadingSlice',
    initialState: {},
    reducers: {
        setLoading: (state, { payload: commandName }) => ({
            ...state,
            [commandName]: true,
        }),
        unsetLoading: (state, { payload: commandName }) => ({
            ...state,
            [commandName]: false,
        }),
        resetLoading: () => ({}),
    },
});
//# sourceMappingURL=loadingSlice.js.map