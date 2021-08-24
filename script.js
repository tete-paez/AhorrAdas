
//***************************aca se guardan en el localStorage */
const getStorage = function () {
    let storageInfo = JSON.parse(localStorage.getItem('localStorage-ahorradas'));
    if (!storageInfo) {
        storageInfo = {
            categories: [{id:1, name:'Comida'},{id:2, name:'Educación'}, {id:3, name:'Salidas'}, {id:4, name:'Servicios'}, {id:5, name:'Trabajo'}],
            operations: []
        };
    }
    return storageInfo;
};

//**********************************************************************************
//creando seccion operaciones
/********************************************************************************** */

const creandoSeccionOperaciones = document.getElementById("seccionOperaciones");

const row0 = document.createElement("div");
row0.className = "d-grid gap-2 d-md-flex justify-content-md-between";

const titulo = document.createElement("h3");
titulo.className = "mt-3";

const txtTitulo = document.createTextNode("Operaciones");

const boton = document.createElement("a");
boton.className = "btn btn-primary mt-3";
boton.setAttribute("id", "btnNuevaOperacion");
boton.href = "./nuevaOperacion.html";
const txtBoton = document.createTextNode("+Nueva Operación");

const row2 = document.createElement("div");
row2.className = "container col-10 mt-4";
row2.setAttribute("id", "grillaOperaciones");

const imagen = document.createElement("figure");
imagen.className = "figure";

const imagenImg = document.createElement("img");
imagenImg.className = "figure-img img-fluid rounded";
imagenImg.setAttribute("src", "./assets/img/undraw_Investment_data_re_sh9x.svg");


creandoSeccionOperaciones.appendChild(row0);
creandoSeccionOperaciones.appendChild(row2);

row0.appendChild(titulo);
titulo.appendChild(txtTitulo);
row0.appendChild(boton);
boton.appendChild(txtBoton);
row2.appendChild(imagen);
imagen.appendChild(imagenImg);


/**********************************************************************/
/********************************************************************************** */
//funcion para mostrar las nuevas categorias del local storage 
//en el select de filtros en el index

const categoriasDeNuevaOperacion = () => {

    const storage = getStorage();

    const selectDeCategoriasNuevaOperacion = document.getElementById('categories');


    for (const category of storage.categories) {
        const elem = document.createElement("option");
        elem.innerText = category.name;
        elem.value = category.name;
        selectDeCategoriasNuevaOperacion.appendChild(elem);
    }
};
categoriasDeNuevaOperacion();
cargarOperaciones();

