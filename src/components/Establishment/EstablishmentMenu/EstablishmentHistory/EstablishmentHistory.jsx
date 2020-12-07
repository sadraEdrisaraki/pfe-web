import React, {useState} from "react"
import { useReactToPrint }  from "react-to-print"
import "./assets/style.css"

import EstablishmentHistoryItem from "components/Establishment/EstablishmentMenu/EstablishmentHistory/EstablishmentHistoryItem"

const EstablishmentHistory = ({listeItems}) => {

    const [filter , setFilter] = useState("")

    const handleChangeSearch = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div className="history-form-container">
            <div className="search-container">
                Search : <input type="text" className="searc-text" onChange={handleChangeSearch}></input>
            </div>
            {listeItems.filter(function(item){
                if(  (item.name != undefined && item.name.includes(filter)) || (item.description != undefined && item.description.includes(filter))){
                    return true;
                }
            }).map(item => (
                <EstablishmentHistoryItem key={item.qrCodeID} id={item.qrCodeID} name={item.name} description={item.description} />
            ))}
        </div>
    )
}

export default EstablishmentHistory