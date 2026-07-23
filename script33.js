let name = document.querySelector(".name")
let caption = document.querySelector(".caption")
let tamplete = document.querySelector(".tamplete")
let post = document.querySelector(".post-bttn")

let arr = []

post.addEventListener("click" , ()=>{

    arr.push({
                name:name.value ,
                caption:caption.value

    })
            tamplete.innerHTML = ""
            display()
            name.value = ""
            caption.value = ""

})




function display(){

    arr.map(item=> {

tamplete.innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.caption}</p>
    <button type="button" class="btn btn-primary">Edit</button>
    <button type="button" class="btn btn-danger">Delete</button>
  </div>
</div>`
})

}