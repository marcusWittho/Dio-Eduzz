import React from 'react';
import Counter from './Counter';

const Buttons = ({ increment, decrement, count }) => (
  <>
    <h1>Valor atual: { count }</h1>

    <button onClick={ increment }>Adicionar 1</button>
    <button onClick={ decrement }>Remover 1</button>
  </>
);

function App() {
  return (
    <>
      <Counter render={({ increment, decrement, count }) => (
        <Buttons
          increment={increment}
          decrement={decrement}
          count={count}
        />
      )} />
    </>
  )
}

export default App;
