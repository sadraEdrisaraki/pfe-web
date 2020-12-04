// @ts-nocheck

const clickHistoryAnimation = () => {
    var btn = document.getElementsByClassName("est-qrhistory-btn")[0]
    var formContainer = document.getElementsByClassName("history-form-container")[0]
    btn.style.top = "100%"
    formContainer.style.height = "100%"

    btn = document.getElementsByClassName("est-generateqr-btn")[0]
    formContainer = document.getElementsByClassName("generate-form-container")[0]
    var qrcode = document.getElementsByClassName("qrcode-generated")[0]
    btn.style.top = "0%"
    formContainer.style.height = "0%"
    qrcode.style.opacity = "0"

}

export default clickHistoryAnimation