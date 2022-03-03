alert("Ejercicio N° 2 - Sumatoria de n numeros");
let suma= 0;
let num;

do {
    num= Number(prompt("Ingrese el numero para hacer la sumatoria: "));
    suma += num;
} while (num!=0);

alert("El total de la suma de numeros ingresados es: "+ suma);
document.getElementById("total").innerHTML = "El total de la suma de numeros ingresados es: "+ suma;


