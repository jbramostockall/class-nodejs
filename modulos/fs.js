const fs = require('fs');


function leer(ruta, cb){
    fs.readFile(ruta, (err, data) =>{
        //archivo leido
        cb(data.toString());
    });
}
function escribir(ruta, contenido, cb){
    fs.writeFile(ruta,contenido,(err)=>{
        if(err){
            console.log('error',err);
        }else{
            leer(ruta,console.log);
        }
    });
}
function eliminar(ruta, cb){
    fs.unlink(ruta,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('eliminado');
        }
    })
}
let file = `${__dirname}/archivo.txt`;
//leer(file,console.log);
//escribir(file,'Hola JBR',console.log);
//eliminar(file,console.log);

