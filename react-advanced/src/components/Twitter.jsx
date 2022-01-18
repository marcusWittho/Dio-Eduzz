import React from 'react';

// Este hook equivale ao 'shouldComponentUpdate'
// Evita re-render
// Utiliza o 'React.memo'
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
  // return true;  // se o retorno for 'true' a atualização não é realizada
};

function Twitter(props) {
  const { posts, loading } = props;
  const [tweet, setTweet] = React.useState('title');

  // Este hook tem o mesmo efeito do 'componentDidMount'
  React.useEffect(() => {
    console.log('DidMount', posts);
    console.log('DidMount', loading);
  }, [])

  // Este hook tem o comportamento do 'componentDidUpdate'
  React.useEffect(() => {
    console.log('DidUpdate', loading);
  }, [loading]);

  // Este hook tem o efeito do 'componentWillUnmount'
  // O retorno dentro do useEffect caracteriza o funcionamento do componentWillUnmunt
  React.useEffect(() => {
    return () => {
      console.log('WillUnmount: fui desmontado...');
    }
  }, []);

  const handleTweet = () => {
    setTweet('Tweet atualizado. (handleTweet)')
  };

  console.log('Tweet atualizado:', tweet);
  return (
    <>
      <button onClick={ handleTweet }>Re-render</button>
      <h3>Twitter</h3>
    </>
  )
};

export default React.memo(Twitter, areEqual);
