function longestWord(string){
    words = string.split(" ");
    longest = '';
    for(i = 0; i < words.length; i++){
      //console.log(words[i]);
      if(words[i].length > longest.length){
          longest = words[i];
      }
    }
    return longest;
  }
  
  
  console.log(longestWord('hgjhfy mhgfjytdj jghfjytf kjfjytf'));
  
  console.log(longestWord('a we wer werrt'));
  
  console.log(longestWord('hgjhfy mhg jghfjy k'));
  
  console.log(longestWord('hgjhfy mhgfjytdj jghfjytf kjfjytghfgf'));