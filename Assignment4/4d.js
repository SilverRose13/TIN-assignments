function sortLetters(word)  
{  
  n = word.length;
   arr = word.split("");
    // One by one move boundary of unsorted subarray  
    for (i = 0; i < n-1; i++) {  
      //console.log(arr);
        // Find the minimum element in unsorted array  
        min_idx = i;  
        for (j = i+1; j < n; j++)  
        if (arr[j] < arr[min_idx]) {
          //console.log(arr[j] + ' ' + arr[min_idx]);
 
          //console.log(arr[min_idx]);
          pom = arr[min_idx];
          arr[min_idx] = arr[j];
          //console.log(arr[min_idx]);
          
          arr[j] = pom;

        } 

    }  
  word = arr.toString();
  for(i = 0; i < n; i++){
    word = word.replace(",", "");
  }

  return word;
}


console.log(sortLetters('bsfua'));

console.log(sortLetters('abcdefg'));

console.log(sortLetters('fedcba'));

console.log(sortLetters('adfgdtghhhdrrrsss'));

console.log(sortLetters('hjgdhgdhgfdhgfdhgfdhgfd'));

console.log(sortLetters('iuytiuytiuyt'));