var evens = [0, 2, 4, 6, 8, 10];

function evenFn(even, index, array) {
  console.log(`${even} is not odd!`);
}
 
for (let i = 0; i < evens.length; i++) {
  evenFn(evens[i], i, evens);
}

doToElementsInArray(array, callback){
  array.forEach(callback);
}

changeCompletely(element, index, array){
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + '${array[index]}s!!!';
}
