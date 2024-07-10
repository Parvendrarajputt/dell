let array = [10, 20, 30, 40, 50, 60, 70, 90];
let atPosition = 3;
let addValue = 25;
let ans = [];
let j = 0;

for (let i = 0; i < array.length; i++) {
    if (i == atPosition - 1) {
        ans[j] = addValue;
        j++
    }
    else {
        ans[j] = array[i];
        j++;
    }
}
for (let j = 0; j < ans.length; j++) {

    console.log(ans[j]);

}




