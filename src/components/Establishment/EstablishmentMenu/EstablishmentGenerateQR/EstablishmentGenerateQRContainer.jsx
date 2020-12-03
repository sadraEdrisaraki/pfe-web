import React, {useState} from "react"
import EstablishmentGenerateQR from "components/Establishment/EstablishmentMenu/EstablishmentGenerateQR/EstablishmentGenerateQR"
import QRCodeContext from "contexts/QRCodeContext"

const EstablishmentGenerateQRContainer = () => {

    const createQR = (id, name, description) => {
        console.log(id, name , description)
    }

    return (
        <EstablishmentGenerateQR createQR={createQR}/>
    )
}

export default EstablishmentGenerateQRContainer