import React, {useRef, useState, useEffect, useContext} from "react"
import { useReactToPrint }  from "react-to-print"
import QRCodeContext from "contexts/QRCodeContext"
import "./assets/style.css"

import QRcodeItemMed from "components/SharedComponents/QRCodeItem/QRcodeItemMed"

const MedecinPage = ({createQR}) => {

    const{
        generateQRcodeIdMed
    } = useContext(QRCodeContext)

    useEffect(() => {
        generateQRcodeIdMed()
    }, [])

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
                <QRcodeItemMed ref={componentRef}/>
            </div>
        </div>
    )
}

export default MedecinPage