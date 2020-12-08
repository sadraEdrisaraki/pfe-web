import React, {useRef} from "react"
import { useReactToPrint }  from "react-to-print"

import QRcodeItem from "components/SharedComponents/QRCodeItem/QRCodeItem"

const MedecinPage = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div className="medecin-page-container">
            <div className="qrcode-generated" onClick={handlePrint}>
                <QRcodeItem ref={componentRef}/>
            </div>
        </div>
    )
}