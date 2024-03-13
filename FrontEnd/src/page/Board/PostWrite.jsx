import { useState } from "react";
import Draft from "../common/Editor/Draft";
import { insertPostData } from "../../api/postAPI";
import { useNavigate } from "react-router-dom";
import './PostWrite.css';

function PostWrite(){
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [name,setName] = useState('');
    const [pwd, setPwd] = useState('');


    const savePost = () => {
        if(title===''){
            alert('제목을 입력해주세요.');
        } else if(name === ''){
            alert('닉네임을 입력해주세요.');
        } else if(pwd === ''){
            alert('비밀번호를 입력해주세요.');
        } else if(pwd === 'seopia') {
            //공지글 작성
        }
        
        
        else {
            console.log(`제목 : ${title}\n닉네임 : ${name}\n비밀번호 : ${pwd}\n내용 : ${detail}`);
            insertPostData(title, detail, name, pwd)
            navigate('/board');
        }
        
    }
    const moveToBoard = () => {
        navigate('/board')
    }


    const handleDetailChange = (detail) => setDetail(detail);
    const titleHandler = (e) => setTitle(e.target.value);
    const nameHandler = (e) => setName(e.target.value);
    const pwdHandler = (e) => setPwd(e.target.value);
    return(
        <main>
            <h1>게시글 작성</h1>
            <div className="post-wirte-input-container">
            <button onClick={moveToBoard}>{'<< '}뒤로가기</button>
                <li>
                    <ol>제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className="post-write-title" type="text" onChange={titleHandler} value={title}/></ol>
                </li>
                <span>닉네임&nbsp;&nbsp;&nbsp;<input className="post-write-name" type="text" onChange={nameHandler} value={name}/></span>
                <span>비밀번호<input className="post-write-pwd" type="password" onChange={pwdHandler} value={pwd}/></span>
                <br/>
                <button onClick={savePost}>작성하기</button>
                
            </div>
            

            <Draft data={detail} onDataChange={handleDetailChange}/>
            
        </main>
    )
}

export default PostWrite;