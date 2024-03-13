import {Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../page/MainPage/HomePage";
import Header from "../page/common/Header/Header";
import Board from "../page/Board/Board";
import Footer from "../page/common/Footer/Footer";
import PostWrite from "../page/Board/PostWrite";
import BestBoard from "../page/Board/bestboard/BestBoard";
import NoticeBoard from "../page/Board/noticeboard/NoticeBoard";
import Post from "../page/Board/Post";
function App() {

  return (
    <BrowserRouter>
    {/* 상단 헤더 */}
      <Header/>
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<HomePage/>}/>
          {/* 게시판 */}
          <Route path="/board" element={<Board/>}/>
          <Route path="/board/post-write" element={<PostWrite/>}/>
          <Route path="/board/best-board" element={<BestBoard/>}/>
          <Route path="/board/notice" element={<NoticeBoard/>}/>
          <Route path="/board/post/:id" element={<Post/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
