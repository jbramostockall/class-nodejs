const { exec } = require('child_process');
let comando;
//comando='dir';
comando ='node -v';
exec(comando,(error, stdout,stderr)=>{
    if(error){
        console.error(error);
        return false;
    }
    console.log(stdout);
})

