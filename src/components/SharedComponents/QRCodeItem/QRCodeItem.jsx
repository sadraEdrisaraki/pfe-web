import React from "react"
import QRCode from "qrcode-react"

class QRCodeItem extends React.Component{

    render(){
        console.log("localstorage = " + localStorage.getItem("id"))
        if(localStorage.getItem("id") !== null){
            return(
                <div>
                    <QRCode  
                        includeMargin="true" 
                        value={localStorage.getItem("id")}
                     />
                </div>
                
            )
        }
        return(
            null
        )
    }
    
}

export default QRCodeItem