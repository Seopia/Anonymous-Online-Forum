import { createAction, createReducer } from '@reduxjs/toolkit';

export const fetchAroundPostLoading = createAction('FETCH_AROUND_POST_LOADING');
export const fetchAroundPostSuccess = createAction('FETCH_AROUND_POST_SUCCESS');
export const fetchAroundPostFail = createAction('FETCH_AROUND_POST_FAIL');


const initalState = {
    loading: false,
    data: null,
    error: null,
}

export const getAroundPostReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(fetchAroundPostLoading, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAroundPostSuccess, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(fetchAroundPostFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
})