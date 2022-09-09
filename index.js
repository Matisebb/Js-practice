let form = document.getElementById('form1');
form.onsubmit = (e) => {
    e.preventDefault();
    let precio = parseFloat(document.getElementById('precio').value);
    console.log(precio)
    let porcentaje = parseFloat(document.getElementById('porcentaje').value);
    console.log(porcentaje)
    var limite = 10000;
    let result = (precio*porcentaje/100);
    console.log(result);
    if (result < limite){
        bonificacion = result;
        pagar = precio - bonificacion;
        console.log(pagar);
    }else{
        bonificacion = limite;
        pagar = precio - bonificacion;
        console.log(pagar);
    }

    document.getElementById('myP').innerHTML = "DESCUENTO: " + bonificacion.toFixed(2); 
    "<br>" 
    document.getElementById('pym').innerHTML = "TOTAL A PAGAR: " + pagar.toFixed(2);
} 
function fun(){  
    document.getElementById("form1").reset();
    document.getElementById('myP').innerHTML = "INGRESE PRECIO Y PORCENTAJE DE DESCUENTO"
    document.getElementById('pym').innerHTML = ""

}  

