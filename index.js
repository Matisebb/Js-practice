const productos = [
    { nombre: "Cheese burger", precio: 600 },
    { nombre: "American burger", precio: 800 },
    { nombre: "Crispy burger", precio: 600 },
    { nombre: "Five Guys", precio: 900 },
    { nombre: "Shake Shack", precio: 800 },
];

let carrito = [];

let seleccion = prompt("Hola bienvenidos a Saint burger, desea ordenar algo? \n Si \n No");

while (seleccion != "Si" && seleccion != "No") {
    alert("Por favor, ingresá Si o No");
    seleccion = prompt("Hola, desea ordenar algo? \n Si \n No");
}

if (seleccion == "Si") {
    alert("A continuacion el menu de Saint Burger:");
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "));
} else if (seleccion == "No") {
    alert("Gracias por elegirnos, vuelva pronto!");
}

while (seleccion != "No") {
    let producto = prompt("Agrega un producto al carrito");
    let precio = 0;

    if (producto == "Cheese burger" || producto == "American burger" || producto == "Crispy burger" || producto == "Five Guys" || producto == "Shake Shack") {
        switch (producto) {
            case "Cheese burger":
                precio = 600;
                break;
            case "American burger":
                precio = 800;
                break;
            case "Crispy burger":
                precio = 600;
                break;
            case "Five Guys":
                precio = 900;
                break;
            case "Shake Shack":
                precio = 800;
                break;
            default:
                break;
        }
        let unidades = Number(prompt("Cuantas desea ordenar?"))

        carrito.push({ producto, unidades, precio });
        console.log(carrito);
    } else {
        alert("No tenemos ese producto");
    }

    seleccion = prompt("Desea seguir comprando?");
}


while (seleccion === "No") {
    alert("Gracias por su compra! vuelva pronto!");
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`El total a pagar por su compra es de: ${total}`);
