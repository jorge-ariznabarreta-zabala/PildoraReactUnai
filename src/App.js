import React , {useRef, useState} from "react";
import './App.css';
import  Lista  from "./components/Lista";

function App() {
  const newnameRef=useRef();
  const [nombres, setNombres] = useState(['Jorge', 'Mohamed', 'Elena'])
  const onSaveName=(event)=>{
    event.preventDefault();
    const newname =newnameRef.current.value;
    //nombres.push(newname); //antes de useState
    setNombres([...nombres, newname]);
    console.log(nombres);
    newnameRef.current.value ='';
  }
    return (
      <div>
      <Lista nombres={nombres}></Lista>
      <h2>Inserte un nombre</h2>
      <form onSubmit={onSaveName} >
        <input type='text' placeholder="Nuevo nombre" ref={newnameRef} />
        <button type='submit'>Guardar</button>
      </form>
    </div>
    )
  }

export default App;
