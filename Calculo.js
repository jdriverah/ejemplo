function sumar(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var numero3 = document.getElementById("numero3").value;
    var numero4 = document.getElementById("numero4").value;

    var suma = parseInt(numero1) - parseInt(numero2)-parseInt(numero3)-parseInt(numero4)+ 1;

    document.getElementById('spTotal').innerHTML = suma}