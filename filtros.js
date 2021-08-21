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

/**********************************************************************/
