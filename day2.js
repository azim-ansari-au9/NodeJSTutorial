var array = [1, 2, 3, 4, 3, 2, 1];
var outputArray = [];
var count = 0;
var start = false;

for (x = 0; x < array.length; x++) {
  for (y = 0; y < outputArray.length; y++) {
    if (array[x] == outputArray[y]) {
      start = true;
    }
  }
  count++;
  if (count == 1 && start == false) {
    outputArray.push(array[x]);
  }
  start = false;
  count = 0;
}
console.log(outputArray);
