//Code which outputs prime numbers in the interval from 2 to n.
let val = 10;

//print values from 2 to numb
keepChecking:
for (let i = 2; i <= val; i++) {
  for (let j = 2; j < i; j++){
      if (i % j == 0) continue keepChecking;
    }
    console.log(i);
}