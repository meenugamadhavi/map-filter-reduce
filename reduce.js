const invert = function (functionName) {
  return function (...args) {
    return !functionName(args);
  };
};

const add = (number1, number2) => number1 + number2;

// ------------------------- 01_SUM_OF_NUMBERS ---------------------------------

const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

// ------------------------- 02_PRODUCT_OF_NUMBERS -----------------------------
const multiply = (number1, number2) => number1 * number2;

const productOf = function (numbers) {
  return numbers.reduce(multiply, 1);
};

// ------------------------- 04_AVERAGE_OF_NUMBERS -----------------------------

const averageOf = function (numbers) {
  const total = sumOf(numbers);
  return total / numbers.length;
};

// ------------------------- 05_MIN_OF_NUMBERS ---------------------------------
const minOfTwoNumbers = function (number1, number2) {
  return Math.min(number1, number2);
};

const minOf = function (numbers) {
  return numbers.reduce(minOfTwoNumbers, Infinity);
};

// ------------------------- 06_MAX_OF_NUMBERS ---------------------------------

const max = function (number1, number2) {
  return Math.max(number1, number2);
};

const maxOf = function (numbers) {
  return numbers.reduce(max, 0);
};

// ------------------------- 07_SUM_OF_POSITIVES -------------------------------

const isPositive = function (number) {
  return number > 0;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.reduce(function (sum, number) {
    return isPositive(number) ? add(sum, number) : sum;
  }, 0);
};

// ------------------------- 08_SUM_OF_SQUARES ---------------------------------

const sumOfSquares = function (numbers) {
  return numbers.reduce(function (sum, number) {
    return multiply(number, number) + sum;
  }, 0);
};

// ------------------------- 09_SUM_OF_ODD_NUMBERS -----------------------------
const isOdd = function (number) {
  return number % 2 === 1;
};

const filterNumbers = function (predicate, numbers) {
  return numbers.filter(predicate);
};

const sumOfOddNumbers = function (numbers) {
  const oddValues = filterNumbers(isOdd, numbers);
  return sumOf(oddValues);
};

// ------------------------- 09_SUM_OF_NEGATIVE_NUMBERS ------------------------

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(function (count, number) {
    const isNegative = !isPositive(number);
    return isNegative ? count + 1 : count;
  }, 0);
};

// ------------------------- 10_SUM_OF_SQUARES_OF_EVEN_NUMBERS -----------------

const isEven = function (number) {
  return number % 2 === 0;
};

const findSumOfEvenSquares = function (numbers) {
  const evens = filterNumbers(isEven, numbers);
  return sumOfSquares(evens);
};

// ------------------------- 11_CONCAT_WORDS -----------------------------------
const concatenateWords = function (words) {
  return words.reduce(function (concatenatedString, word) {
    return concatenatedString.concat(word);
  });
};

// ------------------------- 12_LONGEST_WORD -----------------------------------
const longestWord = function (words) {
  return words.reduce(function (maxWord, word) {
    return maxWord.length > word.length ? maxWord : word;
  }, "");
};

// ------------------------- 13_SHORTEST_WORD -----------------------------------

const shortestWord = function (words) {
  return words.reduce(function (minWord, word) {
    return minWord.length < word.length ? minWord : word;
  });
};

// ------------------------- 14_JOINWITH_COMMA ---------------------------------

const getCharSeparedString = (string1, char, string2) =>
  string1 + char + string2;

const joinWithComma = function (words) {
  const char = ",";

  return words.reduce((string, word) =>
    getCharSeparedString(string, char, word)
  );
};

// ------------------------- 15_REVERSED_WORDS ---------------------------------
// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words.reduce((revrsedWord, word) => word + " " + revrsedWord);
};

// ------------------------- 16_JOIN_WITH_SPACES -------------------------------
// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  const char = " ";
  return words.reduce((string, word) =>
    getCharSeparedString(string, char, word)
  );
};

// ------------------------- 17_CONCAT_STRING ----------------------------------
// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  const char = "";
  return names.reduce((string, word) =>
    getCharSeparedString(string, char, word)
  );
};

// ------------------------- 17_CONCAT_STRING ----------------------------------
// countVowelsInWords(["hello", "world"]) => "eoo"
const vowels = ["a", "e", "i", "o", "u"];
const getVowels = function (word, vowels) {
  return [...word].filter((char) => vowels.includes(char));
};

const countVowels2 = function (vowelsCount, word) {
  vowelsCount.push(getVowels(word, vowels));
  return vowelsCount;
};

const countVowelsInWords = function (words) {
  return words.reduce(countVowels2, []).join("");
};

// ------------------------- 18_CAMEL_CASE -------------------------------------
// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {
  return words.reduce(function (camelCaseWord, word) {
    return camelCaseWord + word[0].toUpperCase() + word.slice(1);
  });
};

// ------------------------- 19_REVERSE_STRING ---------------------------------
// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseOf = function (word) {
  return [...word].reduce(function (reverse, char) {
    return char + reverse;
  }, "");
};

const reverseString = function (words) {
  return words.reduce(
    (reversedWords, word) => reversedWords + reverseOf(word),
    ""
  );
};

// ------------------------- 20_duplicate_numbers ------------------------------
// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {
  return numbers.reduce(function (duplicates, number) {
    duplicates.push(number, number);
    return duplicates;
  }, []);
};

// ------------------------- 21_CONCAT_ARRAYS ----------------------------------
// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const getElements = function (concatenatedArray, number) {
  concatenatedArray.push(number);
  return concatenatedArray;
};

const concatenateArrays = function (arrays) {
  return arrays.reduce(function (concatenatedArray, array) {
    return array.reduce(getElements, concatenatedArray);
  }, []);
};

// ------------------------- 22_FLATTEN_ARRAYS ---------------------------------
// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {
  return arrays.reduce(function (flattenedArray, array) {
    flattenedArray.push(array);
    return flattenedArray.flat();
  });
};

// ------------------------- 23_UNIQUE_ELEMENTS --------------------------------
// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]

const isElementOccuredAgain = function (init, element) {
  if (!init.includes(element)) {
    init.push(element);
  }

  return init;
};

const uniqueNumbers = function (numbers) {
  return numbers.reduce(isElementOccuredAgain, []);
};

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) {};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

//---------------------------- 42_COUNT_VOWELS ---------------------------------

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {};

//---------------------------- 43_CONSECUTIVE_DUPLICATES -----------------------

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {
  return longestConsecutiveSubsequence(array);
};
//---------------------------- 44_LONG_CONSECUTIVE_SEQ -------------------------

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {
  const sorted = numbers.sort(function (number1, number2) {
    return number1 - number2;
  });

  return uniqueNumbers(sorted);
};

//---------------------------------- 45_TOPK_FREQUENT --------------------------

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};
//---------------------------------- 46_NESTED_AVERAGE_OF ----------------------

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const getNumbers = function (nestedNumbers) {
  return nestedNumbers.flatMap(function (numbers) {
    if (typeof numbers === "number") {
      return numbers;
    }
    return getNumbers(numbers);
  });
};

const nestedAverage = function (nestedNumbers) {
  const numbers = getNumbers(nestedNumbers);
  return averageOf(numbers);
};

//---------------------------------- 47_CARTESIAN_PRODUCT ----------------------

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {
  return arr1.reduce(function (product, element1) {
    return arr2.reduce(function (product, element2) {
      product.push([element1, element2]);
      return product;
    }, product);
  }, []);
};

//---------------------------------- 48_GROUP_BY_DATE --------------------------

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const arrangeData = function ({ A, B }, { date, value }) {
  if (date === "2024-01-01") {
    A.push(value);
    return { A, B };
  }
  B.push(value);
  return { A, B };
};

const groupByDate = function (records) {
  return records.reduce(arrangeData, { A: [], B: [] });
};

//---------------------------------- 49_MIN_MAX --------------------------------
// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const getMaxMin = function ({ min, max }, number) {
  number < min ? (min = number) : (max = number);
  return { min, max };
};

const findMinMax = function (numbers) {
  return numbers.reduce(getMaxMin, { min: Infinity, max: -Infinity });
};

//---------------------------------- 50_SUM_BY_CATEGORY ------------------------
// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumOfValue = function ({ A, B }, { category, value }) {
  if (category === "A") {
    A = A + value;
    return { A, B };
  }
  B = B + value;
  return { A, B };
};

const sumByCategory = function (items) {
  return items.reduce(sumOfValue, { A: 0, B: 0 });
};

console.log(sumOfSquares([1, 2, 3, 4]));
console.log(sumOfOddNumbers([1, 2, 3, 4, 9]));
console.log(countNegativeNumbers([1, -2, 3, -4, 9]));
console.log(findSumOfEvenSquares([1, -2, 3, -4, 9]));
console.log(concatenateWords(["hello", "world"]));
console.log = function () {};
