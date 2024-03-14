import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	loading: true,
};

export const userReducer = createReducer(initialState, (builder) => {
	builder
		.addCase("GET_LOGIN_REQUEST", (state) => {
			state.loading = true;
			state.isAuthenticated = false;
		})
		.addCase("GET_LOGIN_SUCCESS", (state, action) => {
			state.loading = false;
			state.user = action.payload.user;
			state.message = action.payload.message;
			state.isAuthenticated = true;
		})
		.addCase("GET_LOGIN_FAILURE", (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.isAuthenticated = false;
		})
		.addCase("CLEAR_ERRORS", (state) => {
			state.error = null;
		})
		.addCase("CLEAR_MESSAGES", (state) => {
			state.message = null;
		});
});