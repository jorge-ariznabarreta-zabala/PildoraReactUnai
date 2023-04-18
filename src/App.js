import React , {useRef, useState} from "react";
import './App.css';

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
      <h1>Lista de nombres</h1>
      {nombres.map( (name, index)=>(
      <p key={index}>{name}</p>
      ))}
      <h2>Inserte un nombre</h2>
      <form onSubmit={onSaveName} >
        <input type='text' placeholder="Nuevo nombre" ref={newnameRef} />
        <button type='submit'>Guardar</button>
      </form>
    </div>
    )
  }

export default App;
