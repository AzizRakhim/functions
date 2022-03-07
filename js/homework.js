// Array1

/*
let n = 5;
let count = 0;
let newArray = [];

for(let i = 1; true; i++){
  if(i % 2 != 0){
    if(count < 5){
      newArray[newArray.length] = i;
      count++;
    } else{
      break;
    }
  }
}

console.log(newArray);
*/

// Array2

/*
let n = 5;
let newArray = [];

for(let i = 0; i <= n; i++){
  newArray[newArray.length] = 2**i;
}

console.log(newArray);
*/

// Array3

/*
let n = 5;
let a = 3;
let d = 10;
let newArray = [];

for(let i = 1; i <= n; i++){
  newArray[newArray.length] = a;
  a += d;
}

console.log(newArray);
*/

// Array4

/*
let n = 5;
let a = 3;
let d = 3;
let newArray = [];

for(let i = 1; i <= 5; i++){
  newArray[newArray.length] = a;
  a *= d;
}

console.log(newArray);
*/

// Array5

/*
let n = 5;
let a = 0;
let b = 1;
let c = 0;
let newArray = [];

for(let i = 1; i <= n; i++){
  c = a + b;
  a = b;
  b = c;
  newArray[newArray.length] = c;
}

console.log(newArray);
*/

// Array6


let n = 5;
let a = 2;
let b = 3;
let newArray = [a, b]

for(let i = 1; i <= n - 2; i++){
  for(let i = b; ; i)
  newArray[newArray.length] = c; 
}

console.log(newArray);


// Array7

/*
let newArray = [2, 3, 4, 5, 6, 7, 8, 10];
let reverseArray = [];
let j = 0;

for(let i = newArray.length - 1, j = 0; i >= 0; i--, j ++){
  reverseArray[j] = newArray[i];
}

console.log(reverseArray);
*/

// Array8

/*
let newArray = [4, 5, 7, 8, 6, 9];
let oddRiseArray = [];
let count = 0;

for(let i = 0; i < newArray.length; i++){
  if(newArray[i] % 2 != 0){
    oddRiseArray[oddRiseArray.length] = newArray[i];
    count++;
  }
}

console.log(oddRiseArray, count);
*/

// Array9

/*
let newArray = [4, 5, 7, 8, 6, 9];
let evenDecreaseArray = [];
let count = 0;

for(let i = newArray.length - 1; i >= 0; i--){
  if(newArray[i] % 2 == 0){
    evenDecreaseArray[evenDecreaseArray.length] = newArray[i];
    count++;
  }
}

console.log(evenDecreaseArray, count);
*/

// Array10

/*
let newArray = [4, 5, 7, 8, 6, 9];
let evenRiseArray = [];
let oddDecreaseArray = [];
let j = 0;

for(let i = 0, j = newArray.length - 1; i < newArray.length; i++, j--){
  if(newArray[i] % 2 == 0){
    evenRiseArray[evenRiseArray.length] = newArray[i];
  } 
  if(newArray[j] % 2 != 0){
    oddDecreaseArray[oddDecreaseArray.length] = newArray[j];
  }
}

console.log(evenRiseArray, oddDecreaseArray);
*/

// Array18

/*
let newArray = [18, 2, 11, 14, 10];

for(let i = 0; i < newArray.length; i++){
  if(newArray[i] < newArray[newArray.length - 1]){
    console.log(newArray[i]);
    break;
  }
  if(i == newArray.length -1){
    console.log(0);
  }
}
*/

// Array19

/*
let newArray = [2, 4, 3, 6, 8, 9, 7];

for(let i = newArray.length - 1; i >= 0; i--){
  if(newArray[i] < newArray[newArray.length - 1] && newArray[i] > newArray[0]){
    console.log(i);
    break;
  } 
  if(i == newArray[0]){
    console.log(0);
  }
}
*/

// Array20

/*
let newArray = [2, 3, 4, 7, 4, 2, 9, 12];
let k = 2;
let l = 6;
let count = 0;

for(let i = k; i < l; i++){
  count += newArray[i];
}

console.log(count);
*/

// Array21

/*
let newArray = [1, 2, 10, 4, 5, 6];
let k = 2;
let l = 5;
let count = 0;
let check = 0;

for(let i = k; i < l; i++){
  count += newArray[i]; 
  check++;
}

console.log(count / check);
*/

// Array22

/*
let newArray = [1, 2, 3, 4, 5, 1, 2];
let k = 2;
let l = 4;
let count = 0;

for(let i = 0; i < newArray.length; i++){
  if(i < k || i > l){
    count += newArray[i];
  }
}

console.log(count);
*/

// Array23

/*
let newArray = [1, 2, 10, 4, 5, 6, 2];
let k = 2;
let l = 3;
let count = 0;
let check = 0;

for(let i = 0; i < newArray.length; i++){
  if(i < k || i > l){
    count += newArray[i];
    check++;
  }
}

console.log(count / check);
*/

// Array24

/*
let newArray = [3, 6, 9, 12, 13];
let a = newArray[1] - newArray[0];
let count = 0;

for(let i = 1; i < newArray.length; i++){
  if(newArray[i] == newArray[i - 1] + a){
    count += 0;
  } else{
    count++;
    break;
  }
}

if(count == 0){
  console.log(a);
} else{
  console.log(0);
}
*/

// Array25

/*
let newArray = [3, 9, 27, 81, 243];
let a = Math.floor(newArray[1] / newArray[0]);
let count = 0;

for(let i = 1; i < newArray.length; i++){
  if(newArray[i] == newArray[i - 1] * a){
    count += 0;
  } else{
    count++;
    break;
  }
}

if(count == 0){
  console.log(a);
} else{
  console.log(0);
}
*/

// Array26

/*
let newArray = [2, 1, 2, 1, 2, 1];
let count = 0;
let i = 0;

if(newArray[0] % 2 == 0){
  for(let j = 0, i = 1; j < newArray.length; j += 2, i += 2){
    if(newArray[j] % 2 == 0){
      count += 0;
    } else{
      count = j;
      break;
    }
    if(newArray[i] % 2 != 0){
      count += 0;
    } else{
      count = i;
      break;
    }
  }
} else{
  for(let j = 0, i = 1; j < newArray.length; j += 2, i += 2){
    if(newArray[j] % 2 != 0){
      count += 0;
    } else{
      count = j;
      break;
    }
    if(newArray[i] % 2 == 0){
      count += 0;
    } else{
      count = i;
      break;
    }
  }
}


if(count == 0){
  console.log(0);
} else{
  console.log(count);
}
*/

// Array27

/*
let newArray = [-1, 2, -2, 3, -3, 4];
let count = 0;
let j = 0;

if(newArray[0] < 0){
  for(let i = 0, j = 1; i < newArray.length; i += 2, j += 2){
    if(newArray[i] < 0){
      count += 0;
    } else{
      count = i;
      break;
    }
    if(newArray[j] > 0){
      count += 0;
    } else{
      count = j;
      break;
    }
  }
} else{
  for(let i = 0, j = 1; i < newArray.length; i += 2, j += 2){
    if(newArray[i] > 0){
      count += 0;
    } else{
      count = i;
      break;
    }
    if(newArray[j] < 0){
      count += 0;
    } else{
      count = j;
      break;
    }
  }
}

if(count == 0){
  console.log(0);
} else{
  console.log(count);
}
*/

// Array28

/*
let newArray = [22, 4, 11, 5, 6, 7, 11, 3, 12];
let smallArray = [];
 
for(let i = 0; i < newArray.length; i++){
  if(i % 2 == 0){
    smallArray[smallArray.length] = newArray[i];
  }
}

console.log(Math.min(...smallArray));
*/

// Array29

/*
let newArray = [22, 43, 11, 5, 6, 7, 11, 31, 12];
let smallArray = [];
 
for(let i = 0; i < newArray.length; i++){
  if(i % 2 != 0){
    smallArray[smallArray.length] = newArray[i];
  }
}

console.log(Math.max(...smallArray));
*/
