/********************************************************************************** */
//trayendo desde local storage
//CREANDO LA NUEVA CATEGOria 
//para que aparezcan las que sumamos desde el input de nuevas categorias
/********************************************************************************** */

const formAddCategory = document.getElementById("form-add-category");


const getIdCategory = function () {
    var storage = getStorage();
    if (storage.categories.length > 0) {
        var lastItem = storage.categories[storage.categories.length - 1];
        return lastItem.id + 1;
    }
    return 1;
};
getIdCategory();


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


/********************************************************************************** */
//para que aparezcan las categorias que vienen por default 
//tengo que crear los divs donde apareceran
/********************************************************************************** */

const cargarCategorias = () => {
    const listaCategorias = document.getElementById("listaCategorias");
    listaCategorias.innerHTML = ""; //con esto dejo el div vacio
    const storage = getStorage();
    for (const item of storage.categories) {
        const row = document.createElement('div');
        row.className = 'row mt-1 mb-1 eliminame';//le agregue "eliminame" para luego eliminar por classlist pero me elimina el texto si el click lo hago en el texto

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

}
cargarCategorias();


/********************************************************************************** */
//funcion eliminar categoria opcion 1:


//     const eliminarItemCategoria = function (e) {
//     let idCategoria = e.target.dataset.id;
//     let storage = getStorage();
//     let categories = storage.categories;
//     let categoriasActualizadas = categories.filter(function (category) { return idCategoria !== category.id; });
//     //localStorage.setItem('to-storage', JSON.stringify(__assign(__assign({}, storage), { categories: categoriasActualizadas })));
//     actualizarListaCategorias();
// };

//test4.filter(persona=> persona.name!=="tete")
//test4.filter(persona=> persona.name!==nameElimanr)





/********************************************************************************** */
//funcion eliminar categoria opcion 2:

// document.addEventListener('click', function (e) {
//     let itemParaEliminar = document.getElementById('btnEliminarCategoria')
//     let eliminarItemCategoria = e.target;
//     if (eliminarItemCategoria.id('btnEliminarCategoria')) {
//         eliminarItemCategoria.remove();
//         listaCategorias();
//     }
// });

/********************************************************************************** */
//funcion eliminar categoria opcion 3: 
//si donde hago el click contiene el classlist ese, se elimina  pero solo del browser no del local

const itemParaEliminar = (e) => {
    const idParaEliminar = e.target.dataset.id.newCategory; //capturo el id de lo que quiero seleccionar
    let storageAux =  getStorage(); //declaro la variable para que me guarde o que tengo ya guardado 
    let itemsToEliminate;
    for (let i = 0; storageAux.categories.length; i++) {//recorro el storage donde tengo las categories
        if (storageAux.categories[i].id==idParaEliminar){
            itemsToEliminate = storageAux.categories[i].name;
            storageAux.categories.splice(i,1);
            break
        }
        
     }
}

document.addEventListener("click", function (e) {

    const itemParaElminar = e.target;
      if (itemParaElminar.classList.contains("eliminame")) {
          itemParaElminar.remove();
      //saveCategories();
    }
  });

	const deleteBtn = document.querySelectorAll(".delete-btn");
	for (let i = 0; i < deleteBtn.length; i++) {
	//	deleteBtn[i].addEventListener("click", itemParaElminar);
	}





/********************************************************************************** */

