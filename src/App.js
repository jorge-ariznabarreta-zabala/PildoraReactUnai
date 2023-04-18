import React from "react";
import './App.css';

function App() {
  const nombres = ['Jorge', 'Mohamed']
  
    return (
      <>
      {nombres.map( (name, index)=>(
      <p key={index}>{name}</p>
      ))}
    </>
    );
  }

export default App;
