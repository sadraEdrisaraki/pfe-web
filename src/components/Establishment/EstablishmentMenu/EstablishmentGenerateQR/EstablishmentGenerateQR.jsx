import React , {useState, useEffect, useRef} from "react"
import {v4 as uuidv4} from "uuid"
import { useReactToPrint }  from "react-to-print"

import qrOverAnimation from "./assets/qrOverAnimation.js"
import qrOutAnimation from "./assets/qrOutAnimation.js"
import "./style.css"

import QRcodeItem from "components/SharedComponents/QRCodeItem/QRCodeItem"

const EstablishmentGenerateQR = ({createQR}) => {



    const [name , setName] = useState("")
    const [description , setDescription] = useState("")
    const [id , setId] = useState("")

    useEffect(() => {
        let tempId = uuidv4()
        setId(tempId)
    }, [])

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleClick = () => {
        createQR(id,name,description)
        localStorage.setItem("id",id)
        let tempId = uuidv4()
        setId(tempId)
        setName("")
        setDescription("")
        handlePrint()
        
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div className="generate-form-container">
            <div className="qrcode-generated" onClick={handleClick} onMouseOver={qrOverAnimation} onMouseOut={qrOutAnimation}>
                <QRcodeItem ref={componentRef} data={id} />
            </div>
            
            <div className="form-container">
                <input type="text" placeholder="Name (optional)" className="input-name form-input" onChange={handleChangeName} value={name}/>
                <br/>
                <input type="text" placeholder="Description (optional)" className="input-desc form-input" onChange={handleChangeDescription} value={description}/>
                <br/>
                <br/>
                <br/>
                <button className="btn-generateqr" onClick={handleClick}>Create QR</button>
            </div>
        </div>
    )
}

export default EstablishmentGenerateQR