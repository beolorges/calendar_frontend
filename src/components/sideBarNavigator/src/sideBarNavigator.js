import React from "react";
import { PersonCircle, Search, BoxArrowLeft } from "react-bootstrap-icons"
import "./sideBarNavigator.css";
import { logout } from "../../../services/auth"

function handleLogout() {
    logout();
    alert("Logout realizado com sucesso!");
    window.location.href = "/login";
}

function sideBarNavigator({ height, width }) {
    const customSideBarStyle = {
        width: `${width}%`,
        height: `${height}%`
    }

    return (
        <div className="sideBarNavigator" style={customSideBarStyle}>
            <div className="upperIcons">
                <PersonCircle className="sideBarNavigatorButtons" size={'20px'} max-height={'20px'} color={'white'} />
                <Search className="sideBarNavigatorButtons" size={'20px'} max-height={'20px'} color={'white'} />
            </div>
            <div className="bottomIcons">
                <BoxArrowLeft size={'20px'} max-height={'20px'} color={'white'} onClick={handleLogout} className="sideBarNavigatorButtons" />
            </div>
        </div >
    )
}

export default sideBarNavigator;