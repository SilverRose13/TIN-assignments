function coins(ammount, arr){
    result = [];
  
    for(i = 0; i < arr.length; i++){
      while(ammount >= arr[i] && ammount >0){
        result.push(arr[i]);
        ammount -= arr[i];
      }
    }
  
    return result;
  }
  
  console.log(coins(46, [25, 10, 5, 2, 1]));
  
  console.log(coins(543, [25, 10, 5, 2, 1]));
  
  console.log(coins(0, [25, 10, 5, 2, 1]));
  
  console.log(coins(1, [25, 10, 5, 2, 1]));