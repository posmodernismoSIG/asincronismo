//ecmascript 6 -- PROMESAS "ALGO VA A PASAR" 
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {           //primer argumneto SI SE EJECUTA resolve, segundo argumento SI SE RECHAZA reject
        if (true){                                      //condicion que genera resolve si se cumple tal cosa
        resolve('Exito !');
        }else{                                          // acción que se da en caso de que no se cumpla la condición
        reject('Fallo !');
    }
    })
}

somethingWillHappen()                               //inicializacion de la funcion con promesa de ejemplo 
    .then(Response => console.log(Response) )       //En caso de exito 
    .catch(err => console.error(err));              //En caso de falla 

                                                    // simulacion de un servicio con tiempo de retardo 2.0 seg.
    const somethingWillHappen02 = () =>{
        return new Promise((resolve, reject) =>{
            if (true){
                setTimeout(() =>{
                    resolve ('Exito despues de 2.00n segundos')
                }, 2000)
            } else {                                //al definir el error construyendolo se garantiza que al fallar el ejecutor de mas infromacion al respecto
                const err = new Error('woops');
                reject(err)
            }

        });
    }
    
somethingWillHappen02()
    .then(response => console.log(response))
    .catch(err => console.error(err));


    /*    COMO EJECUTAR VARIAS PROMESAS Promise.all()   */
    

Promise.all([somethingWillHappen(), somethingWillHappen02()])            //Recibe como argumentos las promesas a ejecutar
    .then(response => {
        console.log('Arreglo de caracteresde respuesta', response); 
    })
    .catch(err =>{
        console.error(err);
    })
