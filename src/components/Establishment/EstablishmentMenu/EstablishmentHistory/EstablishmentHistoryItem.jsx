import React, {useRef, useState} from "react"
import { useReactToPrint } from "react-to-print"
import QRcodeHitory from "components/SharedComponents/QRCodeItem/QRcodeHistory"

const EstablishmentHistoryItem = ({id , name , description}) => {

    const [size , setSize] = useState(256)

    const handleClick = () => {
        console.log(id)
        handlePrint()
    }

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div className="item-container" onClick={handleClick}>
            <div className="item-qr">
                <QRcodeHitory id={id} ref={componentRef} size={size}/>
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