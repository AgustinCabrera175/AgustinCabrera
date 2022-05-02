let miArray=[99,4,34,93,1];

function ordenar (miArray) {
    
    for (let I = 0; I < miArray.length; I++) {
        const element = miArray[I];
        if (miArray[I]>50) {
            console.log(miArray[I]);
        }
    }
}
function pares(miArray) {
    for (let I = 0; I < miArray.length; I++) {
        const element = miArray[I];
        if (miArray[I]%2==0) {
            alert("los numeros pares son:"+ miArray[I])
        }
    }
}