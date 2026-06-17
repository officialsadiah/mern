// conditions

    // check if divisable by 5
    let x = 33

    if(x%5==0){
        console.log(x + " is divisable by 5");
        
    }else{
        console.log(x + " is not divisable by 5");
    }

    // check if the number is odd or even and a positive number
    let y = 24

    if(y>=0){
        if(y%2==0){
            console.log(y + " is even");
        }else{
            console.log(y + " is an odd");
        }
    }else{
        console.log(y + " is a negative number");
    }

    // check if z is a Children, teenager, adult or seniour cetizen
    let z = 60
    if(z<=12){
        console.log("The person is a child. His/Her age is " + z + " years old");
    }else if(z<=17){
        console.log("The person is a teenager. His/Her age is " + z + " years old");
    }else if(z<=59){
        console.log("The person is an adult. His/Her age is " + z + " years old");
    }else if(z>=60){
        console.log("The person is a seniour citizen. His/Her age is " + z + " years old");
    }else{
        console.log("invalid input");
    }