// esto lo traje de categorias.js, lo dejo ahi o aca tmb hace falta que este?
/********************************************************************************** */

const getStorage = function () {
    let storageInfo = JSON.parse(localStorage.getItem('localStorage-ahorradas'));
    if (!storageInfo) {
        storageInfo = {
            categories: [],
            operations: []
        };
    }
    return storageInfo;
};
let storage = getStorage();

/******************************************************/
//desde local storage
//
const formAddOperation = document.getElementById("formNewOperation"); //el id del formulario

const createNewOperation = (e) => {
    e.preventDefault();

    const form = e.target;

    const nameOperation = form.descriptionOp.value;
    const montoOperation = form.amountOp.value;
    const dateOperation = form.dateOp.value;
    const typeOperation = form.typeOp.value;

    const newOperation = {
        id: 1,         //aca tenemos que ver que onda con el id:1 porque tiene que cambiar
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

