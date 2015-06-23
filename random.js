// Math.random() devuelve un número aleatorio entre 0 y 1
var numero =Math.random();
var str='\n MAYOR que 0,5\n';

if (numero<0.5) {
str='\n MENOR que 0,5\n';
};
console.log(numero+str);