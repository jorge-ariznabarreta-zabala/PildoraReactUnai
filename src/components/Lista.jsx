import React from 'react';

const Lista =({nombres})=>{
    return (<>
    <h1>Lista de nombres</h1>
      {nombres.map( (name, index)=>(
      <p key={index}>{name}</p>
      ))}
    </>
    );
};

export default Lista;
