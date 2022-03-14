import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import { useState } from 'react';
import Header from "./components/NavBar/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [count, setCount] = useState(0)

  const style = { backgroundColor: "green" }

    return (
        <div className='App' style={ style } onClick={ ()=> console.log ("hola mundo") } >
          <Header/>
          <Titulo/>
            <img src={logo} className='App-logo' alt= "logo" />

            <input />


        </div>
  )

}

export default App;
