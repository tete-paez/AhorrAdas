for (const item of storage.operations) {

    const row = document.createElement('div');
    row.className = 'd-grid gap-2 d-md-flex justify-content-md-between';

    const titulo = document.createElement('h3');
    titulo.className = 'mt-3'
    //como pongo el titulo?

    const boton = document.createElement("button");
    boton.className= "btn btn-primary mt-3";
    boton.dataset.category = btnNuevaOperacion.id;
    boton.href = "./nuevaOperacion.html";
    boton.appendChild(document.createTextNode("+ Nueva Operacion"));

    const row2 = document.createElement('div');
    row2.className = '';



// //         const row = document.createElement('div');
// //         row.className = 'row mt-1 mb-1 eliminame'; //le agregue "eliminame" para luego eliminar por classlist pero me elimina el texto si el click lo hago en el texto

// //         const col1 = document.createElement('div');
// //         col1.className = 'col-9 align-items-center d-flex';

// //         const col2 = document.createElement('div');
// //         col2.className = 'col-3 align-items-center justify-content-end d-flex';

// //         const text = document.createTextNode(item.name);

// //         const btnEditar = document.createElement('a');
// //         btnEditar.className = "btn me-3";
// //         //btnEditar.setAttribute("data","editar");
// //         btnEditar.href = "./editarCategoria.html";

// //         btnEditar.appendChild(document.createTextNode("Editar"));

// //         const btnEliminar = document.createElement("button");
// //         btnEliminar.className = "btn delete-btn";
// //         btnEliminar.dataset.category = item.id;
// //         btnEliminar.appendChild(document.createTextNode("Eliminar"));

//         listaOperaciones.appendChild(row);
//         row.appendChild(titulo);
//         row.appendChild(boton);



//         col1.appendChild(text);
//         col2.appendChild(btnEditar);
//         col2.appendChild(btnEliminar);

// //     }
// //     const deleteBtn = document.querySelectorAll(".delete-btn");
// //     for (let i = 0; i < deleteBtn.length; i++) {
// //         deleteBtn[i].addEventListener("click", itemParaEliminar);
// //     }

}
cargarOperaciones();








