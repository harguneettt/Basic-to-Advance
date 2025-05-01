// Spread Operator
let fruits=["pineapple","dragon","pea","onion","paneer","orange","red","physics","chips"];
console.log(fruits[0],fruits[1])
console.log(...fruits);

let arr=[1,2,3,4];
let newArr=[...arr,5];
console.log(newArr)

// On objects
let one={
    a:1,
    b:2,
}

let two={
   
    c:3
}
let three={
    ...one,...two
}
console.log(three)
