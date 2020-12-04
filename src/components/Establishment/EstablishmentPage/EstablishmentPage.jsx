import React from "react"
import EstablishmentMenu from "components/Establishment/EstablishmentMenu/EstablishmentMenu"
import "./style.css"
import AlertMessage from "components/SharedComponents/AlertMessage/AlertMessage"

const EstablishmentPage = () => {

    return(
        <div className="establishment-page">
            <EstablishmentMenu/>
            <AlertMessage type="error" message="pls try again"/>
        </div>
        
    )

}


export default EstablishmentPage