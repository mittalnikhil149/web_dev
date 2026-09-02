import React from 'react'

 const ChildernEx =(props)=>{
    const {info,childern}=props
  return (
    <div><h3>{info}</h3>
    {ChildernEx}
    </div>
  )
}
export default App;
