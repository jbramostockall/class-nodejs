function serompera(){
    try {
        valor(ddd);
    } catch (error) {
        console.group();
        console.error('Err',error.message);
        console.groupEnd();
    }
}

serompera();