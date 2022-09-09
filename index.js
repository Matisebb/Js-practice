let form = document.getElementById("form1");

form.onsubmit = (e) => {
    e.preventDefault();
    let price = parseFloat(document.getElementById("price").value);
    let percentage = parseFloat(document.getElementById("percentage").value);
    var limit = 10000;
    let result = (price*percentage/100);
    if (result < limit){
        bonus = result;
        pay = price - bonus;
    } else {
        bonus = limit;
        pay = price - bonus;
    }

    document.getElementById("myP").innerHTML = "Descuento: " + bonus.toFixed(2);
    "<br>"
    document.getElementById("pym").innerHTML = "Total a pagar: " + pay.toFixed(2);
}

function fun(){
    document.getElementById("form1").reset();
    document.getElementById("myP").innerHTML = "Ingrese precio y porcentaje de descuento"
    document.getElementById("pym").innerHTML = ""
}