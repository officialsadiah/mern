// multiplication table by using for
// Best when the number of repetitions is known.
// You want to print the first 10 student names.
var number = prompt("The number of table:");

for( i=1 ; i<=10; i++ ){
console.log(number + "x" + i + "=" + number*i);
}

// multiplication table by using while
// Use it when you don't know exactly how many times the loop will run.
// An ATM keeps asking for a PIN until the correct one is entered.
let i = 1;
while(i<=10){
console.log(number + "x" + i + "=" + number*i);
i++;
}

// multiplication table by using do-while
// Similar to while, but it runs once before checking the condition.
// A restaurant menu is shown at least once.
do{
console.log(number + "x" + i + "=" + number*i);
i++;
}while(i<=10)