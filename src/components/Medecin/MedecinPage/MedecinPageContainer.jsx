import React, {useContext} from "react"

import MedecinPage from "./MedecinPage"
import QRCodeContext from "contexts/QRCodeContext"

const MedecinPageContainer = () => {

    const {
        createQRcodeMed
    } = useContext(QRCodeContext)

    const createQR = () => {
        createQRcodeMed()
    }

    return(
        <MedecinPage 
            createQR={createQR} 
        />
    )
}

export default MedecinPageContainer