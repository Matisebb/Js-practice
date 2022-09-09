const participantes = Number(prompt("¿Cuantas personas asistieron al evento?"));

function saludar(){
    const nombre = prompt("Ingrese su nombre");
    console.log("Hola " + nombre);
}

function saludarAtodos(){
    for (let i = 0; i < participantes; i++){
        saludar();
    }
    console.log("Terminé de saludar a todos");
}

saludarAtodos();
saludar();  