


function checkPalindrome(string){
   let reversed =""
for(let i=0;i<=string.length-1;i++){
   reversed+=string[i]
}
 if(string==reversed){
  return true console.log("Palindrome");
 }else{
return false console.log("Not Palimdrome");
}
let palindrome =checkPalindrome("naman")
 if(palindrome==true){
  console.log("Palindrome");
 }else{
console.log("Not Palimdrome");