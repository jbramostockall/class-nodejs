let cadena = 'esto es una cadena'
console.log(cadena,'log');
console.error(cadena,'error');
console.warn(cadena,'warning');

let tabla = [
    {
        a: 1,
        b: 'jhon'
    },
    {
        a: 2,
        b: 'ramos'
    }
];

console.group('Logs Agrupados');
console.table(tabla);
console.group('Logs Agrupados segundo nivel');
console.log(cadena,'log');
console.error(cadena,'error');
console.warn(cadena,'warning');
console.groupEnd('Logs Agrupados end2');
console.groupEnd('Logs Agrupados end');
console.log(cadena,'log');
console.count('log');
console.count('log');