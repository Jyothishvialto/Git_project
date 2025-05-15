const prompt = require("prompt-sync")();

class SimplePrinter 
{
  constructor(s) 
  {
    this.s = s;
  }
  //counting how many unique turns
  countUniqueTurns() 
  {
    const seen = new Set();                   // this is for tracking/storing of the unique characters. Set is preffered as duplicates not allowed. 
    for (let i = 0; i < this.s.length; i++)   // iterates through the elements of the string
    {
      if (!seen.has(this.s[i]))               // if the element not found, it goes into the loop
      {
        seen.add(this.s[i]);                  // adds the element to the seen
      }
    }
    return seen.size;                         // size represents count (how many) unique characters
  }
}
const input = prompt("Enter a string: ");     // input from the user
const printer = new SimplePrinter(input);     // Object creation
const result = printer.countUniqueTurns();    // calling method using the object
console.log("Output:", result);


let stu = "varma"
console.log(Reverse.stu);

