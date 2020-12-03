// @ts-nocheck

const clickGenerateAnimation = () => {
    var btn = document.getElementsByClassName("est-generateqr-btn")[0]
    var formContainer = document.getElementsByClassName("generate-form-container")[0]
    var qrcode = document.getElementsByClassName("qrcode-generated")[0]
    btn.style.top = "100%"
    formContainer.style.height = "100%"
    qrcode.style.opacity = "1"
}

export default clickGenerateAnimation