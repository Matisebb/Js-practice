// // Promedio de alumnos en un curso de 5
for(i = 1; i <= 5; i++){
    let student = prompt("Ingrese el nombre del alumno");
    let nota1, nota2, nota3;
    nota1 = parseInt(prompt("Nota 1?"));
    nota2 = parseInt(prompt("Nota 2?"));
    nota3 = parseInt(prompt("Nota 3?"));

    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 8) {
        alert("La condición de " + student + " se encuentra como Promocionado con una nota de: " + promedio);
    } else if (promedio >= 4) {
        alert("La condición de " + student + " se encuentra como Regular con una nota de: " + promedio);
    } else {
        alert("La condición de " + student + " corresponde como alumno en situación Irregular con una nota de: " + promedio);
    }


document.write("El promedio de " + student + " es de: " + promedio);
}





// function prom(){
//     var alumno = prompt("Ingrese el nombre del alumno");
//     var nota1, nota2, nota3;
//     nota1 = parseInt(prompt("Nota 1?"));
//     nota2 = parseInt(prompt("Nota 2?"));
//     nota3 = parseInt(prompt("Nota 3?"));

//     var promedio = (nota1 + nota2 + nota3) / 3;
//     while(promedio >= 8){
//         switch(promedio){
//             case promedio >= 8:
//                 alert("La condicion de " + alumno + " se encuentra como Promocionado con un promedio de: " + promedio);
//                 break;
//             case promedio >= 4:
//                 alert("La condición de " + alumno + " se encuentra como Regular con un promedio de: " + promedio); 
//                 break;
//             case promedio < 4:
//                 alert("La condición de " + alumno + " se encuentra como Irregular con un promedio de: " + promedio); 
//                 break;     
//         }
//     }
//     } 


// prom();
// prom();
// prom();
// prom();
// prom();


