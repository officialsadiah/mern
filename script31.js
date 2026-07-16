

// let heading = document.querySelector("#x")
// let pink = document.querySelector(".pink")
// let red = document.querySelector(".red")
// let blue = document.querySelector(".blue")
// let green = document.querySelector(".green")
// let yellow = document.querySelector(".yellow")
// let gray = document.querySelector(".gray")


// pink.addEventListener("click" , ()=>{
//     heading.innerHTML = "The webpage is pink"
//     heading.style.background = "pink"
// })

// red.addEventListener("click" , ()=>{
//     heading.innerHTML = "The webpage is red"
//     heading.style.background = "red"
// })

// blue.addEventListener("click" , ()=>{
//     heading.innerHTML = "The webpage is blue"
//     heading.style.background = "blue"
// })

// green.addEventListener("click" , ()=>{
//     heading.innerHTML = "The webpage is green"
//     heading.style.background = "green"
// })
// yellow.addEventListener("click" , ()=>{
//     heading.innerHTML = "The webpage is yellow"
//     heading.style.background = "yellow"
// })
// gray.addEventListener("click" , ()=>{
//     heading.innerHTML = "The webpage is gray"
//     heading.style.background = "gray"
// })



let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let contentInfo = document.querySelector(".content-info")
let profile = document.querySelector(".profile")
let cover = document.querySelector(".cover")

btn1.addEventListener("click" , function(){
    contentInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    
})
btn2.addEventListener("click" , function(){
profile.innerHTML = '<img src="./pf-2.jpg" alt="pf-2">'

})
btn3.addEventListener("click" , function(){
cover.innerHTML = '<img src="./bg-2.jpg" alt="bg-1">'

})

