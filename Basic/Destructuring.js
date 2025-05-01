// default Parameters
function Harguneet(f,w="water"){ // parameter
    let mes=`I am eating ${f} and drinking ${w}`
    console.log(mes)
  }
  Harguneet("Food","Pepsi") // arguments
  
  // Destructuring
  let a=["game","sleeping","study☠️","sketching"];
  // Normal Methods
  let quality1=a[0];a
  let quality2=a[1]
  console.log(quality1,quality2)
  
  // Destructure Methods
  let [c,b ,f, e]=a;
  console.log(`${f} , ${e}`)
  
  // obj des
  let obj={
      name :"y",
      std:"UKG",
      city:"Rajpura",
      hobby:"Sleeping"
  }
  // Normal Methods 
  let name=obj.name;
  let city=obj["city"];
  
  // Destucture Methods
  const {hobby,std} =obj;
  console.log(hobby,std);
  