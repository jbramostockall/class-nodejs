let nameT = 'jhon';
function hola(name, nextFuntion){
    setTimeout(function(){
        console.log(`Hola ${name}`);
        nextFuntion();
    },2500);
}
function hablar(nextFuntion){
    setTimeout(function(){
        console.log(`blablabla`);
        nextFuntion();
    },1000)
}
function despedida(nextFuntion){
    setTimeout(function(){
        console.log(`Adios`);
        nextFuntion();
    },1000)
}
function fin(){
    setTimeout(function(){console.log(`FINALIZED`);},1000);
}

function conversacion(veces,nextFuntion){
    if(veces>0){
        hablar(
            function(){
                conversacion(--veces,nextFuntion);
            }
        );
    }else{
        despedida(nextFuntion);
    }
}

console.log("begin");
hola(nameT,function(){conversacion(3,function(){fin()})});
console.log("end");
/*hola(nameT,function (){ 
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nameT,function(){console.log("end"); });
            });
        });
    });
    
});*/
