import React from 'react';
import PropTypes from 'prop-types';

const PetShop = (props) => {
  const { dogs, cats, customers, customerName, onClick } = props;

  return (
    <>
      <h2>Dogs: { dogs }</h2>

      <h2>Cats: { cats }</h2>

      <div>
        Quantidade de clientes: { customers }
      </div>

      <div>
        Nome do cliente: { customerName }
      </div>

      <button onClick={ onClick }>Próximo banho</button>
    </>
  )
};

PetShop.defaultProps = {
  cats: 0,
  customers: [],
};

PetShop.propTypes = {
  dogs: PropTypes.number.isRequired,
  cats: PropTypes.number,
  customers: PropTypes.array,
  customerName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PetShop;
