import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

function Header() {
    const navigate = useNavigate();

    const [visible, setVisible] = useState(0);

    const moveToMainPage = () => {
        navigate('/');
    }

    const moveToBoard = () => {
        navigate('/board');
    }

    const mouseEnterEvent = () => {setVisible(1);}
    const mouseLeaveEvent = () => {setVisible(0);}

    return(
        <header>
            <img onClick={moveToMainPage} className="hompage-logo" src="/img/header/homePageLogo.png" height={50}></img>
            <button className="header-board-button" onMouseLeave={mouseLeaveEvent} onMouseEnter={mouseEnterEvent} onClick={moveToBoard}>익명 게시판
            <div style={{opacity: visible}} className="header-board-button-underline"/></button>
            
        </header> 
    )
}

export default Header;