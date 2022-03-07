/*

let age = +prompt("What's your age?", 18);

let welcome = 
  age >= 18
    ? () => alert("Welcome bitch 🧍‍♀️")
    : () => alert("May God bless ya")

welcome();
*/

/*
let sortInc = (a, b, c) => {
  if(a <= b && a <= c){
    if(b <= c){
      console.log(a, b, c);
    } else{
      console.log(a, c, b);
    }
  } else if(b <= a && b <= c){
    if(a < c){
      console.log(b, a, c);
    } else{
      console.log(b, c, a);
    }
  } else{
    if(b < a){
      console.log(c, b, a);
    } else{
      console.log(c, a, b);
    }
  }
}

let a = 111;
let b = 11;
let c = -8000;

sortInc(a, b, c);
*/

/*
let newArray = [12, 20, 65, 65, 70, 652, 545];

for(let i = 0; i < newArray.length; i++){
  if(newArray[i] % 2 != 0){
    console.log(newArray[i]);
  }
}
*/

/*
let newArray = [2, 3, 4, 11, 80, 6, 7, 15];

for(let i = 0; i < newArray.length; i++){
  let count = 0;
  for(let j = 2; j < newArray[i]; j++){
    if(newArray[i] % j == 0){
      count++;
    }
  }
  if(count == 0){
    console.log(newArray[i]);
  }
}
*/

/*
let newArray = [2, 3, 4, 5, 6, 7, 8, 11, 88, 12];
let evenArray = [];
let oddArray = [];
let primeArray = [];

for(let i = 0; i < newArray.length; i++){

  // Juft/Toq sonlar

  if(newArray[i] % 2 == 0){
    evenArray[evenArray.length] = newArray[i];
  } else{
    oddArray[oddArray.length] = newArray[i];
  }

  //Tub sonlar

  let check = 0;
  for(let j = 2; j < newArray[i]; j++){
    if(newArray[i] % j == 0){
      check++;
    }
  }
  if(check == 0){
    primeArray[primeArray.length] = newArray[i];
  }

  //Mukammal sonlar


}
console.log("Array ichidagi juft sonlar: ");
console.log(evenArray);
console.log("Array ichidagi toq sonlar: ");
console.log(oddArray);
console.log("Array ichidagi tub sonlar: ");
console.log(primeArray);
*/