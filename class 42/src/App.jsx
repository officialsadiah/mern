import React from 'react'
import Card from './components/Card'
// import Heading from './components/Heading'
const App = () => {
  return (
    <>
   <Card type={false} design="main" Title="Card One" Paragraph="lorem21" Botton="click"  />       
   <Card type={true} design="main2" Title="Card Two" Paragraph="lorem21" Botton="dont click"  />       
      {/* true and false must be in { }  */}
    </>
  )
}

export default App