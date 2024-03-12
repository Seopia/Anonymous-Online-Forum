import { useEffect, useState } from "react";
import "../Board.css";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchNoticeData } from "../../../api/postAPI";


function NoticeBoard(){
    /*-----------  초기 값 구간  -----------*/
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchWord, setSearchWord] = useState('');   //검색어
    const [searchOption, setSearchOption] = useState('title');
    const [page, setPage] = useState(1);    // 현재 페이지
    const [totalElements, setTotalElements] = useState(0);
    const [hoveredPost, setHoveredPost] = useState(null);

    const post =useSelector(state => {
        return state.post;
    });

    /*-----------  useEffect 구간  -----------*/
        useEffect(()=>{ 
            dispatch(fetchNoticeData(page-1));
        },[]);   
        useEffect(()=>{
            if(post?.data?.pageable){
                setTotalElements(post.data.totalElements);
            }
        },[post]);   
    /*-----------  요청 함수 구간  -----------*/
    const moveToPost = (key)=> {   //게시글 조회하기
        alert(`${key}번 포스트 조회하러 가기`);
        
    }
    const getSearchData = (e) => {  //검색하기
        if(e.key === 'Enter'){
            alert(`option은 : ${searchOption}\nword는 : ${searchWord}`)
            setSearchWord('');
        }
    }
    const getBest = () => {
        navigate('/board/best-board');
    }
    const handlePageChange = (page) => {    //페이지 이동했으니 요청
        setPage(page);
        dispatch(fetchNoticeData(page-1));
    };
    const moveToBoard = () => {
        navigate('/board')
    }
    /*-----------  핸들러 함수 구간  -----------*/
    const searchInputOnChangeHandler = (e) => {setSearchWord(e.target.value);}  //검색어 핸들러
    const searchOptionOnChangeHandler = (e) => {setSearchOption(e.target.value);}   //검색옵션 핸들러
    const postMouseEnterEvent = (postCode) => {setHoveredPost(postCode)} //게시글 Mouse Enter 핸들러
    const postMouseLeaveEvent = () => {setHoveredPost(null);} //게시글 Mouse Leave 핸들러
    
    return(
        <>
            <main>
                <div>
                    <div>
                        <h1>익명 게시판</h1>
                        <section className="board-buttons">
                            <button onClick={getBest}>Best 게시글</button>
                            <button onClick={moveToBoard}>일반 게시판</button>
                        </section>
                        
                        <section className="board-search">
                            <select onChange={searchOptionOnChangeHandler} value={searchOption}>
                                <option value="title">제목</option>
                                <option value="detail">내용</option>
                            </select>
                            <input onKeyDown={getSearchData} onChange={searchInputOnChangeHandler} type="text" placeholder="검색하기" value={searchWord}/>
                        </section>
                        
                    </div>
                    <table className="board" style={{width: '100%', borderCollapse: 'collapse'}}>
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
                        {/* forEach 사용 예정 */}
                        {   
                            (post?.loading?
                            (<tr><td style={{textAlign:"center"}} colSpan={5}>로딩중...</td></tr>) 
                            :
                            post?.data?( post.data.content?.map((post)=>(
                                <tr key={post.postCode} onMouseLeave={postMouseLeaveEvent} onMouseEnter={()=>{postMouseEnterEvent(post.postCode)}}  className={`${hoveredPost === post.postCode ? 'hovered' : ''}`}>
                                    <td>{post.postCode}</td>
                                    <td><div onClick={()=>{moveToPost(post.postCode)}}><span>{(()=>{
                                        if(post.title.length > 30){
                                            const title = post.title.substr(0,30);
                                            return title+'...';
                                        } else {
                                            return post.title;
                                        }
                                    })()}</span></div></td>
                                    <td><span>{post.writer}</span></td>
                                    <td>{post.writeDateTime}</td>
                                    <td>{post.recommend}</td>
                                </tr>
                            ))) : 
                            (<tr><td style={{textAlign:"center"}} colSpan={5}>로딩중...</td></tr>)
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <Pagination
                    activePage={page} // 현재 페이지
                    itemsCountPerPage={15} // 한 페이지랑 보여줄 아이템 갯수
                    totalItemsCount={totalElements} // 총 아이템 갯수
                    pageRangeDisplayed={5} // paginator의 페이지 범위
                    prevPageText={"‹"} // "이전"을 나타낼 텍스트
                    nextPageText={"›"} // "다음"을 나타낼 텍스트
                    onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
                />
            </main>
        </>
    )
}

export default NoticeBoard;