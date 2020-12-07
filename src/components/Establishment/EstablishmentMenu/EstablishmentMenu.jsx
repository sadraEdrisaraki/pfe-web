import React from "react"
import { FormattedMessage } from "react-intl";
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
            <EstablishmentGenerateQRContainer setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage}/>
            <div className="est-generateqr-btn" onMouseOver={generateAnimationZoomIn} onClick={clickGenerateAnimation}>
                <div className="est-generateqr-btn-bg"></div>
                <h2 className="est-generateqr-title"><FormattedMessage id="generateQRCodeMenuLabel" /></h2>
            </div>
            
            <EstablishmentHistoryContainer/>
            <div className="est-qrhistory-btn" onMouseOver={historyAnimationZoomIn} onClick={clickHistoryAnimation}>
                <div className="est-qrhistory-btn-bg"></div>
                <h2 className="est-qrhistory-title"><FormattedMessage id="listQRCodesMenuLabel" /></h2>
            </div>
        </div>
        
    )
}

export default EstablishmentMenu