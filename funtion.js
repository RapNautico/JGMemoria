document.addEventListener("DOMContentLoaded", function () {
    let images = [
        {img: "img/tanjiro.png",
        name: "tanjiro"
    },
        {img: "img/serpiente.png",
        name: "serpiente"
    },
        {img: "img/rengoku.png",
        name: "rengoku"
    },
        {img: "img/otro.png",
        name: "otro"
    },
        {img: "img/netzuko.png",
        name: "netzuko"
    },
        {img: "img/corazon.png",
        name: "corazon"
    },
        {img: "img/tanjiro.png",
        name: "tanjiro"
    },
        {img: "img/serpiente.png",
        name: "serpiente"
    },
        {img: "img/rengoku.png",
        name: "rengoku"
    },
        {img: "img/otro.png",
        name: "otro"
    },
    {img: "img/netzuko.png",
    name: "netzuko"
},
{img: "img/corazon.png",
name: "corazon"
}
]

let tablero = document.querySelector(".tablero");
let imgElegida = [];
let imgElegidaID = [];
    let aciertos = document.querySelector(".conteo");
    let conteo = [];
    
    //funcion para colocar las imagenes en el html
    function crearTablero() {
        images.sort( ()=>0.5 - Math.random());
        
        for (let i = 0; i < images.length; i++) {
            var img = document.createElement("img");
            img.setAttribute("data-id", i);
            img.setAttribute("src", "img/chc-interrogante.png");
            img.setAttribute("width", "100px");
            img.setAttribute("height", "150px");
            tablero.appendChild(img);
            img.addEventListener("click", descubrirImagen);
        }
    }

    function descubrirImagen(){
        let imgClick = this.getAttribute("data-id");
        imgElegida.push(images[imgClick].name);
        imgElegidaID.push(imgClick);
        this.setAttribute("src", images[imgClick].img);

        if (imgElegida.length === 2) {
            setTimeout(compararImagenes, 300);  
        }
    }

    
    function compararImagenes() {
        let todasLasImg = document.querySelectorAll("img");
    
        let opcion1 = imgElegidaID[0];
        let opcion2 = imgElegidaID[1]; 
        
        if (imgElegida[0] === imgElegida[1]) {
            alert("buena mi prro");
            console.log(todasLasImg[opcion1] +" y "+ opcion2);
            
            todasLasImg[opcion1].setAttribute("src", "img/chulo-naranja.png");
            todasLasImg[opcion2].setAttribute("src", "img/chulo-naranja.png");
            conteo.push(imgElegida);
        }
        else {
            alert("sigue intentando");
            todasLasImg[opcion1].setAttribute("src", "img/chc-interrogante.png");
            todasLasImg[opcion2].setAttribute("src", "img/chc-interrogante.png");
        }

        imgElegida = [];
        imgElegidaID = [];
        aciertos.textContent = conteo.length;

        if (conteo.length === 6){
            aciertos.textContent = " Ganaste ";
            conteo.length = 0;
            location.reload();
        }
    }
    crearTablero();
});