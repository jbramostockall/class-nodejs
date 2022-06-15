let nameT = 'jhon';
function hola(name, myFunt){
    setTimeout(function(){
        console.log(`Hola ${name}`);
        myFunt();
    },2500);
}

function hablar(myFuntHablar){
    setTimeout(function(){
        console.log(`blablabla`);
        myFuntHablar();
    },1000)
}
function adios(name, myFunt){
    setTimeout(function(){
        console.log(`Adios ${name}`);
        myFunt();
    },1000)
}

function conversacion(name, veces, myFunctHablar){
    if(veces>=0){
        hablar(
            function(){
                conversacion(name, --veces, myFunctHablar)
            }
        );
    }else{
        adios(name,myFunctHablar);
    }
}

console.log("begin");
hola(nameT,function(){
    conversacion(nameT, 3, function(){console.log('fin');});
});

/*hola(nameT,function (){ 
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nameT,function(){console.log("end"); });
            });
        });
    });
    
});*/
