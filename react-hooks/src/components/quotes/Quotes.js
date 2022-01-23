import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../components';

export const Quotes = ({ quote, speaker, onUpdate }) => {
  return (
    <Wrapper>
      <Quote>{ quote }</Quote>

      <Speaker>- { speaker }</Speaker>

      <Button onClick={ onUpdate }>Quote No Jutsu</Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`;

const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 50px;
`;
