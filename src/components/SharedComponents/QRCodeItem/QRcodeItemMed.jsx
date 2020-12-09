import React from "react"
import QRCode from "qrcode-react"

class QRcodeItemMed extends React.Component{

    render(){
        if(localStorage.getItem("qr_id_med") !== undefined){
            return(
                <div>
                    <QRCode  
                        includeMargin="true" 
                        value={localStorage.getItem("qr_id_med")}
                        size="384"
                        />
                </div>
            )
        }
        else{
            console.log("hello from class , no localstorage" + localStorage.getItem("qr_id_med"))
            return(<div>

            </div>)
        }
    }
}

export default QRcodeItemMed