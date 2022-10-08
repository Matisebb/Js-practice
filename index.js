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

// FORMULARIO
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_9gugrcg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

