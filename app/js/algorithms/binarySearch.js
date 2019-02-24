const binarySearch = (value, list) => {
  let low = 0; // начальный индекс в массиве
  let high = list.length - 1; // конечный индекс
  let position = -1;

  while (low <= high) { //пока эта часть не сократится до одного элемента...
    let middle = Math.floor((low + high) / 2); //... проверяем средний элемент
    if (list[middle] === value) {
      return middle;
    } else if (list[middle] > value){ //значение в нижней части массива
      high = middle - 1;
    } else { //значение в верхней части массива
      low = middle + 1;
    }
  }
  return position; //значение не существует
};

//console.log(binarySearch(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
