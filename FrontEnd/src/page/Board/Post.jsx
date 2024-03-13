import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Post(){
    const { id } = useParams();
    useEffect(()=>{
        
    },[])
    return(
        <main>
            {id}번 포스트 조회
        </main>
    )
}

export default Post;