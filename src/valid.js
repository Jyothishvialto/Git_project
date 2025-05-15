//6.Write a JavaScript program to check if the given input is a valid number 
function isValidNumber(input1) 
{
  if (!isNaN(input1) && input1 !== '') 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
let input1 = "1";
if (isValidNumber(input1)) 
{
  console.log(input1 + " is a valid number.");
}
 else 
{
  console.log(input1 + " is not a valid number.");
}
