const Auto = function(){
    this.velocidad = 0     
}

Auto.prototype.acelerar = function(num1){
    this.velocidad = this.velocidad + num1;
    return this.inicio
}

Auto.prototype.frenar = function(num2){
    this.velocidad = this.velocidad - num2;
    if (this.velocidad <0){this.velocidad = 0}
    return this.velocidad
}

const a1 = new Auto();

console.log(a1.velocidad); 
a1.acelerar(1);
a1.acelerar(2);
console.log(a1.velocidad); 
a1.frenar(2);
console.log(a1.velocidad); 
a1.frenar(3);
console.log(a1.velocidad); 
