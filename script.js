function convertir(){
    let valor = parseFloat(document.getElementById("cantidad").value)
    document.getElementById("valor").innerHTML=valor

    let deDonde = document.getElementById("deDonde").value

    let aDonde = document.getElementById("aDonde").value

    const dolar = 332.50
    const euro = 349.70
    resultado = 0

    // CONVERSIONES
    // peso a dolar
    if(deDonde == 1 && aDonde == 2){
        resultado = valor/dolar
    }
    // peso a euro
    else if(deDonde == 1 && aDonde == 3){
        resultado = valor/euro
    }
    // dolar a euro
    else if(deDonde == 2 && aDonde == 1){
        resultado = dolar*valor
    }
    else if(deDonde == 2 && aDonde == 3){
        resultado = valor*(dolar/euro)
    }
    else if(deDonde == 3 && aDonde == 1){
        resultado = valor/euro
    }
    else if(deDonde == 3 && aDonde == 2){
        resultado = valor*(euro/dolar)
    }
    else{
        resultado = valor
    }
    document.getElementById("resultado").innerHTML = "Resultado:  $" + resultado.toFixed(2)
}