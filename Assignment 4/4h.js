function seconds(arr){
    min = 9999;
    min_sec = 9999;
  
    max = -9999;
    max_sec = -9999;
  
    for(i = 0; i < arr.length; i++){
      if(arr[i] > max_sec){
        if(arr[i] > max){
          max_sec = max;
          max = arr[i];
        } else {
          max_sec = arr[i];
        }
      }
      if(arr[i] < min_sec){
        if(arr[i] < min_sec){
          if(arr[i] < min){
            min_sec = min;
            min = arr[i];
          } else {
            min_sec = arr[i];
          }
        }
      }
    }
    return [min_sec, max_sec];
  }
  
  
  console.log(seconds([1, 2, 3, 4, 5, 6]));
  
  console.log(seconds([3245, 564, 45, 4, 5, -6]));
  
  console.log(seconds([-1, -2, -3, -4, -5, -6]));
  
  console.log(seconds([17, 2, -3, 454, 5, 6657]));
  
  console.log(seconds([11111, 2222, 333, 44, 5, -6]));