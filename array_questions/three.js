let array = [10, 20, 30, 40, 50 ,60, 70 ,90];
let removeValue=50;
let ans= [];
let j=0;

for (let i = 0; i < array.length; i++) {
    if (array[i] !== removeValue) {
        ans[j] = array[i]; 
        j++;
    }
}

console.log(ans);


