function binarySearch(arr,  x) 
{ 
  start = 0;
  end = arr.length;


    while (start <= end) { 
        if(start + (end - start) % 2 === 0){
          mid = start + (end - start) / 2; 
        } else {
          mid = start + (end + 1 - start) / 2 ;
        }

  
        //console.log(start + ' ' + mid + ' ' + end);

        if (arr[mid] == x) return mid; 

        if (arr[mid] > x){
          first = mid + 1; 
        } else {
          end = mid -1; 
        }

    } 

    return -1; 
} 

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5));

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5));

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1));

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));

console.log(binarySearch([1, 2, 3, 4, 6, 7], 5));