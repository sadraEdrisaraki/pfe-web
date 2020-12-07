import React, {useContext} from "react"
import EstablishmentHistory from "components/Establishment/EstablishmentMenu/EstablishmentHistory/EstablishmentHistory"
import QRCodeContext from "contexts/QRCodeContext"

const EstablishmentHistoryContainer = () => {

    const {
        getAllQR
    } = useContext(QRCodeContext)

    return (
        <EstablishmentHistory listeItems={getAllQR()} />
    )
}

export default EstablishmentHistoryContainer