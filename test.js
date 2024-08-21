function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function findSumOfPalindromes(limit) {
  let sum = 0;

  for (let num = 1; num < limit; num++) {
    const decimalStr = num.toString();
    const binaryStr = num.toString(2);

    if (isPalindrome(decimalStr) && isPalindrome(binaryStr)) {
      sum += num;
    }
  }

  return sum;
}

const limit = 1000000;
const result = findSumOfPalindromes(limit);
console.log(result);
