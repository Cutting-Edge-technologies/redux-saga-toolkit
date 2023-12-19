import { combineReducers } from "redux";
import { exampleSlice } from ".";
import { loadingSlice } from "../../../state/loadingSlice";
import { errorSlice } from "../../../state/errorSlice";

export const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  error: errorSlice.reducer,
  example: exampleSlice.reducer,
});
