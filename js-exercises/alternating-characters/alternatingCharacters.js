// function alternatingCharacters(arr) {
//   var count = 0;
//   arr.reduce(function(previous, current) {
//     if (previous === current) {
//       count++;
//     }
//     return current;
//   }, "");
//   return count;
// }

function alternatingCharacters(arr) {
  let deleteCountArray = [];

  for (let j = 0; j < arr.length; j++) {
    let c = "";
    let deleteCounter = 0;
    for (let i = 0; i < arr[j].length; i++) {
      if (c !== arr[j][i]) c = arr[j][i];
      else deleteCounter++;
    }
    deleteCountArray.push(deleteCounter);
  }

  return deleteCountArray;
}

export { alternatingCharacters };
