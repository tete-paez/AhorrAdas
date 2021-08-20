/******************************************************/
//para traer desde el local
/********************************************************************************** */
const getIdOperations = function () {
    let storage = getStorage();
    if (storage.operations.length > 0) {
        var lastItem = storage.operations[storage.operations.length - 1];
        return lastItem.id + 1;
    }
    return 1;
};
getIdOperations();

/******************************************************/
//desde local storage
/******************************************************/
const formAddOperation = document.getElementById("formNewOperation"); //el id del formulario

const createNewOperation = (e) => {
    e.preventDefault();

    const form = e.target;

    const nameOperation = form.descriptionOp.value;
    const montoOperation = form.amountOp.value;
    const dateOperation = form.dateOp.value;
    const typeOperation = form.typeOp.value;

    const newOperation = {
        id: getIdOperations(),
        name: nameOperation,
        monto: montoOperation,
        fecha: dateOperation,
        tipo: typeOperation,
    };

    const storageAux = getStorage();
    storageAux.operations.push(newOperation);
    localStorage.setItem("localStorage-ahorradas", JSON.stringify(storageAux));
}

formAddOperation.addEventListener("submit", createNewOperation);

//btnNewOperation es el boton del boton AGREGAR

btnNewOperation = document.getElementById("btnNewOperation");
/******************************************************/
//funcion para mostrar las nuevas categorias del local storage en ese input select
const categoriasDeNuevaOperacion = () => {

    const storage = getStorage();

    const selectDeCategoriasNuevaOperacion = document.getElementById('categories-nuevaOp');


    for (const category of storage.categories) {
        const elem = document.createElement("option");
        elem.innerText = category.name;
        elem.value = category.name;
        selectDeCategoriasNuevaOperacion.appendChild(elem);
    }
};
categoriasDeNuevaOperacion();