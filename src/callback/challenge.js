//Instalar modulo de request xmlhttprequest tambien se debe instalar desde la terminal en la carpeta del proyecto como npm install xmlhttprequest 
// declarara el modulo para usarlo
let xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;
//Crear variable API
var API = 'http://rickandmortyapi.com/api/character/'

// crear la funcion para traer datos desde la API
function fetchData (Url_api, CallBack) {
    //crear un objeto de xmlrequest
    let xhttp = new  xmlhttprequest();
    xhttp.open('GET', Url_api, true); //pasarle la peticion a la api GET con la peticion, url y true para activar el asincronismo
    xhttp.onreadystatechange = function (event) {                          
    if(xhttp.readyState === 4){
        if( xhttp.status === 200){
        CallBack(null, JSON.parse(xhttp.responseText)); //el perimer parametro del callback es el error pero no se define, por que se pone un else abajo parse es para desglosar el objeto recibido de la api dado que es un texto crudo
        } else {
            const error = new Error('Error' + Url_api);
            return CallBack(error, null)
        }
    }
}
    xhttp.send();  
}

fetchData(API, function (error1, data1){
    if (error1) return console.error('--Error 1--');
    fetchData(API+data1.results[0].id, function(error2, data2){
        if(error2) return console.error('Error 2');
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error('Error 3');
            console.log(data1.info);
            console.log(data2.name);
            console.log(data3.dimension);

        } )
    })
} );


