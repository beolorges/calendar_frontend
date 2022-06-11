import React from "react";
import { PersonCircle, Search, BoxArrowLeft } from "react-bootstrap-icons"
import "./sideBarNavigator.css"

function sideBarNavigator({ height, width }) {
    const customSideBarStyle = {
        width: `${width}%`,
        height: `${height}%`
    }

    return (
        <div className="sideBarNavigator" style={customSideBarStyle}>
            <div className="upperIcons">
                <PersonCircle size={'20px'} max-height={'20px'} color={'white'} />
                <Search size={'20px'} max-height={'20px'} color={'white'} />
            </div>
            <div className="bottomIcons">
                <BoxArrowLeft size={'20px'} max-height={'20px'} color={'white'} />

            </div>
        </div >
    )
}

export default sideBarNavigator;