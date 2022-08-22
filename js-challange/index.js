// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

function funcReverse(num) {
  let reverseNum = 0;
  while (num > 0) {
    reverseNum = reverseNum * 10 + (num % 10);
    num = Math.trunc(num / 10);
  }
  return reverseNum;
}

console.log(funcReverse(51249));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

function palindrome(str) {
  let strArray = str.split("");
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr += strArray.pop();
    strArray.slice(0, strArray.length - 1);
  }
  console.log(reversedStr);
  console.log(str);
  return str === reversedStr;
}
console.log(palindrome("kazim"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g
function makeWords(word) {
  const letters = word.split("");
  const words = [];
  for (let i = 0; i <= letters.length; i++) {
    for (let j = 1; j <= letters.length; j++) {
      if (i !== j && i < j) words.push(word.slice(i, j));
    }
  }
  return words;
}
console.log(makeWords("kazim"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortByAbs(str) {
  return (sortedStr = str.split("").sort().join(""));
}
console.log(sortByAbs("kazim"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'

function capitalize(sentence) {
  return sentence
    .split(" ")
    .map(
      (item) =>
        (item =
          item.split("")[0].toUpperCase() +
          item.split("").slice(1, item.length).join(""))
    )
    .join(" ");
}
console.log(capitalize("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

const findLongest = (sentence) => {
  return sentence.split(" ").reduce((acc, cur) => {
    return acc.length > cur.length ? acc : cur;
  });
};
console.log(findLongest("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

function fintVowelsCount(str) {
  return str
    .split("")
    .filter(
      (item) =>
        item === "a" ||
        item === "i" ||
        item === "o" ||
        item === "u" ||
        item === "e"
    ).length;
}

console.log(fintVowelsCount("Tutorialie"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function findPrime(num) {
  let divisor = 0;
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      divisor++;
    }
  }
  divisor > 1 ? console.log("not a prime number") : console.log("prime number");
}
findPrime(4);

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function findType(data) {
  return typeof data;
}

console.log(findType(3));
console.log(findType("3"));
console.log(findType([3]));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function setMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push("n");
    }
    matrix.push(row);
  }
  return matrix;
}

console.log(setMatrix(5));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

function findSecondBiggestAndSmallest(arr) {
  arr.sort((a, b) => a - b);
  return [arr[1], arr[arr.length - 2]];
}
console.log(findSecondBiggestAndSmallest([100, 22, 3, 4, 5]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function findPerfect(num) {
  let sum = 0;
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
console.log(findPerfect(28));

// 13. Write a JavaScript function to compute the factors of a positive integer.

function findFactors(num) {
  const factors = [];
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  factors.push(num);
  return factors;
}
console.log(findFactors(23));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

function amountToCoins(amount, availableCoins) {
  const coins = [];
  let count = 0;
  for (let i = 0; i < availableCoins.length; i++) {
    count = Math.floor(amount / availableCoins[i]);
    amount = amount % availableCoins[i];
    if (count >= 1) {
      while (count > 0) {
        count--;
        coins.push(availableCoins[i]);
      }
    }
  }
  return coins;
}
console.log(amountToCoins(57, [25, 10, 5, 2, 1]));
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function expon(b, n) {
  let result = b;
  for (let i = 1; i <= n; i++) {
    result = result * b;
  }
  return result;
}
console.log(expon(3, 3));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function removeEqualLetters(str) {
  let lettersArray = str.split("");
  let set = new Set(lettersArray);
  return [...set].join("");
}
console.log(removeEqualLetters("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function findCountOfLetters(str) {
  const strArray = str.split("");
  let result = {}
  for (let i = 0; i < strArray.length; i++) {
    result[strArray[i]] = strArray.filter(letter=>letter===strArray[i]).length
    strArray.filter(letter=>letter!==strArray[i])
  }
  return result
}
console.log(findCountOfLetters("shababakiki")); // {s:1,h:1,a:3,b:2,k:2,i:2}


// 29. Write a JavaScript function to get the function name.
let returnName = (func) => {
  return func.name;
};
console.log(returnName(returnName));
