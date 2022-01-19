import React from 'react';

function Counter(props) {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return(
    <>
      {
        props.render({
          increment,
          decrement,
          count,
        })
      }
    </>
  )
}

export default Counter;
