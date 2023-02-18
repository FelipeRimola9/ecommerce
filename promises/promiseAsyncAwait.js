//----------BACK END-----------
function APICall(){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("Llamado a API resuelto")
            resolve("Error en la API")
        }, 2000);
    })
}

//-----------FRONT END----------
console.log("APP iniciada");

async function leerDatos (){
    // APICall().then( respuesta => hacerAlgo(respuesta))

    let respuesta = await APICall();
    console.log( respuesta)

}

console.log(leerDatos());

console.log("App finalizada.")