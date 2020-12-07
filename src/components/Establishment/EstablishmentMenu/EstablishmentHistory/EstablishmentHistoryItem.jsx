import React from "react"
import QRCode from "qrcode-react"

const EstablishmentHistoryItem = ({id , name , description}) => {

    const handleClick = () => {
        console.log(id)
    }

    return (
        <div className="item-container" onClick={handleClick}>
            <div className="item-qr">
                <QRCode  
                    includeMargin="true" 
                    value={id}
                    size="128"
                />
            </div>
            <h4 className="item-name">
                {name}
            </h4>
            <p className="item-desc">
                {description}
            </p> 
        </div>
    )
}

export default EstablishmentHistoryItem