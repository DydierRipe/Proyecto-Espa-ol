"use strict"

let actualSlideShow = 0;

const sucesos = {
    "Destierro": {
        "tittle": "DESTIERRO DEL CID",
        "text": "Después de la falsa acusación de haberse quedado con las parias que fue a recaudar a Sevilla Rodrigo es desterrado de Castilla, por el rey Alfonso VI que se dejó llevar por comentarios mal intencionados debido a esto lo destierra Después de esto Rodrigo abandona vivar y se dirige a burgos donde no es aceptado (acogido).",
        "imgLink": "Multimedia/Destierro.jpeg",
        "imgDesc": "mio cid aceptando su destierro"
    },

    "Companeros": {
        "tittle": "QUIEN LO ACOMPAÑA",
        "text": "Después de ser injustamente desterrado su lugar teniente Martín Antolínez consigue dinero de manera más o menos fraudulenta de los judíos y marcha con Rodrigo de Castilla.",
        "imgLink": "Multimedia/acompanantes.jpg",
        "imgDesc": "El Cid con sus fieles compañeros"
    },

    "Tierra": {
        "tittle": "LA TIERRA QUE DEJO EL CID",
        "text": "Dejo el pueblo de vivar en el que habia nacido, alli dejo su casa abandonada ya que se le habia acusado falsamente de robarle el tributo a la corona pagado por el rey de Sevilla.",
        "imgLink": "Multimedia/cid dejando.webp",
        "imgDesc": "El Cid dejando su tierra"
    },

    "Familia": {
        "tittle": "A QUIEN DEJA",
        "text": "Deja a su esposa y a sus hijas en el monasterio de cardeña, elli tienen todos una conmovedora despedida, les da cien marcos a los que las cuidarian a las tres, luego doña Jimena va a rezarle a su dios (o en otras palabras se va a resumir la biblia entera).",
        "imgLink": "Multimedia/despedida.jpg",
        "imgDesc": "El Cid despidiendose de su familia"
    },

    "Lucha": {
        "tittle": "CONTRA QUIEN LUCHA",
        "text": "La batalla de cuarte entre el Cid Campeador y el Imperio almorávide se desarrolló en las proximidades de las localidades de Mislata y Cuart de Poblet.",
        "imgLink": "Multimedia/lucha.jpg",
        "imgDesc": "El Cid luchando contra los moros"
    },

    "Ganancias": {
        "tittle": "GANANCIAS EN BATALLA",
        "text": "Las tropas del Cid habían logrado una victoria heroica que confirmaba su dominio sobre Valencia y aumentaba la gloria del Cid Campeador.",
        "imgLink": "Multimedia/gloria.jpeg",
        "imgDesc": "El Cid glorificado"
    },

    "Derrota": {
        "tittle": "A QUIEN DERROTA",
        "text": "Reforzadas sus tropas, ataca Huesca y derrota a los moros de Lérida, ayudado por el conde de Barcelona, al que hace prisionero y libera días después. El Cid conquista Valencia y envía nuevo presente al rey castellano, al tiempo que le pide deje ir a su lado a su esposa e hijas. El rey accede.",
        "imgLink": "Multimedia/derrota.png",
        "imgDesc": "El Cid en batalla"
    }
};


const slideshows = ["temario()", 
"poesiaQueEs()", 
"poesiaCaracteristicas()", 
"obraCaracteristicas()", 
"cantarCaracteristicas()", 
"personajes.Cid_Judios()", 
"personajes.Rey_Sobrino()",
"personajes.familia()",
"personajes.otros()",
"Parragraph(sucesos.Destierro.tittle, sucesos.Destierro.text, sucesos.Destierro.imgLink, sucesos.Destierro.imgDesc)",
"Parragraph(sucesos.Companeros.tittle, sucesos.Companeros.text, sucesos.Companeros.imgLink, sucesos.Companeros.imgDesc)",
"Parragraph(sucesos.Tierra.tittle, sucesos.Tierra.text, sucesos.Tierra.imgLink, sucesos.Tierra.imgDesc)",
"Parragraph(sucesos.Familia.tittle, sucesos.Familia.text, sucesos.Familia.imgLink, sucesos.Familia.imgDesc)",
"Parragraph(sucesos.Lucha.tittle, sucesos.Lucha.text, sucesos.Lucha.imgLink, sucesos.Lucha.imgDesc)",
"Parragraph(sucesos.Ganancias.tittle, sucesos.Ganancias.text, sucesos.Ganancias.imgLink, sucesos.Ganancias.imgDesc)",
"Parragraph(sucesos.Derrota.tittle, sucesos.Derrota.text, sucesos.Derrota.imgLink, sucesos.Derrota.imgDesc)"];

const createList = (type, ...elementsText) => {
    const list = document.createElement(type);

    elementsText.forEach(listElement => {
        const li = document.createElement("LI");
        li.textContent = listElement;
        list.appendChild(li);
    });

    return list;
}

const createImageDesc = (text, src) => {
    const container = document.createElement("DIV");
    container.classList.add("image-container");

    const imagen = document.createElement("IMG");
    imagen.src = src;
    imagen.alt = text;

    const imgText = document.createElement("DIV");
    imgText.classList.add("image-container__text");

    const imgTextContainer = document.createElement("H3");
    imgTextContainer.classList.add("image-container__text__content");
    imgTextContainer.innerHTML = text;

    imgText.appendChild(imgTextContainer);

    container.appendChild(imagen);
    container.appendChild(imgText);

    return container;
}

class slideshow {

    static temario()
    {
        
        const modalContent = document.createElement("DIV");


        const tittle = document.createElement("H2");
        tittle.innerHTML = "TEMARIO";
        tittle.style.fontSize = "50px";
        tittle.style.textAlign = "center";

        const themeList = createList("OL",
        "¿Que es la poesia?",
        "Caracteristicas de la obra",
        "Datos sobre la obra",
        "Caracteristicas del cantar",
        "Personajes",
        "Sucesos sobresalientes");
        themeList.style.fontSize = "30px";
        themeList.style.width = "fit-content";
        themeList.style.margin = "20px auto";

        modalContent.appendChild(tittle);
        modalContent.appendChild(themeList);

        
        return modalContent;
    }

    static poesiaQueEs()
    {
        
        const modalContent = document.createElement("DIV");

        const tittle = document.createElement("H2");
        tittle.innerHTML = "¿QUE ES LA POESIA?";
        tittle.style.fontSize = "50px";
        tittle.style.textAlign = "center";

        const explication = document.createElement("P");
        explication.innerHTML = "La poesía trata de un género literario apreciado como una expresión de belleza o sentimiento artístico a través de la palabra en forma de verso o prosa."
        explication.style.fontSize = "30px";

        const explicationAdd = document.createElement("DIV");
        explicationAdd.innerHTML = "En la antigüedad, estas obras estaban orientadas a relatar las hazañas y proezas de los guerreros en los combates. En la edad media, las obras románticas cobraron mayor relevancia. En la actualidad han surgido otros temas de inspiración como los derechos humanos y el medio ambiente."
        explicationAdd.style.fontSize = "30px";
        explicationAdd.style.marginTop = "40px";
        explicationAdd.style.width = "50%";
        explicationAdd.style.float = "left";

        const image = document.createElement("IMG");
        image.src = "Multimedia/imagen Poesia 2.jpeg";
        image.style.width = "35%";
        image.style.height = "35%";
        image.style.float = "right";
        image.style.marginRight = "80px"


        modalContent.appendChild(tittle);
        modalContent.appendChild(explication);
        modalContent.appendChild(explicationAdd);
        modalContent.appendChild(image);

        
        return modalContent;
    }

    static poesiaCaracteristicas()
    {
        
        const modalContent = document.createElement("DIV");

        const tittle = document.createElement("H2");
        tittle.innerHTML = "CARACTERISTICAS DE LA POESIA";
        tittle.style.fontSize = "50px";
        tittle.style.textAlign = "center";

        const charList = createList("UL",
        "Se puede escribir en verso o en prosa",
        "Tiene ritmo y rima",
        "Hace uso de los elementos de valor simbólico",
        "Hace uso de las figuras literarias (metáfora)",
        "Hace uso de lenguaje figurado",
        "Aborda cualquier temática",
        "Un genero complejo");
        charList.style.fontSize = "30px";
        charList.style.width = "fit-content";
        charList.style.float = "left";
        charList.style.marginLeft = "30px";

        const image = document.createElement("IMG");
        image.src = "Multimedia/imagen Poesia.jpeg";
        image.style.width = "25%";
        image.style.height = "25%";
        image.style.float = "right";
        image.style.marginRight = "60px";

        modalContent.appendChild(tittle);
        modalContent.appendChild(charList);
        modalContent.appendChild(image);
        
        return modalContent;
    }

    static obraCaracteristicas()
    {
        
        const modalContent = document.createElement("DIV");

        const tittle = document.createElement("H2");
        tittle.innerHTML = "CARACTERISTICAS SOBRE LA OBRA";
        tittle.style.fontSize = "50px";
        tittle.style.textAlign = "center";

        const explication = document.createElement("P");
        explication.innerHTML = "Emplea la rima asonante y el metro irregular, los versos pueden llegar a tener hasta 20 silabas y quedan divididos en dos hemistiquios. La rima asonante permite la agrupación de los versos en tiradas más o menos largas con la misma rima (monorrimas)."
        explication.style.fontSize = "30px";

        const explicationAdd1 = document.createElement("DIV");
        explicationAdd1.innerHTML = "Hemistiquio: técnica usada para dividir un verso en dos partes mediante una pausa llamada censura."
        explicationAdd1.style.fontSize = "30px";
        explicationAdd1.style.marginTop = "20px";
        explicationAdd1.style.width = "55%";
        explicationAdd1.style.float = "left";

        const explicationAdd2 = document.createElement("DIV");
        explicationAdd2.innerHTML = "Esta obra tiene de genero la poesía, trata sobre Rodrigo Díaz de vivar, es ambientada en el siglo XI, en España."
        explicationAdd2.style.fontSize = "30px";
        explicationAdd2.style.marginTop = "20px";
        explicationAdd2.style.width = "55%";
        explicationAdd2.style.float = "left";

        const image = document.createElement("IMG");
        image.src = "Multimedia/imagen_caballero.png";
        image.style.width = "25%";
        image.style.height = "25%";
        image.style.float = "right";
        image.style.marginRight = "120px";
        image.style.marginTop = "-100px";

        modalContent.appendChild(tittle);
        modalContent.appendChild(explication);
        modalContent.appendChild(explicationAdd1);
        modalContent.appendChild(explicationAdd2);
        modalContent.appendChild(image);

        
        return modalContent;   
    }

    static cantarCaracteristicas()
    {
        
        const modalContent = document.createElement("DIV");

        const tittle = document.createElement("H2");
        tittle.innerHTML = "CARACTERISTICAS SOBRE EL PRIMER CANTAR";
        tittle.style.fontSize = "50px";
        tittle.style.textAlign = "center";

        const explication = document.createElement("DIV");
        explication.innerHTML = "Este cantar habla sobre como el cid es desterrado, pierde su honra. Abandona a su familia (a doña Jimena, su esposa y a sus hijas, doña Elvira y doña Sol) y todas sus posesiones. Participa en una serie de batallas, todas destinadas a recuperar el honor perdido."
        explication.style.fontSize = "30px";
        explication.style.marginTop = "20px";
        explication.style.width = "55%";
        explication.style.float = "left";

        const image = document.createElement("IMG");
        image.src = "Multimedia/Cid-1.jpg";
        image.style.width = "35%";
        image.style.height = "35%";
        image.style.float = "right";
        image.style.marginRight = "60px";

        modalContent.appendChild(tittle);
        modalContent.appendChild(explication);
        modalContent.appendChild(image);

        return modalContent;
    }

    static tittleSucesos()
    {
        const modalContent = document.createElement("DIV");

        const tittle = document.createElement("H2");
        tittle.innerHTML = "SUCESOS IMPORTANTES";
        tittle.style.textAlign = "center";
        tittle.style.height = "object-fit";
        tittle.style.fontSize = "50px";
        tittle.style.marginTop = "300px"

        modalContent.appendChild(tittle);

        return modalContent;
    }

    static Parragraph(doctittle, text, imgLink, imgDesc)
    {
        const modalContent = document.createElement("DIV");

        const tittle = document.createElement("H2");
        tittle.innerHTML = doctittle;
        tittle.style.fontSize = "50px";
        tittle.style.textAlign = "center";

        const explication = document.createElement("DIV");
        explication.innerHTML = text;
        explication.style.fontSize = "30px";
        explication.style.marginTop = "20px";
        explication.style.width = "55%";
        explication.style.float = "left";

        const image = createImageDesc(imgDesc, imgLink);
        image.style.width = "35%";
        image.style.height = "35%";
        image.style.float = "right";
        image.style.marginRight = "60px";

        modalContent.appendChild(tittle);
        modalContent.appendChild(explication);
        modalContent.appendChild(image);

        return modalContent;
    }

}

class personajes {
    static Cid_Judios() {
        const modalContent = document.createElement("DIV");
        modalContent.style.display = "flex";
        modalContent.style.flexDirection = "column";

        const tittle = document.createElement("H2");
        tittle.innerHTML = "Personajes:";
        tittle.style.fontSize = "50px";
        tittle.style.textAlign = "center";
        tittle.style.width = "100%"

        const Content = document.createElement("DIV");
        Content.style.display = "flex";

        const Cid = document.createElement("DIV");
        Cid.style.width = "50%";

        const CidText = document.createElement("P");
        CidText.innerHTML = "<strong>Rodrigo Diaz (Cid Campeador):</strong> Personaje principal de la historia al cual se le llamaba comúnmente Mio Cid o el que nació a buena hora.";
        CidText.style.fontSize = "30px";
        CidText.style.marginTop = "20px";
        CidText.style.width = "55%";
        CidText.style.float = "left";

        const cidImage = document.createElement("IMG");
        cidImage.src = "Multimedia/Rodigo Diaz.jpg";
        cidImage.style.width = "35%"
        cidImage.style.height = "100%"

        const Judios = document.createElement("DIV");
        Judios.style.width = "50%";
        Judios.style.display = "flex";
        Judios.style.flexDirection = "column";
        Judios.style.float = "right";

        const JudiosText = document.createElement("P");
        JudiosText.innerHTML = "<strong>Raquel y Vidas:</strong> Judíos que fueron engañados por Mio Cid y su sobrino (Martín Antolínez).";
        JudiosText.style.fontSize = "30px";
        JudiosText.style.marginTop = "20px";
        JudiosText.style.width = "55%";
        JudiosText.style.float = "left";

        const JudiosImage = document.createElement("IMG");
        JudiosImage.src = "Multimedia/arca.jpg";
        JudiosImage.style.width = "50%"
        JudiosImage.style.height = "50%"

        Cid.appendChild(CidText);
        Cid.appendChild(cidImage);

        Judios.appendChild(JudiosText);
        Judios.appendChild(JudiosImage);

        Content.appendChild(Cid);
        Content.appendChild(Judios);

        modalContent.appendChild(tittle);
        modalContent.appendChild(Content);


        return modalContent;
    }

    static Rey_Sobrino() {
        const modalContent = document.createElement("DIV");
        modalContent.style.display = "flex";

        const Rey = document.createElement("DIV");
        Rey.style.width = "50%";
        Rey.style.display = "flex";
        Rey.style.flexDirection = "column";

        const ReyText = document.createElement("P");
        ReyText.innerHTML = "<strong>Rey Alfonso VI:</strong> Rey de castilla el cual expatrio a Mio Cid prohibió cualquier comercio con el mismo.";
        ReyText.style.fontSize = "30px";
        ReyText.style.marginTop = "20px";
        ReyText.style.width = "55%";
        ReyText.style.float = "left";

        const ReyImage = document.createElement("IMG");
        ReyImage.src = "Multimedia/alfonsoRey.jpg";
        ReyImage.style.width = "35%"
        ReyImage.style.height = "50%"

        const Martin = document.createElement("DIV");
        Martin.style.width = "50%";
        Martin.style.display = "flex";
        Martin.style.flexDirection = "column";
        Martin.style.float = "right";

        const MartinText = document.createElement("P");
        MartinText.innerHTML = "<strong>Martin antonilez:</strong> El sobrino de Mio Cid que le ayudo a estafar a los judíos Raquel y Vidas para financiar la primera salida del Cid.";
        MartinText.style.fontSize = "30px";
        MartinText.style.marginTop = "20px";
        MartinText.style.width = "55%";
        MartinText.style.float = "left";

        const MartinImage = document.createElement("IMG");
        MartinImage.src = "Multimedia/Martin Antolinez.jpg";
        MartinImage.style.width = "40%"
        MartinImage.style.height = "50%"

        Rey.appendChild(ReyText);
        Rey.appendChild(ReyImage);

        Martin.appendChild(MartinText);
        Martin.appendChild(MartinImage);

        modalContent.appendChild(Rey);
        modalContent.appendChild(Martin);

        return modalContent;
    }

    static familia()
    {
        const modalContent = document.createElement("DIV");
        modalContent.style.display = "flex";

        const Jimena = document.createElement("DIV");
        Jimena.style.width = "50%";
        Jimena.style.display = "flex";
        Jimena.style.flexDirection = "column";

        const JimenaText = document.createElement("P");
        JimenaText.innerHTML = "<strong>Jimena:</strong> Esposa del Cid y sobrina segunda del rey Alfonso, representa la esposa ideal de un héroe como el Cid.";
        JimenaText.style.fontSize = "30px";
        JimenaText.style.marginTop = "20px";
        JimenaText.style.width = "55%";
        JimenaText.style.float = "left";

        const JimenaImage = document.createElement("IMG");
        JimenaImage.src = "Multimedia/Jimena.jpg";
        JimenaImage.style.width = "35%"
        JimenaImage.style.height = "50%"

        const Hijas = document.createElement("DIV");
        Hijas.style.width = "50%";
        Hijas.style.display = "flex";
        Hijas.style.flexDirection = "column";
        Hijas.style.float = "right";

        const HijasText = document.createElement("P");
        HijasText.innerHTML = "<strong>sol y Elvira:</strong> Hijas del Cid y de Jimena, representan las hijas ideales de un héroe como el Cid ya que son calladas y no cuestionan las decisiones de sus padres. En el poema cuentan con 12 años.";
        HijasText.style.fontSize = "30px";
        HijasText.style.marginTop = "20px";
        HijasText.style.width = "55%";
        HijasText.style.float = "left";

        const HijasImage = document.createElement("IMG");
        HijasImage.src = "Multimedia/Hijas de Cid.jpg";
        HijasImage.style.width = "40%"
        HijasImage.style.height = "50%"

        Jimena.appendChild(JimenaText);
        Jimena.appendChild(JimenaImage);

        Hijas.appendChild(HijasText);
        Hijas.appendChild(HijasImage);

        modalContent.appendChild(Jimena);
        modalContent.appendChild(Hijas);

        return modalContent;
    }

    static otros()
    {
        const modalContent = document.createElement("DIV");
        modalContent.style.display = "flex";

        const Jimena = document.createElement("DIV");
        Jimena.style.width = "50%";
        Jimena.style.display = "flex";
        Jimena.style.flexDirection = "column";

        const JimenaText = document.createElement("P");
        JimenaText.innerHTML = "<strong>Alvar Fañez:</strong> Uno de los principales capitanes del rey Alfonso y mano derecha del Cid, es el amigo incondicional ideal de un héroe como el Cid.";
        JimenaText.style.fontSize = "30px";
        JimenaText.style.marginTop = "20px";
        JimenaText.style.width = "55%";
        JimenaText.style.float = "left";

        const JimenaImage = document.createElement("IMG");
        JimenaImage.src = "Multimedia/Alvar.jpeg";
        JimenaImage.style.width = "35%"
        JimenaImage.style.height = "50%"

        const Hijas = document.createElement("DIV");
        Hijas.style.width = "50%";
        Hijas.style.display = "flex";
        Hijas.style.flexDirection = "column";
        Hijas.style.float = "right";

        const HijasText = document.createElement("P");
        HijasText.innerHTML = "<strong>Pedro Bermúdez</strong> Vasallo que se dedico a Defender la honra del Cid.";
        HijasText.style.fontSize = "30px";
        HijasText.style.marginTop = "20px";
        HijasText.style.width = "55%";
        HijasText.style.float = "left";

        const HijasImage = document.createElement("IMG");
        HijasImage.src = "Multimedia/pedro.jpg";
        HijasImage.style.width = "40%"
        HijasImage.style.height = "50%"

        Jimena.appendChild(JimenaText);
        Jimena.appendChild(JimenaImage);

        Hijas.appendChild(HijasText);
        Hijas.appendChild(HijasImage);

        modalContent.appendChild(Jimena);
        modalContent.appendChild(Hijas);

        return modalContent;
    }
}

const buttonsDisplay = () => 
{
    const buttons = document.querySelectorAll(".container");

    if (actualSlideShow == 0)
    {
        buttons[1].style.display = "flex";
        buttons[0].style.display = "none";
    } 
    else if (actualSlideShow == slideshows.length-1) 
    {
        buttons[0].style.display = "flex";
        buttons[1].style.display = "none";
    }
    else {
        buttons[0].style.display = "flex";
        buttons[1].style.display = "flex";
    }
}

const button = document.querySelector(".boton");

button.addEventListener("click", () => {
    const modal = document.querySelector(".modal-bg");
    const modalContent = document.querySelector(".modal");

    buttonsDisplay();

    modal.style.display = "flex";
    modal.style.animation = "appear 1s forwards";
    const fragment = document.createDocumentFragment();

    fragment.appendChild(eval("slideshow." + slideshows[actualSlideShow]), modal.firstElementChild);

    modalContent.appendChild(fragment);
});

const actualButtons = document.querySelectorAll(".container");

actualButtons[0].addEventListener("click", () => {
    actualSlideShow--;

    const modal = document.querySelector(".modal");

    buttonsDisplay();

    if (slideshows[actualSlideShow].startsWith("personajes."))
    {
        modal.replaceChild(eval(slideshows[actualSlideShow]), modal.firstElementChild);    
    }
    else {
        modal.replaceChild(eval("slideshow." + slideshows[actualSlideShow]), modal.firstElementChild);
    }
});

actualButtons[1].addEventListener("click", () => {
    actualSlideShow++;

    const modal = document.querySelector(".modal");

    buttonsDisplay();

    if (slideshows[actualSlideShow].startsWith("personajes."))
    {
        modal.replaceChild(eval(slideshows[actualSlideShow]), modal.firstElementChild);    
    }
    else {
        modal.replaceChild(eval("slideshow." + slideshows[actualSlideShow]), modal.firstElementChild);
    }
});





