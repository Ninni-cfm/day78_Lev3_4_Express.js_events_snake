function onMouseOver(div) {
    div.style.backgroundColor = "red";
    setTimeout(() => {
        div.style.backgroundColor = "lightblue";
    }, 500);
}
function onMouseEnter(div) {
    div.style.backgroundColor = "red";
}
function onMouseLeave(div) {
    setTimeout(() => {
        div.style.backgroundColor = "lightblue";
    }, 500);
}