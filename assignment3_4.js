let arr=[1,2,3];
let length = arr.length;
let result = '';

for (let i=(length-1); i >= 0; i--){
    result+= arr[i];
}
console.log(result)