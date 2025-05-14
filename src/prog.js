const prompt = require("prompt-sync")();
class LongestWordFinder 
{
  constructor() 
  {
    // Take input for main string 
    this.s = prompt("Enter the main string: "); 
    // Take input for dictionary words
    let dictionaryInput = prompt("Enter dictionary words separated by commas: "); 
    this.dictionary = dictionaryInput.split(",").map(word => word.trim()); // Split and clean   
  }
  // Function to check if word can be formed by deleting characters from s
  canForm(word, s) 
  {
    let i = 0; // Pointer for word
    let j = 0; // Pointer for s
    while (i < word.length && j < s.length)      // Loop through both word and s  //monkey  //alepla
        {
            if (word[i] === s[j]) 

        {
        i++; // Move word pointer if match is found
      }
      j++; // Always move s pointer
    }

    return i === word.length; // If we checked all letters of word, return true
  }
  findLongestWord()    // Main method to find the longest word
  {
    let result = "";
    for (let word of this.dictionary)     // Loop through each word in the dictionary
        {
      // If the word can be formed and is longer than current result, update result
      if (this.canForm(word, this.s) && word.length > result.length) 
         {
        result = word;
      }
    }
    console.log("Longest Word:", result); // Output the longest word found
  }
}
const finder = new LongestWordFinder();
finder.findLongestWord();
