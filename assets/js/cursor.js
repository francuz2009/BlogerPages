let mouseCursor = document.querySelector(".cursor")

window.addEventListener("mousemove", cursor)

function cursor(e) {
    mouseCursor.style.top = e.clientY + "px"
    mouseCursor.style.left = e.clientX + "px"

}
