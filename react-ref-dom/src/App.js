import React from 'react';
import './App.css';

function App() {
  const inputRef = React.useRef();
  const textRef = React.useRef();
  const ulRef = React.useRef();

  const [inputValue, setInputValue] = React.useState("");

  const handleClick = () => {
    textRef.current.className === ""
    ? textRef.current.className = "newClass"
    : textRef.current.className = "";

    const allList = [...ulRef.current.childNodes]

    allList.map((item) => (
      item.className === ""
      ? item.className = "newLiClass"
      : item.className = ""
    ))
  };

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <>
      Foco: <input onChange={ handleChange } ref={ inputRef }/>
      <br />

      <h1 ref={ textRef }>{ inputValue }</h1>
      <br />

      <button onClick={handleClick}>Mudar Estilo</button>

      <ul ref={ ulRef }>
        <li>linha_1</li>
        <li>linha_2</li>
        <li>linha_3</li>
      </ul>
    </>
  );
}

export default App;
