

//********************************************************************************** */
//trayendo desde local storage
//CREANDO LA NUEVA CATEGOria 
//para que aparezcan las que sumamos desde el input de nuevas categorias
/********************************************************************************** */

const formAddCategory = document.getElementById("form-add-category");


const getIdCategory = function () {
    let storage = getStorage();
    if (storage.categories.length > 0) {
        var lastItem = storage.categories[storage.categories.length - 1];
        return lastItem.id + 1;
    }
    return 1;
};
getIdCategory();

//***************************************************************************

const createCategory = (e) => {
    // e.preventDefault();

    const form = e.target;
    const newCategoryName = form.writeNewCategory.value;
    const newCategory = {
        id: getIdCategory(),
        name: newCategoryName,

    };

    const storageAux = getStorage();
    storageAux.categories.push(newCategory);
    localStorage.setItem("localStorage-ahorradas", JSON.stringify(storageAux));

    //agregarCategoria();
    createCategory();
}

formAddCategory.addEventListener("submit", createCategory);


//**********************************************************************************

const itemParaEliminar = (e) => {
    const idParaEliminar = e.target.dataset.category; //capturo el id de lo que quiero seleccionar
    //console.log(idParaEliminar);

    let storageAux = getStorage(); //declaro la variable para que me guarde o que tengo ya guardado 
    let itemsToEliminate;
    for (let i = 0; storageAux.categories.length; i++) { //recorro el storage donde tengo las categories
        if (storageAux.categories[i].id == idParaEliminar) { //eliminame el item que tiene el mismo id que mi data category
            itemsToEliminate = storageAux.categories[i].name;
            storageAux.categories.splice(i, 1);
            break
        }
    }
    localStorage.setItem("localStorage-ahorradas", JSON.stringify(storageAux));
    cargarCategorias();
}



//********************************************************************************** 
//funcion para que me acrgue las categorias que cargo desde el input + agregar 
//********************************************************************************** 

const cargarCategorias = () => {
    const listaCategorias = document.getElementById("listaCategorias");
    listaCategorias.innerHTML = ""; //con esto dejo el div vacio
    const storage = getStorage();
    for (const item of storage.categories) {
        const row = document.createElement('div');
        row.className = 'row mt-1 mb-1 eliminame'; //le agregue "eliminame" para luego eliminar por classlist pero me elimina el texto si el click lo hago en el texto

        const col1 = document.createElement('div');
        col1.className = 'col-9 align-items-center d-flex';

        const col2 = document.createElement('div');
        col2.className = 'col-3 align-items-center justify-content-end d-flex';

        const text = document.createTextNode(item.name);

        const btnEditar = document.createElement('a');
        btnEditar.className = "btn me-3";
        //btnEditar.setAttribute("data","editar");
        btnEditar.href = "./editarCategoria.html";

        btnEditar.appendChild(document.createTextNode("Editar"));

        const btnEliminar = document.createElement("button");
        btnEliminar.className = "btn delete-btn";
        btnEliminar.dataset.category = item.id;
        btnEliminar.appendChild(document.createTextNode("Eliminar"));

        listaCategorias.appendChild(row);
        row.appendChild(col1);
        row.appendChild(col2);
        col1.appendChild(text);
        col2.appendChild(btnEditar);
        col2.appendChild(btnEliminar);

    }
    const deleteBtn = document.querySelectorAll(".delete-btn");
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", itemParaEliminar);
    }

}
cargarCategorias();

//********************************************************************************
//funcion para crear las que ya vienen por defecto:
//****************************COMIDAS*****************************************************
// const creandoCategoriasPorDefecto = document.getElementById("listaCategorias");

// const row5 = document.createElement("div");
// row5.className ="row mt-1 mb-1";

// const row6 = document.createElement("div");
// row6.className ="col-9 align-items-center d-flex";
// row6.appendChild(document.createTextNode("Comidasssssssssss"));
// const row4 = document.createElement("div");

// row4.className = "col-3 align-items-center justify-content-end d-flex";
// const ancla = document.createElement("a");
// ancla.className = "btn me-3";
// ancla.href = "/editarCategoria.html";
// ancla.appendChild(document.createTextNode("Editar"));
// const boton2 = document.createElement("button");
// boton2.className = "btn delete-btn";
// //boton2.setAttribute("id","btnEliminarCategoria");
// boton2.appendChild(document.createTextNode("Eliminar"));
// boton2.setAttribute("data-category","1");
// creandoCategoriasPorDefecto.appendChild(row5);
// row5.appendChild(row6);
// row5.appendChild(row4);
// row4.appendChild(ancla);
// row4.appendChild(boton2);

//------------------------------------------------------------------
// const creandoCategoriasPorDefecto = document.getElementById("listaCategorias");
// const categoriasTbody = creandoCategoriasPorDefecto.getElementById("listaCategorias");

// categories.map((element) => {
// 	const row = document.createElement("tr");

// 	for (const prop in element) {
// 		const celda = document.createElement("td");
// 		const text = document.createTextNode(element[prop]);

// 		celda.appendChild(text);
// 		row.appendChild(celda);
// 	}

// 	creandoCategoriasPorDefecto.appendChild(row);
// });




//*********************************************************************************
//funcion para que funcione la funcion deleteBtn (de eliminar categorias agregadas pero las que vienen x defecto)
//**********************************************************************************

const eliminarCategoriaPorDefault = () => {

}

//**********************************************************************************

const init = () => {
    cargarCategorias();
};

init();