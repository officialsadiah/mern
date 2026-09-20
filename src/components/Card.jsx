import React from "react"
 
const Card = ({Title,Paragraph,Botton,design,type}) => {
return(
    <div className={design}>
    <h1>{Title}</h1>
    <p>{Paragraph}</p>
    <button className={type? "button": "button2"}>{Botton}</button>
    {/* if the type is true, it will use {button} design, if false {button2} design
    you have to write something in botton so it shows written things */}
    </div>
)
}

export default Card