import React from 'react';

const FetchExample = () => {
  const [cientistas, setCientistas] = React.useState([]);

  React.useEffect(() => {
    fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
      .then((response) => response.json())
      .then((data => setCientistas(data)))
      .catch(error => {
        console.error('Ooops...', error);
      });
  }, []);

  const listaCientistas = (cientista, index) => {
    return (
      <li key={ index }>
        <div><b>nome: </b>{ cientista.name }</div>
        <div><b>área: </b>{ cientista.area }</div>
      </li>
    )
  };

  return (
    <>
      <h1>Cientistas Brasileiras</h1>
      <ul>
        {cientistas.map((cientista, index) => listaCientistas(cientista, index))}
      </ul>
    </>
  )
};

export default FetchExample;
