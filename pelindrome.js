let string = "naman"

function revers(string){
   let bag =""
for(let i=0;i<=string.length-1;i++){
   bag+=string[i]
}
  return bag;
}
let reversed=reverse(string);
if(string==reversed){
  console.log("Palindrome");
 }else{
console.log("Not Palimdrome");
}