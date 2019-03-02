const selectionSort = array => {
  let tmp;

  for (let i = 0; i < array.length; i++) {
    let indexMin = i; //установика min для текущей итерации i
    for (let j = i + 1; j < array.length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }

    // if (indexMin !== i) {
    //   [array[i], array[indexMin]] = [array[indexMin], array[i]];
    // }
    // or:
    tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
};

// console.log(selectionSort([5, 9, 7, 1, 4, 8, 0, 3]));
