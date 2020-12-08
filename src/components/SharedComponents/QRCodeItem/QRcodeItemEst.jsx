import React, { Component } from "react"
import QRCode from "qrcode-react"

class QRcodeItemEst extends React.Component{

    
    render(){
        if(localStorage.getItem("qr_id_est") !== undefined){
            return(
                <div>
                    <QRCode  
                        includeMargin="true" 
                        value={localStorage.getItem("qr_id_est")}
                        size="384"
                        />
                </div>
            )
        }
        else{
            return(<div>
                
            </div>)
        }
        
    }
}

export default QRcodeItemEst