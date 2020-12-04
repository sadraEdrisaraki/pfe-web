// @ts-nocheck

const clickGenerateAnimation = () => {

    // show generateqr content page
    var btn = document.getElementsByClassName("est-generateqr-btn")[0]
    var formContainer = document.getElementsByClassName("generate-form-container")[0]
    var qrcode = document.getElementsByClassName("qrcode-generated")[0]
    btn.style.top = "100%"
    formContainer.style.height = "100%"
    qrcode.style.opacity = "1"

    // Remove history content and show history btn
    var btn = document.getElementsByClassName("est-qrhistory-btn")[0]
    var formContainer = document.getElementsByClassName("history-form-container")[0]
    btn.style.top = "0%"
    formContainer.style.height = "0%"

}

export default clickGenerateAnimation