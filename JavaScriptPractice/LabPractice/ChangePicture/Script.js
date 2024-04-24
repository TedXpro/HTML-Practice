const penguin = document.getElementById("toPenguin");
const image = document.getElementById("image");
const koala = document.getElementById("toKoala");

const changeToPenguin = () => {
    image.src = "penguin.jpg";
}

const changeToKoala = () => {
    image.src = "koala.jpg";
}

koala.addEventListener("click", changeToKoala);
penguin.addEventListener("click", changeToPenguin);