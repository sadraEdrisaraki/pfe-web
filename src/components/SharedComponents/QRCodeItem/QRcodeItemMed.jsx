import React from "react"
import QRCode from "qrcode-react"

class QRcodeItemMed extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        if(localStorage.getItem("qr_id_med") !== undefined){
            return(
                <div>
                    <QRCode  
                        includeMargin="true" 
                        value={this.props.id}
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