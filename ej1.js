let Persona = function(nombre,peso,altura) {
    this.nombre = nombre,
    this.peso = peso,
    this.altura = altura
};

Persona.prototype.saludar = function(FristName) {
    return console.log(`Hola ${FristName}, me llamo ${this.nombre}`);
};

Persona.prototype.bmi = function(){
    return this.peso/this.altura**2;
};

const pedro = new Persona("Pedro", 72, 1.5);
pedro.saludar("Maria"); 
console.log(pedro.bmi()); 