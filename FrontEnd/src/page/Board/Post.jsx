import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePostData, fetchAroundPostDetailData, fetchPostDetailData, insertCommentData } from "../../api/postAPI";

function Post(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [hoveredPost, setHoveredPost] = useState(null);
    const [pwdInput, setPwdInput] = useState(false);
    const [postStatus, setPostStatus] = useState('');
    const [userInputPwd,setUserInputPwd] = useState('');
    const [commentInput, setCommentInput] = useState('');
    const [commentInputId, setCommentInputId] = useState('');
    const [commentInputPwd, setCommentInputPwd] = useState('');
    const aroundPosts = useSelector(state => {
        if(state.aroundPost?.data){
            return state.aroundPost.data;
        }
    })
    const post = useSelector(state => {
        if(state.post?.data?.object){
            return state.post.data.object;
        }
    });
    const moveToBoard = () =>{
        navigate(`/board`);
    }
    useEffect(()=>{
        dispatch(fetchAroundPostDetailData(id));
    },[])
    useEffect(()=>{
        if(id){
            dispatch(fetchPostDetailData(id));
        }
    },[id])
    const moveToPost = (key)=> {   //게시글 조회하기
        navigate(`/board/post/${key}`);
        window.location.reload();
    }
    const showPwdInput = (state) => {
        setPwdInput(true);
        setPostStatus(state);
    }
    const rePost = () => {
        if(post.postPassword === userInputPwd){
            if(postStatus==='수정'){
                navigate('/board/post-write',{state: post});
            } else if(postStatus === '삭제'){
                deletePostData(post.postCode);
                navigate('/board')
            }
        } else {
            console.log(post.postPassword);
            alert('비밀번호가 다릅니다.');
        }
    }
    const insertComment = () => {
        insertCommentData(commentInput,commentInputId,id,commentInputPwd);
        window.location.reload();
    }
    const pwdInputHandler = (e) => {setUserInputPwd(e.target.value)}
    const postMouseEnterEvent = (postCode) => {setHoveredPost(postCode)} //게시글 Mouse Enter 핸들러
    const postMouseLeaveEvent = () => {setHoveredPost(null);} //게시글 Mouse Leave 핸들러
    const commentInputHandler = (e) => setCommentInput(e.target.value);
    const commentIdInputHandler = (e) => setCommentInputId(e.target.value);
    const commentPwdInputHandler = (e) => setCommentInputPwd(e.target.value);
    return(
        <main>
            <button onClick={moveToBoard}>돌아가기</button>
            <button>추천하기</button>
            <button onClick={()=>{showPwdInput('수정')}}>수정</button>
            <button onClick={()=>{showPwdInput('삭제')}}>삭제</button>
            {
                pwdInput?
                (<div>
                    <input type="text" placeholder="비밀번호를 입력하세요." value={userInputPwd} onChange={pwdInputHandler}/>
                    <button onClick={rePost}>{postStatus} 확인</button>
                    <button onClick={()=>{setPwdInput(false)}}>취소</button>
                </div>)
                :
                (<></>)
            }
            
            { 
            post? (
            <div>
                {/* <div>{post.postCode}</div> */}
                <div>제목 : {post.title}</div>
                <div>글쓴이 : {post.writer}</div>
                <div>추천 수 : {post.recommend}</div>
                <div>글쓴 시간 : {post.writeDateTime}</div>
                <hr/>
                {/* <div>{post.detail}</div> */}
                <div dangerouslySetInnerHTML={{ __html: post.detail}}></div>
                <hr/>
                <input placeholder="아이디" onChange={commentIdInputHandler} type="text" value={commentInputId}/>
                <input placeholder="비밀번호" onChange={commentPwdInputHandler} type="text" value={commentInputPwd}/>
                <br/>
                <input placeholder="댓글 내용" onChange={commentInputHandler} type="text" value={commentInput}/>
                <button onClick={insertComment}>댓글 쓰기</button>
                <ol>
                    {
                        post?.comment?.map((com)=>(
                                <li key={com.commentCode}>
                                    <div>
                                        <span>{com.commentId}</span>
                                        <span>{com.commentTime}</span>
                                        <span>좋아요 : {com.commentLike}</span>
                                    </div>
                                    <div>{com.commentDetail}</div>
                                    <hr/>
                                </li>
                        ))
                    }
                </ol>
            </div>
            ) : (<div></div>)
            }
            <table className="board" style={{marginTop:200,width: '100%', borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>작성일</th>
                            <th>추천</th>
                        </tr>
                    </thead>
                    <tbody>
            {
                aroundPosts ?
                (
                    aroundPosts?.map((aroundPost) => (
                        
                    <tr key={aroundPost.postCode} onMouseLeave={postMouseLeaveEvent} onMouseEnter={()=>{postMouseEnterEvent(aroundPost.postCode)}}  className={`${hoveredPost === aroundPost.postCode ? 'hovered' : ''}`}>
                                    <td>{aroundPost.postCode}</td>
                                    <td><div onClick={()=>{moveToPost(aroundPost.postCode)}}><span>{(()=>{
                                        if(aroundPost.title.length > 30){
                                            const title = aroundPost.title.substr(0,30);
                                            return title+'...';
                                        } else {
                                            return aroundPost.title;
                                        }
                                    })()}</span></div></td>
                                    <td><span>{aroundPost.writer}</span></td>
                                    <td>{aroundPost.writeDateTime}</td>
                                    <td>{aroundPost.recommend}</td>
                                </tr>
                    ))
                ) : (
                    <tr></tr>
                )
                
            }
            </tbody>
                    </table>
        </main>
    )
}

export default Post;