import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import { useState } from 'react';
import Header from "./components/NavBar/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
// import "./style.css";


function Person(props) {
  console.log(props);
  return (
    <div className="person" 
    style={{
      backgroundColor: props.color,
    }}>
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
    </div>
  );
}



function App() {

  const [count, setCount] = useState(0)

  const style = { }

    return (
        <div className='App' style={ style } onClick={ ()=> console.log ("hola mundo") } >
          <Header/>
          <h1>Hola mundo </h1>
          <Person nombre="pepe" edad="20" color="red"/>
          <Person nombre="juan" edad="30" color="grey"/>

        </div>
  )

}


export default App;


// const useCounter = () => {
//   const [counter, setCounter] = useState(0);

//   const increase = () => setCounter(counter + 1)
//   const decrement = () => setCounter(counter - 1)
//   const reset = () => setCounter(0)

//   return {
//     counter,
//     increase,
//     decrement,
//     reset,
//   }
// }

// export default function App() {

//   const{counter, increase, decrement, reset} = useCounter()
//   return (
//     <div>
//     <div>{counter}</div>
//     <button onClick={increase}>+</button>
//     <button onClick={decrement}>-</button>
//     <button onClick={reset}>reset</button>
//     </div>
    
//   )
// }
    // <div >
    //   <Header/>
    //   <h1>Hola mundo </h1>
    //   <Person nombre="pepe" edad="20" color="red"/>
    //   <Person nombre="juan" edad="30" color="grey"/>

    //  </div>