import { useEffect, useState } from "react";
import { insertPostData, updatePostData } from "../../api/postAPI";
import { useLocation, useNavigate } from "react-router-dom";
import './PostWrite.css';
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftjsToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const Container = styled.div`
  width: 100%;
`;

const RowBox = styled.div`
  width: 100%;
  display: flex;
`;

const Viewer = styled.div`
  width: calc(50% - 40px);
  height: 400px;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid gray;
`;

function PostWrite(){
    

  const uploadCallback = () => {
    console.log("이미지 업로드");
  };
    const navigate = useNavigate();
    const location = useLocation();

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [name,setName] = useState('');
    const [pwd, setPwd] = useState('');

    function isBlank(string){
        return !string || /^\s*$/.test(string);
    }
    useEffect(()=>{
        if(location.state){
            setTitle(location.state.title);
            const blocksFromHtml = htmlToDraft(location.state.detail);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            const editorState = EditorState.createWithContent(contentState);
            console.log(editorState);
            setEditorState(editorState);
            setName(location.state.writer);
            setPwd(location.state.postPassword);
        }else {
            console.log('없음');
        }
        console.log(location);
    },[])

    const savePost = () => {
        if(isBlank(title)){
            alert('제목을 입력해주세요.');
        } else if(isBlank(pwd)){
            alert('비밀번호를 입력해주세요.');
        }
        
        else {
            if(location.state){
                if(isBlank(name)){
                    updatePostData(location.state.postCode,title, detail, '유동', pwd);
                } else {
                    updatePostData(location.state.postCode,title, detail, name, pwd);
                }
            }else {
                if(isBlank(name)){
                    insertPostData(title, detail, '유동', pwd);
                } else {
                    insertPostData(title, detail, name, pwd);
                }
            }
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
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlString, setHtmlString] = useState("");

  const updateTextDescription = async (state) => {
    await setEditorState(state);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    
    setDetail(html);
  };
    return(
        <main>
            <h1>게시글 작성</h1>
            <div className="post-wirte-input-container">
            <button onClick={moveToBoard}>{'<< '}뒤로가기</button>
                <li>
                    <ol>제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className="post-write-title" type="text" onChange={titleHandler} value={title}/></ol>
                </li>
                <span>닉네임&nbsp;&nbsp;&nbsp;<input className="post-write-name" type="text" onChange={nameHandler} value={name} placeholder="유동"/></span>
                <span>비밀번호<input className="post-write-pwd" type="password" onChange={pwdHandler} value={pwd}/></span>
                <br/>
                <button onClick={savePost}>작성하기</button>
            </div>
            


        <Editor
          placeholder="게시글을 작성해주세요"
          editorState={editorState}
          onEditorStateChange={updateTextDescription}
          toolbar={{
            image: { uploadCallback: uploadCallback },
          }}
          localization={{ locale: "ko" }}
          editorStyle={{
            height: "500px",
            width: "100%",
            border: "3px solid lightgray",
            padding: "20px",
          }}
        />

            
        </main>
    )
}

export default PostWrite;