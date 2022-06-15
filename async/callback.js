let nameT = 'jhon';
function hola(name, myFunt){
    setTimeout(function(){
        console.log(`Hola ${name}`);
        myFunt();
    },2500);
}

function adios(name, myFunt){
    setTimeout(function(){
        console.log(`Adios ${name}`);
        myFunt();
    },1000)
}
console.log("begin");
hola(nameT,function (){ 
    adios(nameT,function(){console.log("end"); });
});
