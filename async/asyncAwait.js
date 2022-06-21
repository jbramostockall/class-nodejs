let nameT = 'John';
async function hola(name){
    let promes =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Hola ${name}`);
            resolve(name);
        },1000);
    });
    return promes;
}
async function hablar(name){
    let promes =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`bla bla bla ${name}`);
            resolve(name);
        },1000);
    });
    return promes;
}
async function functionErr(name){
    let promes =  new Promise((resolve,reject)=>{
        reject(name);
    });
    return promes;
}
async function despedida(name){
    let promes =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Adios ${name}`);
            resolve();
        },1000);
    });
    return promes;
}

async function main(){
    console.log('in process');
    await hola(nameT);
    await hablar(nameT);
    await hablar(nameT);
    await despedida(nameT);
    console.log('done');
}

console.log('begin');
main();
console.log('seconds');