import React, {useRef, useState, useEffect, useContext} from "react"
import { useReactToPrint } from "react-to-print"
import { FormattedMessage } from "react-intl";

import "./assets/style.css"

import QRCodeContext from "contexts/QRCodeContext"

import QRcodeItemMed from "components/SharedComponents/QRCodeItem/QRcodeItemMed"

const MedecinPage = ({createQR}) => {

    const{
        generateQRcodeIdMed
    } = useContext(QRCodeContext)

    const handleClick = () => {
        createQR()
        generateQRcodeIdMed()
        handlePrint()
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div className="medecin-page-container">
            <div className="qrcode-generated-med" onClick={handleClick}>
                <QRcodeItemMed ref={componentRef} />
            </div>
            <button className="btn-sub" onClick={handleClick}><FormattedMessage id="buttonCreateQRCodeDoctorLabel" /></button>
            </div>
    )
}

export default MedecinPage