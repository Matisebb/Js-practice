let student = prompt("Ingrese el nombre del alumno");
let nota1, nota2, nota3;
nota1 = parseInt(prompt("Nota 1?"));
nota2 = parseInt(prompt("Nota 2?"));
nota3 = parseInt(prompt("Nota 3?"));

let promedio = (nota1 + nota2 + nota3)/3;
if (promedio >=8){
    alert("La condición de " + student + " se encuentra como Promocionado con una nota de: " + promedio);
} else if(promedio >= 4){
    alert("La condición de " + student + " se encuentra como Regular con una nota de: " + promedio);
} else {
    alert("La condición de " + student + " corresponde como alumno en situación Irregular con una nota de: " + promedio);
}

document.write("El promedio de " + student + " es de: " + promedio);
