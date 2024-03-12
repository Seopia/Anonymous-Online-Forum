import { fetchPostFail, fetchPostLoading, fetchPostSuccess } from "../reducers/postReducer"

export const fetchPostData = (page) => {
    // 여기서는 (dispatch, getState) => { ... } 형태로 사용합니다.
    // `page`는 이 함수의 파라미터로부터 직접 가져옵니다.
    return (dispatch) => {
        dispatch(fetchPostLoading());
        // `page`는 이 함수의 인자로 이미 주어진 상태이므로, 그대로 사용합니다.
        fetch(`http://localhost:8080/board/get-post?page=${page}`)
        .then(res => res.json())
        .then(data => {
            // `fetchPostSuccess` 액션을 디스패치할 때, 필요한 데이터를 payload로 전달해야 합니다.
            dispatch(fetchPostSuccess(data));
        })
        .catch(error => {
            // `fetchPostFail` 액션을 디스패치할 때, 에러 정보를 payload로 전달해야 합니다.
            dispatch(fetchPostFail(error));
        });
    };
};

export const fetchBestPostData = (page) => {
    return (dispatch) => {
        dispatch(fetchPostLoading());
        fetch(`http://localhost:8080/board/show-by-recommend?page=${page}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch(fetchPostSuccess(data))
        })
        .catch(error => dispatch(fetchPostFail(error)));
    }
}

export const fetchNoticeData = (page) => {
    return (dispatch) => {
        dispatch(fetchPostLoading());
        fetch(`http://localhost:8080/board/show-notice?page=${page}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch(fetchPostSuccess(data))
        })
        .catch(error => dispatch(fetchPostFail(error)));
    }
}
