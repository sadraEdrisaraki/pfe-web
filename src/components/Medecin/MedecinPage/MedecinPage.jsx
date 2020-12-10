import React, {useRef, useState, useEffect, useContext} from "react"
import { useReactToPrint } from "react-to-print"
import { FormattedMessage } from "react-intl";
import {v4 as uuidv4} from "uuid"

import "./assets/style.css"

import QRCodeContext from "contexts/QRCodeContext"

import QRcodeItemMed from "components/SharedComponents/QRCodeItem/QRcodeItemMed"

const MedecinPage = () => {

    const [id, setId] = useState("")

    const{
        createQRcodeMed
    } = useContext(QRCodeContext)

    useEffect(() => {
        let idTemp = uuidv4()
        setId(idTemp)
    }, [])

    const handleClick = () => {
        createQRcodeMed(id)
        handlePrint()
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => {
            let idTemp = uuidv4()
            setId(idTemp)
        }
    })

    return (
        <div className="medecin-page-container">
            <div className="qrcode-generated-med" onClick={handleClick}>
                <QRcodeItemMed ref={componentRef} id={id}/>
            </div>
            <button className="btn-sub" onClick={handleClick}><FormattedMessage id="buttonCreateQRCodeDoctorLabel" /></button>
            </div>
    )
}

export default MedecinPage