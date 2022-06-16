let nameT = 'John';
function hola(name){
    let promes =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Hola ${name}`);
            resolve(name);
        },1000);
    });
    return promes;
}
function hablar(name){
    let promes =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`bla bla bla ${name}`);
            resolve(name);
        },1000);
    });
    return promes;
}
function despedida(name){
    let promes =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Adios ${name}`);
            resolve();
        },1000);
    });
    return promes;
}
console.log('begin');
hola(nameT)
    .then(hablar)
    .then(despedida)
    .then(() => {
        console.log('end');
    }
    ).catch(error =>{
        console.log('Error critico');
        console.log(error);
    });