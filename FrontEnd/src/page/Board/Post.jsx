import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAroundPostDetailData, fetchPostDetailData } from "../../api/postAPI";

function Post(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [hoveredPost, setHoveredPost] = useState(null);
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

    const postMouseEnterEvent = (postCode) => {setHoveredPost(postCode)} //게시글 Mouse Enter 핸들러
    const postMouseLeaveEvent = () => {setHoveredPost(null);} //게시글 Mouse Leave 핸들러
    return(
        <main>
            <button onClick={moveToBoard}>돌아가기</button>
            { 
            post? (
            <div>
                <div>{post.postCode}</div>
                <div>{post.title}</div>
                <div>{post.writer}</div>
                <div>{post.detail}</div>
                <div>{post.recommend}</div>
                <div>{post.writeDateTime}</div>
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
                    <div></div>
                )
                
            }
            </tbody>
                    </table>
        </main>
    )
}

export default Post;