const doSomthingAsinc = () =>{
    return new Promise ((resolve, reject) =>{
        (true)
        ? setTimeout(()=> resolve('Do something Asinc'), 3000)
        : reject(new Error ('Test Error'))
    });

}

const doSomthingA = async () => {
    const something = await doSomthingAsinc();
    console.log(something);
}

console.log('Before');
doSomthingA();
console.log('After');


const anotherFunction = async () => {
    try{
        const another = await doSomthingAsinc(); 
        console.log(another)
    }
    catch (errors){
        console.log(errors)

    }
}


console.log('Before01');
anotherFunction();
console.log('After01');