let form = document.getElementById("form1");

form.onsubmit = (e) => {
    e.preventDefault();
    let precio = parseFloat(document.getElementById("precio").value);
    let porcentaje = parseFloat(document.getElementById("porcentaje").value);
    var limite = 10000;
    let result = (precio*porcentaje/100);
    if (result < limite){
        bonificacion = result;
        pagar = porcentaje - bonificacion;
    } else {
        bonificacion = limite;
        pagar = precio - bonificacion;
    }

    document.getElementById("myP").innerHTML = "Descuento: " + bonificacion.toFixed(2);
    "<br>"
    document.getElementById("pym").innerHTML = "Total a pagar: " + pagar.toFixed(2);
}

function fun(){
    document.getElementById("form1").reset();
    document.getElementById("myP").innerHTML = "Ingrese precio y porcentaje de descuento"
    document.getElementById("pym").innerHTML = ""
}