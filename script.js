// //inicializacion de la aplicacion vamos a buscar lo guardado en el local storage 
// const init = () => {
//   cont storage = JSON.parse(localStorage.getItem('everythingInStorage'));


//***************************aca se guardan en el localStorage */
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