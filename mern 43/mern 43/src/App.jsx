import React, { useState } from 'react'

const App = () => {

let [show,setShow] = useState(false)
let handleShow=()=>{
  setShow(!show)
}
// whatever in show, with each click it will chage it
  return (
    <>
    <button onClick={handleShow}>show</button>
    {
      show && <p>Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Voluptatum beatae rem ab
         reprehenderit animi laudantium sapiente, 
         atque quasi repellendus deleniti excepturi?</p>
    }
    </>
  )
}

export default App