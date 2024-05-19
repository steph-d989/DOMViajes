const cuerpoBody = document.querySelector("main");
const sectionTitulo = cuerpoBody.firstElementChild;
sectionTitulo.setAttribute('id', 'titulo');
const sectionFooter = cuerpoBody.lastElementChild;
sectionFooter.setAttribute('id', 'piePagina');
const sectionCuerpo = sectionFooter.previousElementSibling;
sectionCuerpo.setAttribute('id', 'cuerpo')

let divCuerpo = document.createElement('div');
sectionCuerpo.appendChild(divCuerpo)
divCuerpo.setAttribute('id', 'galeria');

let bodyHead = cuerpoBody.previousElementSibling;
bodyHead.setAttribute('id', 'encabezadoPagina');

let divPiePagina = document.createElement('div');
piePagina.appendChild(divPiePagina);
divPiePagina.setAttribute('id', 'pie')

let divTitulo = document.createElement('div')
titulo.appendChild(divTitulo);
divTitulo.setAttribute('id', 'imagenEncabezado');

//Array imagenes

let arrayEncabezado = [
    ['./assets/1.jpg', 'Portada 1'],
    ['./assets/2.jpg', 'Portada 2'],
    ['./assets/3.jpg', 'Portada 3'],
    ['./assets/4.jpg', 'Portada 4'],
    ['./assets/5.jpg', 'Portada 5'],
    ['./assets/6.jpg', 'Portada 6'],
    ['./assets/8.jpg', 'Portada 8']];

let arrayViajes = [
    ['./assets/viajes-1.jpg', '<span>Viajes 1</span>', 'Mujer en amaca y palmera', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed. </p>'],
    ['./assets/viajes-2.jpg', '<span>Viajes 2</span>', 'Muelle con cabaña', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed.</p>'],
    ['./assets/viajes-3.jpg', '<span>Viajes 3</span>', 'Identificador de ubicacion ciudades', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed.</p>'],
    ['./assets/viajes-4.jpg', '<span>Viajes 4</span>', 'Ciudad a las orillas del lago', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed.</p>'],
    ['./assets/viajes-5.jpg', '<span>Viajes 5</span>', 'Casona con puente y rio', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed. </p>'],
    ['./assets/viajes-6.jpg', '<span>Viajes 6</span>', 'Formacion rocosa, tunel con pista', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed. </p>'],
    ['./assets/viajes-7.jpg', '<span>Viajes 7</span>', 'Mujer en amaca y pal', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed.</p>']];


let eventoTitulo = document.getElementById('imagenEncabezado');
let figureTitulo = document.createElement('figure');
let imgTitulo = document.createElement('img');

eventoTitulo.appendChild(figureTitulo);
figureTitulo.appendChild(imgTitulo);
imgTitulo.setAttribute('src', arrayEncabezado[0][0]);
imgTitulo.setAttribute('alt', arrayEncabezado[0][1]);

eventoTitulo.addEventListener('click', cambiarPortada)
eventoViaje.addEventListener('mouseover', cambiarGaleria)

function cambiarPortada() {

    for (let i = 0; i < arrayEncabezado.length; i++) {
        let numeroRandom = Math.floor(Math.random() * (arrayEncabezado.length - 1))
        imgTitulo.setAttribute('src', arrayEncabezado[numeroRandom][0]);
        imgTitulo.setAttribute('alt', arrayEncabezado[numeroRandom][1]);
    }
}

function cambiarGaleria(){
    let divGaleria = document.createElement('div');
    for(let i=0; i<arrayViajes.length; i++){
    divGaleria.innerHTML = arrayViajes[i][1]
}
}

if (divCuerpo) {
    for (let i = 0; i < arrayViajes.length; i++) {
        let viajesImgFigure = document.createElement("figure");
        let viajesImg = document.createElement("img");
        let viajesFigCaption = document.createElement("figcaption");

        viajesImgFigure.setAttribute('class', 'foto');
        viajesImgFigure.innerHTML = arrayViajes[i][1];
        viajesImg.setAttribute('src', arrayViajes[i][0]);
        viajesImg.setAttribute('alt', arrayViajes[i][2]);
        viajesImg.setAttribute('class','viaje')
        viajesFigCaption.innerHTML = arrayViajes[i][3];

        divCuerpo.appendChild(viajesImgFigure);
        viajesImgFigure.appendChild(viajesImg);
        viajesImgFigure.appendChild(viajesFigCaption)
    }
}

let destinations = [
    ['optgroup1', 'Colombia', 'Colombia'],
    ['optgroup1', 'Peru', 'Perú'],
    ['optgroup2', 'España', 'España'],
    ['optgroup2', 'Francia', 'Francia'],
    ['optgroup3', 'Japon', 'Japón'],
    ['optgroup3', 'China', 'China'],
    ['optgroup4', 'Egipto', 'Egipto'],
    ['optgroup4', 'Nigeria', 'Nigeria'],
    ['optgroup5', 'Australia', 'Australia'],
    ['optgroup5', 'NuevaZelanda', 'Nueva Zelanda']
]

let formPie = document.createElement('form');
formPie.setAttribute('id', 'formulario')
formPie.setAttribute('action', '#')
let labelPie = document.createElement('label');
let option = document.createElement('option');
option.setAttribute('value', '');
option.innerHTML = 'Elige tu proximo destino...'
labelPie.setAttribute('id', 'labelForm');
labelPie.setAttribute('for', 'destinations');
let selectPie = document.createElement('select');
selectPie.setAttribute('id', 'selectForm')
selectPie.setAttribute('name', 'destinations')
selectPie.appendChild(option);

let optgroup1 = document.createElement('optgroup')
optgroup1.setAttribute('label', 'America')
optgroup1.innerHTML = 'America';
let optgroup2 = document.createElement('optgroup')
optgroup2.setAttribute('label', 'Europa')
optgroup2.innerHTML = 'Europa';
let optgroup3 = document.createElement('optgroup')
optgroup3.setAttribute('label', 'Asia')
optgroup3.innerHTML = 'Asia';
let optgroup4 = document.createElement('optgroup')
optgroup4.setAttribute('label', 'Africa')
optgroup4.innerHTML = 'Africa';
let optgroup5 = document.createElement('optgroup')
optgroup5.setAttribute('label', 'Oceania')
optgroup5.innerHTML = 'Oceania';

divPiePagina.appendChild(formPie);
formPie.appendChild(labelPie);
formPie.appendChild(selectPie);
selectPie.appendChild(optgroup1);
selectPie.appendChild(optgroup2);
selectPie.appendChild(optgroup3);
selectPie.appendChild(optgroup4);
selectPie.appendChild(optgroup5);

if (formPie) {
    for (let i = 0; i < destinations.length; i++) {
        let option;
        if (destinations[i][0] === 'optgroup1') {
            option = document.createElement('option');
            option.setAttribute('value', destinations[i][1]);
            option.innerHTML = destinations[i][2];
            optgroup1.appendChild(option);
        } else if (destinations[i][0] === 'optgroup2') {
            option = document.createElement('option');
            option.setAttribute('value', destinations[i][1]);
            option.innerHTML = destinations[i][2];
            optgroup2.appendChild(option);
        } else if (destinations[i][0] === 'optgroup3') {
            option = document.createElement('option');
            option.setAttribute('value', destinations[i][1]);
            option.innerHTML = destinations[i][2];
            optgroup3.appendChild(option);
        } else if (destinations[i][0] === 'optgroup4') {
            option = document.createElement('option');
            option.setAttribute('value', destinations[i][1]);
            option.innerHTML = destinations[i][2];
            optgroup4.appendChild(option);
        } else {
            option = document.createElement('option');
            option.setAttribute('value', destinations[i][1]);
            option.innerHTML = destinations[i][2];
            optgroup5.appendChild(option);
        }
    }
}