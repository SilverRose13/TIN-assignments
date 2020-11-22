function erastotenesSieve(array, upperLimit){
	for (i=2; i*i<=upperLimit; i++){
      if(!array[i])	
		    for (j = i*i ; j<=upperLimit; j+=i) {
          array[j] = 1;
        }
  }
}

function isPrime(array, number){
  if(number === 0) return false;

  if(array[number] === 0){
    return true;
  } 

  return false;
}

let array = [];
const upperLimit = 50;

for(i = 0; i < upperLimit; i++){
  array.push(0);
}


sieve = erastotenesSieve(array, upperLimit);

for(i = 0; i < array.length; i++){
  console.log(array[i]);
}

console.log(isPrime(array, 3))

console.log(isPrime(array, 5))

console.log(isPrime(array, 72))

console.log(isPrime(array, 49))

console.log(isPrime(array, 47))

console.log(isPrime(array, 52))

