import React, { useState, useRef, useContext } from "react"
import { FormattedMessage } from "react-intl";
import {v4 as uuidv4} from "uuid"
import { useReactToPrint }  from "react-to-print"

import qrOverAnimation from "./assets/qrOverAnimation.js"
import qrOutAnimation from "./assets/qrOutAnimation.js"
import "./assets/style.css"

import QRcodeItemEst from "components/SharedComponents/QRCodeItem/QRcodeItemEst"
import QRCodeContext from "contexts/QRCodeContext"

const EstablishmentGenerateQR = () => {



    const [name , setName] = useState("")
    const [description , setDescription] = useState("")

    const{
        generateQRcodeIdEst,
        createQRcodeEst
    } = useContext(QRCodeContext)

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleClick = () => {
        createQRcodeEst(name,description)
        generateQRcodeIdEst()
        setName("")
        setDescription("")
        handlePrint()
        
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div className="generate-form-container">
            <div className="qrcode-generated" onClick={handleClick} onMouseOver={qrOverAnimation} onMouseOut={qrOutAnimation}>
                <QRcodeItemEst ref={componentRef}/>
            </div>
            
            <div className="form-container">
                <label className="label-generate">
                <FormattedMessage id="nameInputLabel" />
                    <input type="text" className="input-name form-input" onChange={handleChangeName} value={name} />
                </label>
                <br/>
                <label className="label-generate">
                    <FormattedMessage id="descriptionInputLabel" />
                    <br/>
                    <input type="text" className="input-desc form-input" onChange={handleChangeDescription} value={description}/>
                </label>               
                <br/>
                <br/>
                <br/>
                <button className="btn-generateqr" onClick={handleClick}><FormattedMessage id="buttonSubmitQRCodeFormLabel" /></button>
            </div>
        </div>
    )
}

export default EstablishmentGenerateQR