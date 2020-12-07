import React from "react"
import "./assets/styles.css"

const AlertMessage = ({type , message}) => {

    if(type === "error"){
        return(
            <div className="error-alert-box">
                <p className="message">{message}</p>
            </div>
        )
    }
    else if(type === "success"){
        return(
            <div className="success-alert-box">
                <p className="message">{message}</p>
            </div>
        )
    }
    else{
        return(<div/>)
    }
}

export default AlertMessage