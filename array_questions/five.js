
let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
let summedArray = [];
let j = 0;

let totalLength = array1.length + array2.length;
//merge

for (let i = 0; i < totalLength; i++) {
    if (i < array1.length) {
        summedArray[j++] = array1[i];
    }
    if (i < array2.length) {
        summedArray[j++] = array2[i];
    }
}

//sort
for (let i = 0; i < summedArray.length - 1; i++) {
    for (let j = 0; j < summedArray.length - 1 - i; j++) {
        if (summedArray[j] > summedArray[j + 1]) {
            let temp = summedArray[j];
            summedArray[j] = summedArray[j + 1];
            summedArray[j + 1] = temp;
        }
    }
}

let ans = []; 
let k=0;

//reverse
for (let i = summedArray.length - 1; i >= 0; i--) {
    
    ans[k++] = summedArray[i]; 
}
console.log("Sorted merged reversed array "+ans)


  
