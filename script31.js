

let heading = document.querySelector("#x")
let pink = document.querySelector(".pink")
let red = document.querySelector(".red")
let blue = document.querySelector(".blue")
let green = document.querySelector(".green")
let yellow = document.querySelector(".yellow")
let gray = document.querySelector(".gray")


pink.addEventListener("click" , ()=>{
    heading.innerHTML = "The webpage is pink"
    heading.style.background = "pink"
})

red.addEventListener("click" , ()=>{
    heading.innerHTML = "The webpage is red"
    heading.style.background = "red"
})

blue.addEventListener("click" , ()=>{
    heading.innerHTML = "The webpage is blue"
    heading.style.background = "blue"
})

green.addEventListener("click" , ()=>{
    heading.innerHTML = "The webpage is green"
    heading.style.background = "green"
})
yellow.addEventListener("click" , ()=>{
    heading.innerHTML = "The webpage is yellow"
    heading.style.background = "yellow"
})
gray.addEventListener("click" , ()=>{
    heading.innerHTML = "The webpage is gray"
    heading.style.background = "gray"
})
// document is like a book, inside it all the chapters
// getElementsByTagName('h1')[0] = first element of h1 
// innerHTML = inside html like <h1>hello</h1> , so hello is inside html h1
// if <h1><b>hello</b></h1> , the inner html will be inside b
// = "sadiah" replace the title with "sadiah"
// "Go to the webpage → find all <h1> elements → 
// choose the first one → replace its content with sadiah."

