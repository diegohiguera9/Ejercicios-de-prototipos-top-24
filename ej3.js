String.prototype.palindrome = function(){
    stringEval = this.toLowerCase().split(' ').join('');
    stringReve = stringEval.split('').reverse().join('')
    
    for(let i in stringEval){
        if (stringEval[i] !== stringReve[i]) {return false}
        return true
    }    
}

console.log("anita lava la tina".palindrome()) // true
console.log("prueba".palindrome()) // false


