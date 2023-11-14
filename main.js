function rand(min, max) {
    min = Math.ceil(1);
    max = Math.floor(8);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aleatorio() {
    var num = rand(1, 8);
    const imagem = document.querySelector("img")
    if (num == 1) {
        imagem.setAttribute("src", "img1sombra.jpg.png")
    }
    if (num == 2) {
        imagem.setAttribute("src", "img2sombra.png")
    }
    if (num == 3) {
        imagem.setAttribute("src", "img3sombra.jpg.png")
    }
    if (num == 4) {
        imagem.setAttribute("src", "img4sombra.jpg.png")
    }
    if (num == 5) {
        imagem.setAttribute("src", "img5sombra.jpg.png")
    }
    if (num == 6) {
        imagem.setAttribute("src", "img6sombra.jpg.png")
    }
    if (num == 7) {
        imagem.setAttribute("src", "img7sombra.jpg.png")
    }
    if (num == 8) {
        imagem.setAttribute("src", "img8.jpg.png")
    }
    else { }
}
//arrastar a imagem
function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


function drag1(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag2(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag3(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag4(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag5(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag6(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag7(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag8(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}









