import React from 'react';
import { ThemeContext, themes } from './Theme';
import Card from './Card';

function App() {
  const [token, setToken] = React.useState();

  React.useEffect(() => {
    setTimeout(() => {
      setToken('mcslw123mcslw123');
    }, 3000);
  }, [token])

  return (
    <ThemeContext.Provider value={ { ...themes, token } }>
      <Card />
    </ThemeContext.Provider>
  );
}

export default App;
