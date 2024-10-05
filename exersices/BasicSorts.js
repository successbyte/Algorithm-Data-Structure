function bubbleSort(array) {
  //   if (!array || array.length == 0) return undefined;
  //   if (array.length === 1) return array;
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([4, 2, 6, 5, 3, 1]));
