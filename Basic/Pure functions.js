// Pure Functions
// Same Input == Same Output
function add(a,b){
    return a+b
}
console.log(add(2,4))
console.log(add(2,4))


// Impure functions 
// same input but output is diffrent ;
let count =0;
function inc(){
    count++;
    return count;
}
console.log(inc());
console.log(inc());