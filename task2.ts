/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая проверяет является ли слово палиндромом

const word1 = "Анна";
const word2 = "Кабак";
const word3 = "Кот";

function checkPalindrome(word: string) {
  return word.split("").reverse().join("").toLowerCase() === word.toLowerCase();
}
console.log(checkPalindrome(word1));
