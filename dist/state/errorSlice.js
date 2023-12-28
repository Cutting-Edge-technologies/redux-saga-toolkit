import { createSlice } from "@reduxjs/toolkit";
export const errorSlice = createSlice({
    name: 'errorSlice',
    initialState: {},
    reducers: {
        setError: (state, { payload: { commandName, ...errorDetails } }) => ({
            ...state,
            [commandName]: errorDetails,
        }),
        clearError: (state, { payload: commandName }) => ({
            ...state,
            [commandName]: undefined,
        }),
        resetErrors: () => ({}),
    }
});
//# sourceMappingURL=errorSlice.js.map