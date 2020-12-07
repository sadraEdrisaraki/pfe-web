import React, {useState} from "react"
import EstablishmentMenu from "components/Establishment/EstablishmentMenu/EstablishmentMenu"
import "./style.css"
import AlertMessage from "components/SharedComponents/AlertMessage/AlertMessage"

const EstablishmentPage = () => {

    const [message , setMessage] = useState("")
    const [messageType , setMessageType ] = useState("")

    const setErrorMessage = (message) => {
        setMessage(message)
        setMessageType("error")
    }

    const setSuccessMessage = (message) => {
        setMessage(message)
        setMessageType("success")
    }

    return(
        <div className="establishment-page">
            <EstablishmentMenu setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage}/>
            <AlertMessage type={messageType} message={message}/>
        </div>
        
    )

}


export default EstablishmentPage