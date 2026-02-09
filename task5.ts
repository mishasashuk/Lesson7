// Написать функцию, которая разворачивает вложенные массивы в один

const array = [1, [2, 3], [4], 5, [6, 7, 8]];

function flatten(arr: (number | number[])[]) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten(array));

// Array.isArray(array)
