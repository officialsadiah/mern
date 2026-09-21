import React, { useState } from 'react'

const App = () => {

let [show,setShow] = useState(false)

  return (
    <>
    <button onClick={()=>setShow(!show)}>{show?"Hidden":"show"}</button>
{/* inside the wrintting section, we can put what to apear in the button written */}

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