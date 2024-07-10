const rows = 5;
let number = 1;
for (let i = 0 ; i <=  5; i++) {
    let row = "";
    for (let j =  0; j <  i; j++) {
        row =row+ number +"  ";
        number++;
        
    }
    console.log(row);
}