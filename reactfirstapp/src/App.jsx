import react, { useState } from "react";
import React  from 'react'

export default function App() {
  /*const App =()=>{
    function clickMe(){
      alert("click Me")
    }
  
  /*return (
    <div>
      <h1>Welcome to React js</h1>
    </div>
  )  */
 /*let name="kiet MCA"
 let listOfName={
  name:"KIET",
  id:2,
  class:"MCA Sec c"
 }
 let lang=["java","html","python","Reactjs"]
 return (

  <> <h1> welcome to react js</h1>
 <h2>my name is nikhil {name} </h2>
 <h3>name: {listOfName.name}</h3>
 <h3>id: {listOfName.id}</h3>
 <h3>class: {listOfName.class}</h3>
 <h3>language</h3>
 /* <h3>lang: {lang[1]}</h3>
 
 <h3>{lang.map(value=>(
  <h3>{value}</h3> 
  ))}</h3> 
  <h3>{
    lang.map((value,index) =>(
      <li>{index}.{value}</li>
    ))
    }</h3>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b> Voluptatem minima explicabo iusto possimus aliquid, praesentium mollitia! Ducimus magni soluta deleniti eaque quo </b> . Quisquam, doloremque necessitatibus optio velit voluptate commodi obcaecati architecto minima minus autem vel nihil incidunt? Alias vitae nostrum blanditiis. Veritatis vel laborum minus velit nostrum maiores temporibus a?</p>
</> 
 )
return(
  <div>
<button onClick={()=>{alert("click me alert")}}>click me</button>
</div>
);
  
  };*/

  const name = () => {
  const [Name, setName] = useState(Kiet);

    function changeName(newName){
      setName("KIET MCA");
      console.log(name)
    }
    return(
   
      <button onClick={(changeName)=>(alert("nikhil"))}>change Name</button>
    )
  }
}
