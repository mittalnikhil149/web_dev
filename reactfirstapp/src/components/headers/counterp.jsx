// // import react, { useState } from "react";
// // import React  from 'react'

// /*export default function App() {
//   /*const App =()=>{
//     function clickMe(){
//       alert("click Me")
//     }

//   /*return (
//     <div>
//       <h1>Welcome to React js</h1>
//     </div>
//   )  */
//  /*let name="kiet MCA"
//  let listOfName={
//   name:"KIET",
//   id:2,
//   class:"MCA Sec c"
//  }
//  let lang=["java","html","python","Reactjs"]
//  return (

//   <> <h1> welcome to react js</h1>
//  <h2>my name is nikhil {name} </h2>
//  <h3>name: {listOfName.name}</h3>
//  <h3>id: {listOfName.id}</h3>
//  <h3>class: {listOfName.class}</h3>
//  <h3>language</h3>
//  /* <h3>lang: {lang[1]}</h3>

//  <h3>{lang.map(value=>(
//   <h3>{value}</h3>
//   ))}</h3>
//   <h3>{
//     lang.map((value,index) =>(
//       <li>{index}.{value}</li>
//     ))
//     }</h3>
//  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b> Voluptatem minima explicabo iusto possimus aliquid, praesentium mollitia! Ducimus magni soluta deleniti eaque quo </b> . Quisquam, doloremque necessitatibus optio velit voluptate commodi obcaecati architecto minima minus autem vel nihil incidunt? Alias vitae nostrum blanditiis. Veritatis vel laborum minus velit nostrum maiores temporibus a?</p>
// </>
//  )
// return(
//   <div>
// <button onClick={()=>{alert("click me alert")}}>click me</button>
// </div>
// );

//   };

//   const name = () => {
//   const [Name, setName] = useState(Kiet);

//     function changeName(newName){
//       setName("KIET MCA");
//       console.log(name)
//     }
//     return(

//       <button onClick={(changeName)=>(alert("nikhil"))}>change Name</button>
//     )
//   }
// }*/
// // import React , {useState} from 'react'

// // const App = () => {
// //   const [numbers,set]
// //   return (
// //     <div>App</div>
// //   )
// // }
// import React, { useState } from 'react'

// const App = () => {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])

//   const plusTwo = () => {
//     const updatedNumbers = numbers.map((num) => num + 2)
//     setNumbers(updatedNumbers)
//   }

//   return (
//     <div>
//       <h2>List of numbers:</h2>

//       {
//         numbers.map((num, index) => (
//           <h2 key={index}>{num}</h2>
//         ))
//       }

//       <button onClick={plusTwo}>Plus +2</button>
//     </div>
//   )
// }

// export default App
// import React from "react";
// // import Header from "./components/headers/header";
// import Body from "./components/Body/body";
// // import Footer from "./components/Footer/footer";

// const App = () => {
//   return (
//     <div className="container">
//       <Body />
//     </div>
//   );
// };

// export default App;


// import React from "react";
// // import Body from "./components/Body/body";
// import counter from "./components/counter"

// const App = () => {
//   let[count,setCount]=useState(props.count);
//   return (
//   <div>
//     <counter count={2}/>
//   </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import Counter from "./components/counter";

// const counterp = () => {
//   const [counters, setCounters] = useState([
//     { id: 1, count: 0 },
//     { id: 2, count: 0 },
//     { id: 3, count: 0 },
//     { id: 4, count: 0 },
//     { id: 5, count: 0 },
//   ]);

//   const inc = (id) => {
//     setCounters(
//       counters.map((counter) =>
//         counter.id === id
//           ? { ...counter, count: counter.count + 1 }
//           : counter
//       )
//     );
//   };

//   const dec = (id) => {
//     setCounters(
//       counters.map((counter) =>
//         counter.id === id
//           ? { ...counter, count: counter.count - 1 }
//           : counter
//       )
//     );
//   };

//   const reset = () => {
//     setCounters(
//       counters.map((counter) => ({
//         ...counter,
//         count: 0,
//       }))
//     );
//   };

//   return (
//     <div className="container mt-4">
//       {counters.map((counter) => (
//         <Counter
//           key={counter.id}
//           id={counter.id}
//           count={counter.count}
//           inc={inc}
//           dec={dec}
//         />
//       ))}

//       <button
//         className="btn btn-danger mt-3"
//         onClick={reset}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

// export default counterp;

import React, { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="mt-5 text-center">

      <button
        className="btn btn-primary"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>

      <b className="bg-warning px-3 py-2 rounded mx-3">
        {count}
      </b>

      <button
        className="btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

    </div>
  );
};

export default Counter;