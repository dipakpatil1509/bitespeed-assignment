import { combineReducers } from "@reduxjs/toolkit";
import flowSlice from "./flow/flow.slice";

export const rootReducer = combineReducers({
	flow: flowSlice.flowReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
