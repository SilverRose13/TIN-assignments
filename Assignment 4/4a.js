function factorial(number){
    if(number === 0 || number === 1) return 1;

    f = 1;

    for(i = 2; i <= number; i++){
        f *= i;
    }
    return f;
}

console.log(factorial(1));

console.log(factorial(2));

console.log(factorial(3));

console.log(factorial(4));

console.log(factorial(20));

console.log(factorial(10));

console.log(factorial(7));

factorialExpression = function(number) {
    if(number === 0 || number === 1) return 1;
    
    return number * factorialExpression(number - 1);
  }
  
  console.log(factorialExpression(1));
  
  console.log(factorialExpression(2));
  
  console.log(factorialExpression(3));
  
  console.log(factorialExpression(4));
  
  console.log(factorialExpression(20));
  
  console.log(factorialExpression(10));
  
  console.log(factorialExpression(7));