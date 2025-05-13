//write a javascript Program to remove duplicate letters from the given set of letters
let prompt = require('prompt-sync')();

// Define a class to handle removal of duplicate letters
class duplicatenumber
{
    remove(str)
    {
        let result = ""; // This will store the final string with unique letters
        let letters = str.split(''); // Convert the input string into an array of individual characters

        // Loop through all lowercase alphabets from 'a' (97) to 'z' (122)
        for (let i = 0; i < 26; i++)
            {
            // Convert the loop index to a lowercase character using ASCII
            let ch = String.fromCharCode(97 + i);

            let found = false; // Flag to check if the character exists in the input string

            // Loop through each character of the input string
            for (let j = 0; j < letters.length; j++)
                {
                // If current character from alphabet matches a character in the input
                if (letters[j] === ch) 
                    {
                    found = true; // Mark as found
                    break; // Exit inner loop as we found the character already
                }
            }

            // If the character was found in the input, add it to the result
            if (found) 
                {
                result += ch;
            }
        }
        return result; // Return the string with unique characters in alphabetical order
    }
}

let str = prompt("ENTER A STRING: ");
let obj = new duplicatenumber();
let Output = obj.remove(str);
console.log("Output:", Output);
