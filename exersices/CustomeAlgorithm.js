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
