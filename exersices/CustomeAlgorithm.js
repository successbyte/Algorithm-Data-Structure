// ## 1
// printing bellow template
//   X X X X X
//     X X X X
//       X X X
//         X X
//           X

function print(iteration) {
  for (i = iteration; i > 0; i--) {
    for (j = i; j < iteration; j++) {
      console.log(" ");
    }
    for (l = i; l > 0; l--) {
      console.log("X");
    }
  }
}
// print(5);

// ## 2
// bellow function returns true if the two arrays has an item in common
// and returns false if they don't have any item in common

function itemInCommon(arr1, arr2) {
  let obj = {};

  for (let index = 0; index < arr1.length; index++) {
    obj[arr1[index]] = true;
  }

  for (const element of arr2) {
    if (obj[element]) {
      return true;
    }
  }
  return false;
}

console.log(itemInCommon([1, 3, 5], [2, 4, 5]));
