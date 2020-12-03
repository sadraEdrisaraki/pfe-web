import React from "react"
import "./style.css"
import generateAnimationZoomIn from "./assets/generateAnimation.js"
import historyAnimationZoomIn from "./assets/historyAnimationZoomIn.js"
import clickGenerateAnimation from "./assets/clickGenerateAnimation.js"
import EstablishmentGenerateQR from "components/Establishment/EstablishmentMenu/EstablishmentGenerateQR/EstablishmentGenerateQR.jsx"

const EstablishmentMenu = () => {


    return (
        <div className="establishment-menu">
            <EstablishmentGenerateQR/>
            <div className="est-generateqr-btn" onMouseOver={generateAnimationZoomIn} onClick={clickGenerateAnimation}>
                <div className="est-generateqr-btn-bg"></div>
                <h2 className="est-generateqr-title">generate qr code</h2>
            </div>
            
            
            <div className="est-qrhistory-btn" onMouseOver={historyAnimationZoomIn}>
                <div className="est-qrhistory-btn-bg"></div>
                <h2 className="est-qrhistory-title">my qr codes</h2>
            </div>
        </div>
        
    )
}

export default EstablishmentMenu