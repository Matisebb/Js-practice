<<<<<<< HEAD
const shopContent = document.getElementById("shopContent");
const showCarrito = document.getElementById("showCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre: "Pizza Napoletana",
        precio: 700,
        img: "https://saboraitaliamx.com/wp-content/uploads/2021/11/shutterstock_1065375920.jpg",
    },
    {
        id: 2,
        nombre: "Pizza Margherita",
        precio: 800,
        img: "https://cdn.elcocinerocasero.com/imagen/receta/1000/2020-12-06-20-10-11/pizza-margarita.jpeg",
    },
    {
        id: 3,
        nombre: "Pizza Pepperoni",
        precio: 850,
        img: "https://i.pinimg.com/originals/4b/2b/33/4b2b336eca9844c0b658ab2811a0f14b.jpg",
    },
    {
        id: 4,
        nombre: "Pizza Fugazzeta",
        precio: 750,
        img: "https://www.barilocheya.com.ar/pizzeriabase/wp-content/uploads/sites/6/2020/03/fugazeta.jpg",
    },
]
let carrito = [];

// `` se hace con alt gr y cierre corchete

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);    

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            nombre: product.nombre,
            precio: product.precio,
            img: product.img,
        });
        console.log(carrito)
    })
});

showCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title"> Sus productos</h1>
    `
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h2");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);


    carrito.forEach((product)=> {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
        `;
        modalContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalComprado = document.createElement("div")
    totalComprado.className = "total-content"
    totalComprado.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalComprado); 
});

=======
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


>>>>>>> ef0a70da4dfe96036832ca9da9dc9644fd42ccfd
