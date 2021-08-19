const loadCategories = () => {
    const listaCategorias = document.getElementById("listaCategorias");
    listaCategorias.innerHTML = ""; //con esto dejo el div vacio
    const storage = getStorage();
    for (const item of storage.categories) {
        const row = document.createElement('div');
        row.className='row mt-5 mb-5';

        const col1 = document.createElement('div');
        col1.className='col-9 align-items-center d-flex';

        const col2 = document.createElement('div');
        col2.className='col-3 align-items-center justify-content-end d-flex';

        const text = document.createTextNode(item.name);

        const btnEditar = document.createElement('a');
        btnEditar.className="btn me-3";
        btnEditar.href="./editarCategoria.html";

        btnEditar.appendChild(document.createTextNode("Editar"));

        const btnEliminar = document.createElement("button");
        btnEliminar.className="btn delete-btn";
        btnEliminar.dataset.category=item.id;
        btnEliminar.appendChild(document.createTextNode("Eliminar"));

        listaCategorias.appendChild(row);
        row.appendChild(col1);
        row.appendChild(col2);
        col1.appendChild(text);
        col2.appendChild(btnEditar);
        col2.appendChild(btnEliminar);
        

   
    }

}

loadCategories();






//trayendo desde local storage
/********************************************************************************** */

const formAddCategory = document.getElementById("form-add-category");

const createCategory = (e) => {
    e.preventDefault();

    const form = e.target;
    const newCategoryName = form.writeNewCategory.value;
    const newCategory = {
        id: 1,
        name: newCategoryName,

    };

    const storageAux = getStorage();
    storageAux.categories.push(newCategory);
    localStorage.setItem("localStorage-ahorradas", JSON.stringify(storageAux));

    agregarCategoria();
}


formAddCategory.addEventListener("submit", createCategory);

//CREANDO LA NUEVA CATEGOIA
/********************************************************************************** */

btnNuevaCategoria = document.getElementById("btnNewCategory");



//Funciones
var agregarCategoria = function (event) {
    //event.preventDefault();
    listaCategorias.innerHTML = ""; //con esto dejo el div vacio
    const storage = getStorage();
    for (const item of storage.categories) {
        nuevaCategoria = document.createElement("div");
        nuevaCategoria.innerHTML = `<div class=\"row mt-5 mb-5\">\n <div class=\"col-9 align-items-center d-flex\">\n <p class=\"fs-5\">" ${item.name} "</p>\n </div>\n <div class=\"col-3 d-flex justify-content-end\">\n <button class=\"btn me-3\" type=\"button\"><a class=\"\" href=\"./editarCategoria.html\">Editar</a></button>\n <button class=\"btn delete-btn\" data-category=" ${item.id} + ">Eliminar</button>\n </div>\n</div>`;
        listaCategorias.appendChild(nuevaCategoria);
    }
};

//funcion de editar categoria (desde editarCategoria.html)
//traerme el id del boton que es "btn-cancelar"


//editarCategorias