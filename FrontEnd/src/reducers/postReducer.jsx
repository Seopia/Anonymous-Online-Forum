import { createAction, createReducer } from '@reduxjs/toolkit';

export const fetchPostLoading = createAction('FETCH_POST_LOADING');
export const fetchPostSuccess = createAction('FETCH_POST_SUCCESS');
export const fetchPostFail = createAction('FETCH_POST_FAIL');


const initalState = {
    loading: false,
    data: null,
    error: null,
}

export const getPostReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(fetchPostLoading, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPostSuccess, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(fetchPostFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
})