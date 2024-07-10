let array = [3,4,5,32,56,23,90,10,10,10,2,2,90,3];
let distinctElement = [];
let j =0;


for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
console.log("sorted "+ array)

for (let i = 0; i < array.length-1; i++) {
    if (array[i]!=array[i+1]) {
        distinctElement[j++]=array[i]; 
    }
}
distinctElement[j++] = array[array.length - 1];

console.log("distinct elements "+distinctElement); 
