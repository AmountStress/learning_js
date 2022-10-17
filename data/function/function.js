function sum(a, b) {
    return a + b;
}

let result = sum(3,1);
console.log(sum(1, 2));
console.log(result);

//In JS the functions are objects
//We can put into a varible

let functionTest = sum;
console.log(functionTest);

//En JS las funciones no dan error si no se pasa un parametro, lo que devuelve es NaN y para el parametro que no se coloco le pone undefined
//Con un simple or podemos remplazar el valor de la parametro no especificado ya que undefined da por defecto false
function sum1(a, b) {
    b = b || 2
    return a + b;
}

console.log(sum1(1));
