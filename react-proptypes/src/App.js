import React from 'react';
import PetShop from './PetShop';

function App() {
  const handleClick = () => {
    console.log('Próximo Banho');
  }

  return (
    <PetShop
      dogs={12}
      customerName={'Marcus Lima'}
      onClick={handleClick}
    />
  );
}

export default App;
