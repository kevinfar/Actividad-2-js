alert("Ejercicio N° 3 - Promedio de notas");
let suma= 0;
let num =1;
let cont=0-1;
let promedio=0;

do {
    num= Number(prompt("Ingrese la nota que sea diferente de cero: "));
    cont += 1;
    suma += num;
    
} while (num!=0);

promedio = suma/cont;
alert("Las notas ingresadas fueron: " + cont);
alert("El promedio de las notas ingresadas es: "+ promedio);
document.getElementById("notas").innerHTML ="Las notas ingresadas fueron: " + cont
document.getElementById("promedio").innerHTML = "El promedio de las notas ingresadas es: "+ promedio

