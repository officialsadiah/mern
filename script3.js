//Array
 let num = [1,2,3,4,5,6,7,22,33,44,55,33,4,7,7,8,6,5,4,3,3,3,3]
 // to print we use following:
 console.log(num[0]);

 // To know the kength of array use (num.length)
 console.log(num.length);

 //to print all the elements of an array we can use for loop
 for(let i = 0 ; i < num.length ; i++ ){
    console.log(num[i]);
 }

 let std = [
    {
    name: "sadiah",
    id: 101 ,
    email: "sadiah@gmail.com"
        }, 
    {name: "ahmed",
    id: 1021 ,
    email: "sadiaah@gmail.com"
        }, 
    {name: "ali",
    id: 1012 ,
    email: "sadiaha@gmail.com"
        } 
    ]
 //to print : 
 console.log(std[0].email);
 
 //another way to print : 
 for(let i = 0 ; i<std.length ; i++){
     console.log(std[i].name);
 }
 