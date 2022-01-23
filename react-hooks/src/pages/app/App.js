import React from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';
import jutsuSound from '../../sounds/sounds_jutso.mp3';

const audio = new Audio(jutsuSound);

export function App() {
  const isMounted = React.useRef(true);

  const [quoteState, setQuoteState] = React.useState({
    quote: 'quote',
    speaker: 'Speaker',
  });

  const onUpdate = async () => {
    const quote = await getQuote();

    if (isMounted.current) {
      audio.play();
      setQuoteState(quote);
    }

    // setQuoteState({
    //   quote: 'Loading...',
    //   speaker: "",
    // });

    // setTimeout(() => {
      // setQuoteState(quote);
    // // }, 1700)
  }

  React.useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    }
  }, [])

  return (
    <Content>
      <Quotes
        // quote={ quoteState.quote }
        // speaker={ quoteState.speaker }
        {...quoteState}  // shorthand para substituir as duas linhas anteriores
        onUpdate={ onUpdate }
      />

      <NarutoImg src={ narutoImg } alt="Naruto segurando uma kunai"/>
    </Content>
  );
};

const Content = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0;
`;

const NarutoImg = styled.img`
  align-self: flex-end;
  max-width: 50vw;
`;
