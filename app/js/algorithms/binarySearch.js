const binarySearch = (value, list) => {
  let low = 0; // начальный индекс в массиве
  let high = list.length - 1; // конечный индекс
  let position = -1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (list[middle] === value) {
      return middle;
    } else if (list[middle] > value){ // значение в нижней части списка
      high = middle - 1;
    } else { // значение в верхней части списка
      low = middle + 1;
    }
  }
  return position;
};

//console.log(binarySearch(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
