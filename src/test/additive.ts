const arrNumbers = [14, 8, 5, 54, 41, 10, 1, 500];
for (let i = 0; i < arrNumbers.length; i++)
{
   for (let j = 1; j < arrNumbers.length -i; j++)
   {
      if (arrNumbers[j - 1] > arrNumbers[j])
      {
         [arrNumbers[j -1 ], arrNumbers[j]] = [arrNumbers[j], arrNumbers[j - 1]];
      }
   }
}
console.log(arrNumbers);
