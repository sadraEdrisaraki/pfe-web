import React, {useState} from "react"
import { useReactToPrint } from "react-to-print"
import { FormattedMessage } from "react-intl";
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
            <label >
            <FormattedMessage id="buttonSearchQRCodeLabel" />
              
                    <input type="text" className="searc-text" onChange={handleChangeSearch}></input>
                    </label>
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