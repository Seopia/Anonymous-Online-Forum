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

export const fetchSearchPostData = (option,word,page) => {
    if(page==undefined){
        page=0;
    }
    return (dispatch) => {
        dispatch(fetchPostLoading());
        fetch(`http://localhost:8080/board/search-post?page=${page}&option=${option}&word=${word}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch(fetchPostSuccess(data))
        })
        .catch(error => dispatch(fetchPostFail(error)));
    }
}
function checkError(successMessage,data){
    if(data.code === 200){
        alert(successMessage);
    } else {
        alert(data.message+'의 이유로 실패했습니다.');
        console.error(`실패했습니다. : ${data.message}`);
    }
}
async function insert(simpleUrl,data){
    await fetch(`http://localhost:8080/${simpleUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        checkError("게시글 등록에 성공했습니다.",data);
    });
}

export const insertPostData = (title, detail, name, pwd) => {
    insert('board/insert-post',{title: title, detail: detail, writer: name, notice: 'N', recommend: 0});
}