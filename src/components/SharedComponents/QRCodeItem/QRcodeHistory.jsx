import React from "react"
import QRCode from "qrcode-react"

class QRcodeHistory extends React.Component{

    constructor(props){
        super(props)
        
    }
    
    render(){
        if(localStorage.getItem("qr_id_est") !== undefined){
            return(
                <div>
                    <QRCode  
                        includeMargin="true" 
                        value={this.props.id}
                        size={this.props.size}
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

export default QRcodeHistory