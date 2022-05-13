//Code which outputs prime numbers in the interval from 2 to n.

//let val = prompt("Please, type a number to try", 0);
let num;
function prime(num) {
 for (let i = 2; i < num; i++){
    if (num % i == 0){
    //prime = i;
    console.log("not prime");
    }
  }
}
prime(8);