const fetchData = require('../utils/fetchData');
const API = 'http://rickandmortyapi.com/api/character/'                              //si algo no se va a mover es en mayuscula
// estructura async - await 
const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[1].id}`);
        const origin = await fetchData(character.origin.url);
        

        console.log(data.info.count)
        console.log(character.name)
        console.log(character.origin)
        console.log(character.origin.url)
        console.log(character.origin.name)
    } catch(err){
        console.error(err)
    }
}
console.log('Before');
anotherFunction(API);
console.log('After');