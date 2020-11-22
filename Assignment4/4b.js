function fibonacci(n){
    if( n === 0){
      return 0;
    }

    if(n === 1 || n === 2){
        return 1;
    }
    last  = 1;
    current = 1;

    for(i = 3; i <= n; i++){
        helper = current;
        current += last;
        last = helper;
    }

    return current;


}

console.log(fibonacci(3));

console.log(fibonacci(4));

console.log(fibonacci(5));

console.log(fibonacci(6));