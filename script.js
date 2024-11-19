console.log("*anonymous function*");

//1.Print odd numbers in an array

const arr = function(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        console.log(array[i]);
      }
    }
  }
  
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr(myArray); 
// -----------------------------------------------------
  console.log("*IIFE*");

  (function(a){
    for(var i = 0 ; i<a .length ; i++){
               if(a[i]%2!=0){
                  console.log(a[i])
               } 
          }
    })([1,2,3,4])
// --------------------------------------------------------

  // 2.Convert all the strings to title caps in a string array
  console.log("*anonymous function*");
  const capitalizeWords = function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  
  const myStr = "grab your vernacular imprint"; 
  const result = capitalizeWords(myStr);
  console.log(result);
// --------------------------------------------------------------

  console.log("*IIFE*");

  const capitalizedString = (function(x) {
    x = x.toLowerCase().split(' ');
    for (var i = 0; i < x.length; i++) {
      x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1); 
    } 
    return x.join(' ');
  })("grab your vernacular imprint");
  
  console.log(capitalizedString);
  
//   ------------------------------------------------------------------
  
  //3.Sum of all numbers in an array
  console.log("*anonymous function*")
  
  const add = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum;
  }
  
  const mysum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const value = add(mysum);
  console.log(value); 

  // -----------------------------------------------------------------------
  console.log("*IIFE*");

  const add1=(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4])
    console.log(add1)
//   ---------------------------------------------------------------------------
// 4.  Return all the prime numbers in an array
console.log("*anonymous function*")

const isPrime = function(numArray) {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
  }
  
  const number= [2, 3, 4, 5, 6, 7, 8, 9, 10];
  isPrime(number);

  // -------------------------------------------------------------------------------------------
  console.log("*IIFE*");
    
const isPrime1=  (function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([1,2,3,4])
   
//   -------------------------------------------------------------------------------------------
//   5.Return all the palindromes in an array
console.log("*anonymous function*")

const getAllPalindromes = function (words) {
    return words.filter(function (word) {
       return word.split("").reverse().join("") === word;
     });
   };
   
   console.log(getAllPalindromes(["hello", "noon"]));

 
// --------------------------------------------------------------------------------------------------
//  6.Remove duplicates from an Array
console.log("*anonymous function*")

const duplicates=function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }
const arrNew=[1,1,2,34,4,4,5,6];
duplicates(arrNew)

// -------------------------------------------------------------------------------------------
console.log("*IIFE*");
(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])
// --------------------------------------------------------------------------------------
2.
console.log("\n\n arrow function");
// Print odd numbers in an array
const oddNumbers = (array) => {
    array.forEach((number) => {
      if (number % 2 !== 0) {
        console.log(number);
      }
    });
  };
  oddNumbers([1, 2, 3, 4, 5]);
//   ----------------------------------------------------------------------------------------------------------
//Convert all the strings to title caps in a string array
const titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  };
  
  // Example usage
  const result1 = titleCase("grab your vernacular imprint");
  console.log(result1);
//   ----------------------------------------------------------------------------------------------------------
// Sum of all numbers in an array
const sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }
    const sum1=sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    console.log(sum1)
// ------------------------------------------------------------------------------------------------------------
// Return all the prime numbers in an array
const primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
const prime=primeNumber([1, 2, 3, 4, 5, 6])
// =================================================================================================================
// Return all the palindromes in an array

const Palindrome = (arr, n) =>
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    const word =Palindrome("noon")
    console.log(word)