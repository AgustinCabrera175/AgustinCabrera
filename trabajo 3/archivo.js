function sumar(num1,num2) {
    let resultado=num1+num2;
    console.log(resultado);
}
function sumar1(valA,valB) {
    let numero1=document.getElementById("valo1").value;
    let numero2=document.getElementById("valo2").value;
    let resul =Number(numero1)+Number(numero2);
    document.getElementById("resultado").innerHTML="el resultado es:"+ resul;
    
}