import React from 'react';
import { ThemeContext } from './Theme';
import Form from './Form';

export const Card = () => {
  const theme = React.useContext(ThemeContext);
  console.log(theme);

  return (
    <div style={ { padding: '50px' } }>
      <Form />

      <button
        style={ {
          background: theme.primary.background,
          color: theme.primary.color
        } }
      >
        Card Button
      </button>
    </div>
  );
};

export default Card;
