function isPalindrome(word){
    n = word.length - 1;
  
    if(n === 0) return true;
  
    for(i = 0; i <= n; i++, n--){
      if(word[i] !== word[n]){
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome('ala'));
  
  console.log(isPalindrome('qwerrewq'));
  
  console.log(isPalindrome('kjhgdysfcdjy'));
  
  console.log(isPalindrome('lkjhjkl'));
  
  console.log(isPalindrome('w'));