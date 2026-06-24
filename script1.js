//class 25
// multiplication table by using for
// Best when the number of repetitions is known.
// You want to print the first 10 student names.
// var number = prompt("The number of table:");

// for( i=1 ; i<=10; i++ ){
// console.log(number + "x" + i + "=" + number*i);
// }

// multiplication table by using while
// Use it when you don't know exactly how many times the loop will run.
// An ATM keeps asking for a PIN until the correct one is entered.
// let i = 1;
// while(i<=10){
// console.log(number + "x" + i + "=" + number*i);
// i++;
// }

// multiplication table by using do-while
// Similar to while, but it runs once before checking the condition.
// A restaurant menu is shown at least once.
// do{
// console.log(number + "x" + i + "=" + number*i);
// i++;
// }while(i<=10)

//class 26
// what if first number is greatr than the secont number? 
// we do not want to print 20 or 30 or 40 
let m = Number(prompt("Enter your First number : "))
let n = Number(prompt("Enter your Last number : "))

if(m<n){

for(let i = m ; i<=n ; i++){
    console.log("==============Namta of "+ i + " startted==============");
    for(let j = 1 ; j <= 10 ; j++){
        if(i*j == 20 || i*j == 30 || i*j == 40){
           // console.log("");
        }else{
        console.log(i + "x" + j + "=" + i*j); }
    }
    if(i<n){
    console.log("==============Namta "+ i + " ended==============");
    }else{
    console.log("=============All Namta Ends===============");}
}
 }else{
  
    alert("First number must be smaller than the Second number")
}