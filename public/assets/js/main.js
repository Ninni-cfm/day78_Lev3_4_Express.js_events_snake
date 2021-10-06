function onMouseOver(div) {
    div.style.backgroundColor = "red";
    setTimeout(() => {
        div.style.backgroundColor = "lightblue";
    }, 500);
}