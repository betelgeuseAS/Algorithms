const quicksort = array => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0]; //Рекурсивный случай

  let left = []; //Подмассив всех элементов, меньших опорного
  let right = []; //Подмассив всех элементов, больших опорного

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right)); //left + pivot + right
};

// let unsorted = [23, 45, 16, 37, 3, 99, 22];
// let sorted = quicksort(unsorted);

// console.log(sorted);
