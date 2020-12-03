import React , {useState, useEffect} from "react"
import "./style.css"
import QRcode from "qrcode-react"
import qrOverAnimation from "./assets/qrOverAnimation.js"
import qrOutAnimation from "./assets/qrOutAnimation.js"
import {v4 as uuidv4} from "uuid"

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
        let tempId = uuidv4()
        setId(tempId)
        setName("")
        setDescription("")
    }

    return (
        <div className="generate-form-container">
            <div className="qrcode-generated" onClick={handleClick} onMouseOver={qrOverAnimation} onMouseOut={qrOutAnimation}>
                <QRcode includeMargin="true" value={id} className="qrcode"/>
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