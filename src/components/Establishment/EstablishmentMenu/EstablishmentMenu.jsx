import React from "react"
import "./style.css"
import generateAnimationZoomIn from "./assets/generateAnimation.js"
import historyAnimationZoomIn from "./assets/historyAnimationZoomIn.js"
import clickGenerateAnimation from "./assets/clickGenerateAnimation.js"
import clickHistoryAnimation from "./assets/clickHistoryAnimation.js"
import EstablishmentGenerateQRContainer from "components/Establishment/EstablishmentMenu/EstablishmentGenerateQR/EstablishmentGenerateQRContainer.jsx"
import EstablishmentHistoryContainer from "components/Establishment/EstablishmentMenu/EstablishmentHistory/EstablishmentHistoryContainer"

const EstablishmentMenu = ({setErrorMessage , setSuccessMessage}) => {


    return (
        <div className="establishment-menu">
            <EstablishmentGenerateQRContainer/>
            <div className="est-generateqr-btn" onMouseOver={generateAnimationZoomIn} onClick={clickGenerateAnimation}>
                <div className="est-generateqr-btn-bg"></div>
                <h2 className="est-generateqr-title">generate qr code</h2>
            </div>
            
            <EstablishmentHistoryContainer/>
            <div className="est-qrhistory-btn" onMouseOver={historyAnimationZoomIn} onClick={clickHistoryAnimation}>
                <div className="est-qrhistory-btn-bg"></div>
                <h2 className="est-qrhistory-title">my qr codes</h2>
            </div>
        </div>
        
    )
}

export default EstablishmentMenu