//ecmaScript 6.0
let xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;

let API = 'http://rickandmortyapi.com/api/character/'


const fetchData = (Url_api) =>{
    return new Promise ((resolve, reject) => {
        const xhttp = new  xmlhttprequest();
        xhttp.open('GET', Url_api, true); 
        xhttp.onreadystatechange = (()=> {                          
        if(xhttp.readyState === 4){
            (xhttp.status === 200)                              //la estructura de if ternario (? response → :reject) es la unica forma para no generar error con promesas 
            ? resolve (JSON.parse(xhttp.responseText))
            : reject (new Error('Error', Url_api)); 

        }
        });
        xhttp.send()        
    });
}
module.exports = fetchData;
