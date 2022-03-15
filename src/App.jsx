import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import { useState } from 'react';
import Header from "./components/NavBar/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
    </div>
  );
}



function App() {

  const [count, setCount] = useState(0)

  const style = { backgroundColor: "green" }

    return (
        <div className='App' style={ style } onClick={ ()=> console.log ("hola mundo") } >
          <Header/>
          <h1>Hola mundo </h1>
          <Person nombre="pepe" edad="20"/>
          <Person nombre="juan" edad="30"/>
          {/* <Titulo/> */}
            <img src={logo} className='App-logo' alt= "logo" />

            <input />

        </div>
  )

}


export default App;
