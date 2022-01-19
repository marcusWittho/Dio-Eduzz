import React from 'react';
import { ThemeContext } from './Theme';

const Form = () => {
  const context = React.useContext(ThemeContext);

  const renderForm = (
    <form>
      <label>Nome:</label>
      <input/>
      <label>Email:</label>
      <input/>
      <label>Idade:</label>
      <input/>
      <label>Telefone:</label>
      <input/>
    </form>
  )

  const renderNotLogged = (
    <h1>
      É necessário efetuar o login.
    </h1>
  )

  return (
    <>
      { context.token ? renderForm : renderNotLogged }
    </>
  );
};

export default Form;
