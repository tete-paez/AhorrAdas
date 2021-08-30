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
    //const dateOperation = form.dateOp.value;
    const typeOperation = form.typeOp.value;

    const newOperation = {
        id: getIdOperations(),
        name: nameOperation,
        monto: montoOperation,
        // fecha: dateOperation,
        tipo: typeOperation,
    };

    const storageAux = getStorage();
    storageAux.operations.push(newOperation);
    localStorage.setItem("localStorage-ahorradas", JSON.stringify(storageAux));
}
formAddOperation.addEventListener("submit", createNewOperation);


//btnNewOperation es el boton del boton AGREGAR

//btnNewOperation = document.getElementById("btnNewOperation");

/******************************************************/
//funcionpara que apárezca la nueva operacion en el index - en el div operaciones pero no me anda 
/******************************************************/

const cargarOperaciones = () => {
    const listaOperaciones = document.getElementById("seccionOperaciones");
    listaOperaciones.innerHTML = ""; //con esto dejo el div vacio
    const storage = getStorage();
    //console.log(storage.operations);
    for (const item of storage.operations) {
        //primer renglon
        const operacionesTable = document.createElement("table");
        operacionesTable.className = "table";

        const thead = document.createElement("thead");

        const tr = document.createElement("tr");

        const th1 = document.createElement("th");
        th1.setAttribute("scope", "col")
        th1.appendChild(document.createTextNode("Descripción"));

        const th2 = document.createElement("th");
        th2.setAttribute("scope", "col")
        th2.appendChild(document.createTextNode("Categoria"));

        const th3 = document.createElement("th");
        th3.setAttribute("scope", "col")
        th3.appendChild(document.createTextNode("Fecha"));

        const th4 = document.createElement("th");
        th4.setAttribute("scope", "col")
        th4.appendChild(document.createTextNode("Monto"));

        const th5 = document.createElement("th");
        th5.setAttribute("scope", "col")
        th5.appendChild(document.createTextNode("Acciones"));

        operacionesTable.appendChild(thead);
        thead.appendChild(tr);
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);

        //segundo renglon
    //const cuerpo = document.createElement("tbody");
        /*
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    

*/






    }
    const btnAgregar = document.getElementById("btnNewOperation");
    for (let i = 0; i < btnNewOperation.length; i++) {
        btnNewOperation[i].addEventListener("click", cargarOperaciones);
    }
}
cargarOperaciones();






/**********************************************************************/
/********************************************************************************** */
//funcion para mostrar las nuevas categorias del local storage 
//en el select dnueva operacion

const categoriasSelectNuevaOperacion = () => {

    const storage = getStorage();

    const selectDeCategoriasNuevaOperacion = document.getElementById('categories-nuevaOp');


    for (const category of storage.categories) {
        const elem = document.createElement("option");
        elem.innerText = category.name;
        elem.value = category.name;
        selectDeCategoriasNuevaOperacion.appendChild(elem);
    }
};
categoriasSelectNuevaOperacion();
cargarOperaciones();

/******************************************************/
//funcion para mostrar las nuevas categorias del local storage 
//en el select de filtros en el index
/******************************************************/

// const categoriasDeNuevaOperacion = () => {

//      const storage = getStorage();

//      const selectDeCategoriasNuevaOperacion = document.getElementById('categories-nuevaOp');


//      for (const category of storage.categories) {
//          const elem = document.createElement("option");
//          elem.innerText = category.name;
//          elem.value = category.name;
//          selectDeCategoriasNuevaOperacion.appendChild(elem);
//      }
//  };
//  categoriasDeNuevaOperacion();






// const init = () => {
//     cargaOperaciones();
// };

// init();