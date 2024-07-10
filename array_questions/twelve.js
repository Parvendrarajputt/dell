

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
     
        let mid = Math.floor((left + right) / 2)

       
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
           
            left = mid + 1;
        } else {
           
            right = mid - 1;
        }
    }

    return false; 
}


const array = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 10;

const resultIndex = binarySearch(array, target);
if (resultIndex !== false) {
    console.log("found ", target , " at index " , resultIndex);
} else {
    console.log(target , " Not found ");
}
