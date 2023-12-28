import { combineReducers } from "redux";
import { errorSlice } from "./errorSlice";
import { loadingSlice } from "./loadingSlice";
export const commonReducer = combineReducers({
    loading: loadingSlice.reducer,
    error: errorSlice.reducer,
});
//# sourceMappingURL=commonReducer.js.map