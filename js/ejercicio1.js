alert("Ejercicio N° 1 - Descuento en calzado");
alert("Categorias:A, B, C")
let nombre= prompt("Ingrese el nombre del producto");
let num = prompt("A que categoria pertenece(EN MAYUSCULAS): ");
let uni = Number(prompt("Ingrese el precio unitario: "));
let total= 0;
let descuento =0;

switch (num) {
    case "A":
        descuento = uni*0.1;
        total = uni-descuento;
        alert("El producto: "+ nombre);
        alert("El total su descuento en total es: "+ descuento);
        alert("El total de su compra es: " + total);
        document.getElementById("producto").innerHTML= "El producto: "+ nombre;
        document.getElementById("descuento").innerHTML= "El total su descuento en total es: "+ descuento;
        document.getElementById("total").innerHTML= "El total de su compre es: " +total;
        break;
    case "B":
        descuento = uni*0.15;
        total= uni-descuento;
        alert("El producto: "+ nombre);
        alert("El total su descuento en total es: "+ descuento);
        alert("El total de su compre es: " +total);
        document.getElementById("producto").innerHTML= "El producto: "+ nombre;
        document.getElementById("descuento").innerHTML= "El total su descuento en total es: "+ descuento;
        document.getElementById("total").innerHTML= "El total de su compre es: " +total;
        break;
    case "C":
        descuento = uni*0.20;
        total= uni-descuento;
        alert("El producto: "+ nombre);
        alert("El total su descuento en total es: "+ descuento);
        alert("El total de su compre es: " +total);
        document.getElementById("producto").innerHTML= "El producto: "+ nombre;
        document.getElementById("descuento").innerHTML= "El total su descuento en total es: "+ descuento;
        document.getElementById("total").innerHTML= "El total de su compre es: " +total;
        break;
    default:
        alert("Ingrese la categoria correcta")
        break;
}

