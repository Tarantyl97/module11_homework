let arr = ['z', 1, 3, 'f', , 'g', null, 2, 0.8, 4];
function countFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
if (typeof arr[i] === 'number'){
    if(arr[i] % 2 === 0 && arr[i] !== 0) {
      console.log('Четное')
    }
    else if (arr[i] % 2 !== 0) {
       console.log('Нечетное')
     }
    else if (arr[i] === 0) {
       console.log('Это ноль!')
     }
  }
    else {
      console.log("Это не число!")
    }
}
}
countFunc(arr);
