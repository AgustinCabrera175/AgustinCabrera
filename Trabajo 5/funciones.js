const persona1={
    nombre:"agustin",
    apellido:"cabrera",
    edad:33,
    sexo:"masculino",
    nombreCompleto:function(){
        return this.nombre+","+this.apellido
    }
};
const persona2={
    nombre:"milagros",
    apellido:"hernandez",
    edad:12,
    sexo:"femenino",
    nombreCompleto:function(){
        return this.nombre+","+this.apellido
    }
}
const persona3={
    nombre:"fendanda",
    apellido:"gonzalez",
    edad:94,
    sexo:"femenino",
        nombreCompleto:function(){
            return this.nombre+","+this.apellido
        }
}


console.log(persona1.nombreCompleto());
console.log(persona2.nombreCompleto());
console.log(persona3.nombreCompleto());