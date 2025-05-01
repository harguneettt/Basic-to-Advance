const arr = [1,2,3,4,5]
const[a,b,...rest] = arr
console.log(a)


const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const obj3 = {...obj1,...obj2}
console.log(obj3)


function multiply(a, b=2) {
  console.log(a*b)
}
multiply(5)

const person = { name: "Bob", age: 30 };
function incrementAge(person) {
    person.age=person.age+1
    console.log(person)
}
incrementAge(person)
incrementAge(person)
incrementAge(person)
incrementAge(person)

function sum(...numbers) {
    let sum=0
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    console.log(sum)
  }
sum(1,2,3,4,5,6)

// using reducer (higher order function)
function sum(...numbers) {
    let sum=numbers.reduce((acc,item)=>acc+item)
    console.log(sum)
}
sum(1,2,3,4,5,6)