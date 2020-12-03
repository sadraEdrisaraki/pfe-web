// @ts-nocheck
const generateAnimationZoomIn = () => {
    var btn = document.getElementsByClassName("est-qrhistory-btn")[0]
    var bg = document.getElementsByClassName("est-qrhistory-btn-bg")[0]
    var title = document.getElementsByClassName("est-qrhistory-title")[0]
    bg.style.filter = "blur(0px)"
    bg.style.transform = "scale(1.2)"
    title.style.top = "72%"
    title.style.textDecoration= "underline";
    animationZoomOut(btn, bg , title)
}

const animationZoomOut = (btn , bg , title) => {
    btn.onmouseout = function() {
        bg.style.filter = "blur(8px)"
        bg.style.transform = "scale(1)"
        title.style.top = "25%"
        title.style.textDecoration= "none";
    }
}

export default generateAnimationZoomIn